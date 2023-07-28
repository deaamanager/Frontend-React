"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
function Navbar() {
  return (
    <header className="sticky top-0 p-5  flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
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
          className="flex flex-row items-center gap-x-2 justify-center /*text-gray-300*/ cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 md:w-7 h-5 md:h-7 text-gray-400 rotate-[-180deg] animate-pulse "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>

          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            {" "}
            Back{" "}
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Navbar;
