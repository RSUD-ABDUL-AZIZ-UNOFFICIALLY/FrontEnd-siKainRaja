import React from 'react'
import './radiologi.css'
const CardRadiologi = ({ title, price }: { title: string, price: number }) => {
    return (
        <div className='card-radiologi'>
            <div className="cr-item">{title}</div>
            <div className="cr-price">{`Rp. ${price}`}</div>
        </div>
    )
}

export default CardRadiologi