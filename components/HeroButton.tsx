"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
function HeroButton() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: 'spring', stiffness: 100 }}
            className=' flex flex-row gap-8 items-center justify-center py-44'>
            <Link href="/home">
                <div className=" relative group hover:scale-105 transition-transform duration-200 ease-out ">
                    <div className="absolute -inset-0.5   opacity-75 bg-gradient-to-r from-blue-300 to-white  rounded-xl blur-lg
                    group-hover:opacity-100 transition duration-1000 group-hover:duration-200 overflow-hidden  btnCard"></div>

                    <button className=' relative divide-x divide-gray-600 px-4 py-4 bg-black rounded-xl leading-none flex items-center'>
                        <span className='flex justify-center text-white items-start '>
                           {/*
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                           */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                            </svg>

                        </span>

                        <span className='text-indigo-400 px-3 group-hover:text-gray-100 transition duration-200  text-center'>Go To Home-page</span>
                    </button>

                </div>
            </Link>
        </motion.div>
    )
}

export default HeroButton