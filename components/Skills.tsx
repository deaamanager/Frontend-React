"use client";

import { motion, useAnimation,useAnimate,useInView, useScroll ,animate  } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import Skill from "./Skill";

import { ProgressBar } from "@tremor/react";
import {useState , useRef, useEffect} from "react";
import CriclePro from "./CriclePro";
import Progressbar from "./Progressbar";




type Props = {
};
function Skills() {

  //const [percantge ,setPercantge] = useState(44);
  const [percantge ,setPercantge] = useState(80);
  const [isVisible, setIsVisible] = useState(false);
  //const [scope, animate] = useAnimate()
  const ref = useRef<HTMLDivElement>(null);

 {/*
  useEffect(() => {
    const handleScroll = (event:any) => {
      const { deltaX, deltaY } = event;

      const updatedAcceleration = percantge + Math.abs(deltaX) + Math.abs(deltaY);
      setPercantge (Math.max(updatedAcceleration, 80));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
   
   useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0 });
    }
  }, [controls, isVisible]);


 useEffect(() => {
  const id = setInterval(() => {
    setPercantge(Math.random()*100);
  },3000);
  return () => {
    clearInterval(id);
  }
}, []);

 */}
  return (
    <div className='bg-[#111] relative h-screen w-full flex flex-col justify-center items-center text-white '>  
      <div className="max-w-7xl mx-auto     md:space-x-10   top-24 flex absolute  left-0 right-0 items-center justify-center ">
      <div  className="flex flex-col items-center space-y-14">
        <div 
              ref={ref}
              id="percentageFunction"
              >
          <CriclePro  percantge={percantge}   circlewidth="200" />
          <input
         className="hidden" 
         type="range" min="1" max="100" step="1" value={percantge} onChange={(ev) => setPercantge(Number(ev.target.value))} />
        </div>
         <Progressbar value={percantge} />
      </div>
      <div  className="flex flex-col items-center space-y-14">
        <div 
              ref={ref}
              id="percentageFunction"
              >
          <CriclePro  percantge={percantge}   circlewidth="200" />
          <input
         className="hidden"
         
         type="range" min="1" max="100" step="1" value={percantge} onChange={(ev) => setPercantge(Number(ev.target.value))} />
        </div>
         <Progressbar value={percantge} />
      </div>  
      <div  className="flex flex-col items-center space-y-14">
        <div 
              ref={ref}
              id="percentageFunction"
              >
          <CriclePro  percantge={percantge}   circlewidth="200" />
          <input
         className="hidden"
         
         type="range" min="1" max="100" step="1" value={percantge} onChange={(ev) => setPercantge(Number(ev.target.value))} />
        </div>
         <Progressbar value={percantge} />
      </div>
       </div>
       <h1 className=' '>
        <span className=' font-blod bg-gradient-to-r from-[#25D366] via-gray-400 to-[#25D366]  bg-clip-text font-bold  text-transparent'>
          <Typewriter loop={true} delaySpeed={2000} words={[`Look at my skills There . . .`]} />
        </span>
        <Cursor />
      </h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.7 }}
        className='absolute top-[60%] grid grid-cols-4 gap-4 md:gap-6'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </motion.div>
    </div>
  )
}

export default Skills

