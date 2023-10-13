'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Section = ({ id, name }: { id: any, name: any }) => {
    const [iniData, setData] = useState<any>()
    const getData = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: 'http://103.150.116.254:3000/skr/penunjang/jnslab/' + id,
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
            <div className='section grid'>
                <div className="flex justify-between items-center">
                    <div className='font-bold'>{`LAB ${name}`}</div>
                    <Link href={'/lab'} className="btn btn-neutral flex justify-center items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
                        </svg>
                    </Link>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 mt-3">
                    {iniData && iniData.map((item: any, index: any) => (
                        <React.Fragment key={index}>
                            {/* <div className="card-detail">
                                <div className='font-bold text-center mb-6'>{item.Pemeriksaan}</div>
                                <div className='text-sm bottom-0'>{`Rp. ${item.biaya_item}`}</div>
                            </div> */}
                            <div className="card w-full bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">{item.Pemeriksaan}</h2>
                                    <div className="flex mt-4">
                                        <div className='bg-secondary p-3 w-full rounded-md text-white text-center'>
                                            {`Rp. ${item.biaya_item}`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section