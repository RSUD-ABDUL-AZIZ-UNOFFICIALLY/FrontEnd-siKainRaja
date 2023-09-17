'use client'
import Link from 'next/link'
import React from 'react'

const CardLab = ({ kelas, name, id }: { kelas: string, name: string, id: string }) => {
    return (
        <Link href={`/lab/detail/${id}/${name}`} className='card-lab'>
            <div className="grid grid-cols-6 ">
                <div className="col-span-1 card-lab-left">
                    <p>{kelas}</p>
                </div>
                <div className="col-span-5 card-lab-item">
                    {name}
                </div>
            </div>
        </Link>
    )
}

export default CardLab