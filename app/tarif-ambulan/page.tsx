import React from 'react'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'
import BottomNavigation from '../Component/bottomnavigation/BottomNavigation'


export const metadata = {
    title: 'Informasi Tarif',
}
export default function page() {
    return (
        <main>
            <Header />
            <Navbar name={'radiologi'} />
            <BottomNavigation />
        </main>
    )
}
