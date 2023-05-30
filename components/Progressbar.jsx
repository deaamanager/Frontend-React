"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"


function Progressbar({value}) {
  return (
    <div className=" p-2  flex flex-col items-center " >
   
   <p className=" w-8 flex flex-row text-sm font-semibold pb-8 "><span >{value} </span> <span>%</span> </p>
   
    <div className=" w-[7rem] border-[#25D366] pointGreen  h-6 bg-black flex flex-row rounded-full justify-start items-center  drop-shadow-xl overflow-hidden  
     py-1 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]   before:opacity-30
    
    ">
     <motion.div 
     whileInView={{
     width: `${value}%`
     }}
     transition={{ duration: 1.5, delay: 0.5}}
     className="bar w-[0%] h-6 rounded-r-xl blur-sm pointGreen bg-[#25D366]/70 " />
   
   </div>
      
    </div>
  )
}

export default Progressbar




