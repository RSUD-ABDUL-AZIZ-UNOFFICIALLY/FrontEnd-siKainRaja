'use client'
import React, { useState, useEffect, useRef } from 'react'
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
// import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';

import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

const Map = () => {
    const [iniPosition, setPosition] = useState([108.97269592927742, 0.8955646751394853])
    const mapContainer = useRef(null);
    const map = useRef(null);
    const tokyo = { lng: 139.753, lat: 35.6844 };
    const [zoom] = useState(12);
    maptilersdk.config.apiKey = 'YGBPAuY7utv2Y7SgHp2N';

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: iniPosition,
            zoom: zoom
        });

    }, []);

    return (
        <div>
            <div ref={mapContainer} className="map" />
        </div>
    )
}

export default Map