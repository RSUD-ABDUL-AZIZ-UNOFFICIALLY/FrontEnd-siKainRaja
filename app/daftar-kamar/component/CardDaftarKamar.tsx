'use client'
import React from 'react'

interface data {
    sudah: number,
    isi: number,
    kosong: number,
    total: number
}

const CardDaftarKamar = ({ title, data }: { title: string, data: data }) => {
    return (
        <div className='card bg-white shadow-lg w-full'>
            <div className="card-body">
                <div className="text-center uppercase font-semibold">{title}</div>
                <div className="flex flex-wrap justify-center gap-2 items-center">
                    <div className="rounded shadow-md bg-blue-500 w-[45%] p-3 text-white">Terisi : {data.isi}</div>
                    <div className="rounded shadow-md bg-accent w-[45%] p-3 text-white">Kosong : {data.kosong}</div>
                    <div className="rounded shadow-md bg-orange-500 w-[45%] p-3 text-white">Kosong : {data.kosong}</div>
                    <div className="rounded shadow-md bg-white w-[45%] p-3 text-black">Total : {data.kosong}</div>
                </div>
            </div>
        </div>
    )
}

export default CardDaftarKamar