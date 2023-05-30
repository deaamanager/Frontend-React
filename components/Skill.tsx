"use client";
import { motion } from "framer-motion";

function Skill() {
  return (
    <div className='relative group flex cursor-pointer w-full  '>
    <motion.img
      initial={{
        x: -150 ,
        opacity: 0
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      
      src="https://cdn.sanity.io/images/7n5v8za3/production/e18365e65e4237601633fe41523dacfa9479f627-300x300.png"
      alt="deaa"
      className='group-hover:pointGreen  rounded-full border w-12 h-12 md:w-14 md:h-14 border-[#808080]   group-hover:border-[#25D366] object-cover  filter  transition duration-300 ease-in-out'  />

     <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#111]  md:w-14 md:h-14  w-12 h-12 bg-black rounded-full z-0 flex justify-center items-center">
    <div className="flex items-center justify-center h-full">
      <p className="text-md font-bold text-[#25D366]  opacity-100">100%</p>
    </div>
  </div>

</div>
  )
}

export default Skill