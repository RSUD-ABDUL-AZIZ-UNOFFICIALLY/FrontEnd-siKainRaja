'use client'
import React, { useState } from 'react'
export default function Section() {
    const [modal, setModal] = useState(false)

    const handleModal = () => {
        setModal(true)
    }

    const renderModal = () => {
        if (modal == true) {
            return (
                <>
                    <div className="myModal">
                        <div className="myModal-item">
                            <div className="flex justify-end">
                                <button onClick={() => setModal(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="grid">
                                <h1>Nama Poli</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis reprehenderit nisi non dicta, pariatur nulla omnis cumque! Aperiam deleniti nihil sapiente doloremque, sed est perferendis odio animi minus, veniam non nobis nulla atque molestias magni, vel id repellendus aut.</p>
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
        <div className='flex justify-center '>
            {renderModal()}
            <div className='section'>
                <div className="grid gap-2 grid-cols-2">
                    <button onClick={() => handleModal()} className="btn-card">
                        <div className="btn-card-head">Nama Poli</div>
                        <div className="btn-card-body">
                            Keterangan
                        </div>
                    </button>
                    <button onClick={() => handleModal()} className="btn-card">
                        <div className="btn-card-head">Nama Poli</div>
                        <div className="btn-card-body">
                            Keterangan
                        </div>
                    </button>
                    <button onClick={() => handleModal()} className="btn-card">
                        <div className="btn-card-head">Nama Poli</div>
                        <div className="btn-card-body">
                            Keterangan
                        </div>
                    </button>
                    <button onClick={() => handleModal()} className="btn-card">
                        <div className="btn-card-head">Nama Poli</div>
                        <div className="btn-card-body">
                            Keterangan
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
