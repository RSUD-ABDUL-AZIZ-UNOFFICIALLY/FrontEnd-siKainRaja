'use client'
import React from 'react'
import './skeleton.css'
const SkeletonCard = () => {
    return (
        <div className='skeleton-card-img'>
            <div className="img"></div>
            <div className="head"></div>
            <div className="desc"></div>
        </div>
    )
}

export default SkeletonCard