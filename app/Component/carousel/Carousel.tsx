'use client'
import React, { useState } from 'react'
import './carousel.css'
const Carousel = ({ items, title, desc, thumbnail }: { items: any, title: string, desc: string, thumbnail: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modal, setModal] = useState<boolean>(false)
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const renderModal = () => {
        return (
            <>
                <div className='modal-cc'>
                    <div className="modal-cc-item">
                        <div className="flex justify-between items-center mb-4">
                            <p className='text-white'>{title}</p>
                            <button className='btn btn-ghost' onClick={() => setModal(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                        <div className="mc-img">
                            <div className="carousel w-full">
                                {items.map((item: any, index: number) => (
                                    <React.Fragment key={index}>
                                        <div id={`slide${index}`} className="carousel-item relative w-full flex justify-center">
                                            <div className="block gap-2">
                                                <img src={item} className="h-full rounded-lg" />
                                            </div>
                                            {/* <div className={`absolute w-full justify-between flex items-center transform`}>
                                            <a href={`#slide${index - 1}`} className="btn btn-ghost text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                                </svg>
                                            </a>
                                            <a href={`#slide${index + 1}`} className="btn btn-ghost text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg>

                                            </a>
                                        </div> */}
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center w-full py-2 gap-2">
                            {items.map((item: any, index: number) => (
                                <React.Fragment key={index}>
                                    <a href={`#slide${index}`} className="btn btn-xs">
                                        {`${index + 1}`}
                                    </a>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                {/* </div > */}
            </>
        )
    }

    return (
        <React.Fragment>
            {modal == true && items.length > 0 && renderModal()}
            <div className="card p-3 bg-base-100 shadow-xl bg-">
                <div className="cc-img">
                    <button onClick={() => setModal(true)} className={'slide active'} >
                        <img src={thumbnail} alt="" />
                    </button>
                </div>
                <button onClick={() => setModal(true)} className="btn cc-item">
                    <div className="cci-item">
                        <h1>{title}</h1>
                        <p>{desc}</p>
                    </div>
                </button>
            </div >
        </React.Fragment>
    )
}

export default Carousel