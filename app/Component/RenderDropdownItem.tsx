'use client'
import React, { useEffect, useState } from 'react'

const RenderDropdownItem = ({ name, data }: { name: String, data: any }) => {
    console.log('data', data);

    if (name == 'hakpasien') {
        return (
            <React.Fragment>
                <br />
                <div className='text-sm font-bold text-center'>{data.name}</div>
                <br />
                {data.desc && data.desc.map((item: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <div className='grid text-justify'>
                                <div className="font-semibold text-sm">
                                    {`${index + 1}. ${item.title}`}
                                </div>
                                {item.desc && item.desc.map((item2: any, index: any) => {
                                    return ((
                                        <React.Fragment key={index}>
                                            <div className="grid ml-6">
                                                {item2}
                                            </div>
                                        </React.Fragment>
                                    ))
                                })}
                            </div >
                        </React.Fragment>
                    )
                })}
            </React.Fragment>
        )
    }
    if (name == 'prokes') {
        return (
            <React.Fragment>
                <br />
                <div className='text-sm font-bold text-center'>{data.name}</div>
                <br />
                {data.desc && data.desc.map((item: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <div className='grid text-justify'>
                                <div className="font-semibold text-sm">
                                    {`${item}`}
                                </div>
                                {item.desc && item.desc.map((item2: any, index: any) => {
                                    return ((
                                        <React.Fragment key={index}>
                                            <div className="grid ml-6">
                                                {item2.title ?
                                                    <React.Fragment>
                                                        <div className="text-sm">
                                                            <div className="font-semibold">
                                                                {item2.title}
                                                            </div>
                                                            {item2.desc && item2.desc.map((item3: any, index: any) => {
                                                                return (
                                                                    item3.title ?
                                                                        <React.Fragment key={index}>
                                                                            <div className='text-sm ml-6 font-semibold'>{`${index + 1}. ${item3.title}`}</div>
                                                                            {item3.desc && item3.desc.map((item4: any, index: any) => {
                                                                                return (
                                                                                    <div key={index + 100} className='text-sm ml-8 flex'>
                                                                                        {`${index + 1}. ${item4}`}
                                                                                    </div>
                                                                                )
                                                                            })
                                                                            }
                                                                        </React.Fragment>
                                                                        :
                                                                        <React.Fragment key={index}>
                                                                            <div className="flex ml-6">
                                                                                {`${index + 1}. ${item3}`}
                                                                            </div>
                                                                        </React.Fragment>
                                                                )
                                                            })}
                                                        </div>
                                                    </React.Fragment>
                                                    :
                                                    <React.Fragment key={index}>
                                                        <div className="grid">
                                                            <div className="text-sm text-justify">
                                                                {item2.desc}
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                }
                                            </div>
                                        </React.Fragment>
                                    ))
                                })}
                            </div >
                        </React.Fragment>
                    )
                })}
            </React.Fragment>
        )
    }
    if (name === 'tatip') {
        return (
            <React.Fragment>
                <br />
                <div className='text-sm font-bold text-center'>{data.name}</div>
                <br />
                {data.desc && data.desc.map((item: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <div className='grid text-justify'>
                                <div className="font-semibold text-sm">
                                    {`${index + 1}. ${item.title}`}
                                </div>
                                {item.desc && item.desc.map((item2: any, index: any) => {
                                    return ((
                                        <React.Fragment key={index}>
                                            <div className="grid ml-6">
                                                {item2.title ?
                                                    <React.Fragment>
                                                        <div className="text-sm">
                                                            <div className="font-semibold">
                                                                {item2.title}
                                                            </div>
                                                            {item2.desc && item2.desc.map((item3: any, index: any) => {
                                                                return (
                                                                    item3.title ?
                                                                        <React.Fragment key={index}>
                                                                            <div className='text-sm ml-6 font-semibold'>{`${index + 1}. ${item3.title}`}</div>
                                                                            {item3.desc && item3.desc.map((item4: any, index: any) => {
                                                                                return (
                                                                                    <div key={index + 100} className='text-sm ml-8 flex'>
                                                                                        {`${index + 1}. ${item4}`}
                                                                                    </div>
                                                                                )
                                                                            })
                                                                            }
                                                                        </React.Fragment>
                                                                        :
                                                                        <React.Fragment key={index}>
                                                                            <div className="flex ml-6">
                                                                                {`${index + 1}. ${item3}`}
                                                                            </div>
                                                                        </React.Fragment>
                                                                )
                                                            })}
                                                        </div>
                                                    </React.Fragment>
                                                    :
                                                    <React.Fragment key={index}>
                                                        <div className="grid">
                                                            <div className="text-sm text-justify">
                                                                {item2.desc}
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                }
                                            </div>
                                        </React.Fragment>
                                    ))
                                })}
                            </div >
                        </React.Fragment>
                    )
                })}
            </React.Fragment>
        )
    } else {
        return null
    }
}

export default RenderDropdownItem