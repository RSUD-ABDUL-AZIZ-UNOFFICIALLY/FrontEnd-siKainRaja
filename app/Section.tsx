'use client'
import React, { useEffect, useState } from 'react'
import Dropdown from "./Component/DropdownItem"

export default function Section() {
    return (
        <div className='flex justify-center'>
            <div className='section'>
                <Dropdown
                    name='Hak dan Kewajiban Pasien'
                    api='hakpasien'
                />
                <Dropdown
                    name='Protokol Kesehatan'
                    api='prokes'
                />
                <Dropdown
                    name='Tata Tertib Rumah Sakit'
                    api='tatip'
                />
            </div>
        </div >
    )
}
