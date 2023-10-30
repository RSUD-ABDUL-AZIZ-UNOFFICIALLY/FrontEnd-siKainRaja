'use client'
import React from 'react'
import Map from "./Component/Map";
export default function Section() {
    return (
        <div className='flex justify-center'>
            <div className='section p-4 bg-white shadow-lg'>
                <Map />
            </div>
        </div>
    )
}
