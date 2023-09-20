'use client'
import React, { useEffect, useState } from 'react'

import CardFoto from "../Component/cardFoto/CardFoto";
import Carousel from '../Component/carousel/Carousel';
import CardVideo from '../Component/cardvideo/CardVideo';
import axios from 'axios';
import SkeletonCard from '../Component/skeleton-card/SkeletonCard';

const Section = () => {
    const [dataMedia, setDataMedia] = useState<any>()
    const getData = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: 'http://103.150.116.254:3000/skr/media/edukasi',
            });
            console.log(data.data.data.data);
            setDataMedia(data.data.data.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])
    const carouselItems = [
        'https://www.paho.org/sites/default/files/untitled_1500_540_px_1_0.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRixi40GxzXnxZfl9o4rjJmYGkBAdhApGt5Bn_Df4dUODACRD8T2IT-y1ThiTq4R3XqZM&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwYEp3El1QunpTaYGjmLsb5HTv6lxvaCnxqDWaqNtpjpS5cletJKIPlLCbW-2PjJr6dI&usqp=CAU',
    ];
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