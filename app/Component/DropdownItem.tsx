'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RenderDropdownItem from "./RenderDropdownItem";

const DropdownItem = ({ name, api }: { name: String, api: String }) => {
    const base_url = process.env.base_url;
    
    const [dropdownName, setDropdownName] = useState<any>(api)
    const [loading, setLoading] = useState<any>(null)
    const [dropdown, setDropdown] = useState<any>('')
    const [iniData, setData] = useState<any>('')
    const [height, setHeight] = useState<any>(15)

    const getData = async () => {
        const hh: HTMLElement | null = document.querySelector(`.${dropdownName}`)
        if (hh && hh.offsetHeight) {
            setHeight(hh.offsetHeight)
        }
        if (dropdownName === dropdown) {
            setDropdown('')
        } else {
            setDropdown(dropdownName)
            try {
                const data = await axios({
                    method: 'get',
                    url: `${base_url}/umum/${dropdownName}`,
                });
                if (data.data.data) {
                    if (!iniData) {
                        setLoading(true)
                    }
                    setData(data.data.data)
                    setLoading(null)
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
        const hh: HTMLElement | null = document.querySelector(`.${dropdownName}`)
        if (hh && hh.offsetHeight) {
            setHeight(hh.offsetHeight)
        }
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