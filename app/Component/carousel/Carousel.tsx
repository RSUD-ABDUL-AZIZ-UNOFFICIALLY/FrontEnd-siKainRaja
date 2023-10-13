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
                <div className='modal-carousel'>
                    <div className="modal-carousel-item">
                        <div className="flex justify-between items-center mb-4">
                            <p className='text-white'>{title}</p>
                            <button className='btn btn-ghost btn-sm' onClick={() => setModal(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                        <div className="mc-img">
                            {items.map((item: any, index: any) => (
                                <div onClick={() => setModal(true)} key={index} className={index == currentIndex ? 'slide active' : 'slide non-active '} >
                                    <img src={item} alt="" />
                                </div>
                            ))}
                        </div>
                        <button onClick={prevSlide} className="button-modal-carousel left-modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" />
                            </svg>
                        </button>
                        <button onClick={nextSlide} className="button-modal-carousel right-modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* </div > */}
            </>
        )
    }

    return (
        <React.Fragment>
            {modal == true && items.length > 0 && renderModal()}
            <div className="card bg-base-100 shadow-xl bg-">
                <div className="carousel-img">
                    <button onClick={() => setModal(true)} className={'slide active'} >
                        <img src={thumbnail} alt="" />
                    </button>

                    {/* <div className={items && items.length > 1 ? '' : 'hidden'}>
                        <button onClick={prevSlide} className="button-carousel left">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" />
                            </svg>
                        </button>
                        <button onClick={nextSlide} className="button-carousel right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                            </svg>
                        </button>
                    </div> */}
                </div>
                <div className="carousel-item">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            </div >
        </React.Fragment>
    )
}

export default Carousel