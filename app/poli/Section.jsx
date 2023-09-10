'use client'
import React, { useEffect, useState } from 'react'
import CardPoli from './Component/CardPoli'
import axios from 'axios'

export default function Section() {
    const [loading, setLoading] = useState(true)
    const [iniData, setData] = useState('')

    const getData = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: 'http://103.150.116.254:3000/skr/poli/all',
            });

            if (data.data.data) {
                setData(data.data.data)
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            } else {
                setData([''])
                setLoading(true)
            }

        } catch (error) {
            // console.error(error);
            setLoading(true)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(iniData);

    return (
        <div className='flex justify-center '>
            <div className='section'>
                <div className="grid gap-2 lg:grid-cols-6 grid-cols-3">
                    {loading == false ?
                        iniData.map((item, index) => (
                            item.kd_poli != '-' ?
                                <div key={index}>
                                    <CardPoli
                                        id={item.kd_poli}
                                        name={item.nm_poli}
                                    />
                                </div>
                                : null
                        ))
                        :
                        <>
                            <div className="lg:col-span-6 col-span-3">
                                tidak ada data
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
