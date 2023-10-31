'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from '../poli/Component/Skeleton'

const Section = () => {
    const base_url = process.env.base_url;
    const [keyword, setKeyword] = useState<any>('')
    const [iniData, setData] = useState<any>()
    const getData = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: `${base_url}/tarif/tindakan?search=${keyword}`,
            });
            if (data.data.status == true) {
                setData(data.data.data)
            }

        } catch (error) {

        }
    }

    useEffect(() => {
        getData()
    }, [keyword])
    return (
        <div className='flex justify-center'>
            <div className='section p-4 border border-accent'>
                <div className="grid lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-3">
                        <div className="form-control w-full mb-3">
                            <div className="input">
                                <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Cari Lokasi..." className="input input-accent input-bordered w-full" />
                                {/* <button onClick={() => getKeyword()} className="btn btn-accent btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button> */}
                            </div>
                        </div>
                    </div>
                    {iniData ? iniData.map((item: any, index: number) => {

                        return (
                            <React.Fragment key={index}>
                                <div className="col-span-1 card shadow-lg bg-rainbow5">
                                    <div className="card-body flex justify-center">
                                        <div className="pb-4">
                                            <h1 className='text-center p-2 rounded-md shadow-md uppercase'>{item.nm_perawatan}</h1>
                                        </div>
                                        <div className="mt-4 p-2 w-full text-center">
                                            <p className='font-semibold'>{`Rp. ${item.total_byrdrpr}`}</p>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                        :
                        <>
                            {/* <div className="col-span-1"> */}
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            {/* </div> */}
                        </>
                    }
                </div>
            </div>
        </div >
    )
}

export default Section