'use client'
import React from 'react'
import CardDaftarKamar from './component/CardDaftarKamar'

export default function Section() {
    const data = {
        'sudah': 0,
        'isi': 0,
        'kosong': 0,
        'total': 0,
    }
    return (
        <div className='flex justify-center'>
            <div className='section p-4 bg-white border border-accent'>
                <div className="flex flex-wrap justify-center gap-3">
                    <div className="lg:md:w-[30%] w-full">
                        <CardDaftarKamar title='nama' data={data} />
                    </div>
                    <div className="lg:md:w-[30%] w-full">
                        <CardDaftarKamar title='nama' data={data} />
                    </div>
                    <div className="lg:md:w-[30%] w-full">
                        <CardDaftarKamar title='nama' data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}
