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
            <div className="bg-white rounded-lg max-w-[90vw] shadow overflow-hidden overflow-x-scroll">
                <div className="flex items-center m-2 gap-3">
                    <Link href={'/'} className={nav == 'umum' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent w-32"}>
                        <div className="flex">
                            Informasi
                        </div>
                    </Link>
                    <Link href={'/media'} className={nav == 'media' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent w-32"}>
                        <div className="flex">
                            Media
                        </div>
                    </Link>
                    <Link href={'/poli'} className={nav == 'poli' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent w-32"}>
                        <div className="flex">
                            Poli
                        </div>
                    </Link>
                    <Link href={'/lab'} className={nav == 'lab' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent w-32"}>
                        <div className="flex">
                            Tarif Lab
                        </div>
                    </Link>
                    <Link href={'/radiologi'} className={nav == 'radiologi' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent w-32"}>
                        <div className="flex">
                            Tarif Radiologi
                        </div>
                    </Link>
                    <Link href={'/tarif-ambulan'} className={nav == 'tarif-ambulan' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent w-32"}>
                        <div className="flex">
                            Tarif Ambulan
                        </div>
                    </Link>
                    <Link href={'/tarif-tindakan'} className={nav == 'tarif-tindakan' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent w-32"}>
                        <div className="flex">
                            Tarif Tindakan
                        </div>
                    </Link>
                    <Link href={'/map'} className={nav == 'map' ? "btn btn-accent text-white w-32 " : "btn btn-outline btn-accent w-32"}>
                        <div className="flex">
                            Map
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar