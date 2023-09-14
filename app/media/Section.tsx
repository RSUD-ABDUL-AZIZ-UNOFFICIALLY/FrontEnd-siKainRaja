'use client'
import React from 'react'
import CardFoto from "./Component/CardFoto";
import CardVideo from "./Component/CardVideo";
const Section = () => {
    return (
        <div className='flex justify-center'>
            <div className="section">
                <div className="grid lg:grid-cols-3 gap-4">

                    <CardFoto
                        title={'wkwk 1'}
                        link={'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'}
                        desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus nulla deserunt ratione accusantium voluptas officia iste quod inventore molestiae'}
                    />
                    <CardFoto
                        title={'wkwk foto 2'}
                        link={'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/v6bwf3e8qhdfhrgq7lv3/TiketIMGWorldsofAdventurediDubai.jpg'}
                        desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus nulla deserunt ratione accusantium voluptas officia iste quod inventore molestiae'}
                    />
                    <CardFoto
                        title={'wkwk foto 45'}
                        link={'https://citrontours.ae/wp-content/uploads/2022/09/gallery-img-worlds-of-adventure-1.jpg'}
                        desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus nulla deserunt ratione accusantium voluptas officia iste quod inventore molestiae'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Section