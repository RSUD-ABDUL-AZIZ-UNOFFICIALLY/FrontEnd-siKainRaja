'use client'
import React, { useEffect, useState } from 'react'
import CardPoli from './Component/CardPoli'
import axios from 'axios'
import Skeleton from './Component/Skeleton'

export default function Section() {
    const base_url = process.env.base_url;
    const [loading, setLoading] = useState<any>(true)
    const [iniData, setData] = useState<any>()

    const page = 9
    const [numberPage, setNumberPage] = useState<number>(1)
    const [leftPagination, setLeftPagination] = useState<number>(0)
    const [rightPagination, setRightPagination] = useState<number>(page)

    const handleLeftPagination = () => {
        if (leftPagination != 0 && rightPagination != page) {
            setLeftPagination(leftPagination - page)
            setRightPagination(rightPagination - page)
            setNumberPage(numberPage - 1)
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }

    const handleRightPagination = () => {
        const lg = iniData.length
        if (rightPagination < lg) {
            setLeftPagination(leftPagination + page)
            setRightPagination(rightPagination + page)
            setNumberPage(numberPage + 1)
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }
    const getData = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: `${base_url}/poli/bydr`,
            });

            if (data.data.data) {
                setData(data.data.data.data)
                setLoading(false)
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
        <div className='justify-center '>
            <div className='section p-4 border border-accent'>
                <div className="grid gap-4 lg:grid-cols-3 grid-cols-1">
                    {loading == false ?
                        iniData.map((item: any, index: number) => {
                            // if (leftPagination <= index && rightPagination > index) {
                            return (
                                <React.Fragment key={index}>
                                    <CardPoli
                                        id={item.kd_poli}
                                        name={item.poliklinik}
                                        dokter={item.dokter}
                                    />
                                </React.Fragment>
                            )
                            // }
                        })
                        : renderNoData()
                    }
                </div>
                {/* <div className="join w-full justify-center mt-6 mb-3">
                    <button className="join-item btn" onClick={() => handleLeftPagination()} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button className="join-item btn">{numberPage}</button>
                    <button className="join-item btn" onClick={() => handleRightPagination()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div> */}
            </div>
        </div>
    )
}
