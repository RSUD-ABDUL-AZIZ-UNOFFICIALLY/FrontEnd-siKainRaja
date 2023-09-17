'use client'
import React from 'react'

const CardPoliModalItem = ({ data }: { data: any }) => {
    return (
        <div className='myModal-item-section'>
            {data != '' ?
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-center'>
                                <th className=''>Hari</th>
                                <th className=''>Dokter</th>
                                <th className=''>Waktu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {data.map((item: any, index: any) => {
                                return (
                                    <tr className='text-center' key={index}>
                                        <th >{item.hari_kerja}</th>
                                        <td>
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
                                        <td >
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