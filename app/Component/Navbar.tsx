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
            <div className="navbar">
                <div className="flex gap-3">
                    <Link href={'/'} className={nav == 'umum' ? "navbar-item-active" : "navbar-item"}>
                        <div className="flex">
                            Informasi
                        </div>
                    </Link>
                    <Link href={'/media'} className={nav == 'media' ? "navbar-item-active" : "navbar-item"}>
                        <div className="flex">
                            Media
                        </div>
                    </Link>
                    <Link href={'/poli'} className={nav == 'poli' ? "navbar-item-active" : "navbar-item"}>
                        <div className="flex">
                            Poli
                        </div>
                    </Link>
                    <Link href={'/lab'} className={nav == 'lab' ? "navbar-item-active" : "navbar-item"}>
                        <div className="flex">
                            Lab
                        </div>
                    </Link>
                    <Link href={'/radiologi'} className={nav == 'radiologi' ? "navbar-item-active" : "navbar-item"}>
                        <div className="flex">
                            Radiologi
                        </div>
                    </Link>
                    <div className="drop">
                        <button ref={refDropdownTarif} onClick={() => handleDropdownTarif()} className={nav == 'tarif' ? "nb-dd navbar-item-active" : "nb-dd navbar-item"}>
                            Tarif
                        </button>
                        {dropdownTarif == true &&
                            <React.Fragment>
                                <div className="absolute z-10 w-auto translate-y-3">
                                    <div className="card shadow-md bg-base-100 p-2 gap-2">
                                        {/* <div className="card-body"> */}
                                        <Link href={'/tarif-ambulan'} className={nav == 'tarif-ambulan' ? "navbar-item-active" : "navbar-item"}>
                                            Tarif Ambulan
                                        </Link>
                                        <Link href={'/tarif-ambulan'} className={nav == 'tarif-ambulan' ? "navbar-item-active" : "navbar-item"}>
                                            Tarif Kabar
                                        </Link>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                    <Link href={'/map'} className={nav == 'map' ? "navbar-item-active" : "navbar-item"}>
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