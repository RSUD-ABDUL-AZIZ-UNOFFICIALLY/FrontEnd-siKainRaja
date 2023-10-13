'use client'
import Link from 'next/link'
import React from 'react'

const CardLab = ({ kelas, name, id }: { kelas: string, name: string, id: string }) => {
    return (
        <div className='card bg-base-100 shadow-xl'>
            <div className="grid grid-cols-6 ">
                <div className="col-span-1 card-lab-left">
                    <p>{kelas}</p>
                </div>
                <div className="col-span-5 card-lab-item text-center">
                    {name}
                    <Link href={`/lab/detail/${id}/${name}` } className='btn btn-accent mt-7 btn-wide'>
                        Cek Detail
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardLab