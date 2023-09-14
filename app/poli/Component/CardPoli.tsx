'use client'
import React, { useEffect, useState, useRef } from 'react'
import CardPoliModalItem from "./CardPoliModalItem";
import axios from 'axios';

const CardPoli = ({ id, name }: { id: String, name: String }) => {
    const [modal, setModal] = useState<boolean>(false)
    const [loadingModal, setLoadingModal] = useState<boolean>(false)
    const modalRef = useRef<any>(null);
    const [iniData, setData] = useState<any>([])
    const getData = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: 'http://103.150.116.254:3000/skr/poli/jadwal?kd_poli=' + id,
            });

            if (data.data.data.length > 0) {
                console.log('ss', data.data.data);
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
                        <div ref={modalRef} className="myModal-item">
                            <div className="myModal-item-head">
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
            <button onClick={() => handleModal()} className="btn-card">
                <div className="btn-card-head">{name}</div>
            </button>
        </div>
    )
}

export default CardPoli