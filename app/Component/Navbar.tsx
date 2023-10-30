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
                            Tarif Lab
                        </div>
                    </Link>
                    <Link href={'/radiologi'} className={nav == 'radiologi' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent text-white w-32"}>
                        <div className="flex">
                            Tarif Radiologi
                        </div>
                    </Link>
                    <Link href={'/tarif-ambulan'} className={nav == 'tarif-ambulan' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent text-white w-32"}>
                        <div className="flex">
                            Tarif Ambulan
                        </div>
                    </Link>
                    <Link href={'/tarif-tindakan'} className={nav == 'tarif-tindakan' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent text-white w-32"}>
                        <div className="flex">
                            Tarif Tindakan
                        </div>
                    </Link>
                    {/* <div className="dropdown">
                        <label tabIndex={0} className="btn btn-accent text-white w-32 m-1">Click</label>
                        <ul tabIndex={0} className="dropdown-content absolute z-[100] menu p-2 shadow bg-white white rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div> */}
                    {/* <div className="drop">
                        <button ref={refDropdownTarif} onClick={() => handleDropdownTarif()} className={nav == 'tarif-ambulan' || nav == 'tarif-tindakan' ? "btn btn-accent text-white w-32" : "btn btn-outline btn-accent text-white w-32"}>
                            Tarif
                        </button>
                        {dropdownTarif == true &&
                            <React.Fragment>
                                <div className="absolute z-10       0 w-auto translate-y-5">
                                    <div className="card shadow-lg bg-base-100 p-3 gap-2">
                                        <Link href={'/tarif-ambulan'} className={nav == 'tarif-ambulan' ? "btn btn-accent text-white w-32" : "btn btn-ghost w-32"}>
                                            Tarif Ambulan
                                        </Link>
                                        <Link href={'/tarif-ambulan'} className={nav == 'tarif-tindakan' ? "btn btn-accent text-white w-32" : "btn btn-ghost w-32"}>
                                            Tarif Tindakan
                                        </Link>
                                    </div>
                                </div>
                            </React.Fragment>
                        }
                    </div> */}
                    <Link href={'/map'} className={nav == 'map' ? "btn btn-accent text-white w-32 " : "btn btn-outline btn-accent text-white w-32"}>
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