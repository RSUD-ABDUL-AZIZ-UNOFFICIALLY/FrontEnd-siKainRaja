import React from 'react'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'
import BottomNavigation from '../Component/bottomnavigation/BottomNavigation'
import Section from './Section'


export const metadata = {
    title: 'Informasi Ambulan',
}
export default function page() {
    return (
        <main>
            <Header />
            <Navbar name={'tarif-ambulan'} />
            <Section />
            <BottomNavigation />
        </main>
    )
}
