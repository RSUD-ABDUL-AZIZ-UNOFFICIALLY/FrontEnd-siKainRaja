'use client'
import React, { useEffect, useState } from 'react'
import CardPoli from './Component/CardPoli'
import axios from 'axios'

export default function Section() {
    const [loading, setLoading] = useState(true)
    const [iniData, setData] = useState([''])

    const getData = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: 'http://103.150.116.254:3000/skr/poli/all',
            });
            console.log('getData');

            if (data.data.data) {
                if (!iniData) {
                    setTimeout(() => {
                        setLoading(false)
                        setData(data.data.data)
                    }, 2000)
                }
            } else {
                setData([''])
                setLoading(true)
            }

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setLoading(true)
        getData()
    })

    return (
        <div className='flex justify-center '>
            <div className='section'>
                <div className="grid gap-2 grid-cols-2">
                    <CardPoli />
                    <CardPoli />
                    <CardPoli />
                    <CardPoli />
                </div>
            </div>
        </div>
    )
}
