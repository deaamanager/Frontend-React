"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
function HeroContent() {
    return (
        <div className='absolute flex flex-col justify-center items-center  top-[27rem] z-40 ' >
                   
            <div className='absolute -top-32 flex flex-col justify-center items-center'>
                <div className='absolute border-[0.3,0.6,1.0,1.0]   -bottom-[5rem] border opacity-40 rounded-full h-[200px]  w-[200px] mt-52 animate-ping boxshadow ' />
                <div className='absolute border-[0.3,0.6,1.0,1.0]  border  -bottom-[8rem] opacity-20 rounded-full  h-[300px] w-[300px] mt-52 animate-ping boxshadow' />
                <motion.div
                    initial={{
                        opacity: 0,
                        z: -300,
                        scale: 0.5,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    whileInView={{
                        opacity: 1,
                        z: 0,
                        scale: 1.1,
                    }}

                    className='absolute -top-[5rem] w-32 z-40'>
                    <Image
                        width={250}

                        height={850}
                        alt="sub-image"
                        src="https://cdn.sanity.io/images/7n5v8za3/production/6339d9fec0beb3c603236f9f4d623dccbe440d29-1280x1280.png"
                        className=' rounded-b-full opacity-95  object-cover animate-pulse select-none '
                    />
               
                </motion.div>
            </div>
        </div>
    )
}

export default HeroContent