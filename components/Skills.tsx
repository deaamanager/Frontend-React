"use client";

import { motion} from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import Skill from "./Skill";
import {useState , useRef, useEffect} from "react";
import CriclePro from "./CriclePro";
import Progressbar from "./Progressbar";
function Skills() {
  const [percantgeI ,setPercantgeI] = useState<number>(0);
  const [percantgeIV ,setPercantgeIV] = useState<number>(0);
  const [percantge ,setPercantge] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { 
    const observer = new IntersectionObserver(
      (entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  useEffect(() => {
    let animationTimeout: NodeJS.Timeout | null = null;
  
    if (percantge < 90 && isVisible === true) {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      } 
      animationTimeout = setTimeout(() => {
        setPercantge(prev => prev + 1);
      }, 1);
    } else if (percantge >= 90 && !isVisible) {
      setPercantge(0);
    }
    return () => {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
    };
  }, [isVisible, percantge]);
  useEffect(() => {
    let animationTimeout: NodeJS.Timeout | null = null;
  
    if (percantgeI < 95 && isVisible === true) {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      } 
      animationTimeout = setTimeout(() => {
        setPercantgeI(prev => prev + 1);
      }, 1);
    } else if (percantgeI >= 95 && !isVisible) {
      setPercantgeI(0);
    }
    return () => {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
    };
  }, [isVisible, percantgeI]);
  useEffect(() => {
    let animationTimeout: NodeJS.Timeout | null = null;
  
    if (percantgeIV < 93 && isVisible === true) {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      } 
      animationTimeout = setTimeout(() => {
        setPercantgeIV(prev => prev + 1);
      }, 1);
    } else if (percantgeIV >= 93 && !isVisible) {
      setPercantgeIV(0);
    }
    return () => {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
    };
  }, [isVisible, percantgeIV]);
  return (
    <div className='bg-[#111] relative h-screen w-full flex flex-col justify-center items-center text-white '>  
      <div className="max-w-7xl mx-auto md:space-x-10 top-24 flex absolute  left-0 right-0 items-center justify-center ">
      <div  className="flex flex-col items-center space-y-[2.5rem] ">
        <div  ref={ref} >
          <CriclePro  percantge={percantge}   circlewidth="200" />   
        </div>
          <h1 className={` text-sm text-gray-400 uppercase ${isVisible && "animate-pulse"}`}>3D Web-Page</h1>      
         <Progressbar value={percantge} />
      </div>
      <div  className="flex flex-col items-center space-y-[2.5rem]">
        <div ref={ref} >
          <CriclePro  percantge={percantgeI}   circlewidth="200" />         
        </div>
        <h1 className={`text-sm text-gray-400 uppercase ${isVisible && "animate-pulse"}`}>Web-Site</h1> 
         <Progressbar value={percantgeI} />
      </div>  
      <div  className="flex flex-col items-center space-y-[2.5rem]">
        <div ref={ref} >
          <CriclePro  percantge={percantgeIV}   circlewidth="200" />
        </div>
        <h1 className={`text-sm text-gray-400 uppercase ${isVisible && "animate-pulse"}`}>Web-App</h1> 
         <Progressbar value={percantgeIV} />
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
        className='absolute top-[60%] flex '>
      <Skill directionleft  />
      </motion.div>
    </div>
  )
}

export default Skills;

