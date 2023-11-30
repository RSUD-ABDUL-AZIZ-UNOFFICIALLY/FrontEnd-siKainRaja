'use client'
import React from 'react'

export default function Section() {
    return (
        <div className='flex justify-center'>
            <div className='section p-4 bg-white border border-accent'>
                <div className="font-bold text-xl text-slate-950 text-center mb-4">
                    Link Grup Donor Darah
                </div>
                <div className="flex flex-wrap col gap-3 justify-center items-center">
                    <a href="https://chat.whatsapp.com/C8gQ2iCs9AtCmLE35sJkOX" className='btn bg-transparent lg:md:w-[30%] hover:bg-warning border-accent hover:border-warning'>
                        Golongan Darah A+
                    </a>
                    <a href="" className='btn bg-transparent lg:md:w-[30%] hover:bg-warning border-accent hover:border-warning'>
                        Golongan Darah A-
                    </a>
                    <a href="" className='btn bg-transparent lg:md:w-[30%] hover:bg-warning border-accent hover:border-warning'>
                        Golongan Darah AB
                    </a>
                    <a href="" className='btn bg-transparent lg:md:w-[30%] hover:bg-warning border-accent hover:border-warning'>
                        Golongan Darah B+
                    </a>
                    <a href="" className='btn bg-transparent lg:md:w-[30%] hover:bg-warning border-accent hover:border-warning'>
                        Golongan Darah B-
                    </a>
                    <a href="" className='btn bg-transparent lg:md:w-[30%] hover:bg-warning border-accent hover:border-warning'>
                        Golongan Darah O
                    </a>
                </div>
            </div>
        </div>
    )
}
