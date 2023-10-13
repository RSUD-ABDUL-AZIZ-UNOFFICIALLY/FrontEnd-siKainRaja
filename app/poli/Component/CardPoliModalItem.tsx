'use client'
import React from 'react'

const CardPoliModalItem = ({ data }: { data: any }) => {
    const item = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]
    return (
        <div className='myModal-item-section '>
            <div className="grid gap-4 lg:grid-cols-3 grid-cols-1">
                {item && item.map((items: number, index: number) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="lg:col-span-1 card bg-base-100 shadow-xl border w-full">
                                <figure className=''><img className='aspect-square h-40' src="https://img.freepik.com/premium-photo/confident-businessman-portrait_220507-11324.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Name
                                    </h2>
                                    <div className="grid grid-cols-5">
                                        <div className="col-span-2">Hari</div>
                                        <div className="col-span-1">:</div>
                                        <div className="col-span-2 text-center">Waktu</div>
                                    </div>

                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}

            </div>
            {/* {data != '' ?
                <div className="overflow-x-auto p-2">
                    <table className="table">
                        <thead>
                            <tr className='text-center text-lg text-slate-100 border border-gray-300'>
                                <th className='border border-gray-300'>Hari</th>
                                <th className='border border-gray-300'>Dokter</th>
                                <th className='border border-gray-300'>Waktu</th>
                            </tr>
                        </thead>
                        <tbody>
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
            } */}
        </div>
    )
}

export default CardPoliModalItem