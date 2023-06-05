"use client";
import { motion } from "framer-motion";

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
      image:"https://cdn.sanity.io/images/7n5v8za3/production/3c3b0b58c69ca53097785a1f7f4a233e78615717-512x512.png",
      pross: 90,
    },
    {
      image:"https://cdn.sanity.io/images/7n5v8za3/production/e4d1a7214013df1d10ff09b11cb62730fe85d9c1-225x225.png",
      pross: 94,
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
      image:"https://cdn.sanity.io/images/7n5v8za3/production/830f362005044e8f0235b3b9ec7156c7d0fa02cc-1080x1080.webp",
      pross: 90,
     },
     {
       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFLz7sVSPJSMMhSKBlpi3BW4xt0hEb64apfI4Va0_XxsT93MThXyuTi2t1nBx7PwLbOk&usqp=CAU",
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
      image:"https://cdn.sanity.io/images/7n5v8za3/production/a209720a69c0fd7cd563f6ca50f4fd33b52ced31-400x400.png",
      pross: 85,
    },
    {
      image:"https://cdn.sanity.io/images/7n5v8za3/production/f1100a12475a4fa1e009c6291c0f20df12a7e2e0-640x640.png",
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
    {
      image:"https://cdn.sanity.io/images/7n5v8za3/production/371a61014874cf1cb78ec4466e944fbbf8839af4-400x400.png",
      pross: 90,
    },
    {
      image:"https://cdn.sanity.io/images/7n5v8za3/production/837485ddf8c89e303939b1a935fcca7fec5d6832-450x450.png",
      pross: 85,
    },
    
   
 ];

  type Props ={
    directionleft?: boolean;
  }

function Skill({directionleft}:Props) {
  return (
    <div className='relative  grid grid-cols-4 gap-4 md:gap-6   w-full   '>
     {Skills?.map((skill,i)=>(

       <div 
       className="flex group  cursor-pointer "
       key={i}>
         <motion.img
       initial={{
        x: directionleft ? -150 : 150,
         opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}  
        src={skill.image}
        alt="deaa"
        className='group-hover:pointGreen  rounded-full border w-12 h-12 md:w-14 md:h-14 border-[#808080]   group-hover:border-[#25D366] object-cover  filter  transition duration-300 ease-in-out'  />
     <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#111]  md:w-14 md:h-14  w-12 h-12 bg-black rounded-full z-0 flex justify-center items-center">
    <div className="flex items-center justify-center h-full">
      <p className="text-md font-bold text-[#25D366]  opacity-100">{skill.pross}%</p>
    </div>
    </div>
        </div>

    ))}
</div>
  )
}

export default Skill