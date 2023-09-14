'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Navbar = ({ name }: { name: string }) => {
    const [nav, setNav] = useState('')

    useEffect(() => {
        setNav(name)
    }, [name])

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