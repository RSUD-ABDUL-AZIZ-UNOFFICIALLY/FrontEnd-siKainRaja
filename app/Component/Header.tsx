import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-item">
                <div className="grid col-span-1 lg:gap-3 gap-2 items-center justify-center">
                    {/* <img className='w-12' src="/img/singkawang.png" alt="" /> */}
                    <div className='w-full flex justify-center'>
                        <img className='lg:h-20 h-16' src="/img/logo.png" alt="" />
                    </div>
                    <div className='text-center text-xs'>
                        Jl. Dr. Sutomo No.28, Pasiran, Kec. Singkawang Barat, Kota Singkawang, Kalimantan Barat 79123
                    </div>
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