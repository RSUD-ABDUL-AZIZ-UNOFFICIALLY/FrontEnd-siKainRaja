'use client'
import React from 'react'

const CardPoliModalItem = ({ data }: { data: any }) => {

    return (
        <div className='myModal-item-section '>
            <div className="carousel rounded-box w-full">
                {data && data.map((item: any, index: number) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="carousel-item flex gap-3 lg:w-2/6 w-full mr-2">
                                <div className={`card w-full bg-white shadow-xl border ${data[index + 1] && ``}`}>
                                    <figure className='flex justify-center items-center'>
                                        <img className='aspect-square w-full' src={`${item.url}`} />
                                    </figure>
                                    <div className="flex w-full justify-center bg-rainbow1 shadow-lg p-2">
                                        <p className="text-center text-[10px]" >
                                            {item.nm_dokter}
                                        </p>
                                    </div>
                                    <div className="p-4 grid gap-2">
                                        {item.jadwal && item.jadwal.map((item2: any, index: number) => {
                                            return (
                                                <div key={index} className="grid grid-cols-5 rounded-lg bg-white text-slate-950 p-2">
                                                    <div className="col-span-2 flex items-center gap-1">
                                                        <div className="text-[10px]">
                                                            {item2.hari_kerja}
                                                        </div>
                                                    </div>
                                                    <div className="col-span-3 w-full text-right text-[10px]">
                                                        {`${item2.jam_mulai} - ${item2.jam_selesai}`}
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default CardPoliModalItem