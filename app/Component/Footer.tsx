'use client'
import React, { useEffect } from 'react'

const Footer = () => {
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Untuk efek pengguliran halus
        });
    }
    // useEffect(() => {
    //     window.addEventListener('scroll', scrollUp);

    //     // Clean up the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('scroll', scrollUp);
    //     };
    // }, []);
    return (
        <button onClick={scrollUp} className='btn-footer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
        </button>
    )
}

export default Footer