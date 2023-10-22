'use client'
import React, { useState, useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css';

import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import axios from 'axios';

const Map = () => {
    const base_url = process.env.base_url;
    const [iniGeojson, setGeojson] = useState()
    const [iniPosition, setPosition] = useState([108.97277018334958, 0.8952862812542529])
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom] = useState(19);
    maptilersdk.config.apiKey = 'YGBPAuY7utv2Y7SgHp2N';

    const getGeoJson = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: `${base_url}/maps`,
            });
            if (data.data.data) {
                const dataGeojson = data.data.data.features
                setGeojson(dataGeojson)
                console.log(dataGeojson);
                renderMap(dataGeojson)
            }
        } catch (error) {

        }
    }

    const renderMap = (e) => {
        console.log('e', e);
        if (map.current) return; // stops map from intializing more than once

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: iniPosition,
            zoom: zoom
        });

        var popup = new maptilersdk.Popup({ offset: 25 }).setText(
            'Ini Anda'
        );

        new maptilersdk.Marker({ color: "#3b82f6" })
            .setLngLat(iniPosition)
            .setPopup(popup)
            .addTo(map.current);


        map.current.on("load", () => {
            if (e !== null) {
                for (let i = 0; i < e.length; i++) {
                    console.log('wes', e[i].properties.name);
                    console.log('coor', e[i].geometry.coordinates[0]);
                    map.current.addLayer({
                        id: e[i].properties.name, // Id lapisan polygon pertama
                        type: "fill",
                        source: {
                            type: "geojson",
                            data: {
                                type: "Feature",
                                properties: {},
                                geometry: {
                                    type: "Polygon",
                                    coordinates: [e[i].geometry.coordinates[0]],
                                },
                            },
                        },
                        layout: {},
                        paint: {
                            "fill-color": "#10b981",
                            "fill-opacity": 0.5,
                        },
                    });
                    map.current.on('click', `${e[i].properties.name}`, (z) => {
                        const feature = z.features[0];
                        popup.setHTML(`<h3>${e[i].properties.name}</h3>`);
                        popup.setLngLat(feature.geometry.coordinates[0][0]).addTo(map.current)
                        // console.log('Layer clicked:', e.features[0]);
                    });
                }
            }
        });
    }
    useEffect(() => {
        getGeoJson()
        // renderMap()
    }, []);

    return (
        <div>
            <div ref={mapContainer} className="map" />
        </div>
    )
}

export default Map