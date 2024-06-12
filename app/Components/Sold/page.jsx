import Image from 'next/image';
import React from 'react';

const Card2 = ({image}) => {
    return (
        <div
            className='border cardo bg-black rounded-lg'
            style={{
                position: "relative",
               
                borderBottom: "25px solid #6AD4DA",
                boxShadow: `
                  inset 0px 10px 10px -10px rgba(106, 212, 218, 0.7),
            inset 0px 20px 20px -20px rgba(106, 212, 218, 0.5),
            inset 0px 30px 30px -30px rgba(106, 212, 218, 0.3),
            10px 10px 20px rgba(106, 212, 218, 0.3), 
            -10px 10px 20px rgba(106, 212, 218, 0.3) 
                
            `,
                transform: "perspective(1000px) rotateX(-10deg)",
                transformOrigin: "top"
            }}
        >
                <div style={{filter:'brightness(2)'}} className='absolute w-10/12 top-10 left-5'>
                    <Image src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718167753/Group_1171275468_zgdrk1.png"} alt='' height={1000} width={1000}/>

                </div>
            <div style={{backgroundColor:"black",opacity:"0.5"}} className='absolute top-0 left-0 h-full w-full'>
            <div className='w-full'>
                <div
                    style={{
                        position: "absolute",
                        top: "0px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        height: "180px",
                        width: "180px",
                        zIndex: "112"
                    }}
                    className='rounded-md mt-5'
                >
                    <Image
                        height={200}
                        width={200}
                        src={image}
                        alt=''
                    />
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "0%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: "1111"
                    }}
                >
                    <Image
                        src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718106654/Vector_mpzzcc.png"}
                        alt=''
                        height={100}
                        width={100}
                    />
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "34%",
                        left: "0%",
                        zIndex: "11"
                    }}
                >
                    <Image
                        height={100}
                        width={100}
                        src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718106131/Frame_427318322_w9jymn.png"}
                        alt=''
                    />
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "0%",
                        left: "80%",
                        zIndex: "11"
                    }}
                >
                    <Image
                        height={100}
                        width={100}
                        src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718106080/Frame_427318320_h4yeus.png"}
                        alt=''
                        style={{}}
                    />
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "60%",
                    width: "100%",
                    padding: "0 12px"
                }}
                className='mt-3'
            >
                <h1 className='text-base text-white font-semibold'>Rare Trash</h1>
                <div className='w-full flex justify-between items-center mt-3'>
                    <span className='hp text-gray-400'>Created By</span>
                    <span className='hp text-white font-semibold'>Trash Crew Team</span>
                    <Image
                        style={{ height: "15px", width: "15px" }}
                        src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718106298/image_16_wzs7co.png"}
                        alt=''
                        height={15}
                        width={15}
                    />
                    <span
                        style={{ color: "#6AD4DA" }}
                        className='hp font-semibold'
                    >
                        143.27
                    </span>
                </div>
            </div>
            <div
                style={{
                    height: "50px",
                    position: "absolute",
                    bottom: "0",
                    width: "100%"
                }}
                className='bg-black p-1'
            >
                <div style={{ position: "absolute", top: "0%", left: "0%" }}>
                    <Image
                        style={{ height: "50px", width: "70px" }}
                        src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718106591/Frame_427318321_1_bsgelc.png"}
                        alt=''
                        height={100}
                        width={100}
                    />
                </div>
                <div style={{position:"absolute",top:"-10%",left:"25%"}} className='w-max mx-auto'>
                    <Image
                        height={150}
                        width={150}
                        src={"https://res.cloudinary.com/dyxix0sib/image/upload/v1718106521/Group_bmyymg.png"}
                    />
                </div>
            </div>
            <div
                className='absolute w-full flex justify-center items-center'
                style={{
                    bottom: "10px",
                    zIndex: "10"
                }}
            >
               
            </div>

            </div>
           
        </div>
    );
};

export default Card2;
