"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
function Navbar() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
    <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 2.5,
      }}
      className="flex  flex-row items-center cursor-pointer"
      
    >
      {/*  social icons*/}
      <SocialIcon
      
      url="https://www.linkedin.com/in/deaa-aldin-alawad/"
  
     fgColor="gray"
      bgColor="transparent"
      className=" cursor-pointer "
    />
         <SocialIcon
     
     url="https://github.com/deaamanger"
 
    fgColor="gray"
     bgColor="transparent"
     className=" cursor-pointer "
   />
       <SocialIcon
     
     url="https://api.whatsapp.com/send/?phone=491630299378&text&type=phone_number&app_absent=0"
 
    fgColor="gray"
     bgColor="transparent"
     className=" cursor-pointer "
   />
    </motion.div>

      <Link href="#Contact">
      <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 2.5,
        }}
        
        className="flex flex-row items-center /*text-gray-300*/ cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer animate-bounce"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          {" "}
          Get in Touch{" "}
        </p>
    </motion.div>
       </Link>
  </header>
  )
}

export default Navbar;