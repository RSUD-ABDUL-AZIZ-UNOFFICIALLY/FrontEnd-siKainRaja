import React from 'react'
import './radiologi.css'
const CardRadiologi = ({ title, price }: { title: string, price: number }) => {
    return (
        <div className='card bg-rainbow2 overflow-hidden shadow-xl'>
            <div className="card-body">
                <div className="text-center shadow-md rounded-md p-2 mb-3">{title}</div>
                <div className="mt-4 text-center">{`Rp. ${price}`}</div>
            </div>
        </div>
    )
}

export default CardRadiologi