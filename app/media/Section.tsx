'use client'
import React, { useEffect, useState } from 'react'

import CardFoto from "../Component/cardFoto/CardFoto";
import Carousel from '../Component/carousel/Carousel';
import CardVideo from '../Component/cardvideo/CardVideo';
import axios from 'axios';
import SkeletonCard from '../Component/skeleton-card/SkeletonCard';
import Skeleton from '../poli/Component/Skeleton';

const Section = () => {
    const base_url = process.env.base_url;
    const [nav, setNav] = useState('leaflet')

    const [dataMedia, setDataMedia] = useState<any>()
    const getData = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: `${base_url}/media/edukasi`,
            });

            if (data.data.data.data) {
                setDataMedia(data.data.data.data)
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='flex justify-center'>
            <div className="section p-4 border border-accent">
                <div className="card bg-white mb-3">
                    <div className="flex justify-center p-2 gap-2">
                        <button onClick={() => setNav('leaflet')} className={`btn lg:md:w-[10%] w-[40%] ${nav === 'leaflet' ? `bg-accent text-white` : `bg-white text-accent`} border-accent hover:bg-accent hover:text-white`}>Leaflet</button>
                        <button onClick={() => setNav('video')} className={`btn lg:md:w-[10%] w-[40%] ${nav === 'video' ? `bg-accent text-white` : `bg-white text-accent`} border-accent hover:bg-accent hover:text-white`}>Video</button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 gap-4">
                    {dataMedia ? dataMedia.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                {nav == 'leaflet' ?
                                    item && (item.images.length > 0 || item.image) &&
                                    <Carousel
                                        thumbnail={item.image}
                                        items={item.images}
                                        title={item.title}
                                        desc={item.description}
                                    />
                                    :
                                    item && item.video &&
                                    <CardVideo
                                        title={item.title}
                                        link={item.video}
                                        desc={item.description}
                                    />
                                }

                            </React.Fragment>
                        )
                    }) :
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

export default Section