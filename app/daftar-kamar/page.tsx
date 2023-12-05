import React from 'react'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'
import Section from './Section'

export const metadata = {
    title: 'Informasi Daftar Kamar',
}
export default function page() {
    return (
        <main>
            <Header />
            <Navbar name={'kamar'} />
            <Section />
        </main>
    )
}
