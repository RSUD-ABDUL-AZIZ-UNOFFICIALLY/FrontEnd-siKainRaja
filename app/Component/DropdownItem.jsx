'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RenderDropdownItem from "./RenderDropdownItem";
const DropdownItem = ({ name, api }) => {
    const [dropdownName, setDropdownName] = useState(api)
    const [loading, setLoading] = useState(null)
    const [dropdown, setDropdown] = useState('')
    const [iniData, setData] = useState('')

    const [height, setHeight] = useState(15)

    const getData = async () => {
        const hh = document.querySelector(`.${dropdownName}`)
        setHeight(hh.offsetHeight)
        if (dropdownName === dropdown) {
            setDropdown('')
        } else {
            setDropdown(dropdownName)
            try {
                const data = await axios({
                    method: 'get',
                    url: 'http://103.150.116.254:3000/skr/umum/' + dropdownName,
                });
                if (data.data.data) {
                    if (!iniData) {
                        setLoading(true)
                    }
                    setTimeout(() => {
                        setLoading(null)
                        setData(data.data.data)
                    }, 2000)
                } else {
                    setData(null)
                    setLoading(true)
                }
            } catch (error) {
                setData(null)
                setLoading(true)
            }
        }
    }

    const renderData = () => {
        return (
            <>
                {iniData &&
                    <div>
                        <RenderDropdownItem
                            name={dropdownName}
                            data={iniData}
                        />
                    </div>}
                {loading === true &&
                    <div className='mt-2 flex justify-center items-center'>
                        <span className="loading loading-dots loading-sm"></span>
                    </div>}
            </>

        )
    }

    useEffect(() => {
        const hh = document.querySelector(`.${dropdownName}`)
        setHeight(hh.offsetHeight)
    })

    return (
        <>
            <div className="dropdown">
                <button onClick={() => getData()} className="btn-dropdown">
                    {name}
                    <svg className={dropdown === dropdownName ? `icon-spin bi bi-caret-right-fill` : `icon-spin-off bi bi-caret-right-fill`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                </button>
                <div className={dropdown === dropdownName ? `${dropdownName} dropdown-item` : `${dropdownName} dropdown-item-off`} style={dropdown !== dropdownName ? { marginTop: `-${height}px` } : { marginTop: 0 }}>
                    {renderData()}
                </div>
            </div>
        </>
    )
}

export default DropdownItem