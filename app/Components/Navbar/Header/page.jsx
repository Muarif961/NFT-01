import React from 'react'

import Image from 'next/image'

const Header = () => {
    return (
      <div className='w-full py-32' style={{
        backgroundImage: 'url(https://res.cloudinary.com/dyxix0sib/image/upload/v1718088266/a5_htayda.png)',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className='w-11/12 xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12 mx-auto flex flex-wrap justify-between'>
          <div className='w-full xs:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3 ph'>
            <h1 className='text-white text-center xs:text-center sm:w-text-center md:w-text-center lg:text-start xl:text-start 2xl:text-start' style={{ fontWeight: "700",  whiteSpace: "nowrap" }}>
              Discover the <br /> <span className='hovo'>Collection</span> of NFTs
            </h1>
            <p style={{ whiteSpace: "nowrap" }} className='ph2 text-white text-center xs:text-center sm:w-text-center md:w-text-center lg:text-start xl:text-start 2xl:text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusm <br /> tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adip <br /> tempor incididunt ut
            </p>
            <div className='w-8/12 mx-auto sm:w-8/12 sm:mx-auto md:w-8/12 md:mx-auto lg:w-full xl:w-full 2xl:w-full mt-10 flex justify-between'>
              <button >
              <Image src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718088669/Group_1_tahxut.png"} height={600} width={600} alt=''/>
              </button>
              <button >
              <Image src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718088677/Group_nloygv.png"} height={600} width={600} alt=''/>
           
              </button>
            </div>
          </div>
          <div className='w-full mt-5 xs:w-full xs:mt-5 sm:w-full sm:mt-5 md:w-full md:mt-5 lg:w-1/3 xl:w-1/3 2xl:w-1/3'>
          <Image className='noya' src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718089617/Group_1171275444_kuhg2j.png"} alt='' height={1000} width={1000}/>
          
          </div>
        </div>
        <div style={{position:"relative"}} className='mx-auto w-max mt-20'>
            <div>
            <Image src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718094388/Component_27_zw7ii1.png"} alt='' height={100} width={100}/>

            </div>
            <div style={{position:"absolute",top:"0%"}}>

            <Image src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718094261/Group_1171275449_qdh9uf.png"} alt='' height={100} width={100}/>
            </div>
        </div>
      </div>
    )
  }
export default Header  