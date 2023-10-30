'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardLab from "./component/CardLab";
import Skeleton from '../poli/Component/Skeleton';

export default function Section() {
    const base_url = process.env.base_url;
    const [iniData, setData] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)
    const [keyword, setKeyword] = useState<string>('')
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
                url: `${base_url}/penunjang/jnslab?search=${keyword}`,
            });
            if (data.data.data) {
                setData(data.data.data)
                setLoading(false)
            } else {
                setLoading(true)
            }
        } catch (error) {
            setLoading(true)
        }
    }

    useEffect(() => {
        getData()
    }, [keyword])

    return (
        <div className='flex justify-center'>
            <div className='section p-4 border border-accent'>
                <div className="form-control w-full mb-3">
                    <div className="input">
                        <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Cari Pemeriksaan..." className="input input-accent input-bordered w-full" />
                        {/* <button onClick={() => getKeyword()} className="btn btn-accent btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button> */}
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                    {iniData ? iniData.map((item: any, index: any) => {
                        console.log(item);

                        return (
                            <React.Fragment key={index}>
                                <CardLab kelas={item.total_byr} id={item.kd_jenis_prw} name={item.nm_perawatan} />
                            </React.Fragment>
                        )
                        // }
                    })
                        :
                        <React.Fragment>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </React.Fragment>
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
