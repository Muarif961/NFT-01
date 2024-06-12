"use client";
import React from 'react'
import Data from "../Data/page"

import { Dropdown } from "flowbite-react";
import Card2 from '../Sold/page';
import Image from 'next/image';

const Recent = () => {
  return (
    <div className='w-full py-20 bg-black'>
    <div className='w-11/12 sm:w-11/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12  mx-auto'>
    <div className='w-full flex flex-wrap justify-between'>
        <div className='w-max py-4 sm:py-4 md:py-4 lg:py-1 xl:py-0 2xl:py-0'>
            <h1 className='text-white text-center xs:text-center sm:w-text-center md:w-text-center lg:text-start xl:text-start 2xl:text-start ph3' style={{ fontWeight: "700",  whiteSpace: "nowrap" }}>
                RECENTLY <span className='hovo'>SOLD</span>
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
    <div className='w-10/12 mx-auto mt-10 flex flex-wrap justify-between'>
    {Data.slice(0,4).map((item,index)=>{
      return(
        <>
        <Card2 {...item}/>
        
        </>
      )
    })}

    </div>
    <div className='relative top-10 mx-auto w-max'>
      <Image src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718170015/Vector_1_qkydab.png"} alt='' height={200} width={200}/>
      <div className='absolute top-3 left-10 text-white font-semibold'>
        View All
      </div>

    </div>
 
  
   
</div>

  )
}

export default Recent