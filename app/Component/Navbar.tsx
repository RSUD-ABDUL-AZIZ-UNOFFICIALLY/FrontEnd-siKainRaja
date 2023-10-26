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
            <div className="navbar border border-accent">
                <div className="flex gap-3">
                    <Link href={'/'} className={nav == 'umum' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent text-white w-32"}>
                        <div className="flex">
                            Informasi
                        </div>
                    </Link>
                    <Link href={'/media'} className={nav == 'media' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent text-white w-32"}>
                        <div className="flex">
                            Media
                        </div>
                    </Link>
                    <Link href={'/poli'} className={nav == 'poli' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent text-white w-32"}>
                        <div className="flex">
                            Poli
                        </div>
                    </Link>
                    <Link href={'/lab'} className={nav == 'lab' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent text-white w-32"}>
                        <div className="flex">
                            Lab
                        </div>
                    </Link>
                    <Link href={'/radiologi'} className={nav == 'radiologi' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent text-white w-32"}>
                        <div className="flex">
                            Radiologi
                        </div>
                    </Link>
                    <div className="drop">
                        <button ref={refDropdownTarif} onClick={() => handleDropdownTarif()} className={nav == 'tarif' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent text-white w-32"}>
                            Tarif
                        </button>
                        {dropdownTarif == true &&
                            <React.Fragment>
                                <div className="absolute z-10 w-auto translate-y-5">
                                    <div className="card shadow-lg bg-base-100 p-3 gap-2">
                                        {/* <div className="card-body"> */}
                                        <Link href={'/tarif-ambulan'} className={nav == 'tarif-ambulan' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent text-white w-32"}>
                                            Tarif Ambulan
                                        </Link>
                                        <Link href={'/tarif-ambulan'} className={nav == 'tarif-ambulan' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent text-white w-32"}>
                                            Tarif Kabar
                                        </Link>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                    <Link href={'/map'} className={nav == 'map' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent text-white w-32"}>
                        <div className="flex">
                            Map
                        </div>
                    </Link>

                </div>
                {/* <div className="flex">
                    <button className='navbar-item'>
                        login
                    </button>
                </div> */}
            </div>
        </nav>
    )
}

export default Navbar