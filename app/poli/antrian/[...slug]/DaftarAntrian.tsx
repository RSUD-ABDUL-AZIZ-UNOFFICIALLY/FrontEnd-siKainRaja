import React from 'react'

const DaftarAntrian = ({ data }: { data: any }) => {
    return (
        <div className='card shadow-lg bg-white overflow-hidden'>
            <div className="grid grid-cols-4 h-full">
                <div
                    className={`col-span-1 p-3 
                    ${data.status === `Sudah` && `bg-green-100`} 
                    ${data.status === `Belum` && `bg-yellow-100`} 
                    ${data.status === `Batal` && `bg-red-100`} 
                    text-center w-full h-full lg:text-4xl text-2xl flex justify-center items-center`}
                >
                    {data.no_reg}
                </div>
                <div className="col-span-3 grid grid-cols-6 p-3 lg:text-sm text-[10px]">
                    <div className="col-span-2">No Rawat</div>
                    <div className="col-span-1">:</div>
                    <div className="col-span-3 flex">{data.no_rawat}</div>

                    <div className="col-span-2">Nama</div>
                    <div className="col-span-1">:</div>
                    <div className="col-span-3 flex">{data.nm_pasien}</div>

                    <div className="col-span-2">Dokter</div>
                    <div className="col-span-1">:</div>
                    <div className="col-span-3 flex">{data.nm_dokter}</div>

                    <div className="col-span-2">Status</div>
                    <div className="col-span-1">:</div>
                    <div className="col-span-3 flex">{data.status}</div>


                </div>
            </div>
        </div>
    )
}

export default DaftarAntrian