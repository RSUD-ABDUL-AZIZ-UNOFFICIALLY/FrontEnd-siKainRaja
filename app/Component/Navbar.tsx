'use client'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'

const Navbar = ({ name }: { name: string }) => {
    const [nav, setNav] = useState('')
    const [dropdownTarif, setDropdownTarif] = useState<boolean>(false)
    const refDropdownTarif = useRef(null)

    const handleDropdownTarif = () => {
        if (dropdownTarif == false) {
            setDropdownTarif(true)
        } else {
            setDropdownTarif(false)
        }
    }

    // console.log(dropdownTarif);

    useEffect(() => {
        setNav(name)
    }, [])

    return (
        <nav className='flex justify-center'>
            <div className="bg-white lg:rounded-lg shadow-md overflow-hidden overflow-x-scroll">
                <div className="flex items-center m-2 gap-3">
                    <Link href={'/'} className={nav == 'umum' ? "btn border-none bg-accent hover:bg-accent text-gray-100  w-32" : "btn w-32 bg-white border-accent text-accent hover:bg-accent hover:text-white"}>
                        <div className="flex">
                            Informasi Umum
                        </div>
                    </Link>
                    <Link href={'/media'} className={nav == 'media' ? "btn border-none bg-accent hover:bg-accent text-gray-100  w-32" : "btn w-32 bg-white border-accent text-accent hover:bg-accent hover:text-white"}>
                        <div className="flex">
                            Media Edukasi
                        </div>
                    </Link>
                    <Link href={'/poli'} className={nav == 'poli' ? "btn border-none bg-accent hover:bg-accent text-gray-100  w-32" : "btn w-32 bg-white border-accent text-accent hover:bg-accent hover:text-white"}>
                        <div className="flex">
                            Informasi Poliklinik
                        </div>
                    </Link>
                    <Link href={'/daftar-kamar'} className={nav == 'kamar' ? "btn border-none bg-accent hover:bg-accent text-gray-100  w-32" : "btn w-32 bg-white border-accent text-accent hover:bg-accent hover:text-white"}>
                        <div className="flex">
                            Ketersediaan Kamar
                        </div>
                    </Link>
                    <Link href={'/lab'} className={nav == 'lab' ? "btn border-none bg-accent hover:bg-accent text-gray-100  w-32" : "btn w-32 bg-white border-accent text-accent hover:bg-accent hover:text-white"}>
                        <div className="flex">
                            Tarif Lab
                        </div>
                    </Link>
                    <Link href={'/radiologi'} className={nav == 'radiologi' ? "btn border-none bg-accent hover:bg-accent text-gray-100  w-32" : "btn w-32 bg-white border-accent text-accent hover:bg-accent hover:text-white"}>
                        <div className="flex">
                            Tarif Radiologi
                        </div>
                    </Link>
                    <Link href={'/tarif-ambulan'} className={nav == 'tarif-ambulan' ? "btn border-none bg-accent hover:bg-accent text-gray-100  w-32" : "btn w-32 bg-white border-accent text-accent hover:bg-accent hover:text-white"}>
                        <div className="flex">
                            Tarif Ambulan
                        </div>
                    </Link>
                    <Link href={'/tarif-tindakan'} className={nav == 'tarif-tindakan' ? "btn border-none bg-accent hover:bg-accent text-gray-100  w-32" : "btn w-32 bg-white border-accent text-accent hover:bg-accent hover:text-white"}>
                        <div className="flex">
                            Tarif Tindakan
                        </div>
                    </Link>
                    <Link href={'/donor'} className={nav == 'donor' ? "btn border-none bg-accent hover:bg-accent text-gray-100  w-32 " : "btn w-32 bg-white border-accent text-accent hover:bg-accent hover:text-white"}>
                        <div className="flex">
                            Grup PenDonor
                        </div>
                    </Link>
                    <Link href={'/map'} className={nav == 'map' ? "btn border-none bg-accent hover:bg-accent text-gray-100  w-32 " : "btn w-32 bg-white border-accent text-accent hover:bg-accent hover:text-white"}>
                        <div className="flex">
                            Map Rumah Sakit
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar