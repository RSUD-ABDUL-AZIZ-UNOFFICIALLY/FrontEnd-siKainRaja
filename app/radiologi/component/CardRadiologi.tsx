import React from 'react'
import './radiologi.css'
const CardRadiologi = ({ title, price }: { title: string, price: number }) => {
    return (
        <div className='card-radiologi bg-base-100 shadow-xl'>
            <div className="cr-item">{title}</div>
            <div className="cr-price bg-accent">{`Rp. ${price}`}</div>
        </div>
    )
}

export default CardRadiologi