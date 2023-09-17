'use client'
import React, { useState } from 'react'
import './carousel.css'
const Carousel = ({ items, title, desc }: { items: any, title: string, desc: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    return (
        <div className="carousel">
            <div className="carousel-img">
                {items.map((item: any, index: any) => (
                    <div key={index} className={index == currentIndex ? 'slide active' : 'slide non-active '} >
                        <img src={item} alt="" />
                    </div>
                ))}
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
            </div>
            <div className="carousel-item">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Carousel