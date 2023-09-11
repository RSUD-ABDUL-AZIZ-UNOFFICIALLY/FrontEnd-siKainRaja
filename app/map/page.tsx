import React from 'react'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'
import Section from './Section'

export const metadata = {
    title: 'Informasi Denah',
}
export default function page() {
    return (
        <main>
            <Header />
            <Navbar name={'map'} />
            <Section />
        </main>
    )
}
