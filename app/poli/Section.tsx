'use client'
import React, { useEffect, useState } from 'react'
import CardPoli from './Component/CardPoli'
import axios from 'axios'
import Skeleton from './Component/Skeleton'

export default function Section() {
    const [loading, setLoading] = useState<any>(true)
    const [iniData, setData] = useState<any>()

    const getData = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: 'http://103.150.116.254:3000/skr/poli/all',
            });

            if (data.data.data) {
                setData(data.data.data)
                setLoading(false)
                setTimeout(() => {
                }, 2000)
            } else {
                setData([''])
                setLoading(true)
            }

        } catch (error) {
            setLoading(true)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const renderNoData = () => {
        const skeletons = [];
        for (let i = 0; i < 12; i++) {
            skeletons.push(<Skeleton key={i} />);
        }
        return skeletons;
    }

    return (
        <div className='flex justify-center '>
            <div className='section'>
                <div className="grid gap-2 lg:grid-cols-6 grid-cols-3">
                    {loading == false ?
                        iniData.map((item: any, index: any) => (
                            item.kd_poli != '-' ?
                                <div key={index}>
                                    <CardPoli
                                        id={item.kd_poli}
                                        name={item.nm_poli}
                                    />
                                </div>
                                : null
                        ))
                        : renderNoData()
                    }
                </div>
            </div>
        </div>
    )
}
