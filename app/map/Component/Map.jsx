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
                setGeojson(data.data.data.features)
                console.log(data.data.data.features);
            }
        } catch (error) {

        }
    }

    const polylineCoordinates = [
        [
            108.97262961808502,
            0.8954610105647873
        ],
        [
            108.9726708258255,
            0.8955009052486673
        ],
        [
            108.97260083807652,
            0.8955728464828638
        ],
        [
            108.97256224670167,
            0.8955355678441919
        ],
        [
            108.97262961808502,
            0.8954610105647873
        ]
    ];

    const polylineCoordinates2 = [
        [
            108.9727128382267,
            0.8956992229814915
        ],
        [
            108.97266417807111,
            0.8956477067596325
        ],
        [
            108.97273859948518,
            0.8955723404334179
        ],
        [
            108.9726708258255,
            0.8955009052486673
        ],
        [
            108.97260083807652,
            0.8955728464828638
        ],
    ];

    const renderMap = () => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: iniPosition,
            zoom: zoom
        });

        new maptilersdk.Marker({ color: "#000000" })
            .setLngLat(iniPosition)
            .addTo(map.current);


        map.current.on("load", () => {
            if (iniGeojson) {
                map.current.addLayer({
                    id: "polyline",
                    type: "line",
                    source: {
                        type: "geojson",
                        data: {
                            type: "Feature",
                            properties: {},
                            geometry: {
                                type: "LineString",
                                coordinates: polylineCoordinates,
                            },
                        },
                    },
                    layout: {
                        "line-join": "round",
                        "line-cap": "round",
                    },
                    paint: {
                        "line-color": "#FF0000", // Warna polyline (misalnya merah)
                        "line-width": 4, // Lebar polyline
                    },
                });
            }
        });
    }
    useEffect(() => {
        getGeoJson()
        renderMap()
    }, []);

    return (
        <div>
            <div ref={mapContainer} className="map" />
        </div>
    )
}

export default Map