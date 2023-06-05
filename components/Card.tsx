"use client";
import { motion } from "framer-motion"
import Link from "next/link";
import Image from "next/image";


const Images = [
  {
    image: "https://cdn.sanity.io/images/7n5v8za3/production/1f654e6c35adabc74e50c23c67fe71fa66851aaf-731x477.svg",
    technologies: ["", "", ""],
    name: "project1",
    title: "",
    titleI: "",
    titleIV: "",
    link: "",
  },
  {
    image: "https://cdn.sanity.io/images/7n5v8za3/production/1f654e6c35adabc74e50c23c67fe71fa66851aaf-731x477.svg",
    technologies: ["", "", ""],
    name: "project2",
    title: "",
    titleI: "",
    titleIV: "",
    link: "",
  },
  {
    image: "https://cdn.sanity.io/images/7n5v8za3/production/1f654e6c35adabc74e50c23c67fe71fa66851aaf-731x477.svg",
    technologies: ["", "", ""],
    name: "project3",
    title: "",
    titleI: "",
    titleIV: "",
    link: "",
  },
]



function Card() {
  return (
    <div className="relative flex w-screen ">
      {
        Images.map((image, i) => (
          <div
            className="w-screen relative flex flex-col  "
            key={i}
          >
            <div className="relative w-screen  text-white flex-col flex items-center  py-24">
              <img src={image.image} alt=" " className=" h-[15rem] py-10     " />
              <div className="flex flex-row gap-x-3  pb-5  text-white">
                <p>d1</p>
                <p>d1</p>
                <p>d1</p>
              </div>
              <h1 className="pb-5 text-start">{image.name} </h1>
              <ul className="flex flex-col items-start  list-disc pl-4">
                <li> Lorem ipsum dolor sit amet consectetur.</li>
                <li> disc1</li>
                <li> disc1</li>
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, type: 'spring', stiffness: 100 }}
                className='grid gap-8 items-end justify-center pt-10'>
                <div className="relative group ">
                  <div className="absolute -inset-0.5   opacity-75 bg-gradient-to-r from-[#fff] via-[#111] to-[#fff]  rounded-xl blur-xl
                        group-hover:opacity-100 transition duration-1000 group-hover:duration-200 overflow-hidden btnCard"></div>

                  <button className=' relative divide-x divide-gray-600 px-4 py-4 bg-black rounded-xl leading-none flex items-center'>
                    <span className='flex justify-center  items-start '>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 w-5 h-5 text-[#25D366]/50  mr-1 animate-pulse">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>

                    </span>

                    <span className='text-[#25D366]/50 px-3 group-hover:text-gray-100 transition duration-200'>Go Live To Dimo</span>
                  </button>

                </div>

              </motion.div>

            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Card;



