'use client'
import React, { useEffect, useState } from 'react'
import CardRadiologi from './component/CardRadiologi'
import axios from 'axios';
import Skeleton from "../poli/Component/Skeleton";
const Section = () => {
    const base_url = process.env.base_url;
    const [dataRadiologi, setDataRadilogi] = useState<any>()
    const [keyword, setKeyword] = useState<string>('')
    const getData = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: `${base_url}/penunjang/getjnsradiaologi?search=${keyword}`,
            });
            console.log(data.data.data);
            if (data.data.data) {
                setDataRadilogi(data.data.data)
            }
        } catch (error) {

        }
    }

    const getKeyword = () => {
        getData()
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='flex justify-center'>
            <div className='section'>
                <div className="grid lg:grid-cols-4 gap-2">
                    <div className="lg:col-span-4">
                        <div className="form-control w-full mb-3">
                            <div className="input-group">
                                <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Cari Pemeriksaan..." className="input input-bordered w-full" />
                                <button onClick={() => getKeyword()} className="btn btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {dataRadiologi ? dataRadiologi.map((item: any, index: number) => (
                        <React.Fragment key={index}>
                            <CardRadiologi title={item.nm_perawatan} price={item.total_byr} />
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

export default Section