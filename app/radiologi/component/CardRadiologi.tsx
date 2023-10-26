import React from 'react'
import './radiologi.css'
const CardRadiologi = ({ title, price }: { title: string, price: number }) => {
    return (
        <div className='card bg-rainbow2 overflow-hidden shadow-xl'>
            <div className="card-body">
                <div className="text-center">{title}</div>
                <div className="text-sm mt-4">{`Rp. ${price}`}</div>
            </div>
        </div>
    )
}

export default CardRadiologi