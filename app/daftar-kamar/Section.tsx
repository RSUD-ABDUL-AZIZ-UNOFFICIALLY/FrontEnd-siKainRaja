'use client'
import React, { useEffect, useState } from 'react'
import CardDaftarKamar from './component/CardDaftarKamar'
import axios from 'axios'

export default function Section() {
    const base_url = process.env.base_url
    const [iniData, setData] = useState<any>()
    const data = {
        'sudah': 0,
        'isi': 0,
        'kosong': 0,
        'total': 0,
    }

    const getItem = async () => {
        try {
            const response = await axios.get(`${base_url}/kamar/inap`)
            console.log(response.data.data);
            if (response.data.data) {
                setData(response.data.data)
            }

        } catch (error) {

        }
    }

    useEffect(() => {
        getItem()
    }, [])

    return (
        <div className='flex justify-center'>
            <div className='section p-4 bg-white border border-accent'>
                <div className="flex flex-wrap justify-center gap-3">
                    {iniData && iniData.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <div className="lg:md:w-[30%] w-full">
                                    <CardDaftarKamar 
                                        title={item.bangsal}
                                        booking={item.booking}
                                        isi={item.isi}
                                        kosong={item.kosong}
                                        total={item.total}
                                    />
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
