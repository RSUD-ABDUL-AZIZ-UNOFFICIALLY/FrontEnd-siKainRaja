'use client'
import React from 'react'

interface data {
    sudah: number,
    isi: number,
    kosong: number,
    total: number
}

const CardDaftarKamar = ({ title, booking, isi, kosong, total }: { title: string, booking: number, isi: number, kosong: number, total: number }) => {
    return (
        <div className='card bg-white shadow-lg w-full'>
            <div className="card-body">
                <div className="text-center uppercase font-semibold">{title}</div>
                <div className="flex flex-wrap justify-center gap-2 items-center uppercase text-center">
                    <div className="rounded-lg shadow-md bg-info w-[45%] p-3 text-white">Terisi : {isi}</div>
                    <div className="rounded-lg shadow-md bg-accent w-[45%] p-3 text-white">Boking : {booking}</div>
                    <div className="rounded-lg shadow-md bg-warning w-[45%] p-3 text-white">Kosong : {kosong}</div>
                    <div className="rounded-lg shadow-md bg-white w-[45%] p-3 text-black">Total : {total}</div>
                </div>
            </div>
        </div>
    )
}

export default CardDaftarKamar