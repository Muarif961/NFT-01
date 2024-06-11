"use client";
import React from 'react'

import { Dropdown } from "flowbite-react";


const Top = () => {
  return (
    <div className='w-full py-20 bg-black'>
        <div className='w-8/12 mx-auto'>
        <div className='w-full flex flex-wrap justify-between'>
            <div className='w-max'>
                <h1 className='text-white text-center xs:text-center sm:w-text-center md:w-text-center lg:text-start xl:text-start 2xl:text-start ph' style={{ fontWeight: "700",  whiteSpace: "nowrap" }}>
                    TOP <span className='hovo'>NFTs</span>
                </h1>
            </div>
            <div className='w-max mt-4'>
            <Dropdown className='' label="15 Minutes" dismissOnClick={false}>
      <Dropdown.Item>15 Min</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>


            </div>

        </div>

        </div>

    </div>
  )
}

export default Top