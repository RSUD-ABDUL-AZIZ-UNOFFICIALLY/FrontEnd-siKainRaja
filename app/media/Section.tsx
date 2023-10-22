'use client'
import React, { useEffect, useState } from 'react'

import CardFoto from "../Component/cardFoto/CardFoto";
import Carousel from '../Component/carousel/Carousel';
import CardVideo from '../Component/cardvideo/CardVideo';
import axios from 'axios';
import SkeletonCard from '../Component/skeleton-card/SkeletonCard';

const Section = () => {
    const base_url = process.env.base_url;
    console.log(base_url);

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
            <div className="section">
                <div className="grid lg:grid-cols-3 gap-4">
                    {dataMedia ? dataMedia.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                {item && (item.images.length > 0 || item.image) &&
                                    <Carousel
                                        thumbnail={item.image}
                                        items={item.images}
                                        title={item.title}
                                        desc={item.description}
                                    />
                                }
                                {item && item.video &&
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
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                        </React.Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

export default Section