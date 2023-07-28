"use client";
import {motion} from "framer-motion";
import Image from "next/image";
const Skills = [
  
    {
      image:"https://cdn.sanity.io/images/7n5v8za3/production/99cf5a5ff4ad9a968514a275a2286f8199613688-480x480.webp",
      pross: 95,
    },
    {
      image:"https://cdn.sanity.io/images/7n5v8za3/production/e18365e65e4237601633fe41523dacfa9479f627-300x300.png",
      pross: 95,
    },
    {
      image:"https://cdn.sanity.io/images/7n5v8za3/production/e2e681ab1fa8beb147fe6f4226ab0efd830b9a86-2048x2048.png",
      pross: 85,
    },
    {
      image:"https://cdn.sanity.io/images/7n5v8za3/production/598fd1eb426025e99db27a8fc2c71d9b0861fd78-128x128.png",
      pross: 90,
    },
     {
      image:"https://cdn.sanity.io/images/7n5v8za3/production/ae1e51bbb9775b9a1e3e70c3841c6f2472c1abb7-227x256.png",
      pross: 90,
    },
    {
      image:"https://cdn.sanity.io/images/7n5v8za3/production/7eede85274350f79dd80b15d5c24f7d4382f9a26-480x480.png",
      pross: 85,
    },
    {
      image:"https://cdn.sanity.io/images/7n5v8za3/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png",
      pross: 95,
    },
    {
      image:"https://cdn.sanity.io/images/7n5v8za3/production/e5fc9de77d06ace427f0310d25ef62e2ced56d3a-1024x1024.png",
      pross: 93,
    },
 ];
function SkillVI() {
  return (
    <div className='relative  grid grid-cols-2 gap-4 md:gap-6   w-full   '>
     {Skills?.map((skill,i)=>(

       <motion.div 
       initial={{
        x: -150,
         opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }} 
       className="flex group  cursor-pointer "
       key={i}>
      <Image
        src={skill.image}
        width={50}
        height={50}
        alt="Skills"
        className='group-hover:pointGreen  rounded-full w-12 h-12 md:w-14 md:h-14 group-hover:border-[#25D366] object-cover filter transition duration-300 ease-in-out'
        />
     <div className="absolute opacity-0 group-hover:opacity-80  transition duration-300 ease-in-out group-hover:bg-[#111]  md:w-14 md:h-14  w-12 h-12 bg-black rounded-full z-0 flex justify-center items-center">
    <div className="flex items-center justify-center h-full">
      <p className="text-md font-bold text-[#25D366] opacity-100">{skill.pross}%</p>
    </div>
    </div>
        </motion.div>

    ))}
</div>
  )
}

export default SkillVI