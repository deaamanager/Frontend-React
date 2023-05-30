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
                            {/*<GlobeAltIcon fill="currentColor" className=" text-blue-600  w-6 h-6 pr-1   text-center " /> */} deaa
                        </span>

                        <span className='text-indigo-400 px-3 group-hover:text-gray-100 transition duration-200  text-center'>Go To Home-page</span>
                    </button>

            </div>
                </Link>
        </motion.div>
    )
}

export default HeroButton