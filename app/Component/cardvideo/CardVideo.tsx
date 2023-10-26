'use client'
import React from 'react'
import './cardVideo.css'
const CardVideo = ({ title, link, desc }: { title: string, link: string, desc: string }) => {
    return (
        <div className='card border overflow-hidden shadow-xl bg-rainbow4'>
            <div className='card-video-head '>
                <video src={link} controls loop={true}></video>
            </div>
            <div className="p-4 text-center flex justify-center items-center">
                <h1>{title}</h1>
                {/* <p>{desc}</p> */}
            </div>
        </div >
    )
}

export default CardVideo