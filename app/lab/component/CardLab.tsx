'use client'
import Link from 'next/link'
import React from 'react'

const CardLab = ({ kelas, name, id }: { kelas: string, name: string, id: string }) => {
    return (
        <div className='card overflow-hidden shadow-xl'>
            <div className="grid grid-cols-6 h-full">
                <div className="col-span-1 card-lab-left bg-rainbow2 text-center h-full ">
                    <p>{`Rp. ${kelas}`}</p>
                </div>
                <div className="col-span-5 card-lab-item bg-white text-center">
                    <p className='text-md'>
                        {name}
                    </p>
                    <div className="flex justify-center">
                        <Link href={`/lab/detail/${id}/${name}`} className='btn bg-green-100 hover:bg-green-200 border-none active:bg-green-200 mt-7'>
                            Detail
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardLab