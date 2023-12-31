'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Section = ({ id, name }: { id: any, name: any }) => {
    const base_url = process.env.base_url;
    const [iniData, setData] = useState<any>()
    const getData = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: `${base_url}/penunjang/jnslab/` + id,
            });
            if (data.data.data) {
                setData(data.data.data)
            }
        } catch (error) {
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="flex justify-center">
            <div className='section border-accent border grid'>
                <div className="flex justify-end items-center m-4">
                    <Link href={'/lab'} className="btn btn-accent text-center flex justify-center items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-90deg-left text-white" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
                        </svg>
                    </Link>
                </div>
                <div className="mt-4 bg-rainbow2 p-4">
                    <div className='text-center'>{`${name}`}</div>
                </div>
                <div className="grid lg:grid-cols-6 grid-cols-1 gap-4 mt-3 p-4">
                    {iniData && iniData.length > 0 ? iniData.map((item: any, index: any) => (
                        <React.Fragment key={index}>
                            {/* <div className="card-detail">
                                <div className='font-bold text-center mb-6'>{item.Pemeriksaan}</div>
                                <div className='text-sm bottom-0'>{`Rp. ${item.biaya_item}`}</div>
                            </div> */}
                            <div
                                className={`card w-full ${index % 2 === 0 && `bg-yellow-100`} ${index % 3 === 0 && `bg-green-100`} ${index % 1 === 0 && `bg-blue-100`} ${index % 5 === 0 && `bg-red-100`} shadow-xl`}>
                                <div className="card-body">
                                    <h2 className="w-full text-center">{item.Pemeriksaan}</h2>
                                    <div className="flex mt-4">
                                        <div className='p-3 w-full rounded-md text-slate-900 text-center'>
                                            {`Rp. ${item.biaya_item}`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))
                        :
                        <React.Fragment>
                            <div className="lg:col-span-6 text-center flex justify-center items-center w-full h-[25vh]">
                                Tidak Ada Detail Informasi
                            </div>
                        </React.Fragment>
                    }
                </div>
            </div>
        </div >
    )
}

export default Section