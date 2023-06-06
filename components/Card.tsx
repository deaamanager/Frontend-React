"use client";
import { motion } from "framer-motion"
import Link from "next/link";
import Image from "next/image";


const Images = [
  {
    image: "https://cdn.sanity.io/images/7n5v8za3/production/1f654e6c35adabc74e50c23c67fe71fa66851aaf-731x477.svg",
    technologies: ["https://cdn.sanity.io/images/7n5v8za3/production/830f362005044e8f0235b3b9ec7156c7d0fa02cc-1080x1080.webp","https://cdn.sanity.io/images/7n5v8za3/production/3c3b0b58c69ca53097785a1f7f4a233e78615717-512x512.png", "https://cdn.sanity.io/images/7n5v8za3/production/f1100a12475a4fa1e009c6291c0f20df12a7e2e0-640x640.png", "https://cdn.sanity.io/images/7n5v8za3/production/720c153a0ec04caea201987f8294d4c5f491a5e6-800x800.svg"],
    name: "Case Study 1/3: NetFlix Clone",
    title: "React: ",
    titleI: "Redux:",
    titleIV: "Firebase:",
    link: "https://netflex-clone-a2c65.web.app/",
  },
  {
    image: "https://cdn.sanity.io/images/7n5v8za3/production/1f654e6c35adabc74e50c23c67fe71fa66851aaf-731x477.svg",
    technologies: ["https://cdn.sanity.io/images/7n5v8za3/production/e4d1a7214013df1d10ff09b11cb62730fe85d9c1-225x225.png", "https://cdn.sanity.io/images/7n5v8za3/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png","https://cdn.sanity.io/images/7n5v8za3/production/e5fc9de77d06ace427f0310d25ef62e2ced56d3a-1024x1024.png","https://repository-images.githubusercontent.com/1272424/d1995000-0ab7-11ea-8ed3-04a082c36b0d","https://cdn.dribbble.com/users/3490038/screenshots/13820034/motion_logo_dribbble_dark2_4x.png"],
    name: "Case Study 2/3: Web-site with ( CMS & Email Engine )",
    title: "Next.js & TailwindCss:",
    titleI: "Sanity & Nodemailer:",
    titleIV: "Framer-motion:",
    link: "https://syr-services-deaamanger-deaa.vercel.app/",
  },
  {
    image: "https://cdn.sanity.io/images/7n5v8za3/production/1f654e6c35adabc74e50c23c67fe71fa66851aaf-731x477.svg",
    technologies: ["https://cdn.sanity.io/images/7n5v8za3/production/e4d1a7214013df1d10ff09b11cb62730fe85d9c1-225x225.png", "https://cdn.sanity.io/images/7n5v8za3/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png","https://cdn.sanity.io/images/7n5v8za3/production/371a61014874cf1cb78ec4466e944fbbf8839af4-400x400.png","https://cdn.sanity.io/images/7n5v8za3/production/e5fc9de77d06ace427f0310d25ef62e2ced56d3a-1024x1024.png"],
    name: "Case Study 3/3: Basic 3D Shop Card",
    title: "Next.js & TailwindCss:",
    titleI: "Three.js:",
    titleIV: "Sanity:",
    link: "https://3d-shop-card.vercel.app/",
  },
]

function Card() {
  return (
    <div className="relative flex items-center justify-center cursor-grab w-[400%]">
      {
        Images.map((image, i) => (
          
            <div
            key={i}
            className=" w-[300%]  realtive  text-white flex-col flex items-center justify-center py-24 cursor-grab">
              <img src={image.image} alt=" " className=" h-[15rem] pb-10" />
              <div className="flex flex-row gap-x-3  pb-5  text-white">
                {image.technologies.map((tech,i)=>(
                 <div key={i}>
                   <img src={tech} alt="" className="rounded-full h-10 w-10 mix-blend-screen border-none" />
                 </div>
                ))}
              </div>
              <h1 className="pb-5 text-lg  ">{image.name} </h1>
              <ul className="flex flex-col items-start  list-disc  text-sm">
                <li> {image.title} </li>
                <li>{image.titleI} </li>
                <li>{image.titleIV} </li>
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, type: 'spring', stiffness: 100 }}
                className='grid gap-8 items-end justify-center pt-10'>
                <div className="relative group ">
                  <div className="absolute -inset-0.5   opacity-75 bg-gradient-to-r from-[#fff] via-[#111] to-[#fff]  rounded-xl blur-xl
                        group-hover:opacity-100 transition duration-1000 group-hover:duration-200 overflow-hidden btnCard"></div>
                   <Link href={image.link}>
                   <button className=' relative divide-x divide-gray-600 px-4 py-4 bg-black rounded-xl leading-none flex items-center'>
                    <span className='flex justify-center  items-start '>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 w-5 h-5 text-[#25D366]/50  mr-1 animate-pulse">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </span>
                    <span className='text-[#25D366]/50 px-3 group-hover:text-gray-100 transition duration-200'>Go Live To Dimo</span>
                  </button>
                   </Link>
                </div>
              </motion.div>
            </div>
        ))
      }
    </div>
  )
}

export default Card;



