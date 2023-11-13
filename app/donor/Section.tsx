'use client'
import React from 'react'

export default function Section() {
    return (
        <div className='flex justify-center'>
            <div className='section p-4 bg-white border border-accent'>
                <div className="font-bold text-xl text-slate-950 text-center mb-4">
                    Link Grup Donor Darah
                </div>
                <div className="grid lg:grid-cols-5 gap-3">
                    <a href="" className='btn bg-transparent hover:bg-lime-100 border-accent hover:border-accent'>
                        Golongan Darah A
                    </a>
                    <a href="" className='btn bg-transparent hover:bg-lime-100 border-accent hover:border-accent'>
                        Golongan Darah AB
                    </a>
                    <a href="" className='btn bg-transparent hover:bg-lime-100 border-accent hover:border-accent'>
                        Golongan Darah B+
                    </a>
                    <a href="" className='btn bg-transparent hover:bg-lime-100 border-accent hover:border-accent'>
                        Golongan Darah B-
                    </a>
                    <a href="" className='btn bg-transparent hover:bg-lime-100 border-accent hover:border-accent'>
                        Golongan Darah O
                    </a>
                </div>
            </div>
        </div>
    )
}
