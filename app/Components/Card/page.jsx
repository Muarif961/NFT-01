"use client"
import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='border bg-black rounded-md' style={{ position: "relative",height:"450px",width:"300px",borderBottom:"25px solid #6AD4DA", }}>
            
            <div className='w-full'>
            <div style={{zIndex:"112",position:"absolute",left:"15%",height:"100px"}} className='w-10/12 rounded-md mt-5'>
                <Image height={200} width={200} src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718105896/Kopie_von_Beats_ejcfrd.png"} alt='' />


            </div>
            <div style={{position:"absolute",top:"0%",left:"30%",zIndex:"1111"}}>
                <Image src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718106654/Vector_mpzzcc.png"} alt='' height={100} width={100}/>

            </div>
            <div style={{ position: "absolute", top: "34%", left: "-2%",zIndex:"11" }}>
                <Image height={100} width={100} src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718106131/Frame_427318322_w9jymn.png"} alt='' />


            </div>
            <div style={{ position: "absolute", top: "0%", left: "80%",zIndex:"11" }}>
                <Image height={1000} width={1000} src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718106080/Frame_427318320_h4yeus.png"} alt='' />


            </div>

            </div>
            <div style={{position:"absolute",top:"56%"}} className='w-11/12 mx-auto px-3 mt-3'>
                <h1 className='text-sm text-white font-semibold'>Rare Trash</h1>
                <div className='w-full flex justify-between'>


                    <span className='text-xs text-gray-400'>Created by</span>  <span className='text-xs text-white font-semibold'>Trash Crew Team</span> <span>
                        <Image style={{height:"15px",width:"15px"}} src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718106298/image_16_wzs7co.png"} alt='' height={100} width={100} />
                    </span>
                    <span style={{color:"#6AD4DA"}} className='text-xs font-semibold'>143.27</span>
                </div>

            </div>
            <div style={{height:"50px",position:"absolute",top:"80%"}} className='w-full bg-black p-1'>
                <div style={{ position: "absolute", top: "0%", left: "0%" }}>
                   <Image style={{height:"50px",width:"70px"}} src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718106591/Frame_427318321_1_bsgelc.png"} alt='' height={10} width={10}/>

                </div>
                <div className='w-max mx-auto'>
                    <Image height={140} width={140} src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718106521/Group_bmyymg.png"}/>


                </div>

            </div>

            {/* Add box shadow */}
            <style jsx>{`
                .border {
                    box-shadow: 0px -25px 0px 0px #6AD4DA;
                }
            `}</style>
        </div>
    );
}

export default Page;
