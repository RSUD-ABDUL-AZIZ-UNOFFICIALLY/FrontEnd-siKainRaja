import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-item">
                <div className="grid lg:gap-3 gap-2 items-center justify-center w-full">
                    {/* <img className='w-12' src="/img/singkawang.png" alt="" /> */}
                    <div className='w-full flex justify-center'>
                        <img className='lg:h-20 h-16' src="/img/logo.png" alt="" />
                        {/* <img className='lg:h-28 h-24' src="/logo.png" alt="" /> */}

                    </div>
                    <div className='text-center uppercase font-bold lg:text-lg text-sm'>
                        Sistem Informasi dan Edukasi Terintegrasi Rawat Inap dan Rawat Jalan
                    </div>
                    {/* <div className="text-center lg:text-md text-sm">
                        <small>RSUD dr Abdul Aziz Kota Singkawang</small>
                    </div> */}
                    {/* <div className="">
                        <div className="head-text1">SI KAIN RAJA</div>
                        <div className="head-text2">RSUD DR ABDUL AZIZ, KOTA SINGKAWANG</div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Header