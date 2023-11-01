import React from 'react'
import Header from '../../../Component/Header'
import Navbar from '../../../Component/Navbar'

import BottomNavigation from '../../../Component/bottomnavigation/BottomNavigation'
import Section from './Section'


export const metadata = {
    title: 'Antrian Poli',
}


export default function page({ params }: { params: any }) {
    const id = params.slug[0]
    const name = decodeURIComponent(params.slug[1])
    return (
        <main>
            <Header />
            <Navbar name={'poli'} />
            <Section id={id} name={name} />
            <BottomNavigation />
        </main>
    )
}
