import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-item">
                <div className="flex lg:gap-3 gap-2 items-center justify-center">
                    <img className='w-12' src="/img/singkawang.png" alt="" />
                    <div className="">
                        <div className="head-text1">SI KAIN RAJA</div>
                        <div className="head-text2">RSUD ABDUL AZIZ SINGKAWANG</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header