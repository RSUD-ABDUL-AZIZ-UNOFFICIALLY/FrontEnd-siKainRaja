'use client'
import React from 'react'
import Header from '../../../Component/Header'
import Navbar from '../../../Component/Navbar'
import Section from './Section'
import BottomNavigation from '../../../Component/bottomnavigation/BottomNavigation'

export const metadata = {
    title: 'Detail Lab',
}


export default function page({ params }: { params: any }) {
    const id = params.slug[0]
    const name = decodeURIComponent(params.slug[1])
    return (
        <main>
            <Header />
            <Navbar name={'lab'} />
            <Section name={name} id={id} />
            <BottomNavigation />
        </main>
    )
}
