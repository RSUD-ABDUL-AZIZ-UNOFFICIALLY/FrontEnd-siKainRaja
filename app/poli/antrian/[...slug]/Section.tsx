'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import 'moment/locale/id';
import DaftarAntrian from './DaftarAntrian';
import Link from 'next/link';

const Section = ({ id, name }: { id: string, name: string }) => {
    const base_url = process.env.base_url;
    const [dataAntrian, setDataAntrian] = useState<any>()
    const [sudah, setSudah] = useState<string>()

    const today = moment()
    const getAntrian = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: `${base_url}/antrian/poli?kd_poli=${id}`,
            });
            if (data.data.status == true) {
                setDataAntrian(data.data)
                console.log(data.data.status_antrian.sudah);
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        getAntrian()
    }, [])
    return (
        <div className='flex justify-center'>
            <div className='section p-4 border border-accent'>
                <div className="flex justify-end">
                    <Link href={`/poli`} className='btn btn-success'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                    </Link>
                </div>
                <div className="flex p-4 items-center justify-center">
                    <div className="w-full text-center">
                        <h1 className='text-2xl font-bold uppercase'>daftar antrian</h1>
                        <small>{`${today.format('dddd')}, ${today.format('DD')} ${today.format('MMMM')} ${today.format('yy')}`}</small>
                        <p>{name}</p>
                    </div>
                </div>
                <div className="card-body p-2">
                    <div className="flex justify-center">
                        <div className="grid lg:grid-cols-4 grid-cols-2 justify-center gap-3 items-center lg:w-[30vw]">
                            <div className="card shadow-xl bg-green-100 w-full h-full">
                                <div className="card-body text-center uppercase aspect-square">
                                    <p>Sudah</p>
                                    <div className="flex justify-center items-center h-full">
                                        {dataAntrian && dataAntrian.status_antrian ?
                                            <h1 className='text-5xl'>{dataAntrian.status_antrian.sudah}</h1>
                                            :
                                            <span className="loading loading-spinner loading-md"></span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-xl w-full h-full bg-yellow-100">
                                <div className="card-body text-center uppercase">
                                    <p>Belum</p>
                                    <div className="flex justify-center items-center h-full">
                                        {dataAntrian && dataAntrian.status_antrian ?
                                            <h1 className='text-5xl'>{dataAntrian.status_antrian.belum}</h1>
                                            :
                                            <span className="loading loading-spinner loading-md"></span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-xl w-full h-full bg-red-100">
                                <div className="card-body text-center uppercase">
                                    <p>Batal</p>
                                    <div className="flex justify-center items-center h-full">
                                        {dataAntrian && dataAntrian.status_antrian ?
                                            <h1 className='text-5xl'>{dataAntrian.status_antrian.batal}</h1>
                                            :
                                            <span className="loading loading-spinner loading-md"></span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-xl w-full h-full bg-blue-100">
                                <div className="card-body text-center uppercase">
                                    <p>Total</p>
                                    <div className="flex justify-center items-center h-full">
                                        {dataAntrian && dataAntrian.status_antrian ?
                                            <h1 className='text-5xl'>{dataAntrian.status_antrian.total}</h1>
                                            :
                                            <span className="loading loading-spinner loading-md"></span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD DAFTAR */}
                    <div className="p-4">
                        <hr />
                    </div>
                    <div className="grid lg:grid-cols-3 gap-4">
                        {dataAntrian && dataAntrian.data && dataAntrian.data.map((item: any, index: string) => (
                            <React.Fragment key={index}>
                                <DaftarAntrian data={item} />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section