'use client'
import React from 'react'
import './cardFoto.css'

const CardFoto = ({ title, link, desc }: { title: string, link: string, desc: string }) => {
    return (
        <div className='card-foto'>
            <div className='card-foto-head'>
                {/* <div className='bg-cover bg-center card-foto-head-item' style={{ backgroundImage: `url(${link})` }} ></div> */}
                <img src={link} alt="" />
            </div>
            <div className="card-foto-item">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </div >
    )
}

export default CardFoto