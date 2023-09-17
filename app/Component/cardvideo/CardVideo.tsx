'use client'
import React from 'react'
import './cardVideo.css'
const CardVideo = ({ title, link, desc }: { title: string, link: string, desc: string }) => {
    return (
        <div className='card-video'>
            <div className='card-video-head'>
                <video src={link}></video>
            </div>
            <div className="card-video-item">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </div >
    )
}

export default CardVideo