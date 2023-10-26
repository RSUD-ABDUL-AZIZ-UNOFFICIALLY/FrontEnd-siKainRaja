'use client'
import Link from 'next/link'
import React from 'react'

const CardLab = ({ kelas, name, id }: { kelas: string, name: string, id: string }) => {
    return (
        <div className='card bg-white  overflow-hidden shadow-xl'>
            <div className="grid grid-cols-6 ">
                <div className="col-span-1 card-lab-left bg-rainbow2 text-center h-full">
                    <p>{`Rp. ${kelas}`}</p>
                </div>
                <div className="col-span-5 card-lab-item bg-rainbow1 text-center">
                    <p className='text-xs'>
                        {name}
                    </p>
                    <div className="flex justify-center">
                        <Link href={`/lab/detail/${id}/${name}`} className='btn hover:bg-slate-50 hover:border-none bg-white shadow-sm mt-7'>
                            Detail
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardLab