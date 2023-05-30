"use client";
import { motion } from "framer-motion"
import Link from "next/link";
import Image from "next/image";


const Images = [
  "https://cdn.sanity.io/images/7n5v8za3/production/1f654e6c35adabc74e50c23c67fe71fa66851aaf-731x477.svg",
  "https://cdn.sanity.io/images/7n5v8za3/production/1f654e6c35adabc74e50c23c67fe71fa66851aaf-731x477.svg",
  "https://cdn.sanity.io/images/7n5v8za3/production/1f654e6c35adabc74e50c23c67fe71fa66851aaf-731x477.svg",
  "https://cdn.sanity.io/images/7n5v8za3/production/1f654e6c35adabc74e50c23c67fe71fa66851aaf-731x477.svg",

];



function Card() {
  return (
    <div className="relative flex w-screen ">
      {
        Images.map((image) => (
          <div
            className="w-screen relative flex flex-col  "
            key={image}
          >
            <div className="relative w-screen  text-white flex-col flex items-center  py-24">
              <img src={image} alt=" " className=" h-[15rem] py-10     " />
              <div className="flex flex-row gap-x-3  pb-5  text-white">
                <p>d1</p>
                <p>d1</p>
                <p>d1</p>
              </div>
              <h1 className="pb-5 text-start">Lorem ipsum dolor sit amet.</h1>
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
                    <div className="absolute -inset-0.5   opacity-75 bg-gradient-to-r from-[#4b9ae3] to-[#fff]  rounded-xl blur-xl
                        group-hover:opacity-100 transition duration-1000 group-hover:duration-200 overflow-hidden btnCard"></div>

                    <button className=' relative divide-x divide-gray-600 px-4 py-4 bg-black rounded-xl leading-none flex items-center'>
                      <span className='flex justify-center  items-start '>

                      </span>

                      <span className='text-indigo-400 px-3 group-hover:text-gray-100 transition duration-200'>Go Live To Project</span>
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



