'use client'
import React, { useEffect, useState } from 'react'
import Dropdown from "./Component/DropdownItem"
import axios from 'axios'
import { Cookie } from 'next/font/google';

export default function Section() {
    const base_url = process.env.base_url;
    const [dataHakPasien, setDataHakPasien] = useState<any>()
    const [readHakPasien, setReadHakPasien] = useState<boolean>(false)

    const [dataProkes, setDataProkes] = useState<any>()
    const [readProkes, setReadProkes] = useState<boolean>(false)

    const [dataTatib, setDataTatib] = useState<any>()
    const [readTatib, setReadTatib] = useState<boolean>(false)
    const getHakPasien = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: `${base_url}/umum/hakpasien`,
            });
            if (data.data.data) {
                setDataHakPasien(data.data.data)
            }
        } catch (error) {

        }
    }

    const setCookie = () => {

        const decodedCookie = decodeURIComponent(document.cookie);
        console.log(decodedCookie);

    }
    const getProkes = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: `${base_url}/umum/prokes`,
            });
            if (data.data.data) {
                setDataProkes(data.data.data)
            }
        } catch (error) {

        }
    }

    const getTatib = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: `${base_url}/umum/tatip`,
            });
            if (data.data.data) {
                setDataTatib(data.data.data)
            }
        } catch (error) {

        }
    }
    const handleRead = (e: string) => {
        if (e == 'hakpasien') {
            if (readHakPasien == true) {
                setReadHakPasien(false)
            } else {
                setReadHakPasien(true)
            }
        } else if (e == 'prokes') {
            if (readProkes == true) {
                setReadProkes(false)
            } else {
                setReadProkes(true)
            }
        } else if (e == 'tatib') {
            if (readTatib == true) {
                setReadTatib(false)
            } else {
                setReadTatib(true)
            }
        }

    }
    useEffect(() => {
        getHakPasien()
        getProkes()
        getTatib()
    }, [])

    return (
        <div className='flex justify-center'>
            <div className='section p-4 border border-accent'>
                {/* CARD HAK PASIEN */}
                <div className="grid grid=-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <div className={`col-span-1 card border w-full bg-rainbow1 shadow-lg `}>
                        <div className="card-body lg:p-10 p-5 overflow-hidden lg:aspect-square aspect-[9/16] ">
                            {dataHakPasien ?
                                <React.Fragment>
                                    <h2 className="text-center font-bold p-3 shadow-xl uppercase rounded-md">{dataHakPasien.name}</h2>
                                    <div className={`overflow-y-scroll gas-scroll  transition-shadow p-3 ${readHakPasien == false ? '' : ''}`}>
                                        {dataHakPasien.desc.map((item: any, index: any) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <div className='grid text-dropdown text-justify'>
                                                        <div className="font-semibold">
                                                            {`${item.title}`}
                                                        </div>
                                                        {item.desc && item.desc.map((item2: any, index: any) => {
                                                            return ((
                                                                <React.Fragment key={index}>
                                                                    <div className="grid pl-4">
                                                                        {item2}
                                                                    </div>
                                                                </React.Fragment>
                                                            ))
                                                        })}
                                                    </div >
                                                </React.Fragment>
                                            )
                                        })}
                                    </div>
                                    {/* <div className='p-3 flex justify-center'>
                                        <button onClick={() => handleRead('hakpasien')} className="btn btn-accent text-white btn-wide">
                                            {readHakPasien == false ?
                                                <>
                                                    Baca Lebih Banyak
                                                </>
                                                :
                                                <>
                                                    Baca Lebih Sedikit
                                                </>

                                            }
                                        </button>
                                    </div> */}
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <div className="flex justify-center items-center h-full">
                                        <span className="loading loading-spinner text-accent"></span>
                                    </div>
                                </React.Fragment>

                            }
                        </div>
                    </div>
                    <div className="col-span-1 card border overflow-hidden shadow-lg h-full w-full">
                        <div className="avatar">
                            <div className="rounded-xl">
                                <img src="/img/ss.jpg" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CARD PROKES */}
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-4">
                    <div className={`lg:col-span-5 card border w-full R bg-rainbow2 shadow-xl `}>
                        <div className="card-body lg:p-10 p-5 overflow-hidden">
                            {dataProkes ?
                                <React.Fragment>
                                    <h2 className="text-center font-bold p-3 shadow-xl rounded-md uppercase">{dataProkes.name}</h2>
                                    <div className={`overflow-y-scroll transition-shadow p-3  ${readProkes == false ? 'h-auto' : 'h-auto'}`}>
                                        {dataProkes.desc.map((item: any, index: any) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <div className='grid text-justify text-dropdown'>
                                                        <div className="">
                                                            {`${item}`}
                                                        </div>
                                                    </div >
                                                </React.Fragment>
                                            )
                                        })}
                                    </div>
                                    {/* <div className='p-3 flex justify-center'>
                                    <button onClick={() => handleRead('prokes')} className="btn btn-accent text-white btn-wide">
                                        {readProkes == false ?
                                            <>
                                                Baca Lebih Banyak
                                            </>
                                            :
                                            <>
                                                Baca Lebih Sedikit
                                            </>

                                        }
                                    </button>
                                </div> */}
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <div className="flex justify-center items-center h-full">
                                        <span className="loading loading-spinner text-secondary"></span>
                                    </div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                    <div className="lg:col-span-1 card border overflow-hidden shadow-lg h-full w-full">
                        {/* <img className=' h-full' src="/img/3d.jpg" alt="" /> */}
                        <div className="avatar h-full">
                            <div className="rounded-xl h-full w-full">
                                <img src="/img/aa3.png" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CARD TATIB */}
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-4">
                    <div className={`lg:col-span-3 card border w-full R bg-rainbow1 shadow-xl`}>
                        <div className="card-body lg:p-10 p-5 overflow-hidden lg:aspect-square aspect-[9/16]">
                            {dataTatib ?
                                <React.Fragment>
                                    <h2 className="text-center font-bold p-3 shadow-xl uppercase rounded-md">{dataTatib.name}</h2>
                                    <div className={`overflow-y-scroll transition-shadow p-3  ${readTatib == false ? '' : 'h-auto'}`}>
                                        {dataTatib.desc.map((item: any, index: any) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <div className='grid text-justify'>
                                                        <div className="font-semibold ">
                                                            {`${index + 1}. ${item.title}`}
                                                        </div>
                                                        {item.desc && item.desc.map((item2: any, index: any) => {
                                                            return ((
                                                                <React.Fragment key={index}>
                                                                    <div className="grid text-dropdown ml-6">
                                                                        {item2.title ?
                                                                            <React.Fragment>
                                                                                <div className="">
                                                                                    <div className="font-semibold">
                                                                                        {item2.title}
                                                                                    </div>
                                                                                    {item2.desc && item2.desc.map((item3: any, index: any) => {
                                                                                        return (
                                                                                            item3.title ?
                                                                                                <React.Fragment key={index}>
                                                                                                    <div className='ml-6 font-semibold'>{`${index + 1}. ${item3.title}`}</div>
                                                                                                    {item3.desc && item3.desc.map((item4: any, index: any) => {
                                                                                                        return (
                                                                                                            <div key={index + 100} className=' ml-8 flex'>
                                                                                                                {`${index + 1}. ${item4}`}
                                                                                                            </div>
                                                                                                        )
                                                                                                    })
                                                                                                    }
                                                                                                </React.Fragment>
                                                                                                :
                                                                                                <React.Fragment key={index}>
                                                                                                    <div className="flex ml-6">
                                                                                                        {`${index + 1}. ${item3}`}
                                                                                                    </div>
                                                                                                </React.Fragment>
                                                                                        )
                                                                                    })}
                                                                                </div>
                                                                            </React.Fragment>
                                                                            :
                                                                            <React.Fragment key={index}>
                                                                                <div className="grid">
                                                                                    <div className=" text-justify">
                                                                                        {item2.desc}
                                                                                    </div>
                                                                                </div>
                                                                            </React.Fragment>
                                                                        }
                                                                    </div>
                                                                </React.Fragment>
                                                            ))
                                                        })}
                                                    </div >
                                                </React.Fragment>
                                            )
                                        })}
                                    </div>
                                    {/* <div className='p-3 flex justify-center'>
                                        <button onClick={() => handleRead('tatib')} className="btn btn-accent text-white btn-wide">
                                            {readTatib == false ?
                                                <>
                                                    Baca Lebih Banyak
                                                </>
                                                :
                                                <>
                                                    Baca Lebih Sedikit
                                                </>

                                            }
                                        </button>
                                    </div> */}
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <div className="flex justify-center items-center h-full">
                                        <span className="loading loading-spinner text-primary"></span>
                                    </div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                    <div className="lg:col-span-3 card border overflow-hidden shadow-lg h-full w-full">
                        <div className="avatar">
                            <div className="rounded-xl w-full">
                                <img src="/img/aa4.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Dropdown
                    name='Hak dan Kewajiban Pasien'
                    api='hakpasien'
                />
                <Dropdown
                    name='Protokol Kesehatan'
                    api='prokes'
                />
                <Dropdown
                    name='Tata Tertib Rumah Sakit'
                    api='tatip'
                /> */}
            </div>
        </div >
    )
}
