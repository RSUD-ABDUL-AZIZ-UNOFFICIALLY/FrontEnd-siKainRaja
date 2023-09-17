'use client'
import React from 'react'

import CardFoto from "../Component/cardFoto/CardFoto";
import Carousel from '../Component/carousel/Carousel';
import CardVideo from '../Component/cardvideo/CardVideo';

const Section = () => {
    const carouselItems = [
        'https://www.paho.org/sites/default/files/untitled_1500_540_px_1_0.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRixi40GxzXnxZfl9o4rjJmYGkBAdhApGt5Bn_Df4dUODACRD8T2IT-y1ThiTq4R3XqZM&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwYEp3El1QunpTaYGjmLsb5HTv6lxvaCnxqDWaqNtpjpS5cletJKIPlLCbW-2PjJr6dI&usqp=CAU',
    ];
    return (
        <div className='flex justify-center'>
            <div className="section">
                <div className="grid lg:grid-cols-3 gap-4">
                    <Carousel items={carouselItems} title={'Heading 1'} desc={'asdbjasdajsbd'} />
                    <CardFoto
                        title={'wkwk foto 2'}
                        link={'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/v6bwf3e8qhdfhrgq7lv3/TiketIMGWorldsofAdventurediDubai.jpg'}
                        desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus nulla deserunt ratione accusantium voluptas officia iste quod inventore molestiae'}
                    />
                    <CardVideo
                        title={'Ini video 1'}
                        link={'https://api.rsudaa.singkawangkota.go.id/api/cdn/video/1694938447690-326387246abdulazizprofillayananhak&kewajibanMP4.mp4'}
                        desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus nulla deserunt ratione accusantium voluptas officia iste quod inventore molestiae'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Section