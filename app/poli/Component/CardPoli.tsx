'use client'
import React, { useEffect, useState, useRef } from 'react'
import CardPoliModalItem from "./CardPoliModalItem";
import axios from 'axios';

const CardPoli = ({ id, name, dokter }: { id: String, name: String, dokter: [string] }) => {
    const base_url = process.env.base_url;
    const [modal, setModal] = useState<boolean>(false)
    const [loadingModal, setLoadingModal] = useState<boolean>(false)
    const modalRef = useRef<any>(null);
    const [iniData, setData] = useState<any>([])

    const getData = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: `${base_url}/poli/drjadwal?kd_poli=${id}`,
            });
            if (data.data.data.length > 0) {
                setData(data.data.data)
                setModal(true)
                setLoadingModal(false)
            } else {
                setLoadingModal(true)
                setTimeout(() => {
                    setLoadingModal(false)
                }, 500)
                setModal(true)
            }

        } catch (error) {
            setData(null)
        }
    }

    const handleModal = () => {
        getData()
    }

    const renderModal = () => {
        if (modal == true) {
            return (
                <>
                    <div className="myModal">
                        <div ref={modalRef} className="myModal-item bg-rainbow1">
                            <div className="myModal-item-head shadow-xl">
                                <h1 className='uppercase'>{name}</h1>
                                <button onClick={() => setModal(false)} className='btn-transparent'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="">
                                {loadingModal == true ?
                                    <React.Fragment>
                                        <div className='mt-2 flex justify-center items-center h-36'>
                                            <span className="loading loading-dots loading-sm"></span>
                                        </div>
                                    </React.Fragment>
                                    :
                                    <CardPoliModalItem data={iniData} />
                                }
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return null
        }
    }
    return (
        <div>
            {renderModal()}
            <div className="card w-full h-full bg-rainbow2 shadow-xl">
                <div className="card-body static">
                    <div className="flex justify-center items-center">
                        <h2 className="font-bold text-center uppercase">{name}</h2>
                    </div>
                    <div className='p-2 mb-7 w-full'>
                        <h3>Daftar Dokter : </h3>
                        <ul className='pl-4 list-disc'>
                            {dokter && dokter.map((item: string, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <li className='mt-2 mb-2 text-xs'>{`${item}`}</li>
                                    </React.Fragment>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="absolute left-0 bottom-2 w-full">
                        <div className="flex justify-center">
                            <button onClick={() => handleModal()} className='btn btn-accent text-white'>
                                Cek Jadwal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPoli