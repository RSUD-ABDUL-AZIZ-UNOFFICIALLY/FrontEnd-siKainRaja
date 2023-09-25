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
    const getData = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: `${base_url}/penunjang/jnslab`,
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

    const getKeyword = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: `${base_url}/penunjang/jnslab?search=${keyword}`,
            });
            if (data.data.data) {
                setData(data.data.data)
                setLoading(false)
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='flex justify-center'>
            <div className='section'>
                <div className="form-control w-full mb-3">
                    <div className="input-group">
                        <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Cari Pemeriksaan..." className="input input-bordered w-full" />
                        <button onClick={() => getKeyword()} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                    {iniData ? iniData.map((item: any, index: any) => (
                        <React.Fragment key={index}>
                            <CardLab kelas={item.kelas} id={item.kd_jenis_prw} name={item.nm_perawatan} />
                        </React.Fragment>
                    ))
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
            </div>
        </div>
    )
}
