'use client'
import React from 'react'
import Map from "./Component/Map";

export default function Section() {
    return (
        <div className='flex justify-center'>
            <div className='section w-[100%] p-4 bg-white border border-accent'>
                <Map />
                {/* <Map2 /> */}
            </div>
        </div>
    )
}
