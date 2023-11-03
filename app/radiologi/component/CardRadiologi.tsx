import React from 'react'
import './radiologi.css'
const CardRadiologi = ({ title, price, index }: { title: string, price: number, index: number }) => {
    const random = [
        'bg-red-100',
        'bg-yellow-100',
        'bg-blue-100',
        'bg-green-100',
        'bg-orange-100',
        'bg-emerald-100',
        'bg-purple-100',
    ]

    const randomColorClass = random[Math.floor(Math.random() * random.length)];

    return (
        <div className={`card overflow-hidden shadow-xl ${randomColorClass}`}>
            <div className="card-body">
                <div className="text-center font-bold rounded-md p-2 mb-3">{title}</div>
                <div className="mt-4 text-center">{`Rp. ${price}`}</div>
            </div>
        </div>
    )
}

export default CardRadiologi