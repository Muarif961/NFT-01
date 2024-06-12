import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full mt-20 bg-black py-7 text-white' style={{borderTop:"3px solid transparent",borderImage:"linear-gradient(to right, #2F8B92 0%, #2F8B92 100%) 1"}}>
        <div className='w-1/2 mx-auto'>
            <Image className='mx-auto' src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718173673/TrashCrew_Logo_herdhx.png"} alt='' height={50} width={50}/>
            <h1 className='mt-3 font-semibold text-center'>Trash Crew</h1>
            <h1 className='mt-7 font-semibold text-center'>All Rights Reserved @ Trash Crew 2024</h1>



        </div>
    </div>
  )
}

export default Footer