'use client'
import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';

const Map = () => {
    const [position, setPosition] = useState([0.8954788548310426, 108.97259936916821])
    const customIcon = new Icon({
        iconUrl: '/img/gps.png',
        iconSize: [32, 32], // Adjust the size as needed
    })

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setPosition([latitude, longitude]);
            }, (error) => {
                console.error('Error:', error.message);
            });
        } else {
            console.error('Geolocation is not available.');
        }

    })

    return (
        <div >
            <MapContainer className="map" center={position} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={customIcon} position={position}>
                    <Popup>
                        Lokasi Anda
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map