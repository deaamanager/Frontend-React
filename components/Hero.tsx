"use client";
import { motion } from 'framer-motion'
import Plx from 'react-plx';
import HeroContent from './HeroContent';
import HeroTypewrite from './HeroTypewrite';
import HeroButton from './HeroButton';
import Image from 'next/image';
//import Image from 'next/legacy/image';

function Hero() {
    return (
        <div className=" flex flex-col h-[120vh] items-center  overscroll-none py-24 z-50 ">
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 300,
                        duration: 200,
                        easing: "easeOutQuart",
                        properties: [
                            {
                                startValue: 0,
                                endValue: -350,
                                property: "translateY",
                            },
                            {
                                startValue: 0.9,
                                endValue: 1.7,
                                property: "scale",

                            },
                            {
                                startValue: 0.8,
                                endValue: 1,
                                property: "brightness",
                            }, {
                                startValue: 0.8,
                                endValue: 3,
                                property: "opacity",
                            },
                        ]
                    }
                ]}
                className='z-40 fixed  -top-[10%] h-[30rem]  max-w-7xl mx-auto'
            >
                <Image
                    className='  object-cover    mix-blend-screen  h-full mx-auto max-w-7xl  bg-transparent  z-10 '
                    src="https://cdn.sanity.io/images/7n5v8za3/production/e1a984743070125bd3a3bee0442961a1bfa67b70-900x900.png"
                    alt='V_1'
                    width={500}
                    height={200}


                />
            </Plx>
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 300,
                        duration: 100,
                        properties: [
                            {
                                startValue: 0,
                                endValue: -850,
                                property: "translateY",
                            },
                            {
                                startValue: 0.8,
                                endValue: 1,
                                property: "brightness",
                            }, {
                                startValue: 0.3,
                                endValue: 0.3,
                                property: "opacity",
                            },
                        ]
                    }
                ]}
                className='z-30 hidden md:block fixed left-0 right-0 top-[30%] sm:top-0 2xl:-top-[18rem]  w-full '
            >
                <Image 
                  className='sm:w-full  max-w-full mx-auto mix-blend-lighten  z-40  object-cover '
                    src="https://cdn.sanity.io/images/7n5v8za3/production/6120ae94224d6f8b2798b0d5b0819f217fa0a8da-640x480.png"
                    alt="V_2"
                    width={200}
                    height={200}
                />
            </Plx>
            <Plx
                animateWhenNotInViewport={true}
                parallaxData={[
                    {
                        start: 100,
                        end: 300,
                        duration: 100,
                        properties: [
                            {
                                startValue: 0,
                                endValue: 1350,
                                property: "translateY",
                            },
                            {
                                startValue: 1,
                                endValue: -3,
                                property: "opacity",
                            },
                        ]
                    }
                ]}
                className=' z-50 fixed top-[50%]  md:top-[48%]   max-w-7xl mx-auto'
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut", type: "spring", stiffness: 50 }}
                    className='h-[23rem]  md:h-[33rem] w-full  mix-blend-screen bg-red-5 '
                >
                    <Image
                        className=' md:h-[25rem] md:w-full   object-contain mix-blend-screen mx-auto max-w-7xl  bg-transparent   '
                        src='https://cdn.sanity.io/images/7n5v8za3/production/de3e25e8ac538e694356452b1e552b6e96fac290-300x830.png'
                        alt='V_3'
                        width={100}
                        height={200}
                    />
                </motion.div>
                {/*
                  <motion.img
                   
                    //src="https://cdn.sanity.io/images/7n5v8za3/production/d23bdd104667d95849525119b8a21c917b1a3347-577x433.png"
                    //src='https://cdn.sanity.io/images/7n5v8za3/production/4f439a88a675a6e25fd86ecd3042976e71eaded2-375x666.png'
                    //src='https://cdn.sanity.io/images/7n5v8za3/production/337c5fccda3c32cdc782e3efc759ecf5a4014fde-666x375.png'
                    //src="https://cdn.sanity.io/images/7n5v8za3/production/86aa4945b84fc46ce06e2d57092ff51f1c149f8a-960x1280.png" 
                    alt="" />
               */}
            </Plx >

            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 300,
                        duration: 10,
                        properties: [
                            {
                                startValue: 0,
                                endValue: 1005,
                                property: "translateY",
                            },
                        ]
                    }
                ]}
                className='z-40 fixed  left-0 right-0 top-[0%] 2xl:top-10 '
            >
                <Image
                 className=' object-cover w-full h-screen mix-blend-screen  '
                  src="https://cdn.sanity.io/images/7n5v8za3/production/5f42635d01f8759dd3a20a05ef00f7bc6658dd6c-1920x1080.png" 
                  alt="V_4" 
                  width={1000}
                  height={500}
                  
                  />

            </Plx>
            <div className='flex  items-center justify-center  '>
                <Image
                    className='  object-cover z-10 mix-blend-lighten  imageAnimate  transition-all duration-150  '
                    fill
                    src="https://cdn.sanity.io/images/7n5v8za3/production/9092d4325094a4fda37013ecd52723ca4c400237-1160x912.png"
                    alt='V_5'
                //src="https://cdn.sanity.io/images/7n5v8za3/production/290712c01ad594f218a9c8a33adfb5f1978d62d5-1616x1215.png"
                />

                <Plx
                    parallaxData={[
                        {
                            start: 0,
                            end: 300,
                            duration: 10,
                            properties: [
                                {
                                    startValue: 0,
                                    endValue: 1,
                                    property: "opacity",
                                },
                                {
                                    startValue: 0.4,
                                    endValue: 1.3,
                                    property: "scale",
                                },
                            ]
                        }
                    ]}
                    className='z-20 fixed top-[10%]    max-w-7xl mx-auto'
                >
                    <HeroContent />

                </Plx>
                <Plx
                    parallaxData={[
                        {
                            start: 0,
                            end: 300,
                            duration: 10,
                            properties: [
                                {
                                    startValue: 0,
                                    endValue: 1,
                                    property: "opacity",
                                },
                                {
                                    startValue: 0.4,
                                    endValue: 1.3,
                                    property: "scale",
                                },
                            ]
                        }
                    ]}
                    className='z-20 fixed top-[49%]'
                >
                    <HeroTypewrite />

                </Plx>
                <Plx
                    parallaxData={[
                        {
                            start: 0,
                            end: 300,
                            duration: 10,
                            properties: [
                                {
                                    startValue: 0,
                                    endValue: 1,
                                    property: "opacity",
                                },
                                {
                                    startValue: 0.4,
                                    endValue: 1.3,
                                    property: "scale",
                                },
                            ]
                        }
                    ]}
                    className='z-40 fixed bottom-[10%]'
                >
                    <HeroButton />
                </Plx>
            </div>
            <div className='relative w-full h-full bg-gradient-to-t from-blue-800 top-24 ' />
        </div>
    )
}

export default Hero