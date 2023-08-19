"use client";
import { motion } from "framer-motion";

import { SocialIcon } from "react-social-icons";
function Navbar() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center">
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
        className="flex   flex-row items-center cursor-pointer"
      >
        {/*  social icons*/}
        <SocialIcon
          url="https://www.linkedin.com/in/deaa-aldin-alawad/"
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
        className="flex absolute bottom-[35%] right-7 flex-row items-center gap-x-2 justify-center"
      >
        <a href="/home#contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-7 h-7 text-gray-400 animate-pulse"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </a>
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          {" "}
          Contact{" "}
        </p>
      </motion.div>
    </header>
  );
}

export default Navbar;
