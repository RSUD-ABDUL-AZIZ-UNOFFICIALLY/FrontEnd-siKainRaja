'use client'
import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'

const CardFoto = ({ title, link, desc }: { title: string, link: string, desc: string }) => {
    return (
        <div className='card-foto'>
            <div className='card-foto-head'>
                <div className='bg-cover bg-center card-foto-head-item' style={{ backgroundImage: `url(${link})` }} >
                    {/* <img src={link} alt="" /> */}
                </div>
            </div>
            <div className="card-foto-item">
                <div className='text-md font-bold'>{title}</div>
                <div className='text-sm text-justify'>{desc}</div>
            </div>
        </div >
    )
}

export default CardFoto