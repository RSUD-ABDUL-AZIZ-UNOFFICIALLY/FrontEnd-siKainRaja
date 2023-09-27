'use client'
import React from 'react'

const CardPoliModalItem = ({ data }: { data: any }) => {
    return (
        <div className='myModal-item-section'>
            {data != '' ?
                <div className="overflow-x-auto p-2">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-center text-lg text-slate-100 border border-gray-300'>
                                <th className='border border-gray-300'>Hari</th>
                                <th className='border border-gray-300'>Dokter</th>
                                <th className='border border-gray-300'>Waktu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {data.map((item: any, index: any) => {
                                return (
                                    <tr className='text-center border border-gray-300' key={index}>
                                        <td className='border border-gray-300' >{item.hari_kerja}</td>
                                        <td className='border border-gray-300'>
                                            <div className="grid justify-center ">
                                                {item.data ? (
                                                    item.data.map((item2: any, index: any) => (
                                                        <div className="lg:w-auto w-64 h-12 flex justify-center items-center" key={index}>
                                                            {item2.dokter.nm_dokter}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <>-</>
                                                )}
                                            </div>
                                        </td>
                                        <td className='border border-gray-300'>
                                            <div className="grid justify-center">
                                                {item.data ? (
                                                    item.data.map((item2: any, index: any) => (
                                                        <div className="lg:w-auto w-40 h-12 flex justify-center items-center" key={index}>
                                                            {`${item2.jam_mulai} - ${item2.jam_selesai}`}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <>-</>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                :
                <div className='flex items-center justify-center h-36'>
                    <p className='font-bold uppercase '>
                        Informasi Poli Kosong
                    </p>
                </div>
            }
        </div>
    )
}

export default CardPoliModalItem