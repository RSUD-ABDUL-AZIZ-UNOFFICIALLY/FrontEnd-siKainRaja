'use client'
import React, { useEffect, useState } from 'react'

const RenderDropdownItem = ({ name, data }) => {
    console.log('data', data);
    if (name === 'tatip' || 'prokes' || 'hakpasien') {
        return (
            <>
                <>
                    <br />
                    <div className='text-sm font-bold text-center'>{data.name}</div>
                    <br />
                </>
                {data.desc && data.desc.map((item, index) => {
                    return (
                        <div key={index} className='grid text-justify'>
                            <div className="font-semibold text-sm">
                                {`${index + 1}. ${item.title}`}
                            </div>
                            {item.desc && item.desc.map((item2, index) => {
                                return ((
                                    <div key={index} className="grid ml-6">
                                        {item2.title ?
                                            <>
                                                <div className="text-sm">
                                                    <div className="font-semibold">
                                                        {item2.title}
                                                    </div>
                                                    {item2.desc && item2.desc.map((item3, index) => {
                                                        return (
                                                            item3.title ?
                                                                <>
                                                                    <div key={index} className='text-sm ml-6 font-semibold'>{`${index + 1}. ${item3.title}`}</div>
                                                                    {item3.desc && item3.desc.map((item4, index) => {
                                                                        return (
                                                                            <div key={index + 100} className='text-sm ml-8 flex'>
                                                                                {`${index + 1}. ${item4}`}
                                                                            </div>
                                                                        )
                                                                    })
                                                                    }
                                                                </>
                                                                :
                                                                <>
                                                                    <div key={index} className="flex ml-6">

                                                                        {`${index + 1}. ${item3}`}

                                                                    </div>
                                                                </>
                                                        )
                                                    })}
                                                </div>
                                            </>

                                            :
                                            <div key={index} className="grid">
                                                < div className="text-sm text-justify">
                                                    {item2.desc}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                ))
                            })}
                        </div >
                    )
                })}
            </>
        )
    } else {
        return null
    }
}

export default RenderDropdownItem