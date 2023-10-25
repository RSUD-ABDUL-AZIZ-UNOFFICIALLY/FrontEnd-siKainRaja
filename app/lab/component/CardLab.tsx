'use client'
import Link from 'next/link'
import React from 'react'

const CardLab = ({ kelas, name, id }: { kelas: string, name: string, id: string }) => {
    return (
        <div className='card bg-base-100 shadow-xl'>
            <div className="grid grid-cols-6 ">
                <div className="col-span-1 card-lab-left text-center h-full">
                    <p>{kelas}</p>
                </div>
                <div className="col-span-5 card-lab-item text-center">
                    <p className='text-xs'>
                        {name}
                    </p>
                    <div className="flex justify-center">
                        <Link href={`/lab/detail/${id}/${name}`} className='btn btn-ghost mt-7 btn-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardLab