"use client";
import { motion } from "framer-motion";
import Card from "./Card";
import { useRef, useState, useEffect } from "react";
function Projects() {
  const ref = useRef<HTMLDivElement | null>(null);
  const circRef = useRef<HTMLDivElement  >(null);
  const [isVisible, setIsVisible] = useState<boolean >(false);
  const [isWidth, setIsWidth] = useState<Number>(0);
useEffect(() => {
   if(circRef.current) {
    setIsWidth(circRef.current.scrollWidth - circRef.current.offsetWidth)
   }
},[])

useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
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

  return (
    <div className="" >
      <div
        className="h-screen relative   flex  flex-col text-left md:flex-row max-w-7xl 
           justify-evenly items-center mx-auto z-0  space-y-4">
        <motion.div 
          ref={circRef}
          whileTap={{ cursor: "grabbing"}}
        
        className="absolute top-18   backdrop-blur backdrop-brightness-50  bg-black/50  rounded-2xl w-[20rem] h-[75%]  md:h-[80%] md:w-[50rem] mx-auto  carousel  z-30 overflow-hidden cursor-grab">
          <motion.div 
          drag="x"
          dragConstraints={{
            right:0,
            left: -isWidth
          }}
          className="inner-carousel  relative flex h-full w-[300%] items-center justify-center ">
         <Card />
          </motion.div>
        </motion.div>
        <motion.div
        >
          <div ref={ref}

            className={` ${isVisible && '-skew-y-[50deg] transition-all  duration-1000 delay-300'} btnCard w-full absolute top-[40%] bg-[#25D366] left-0 h-[150px]  blur-lg mix-blend-screen  pointGreen  filter duration-150  brightness-75`} />
          <div
            ref={ref}
            className={` ${isVisible && '-skew-y-[-50deg] transition-all  duration-1000 delay-300'}  btnCard w-full absolute top-[40%] bg-[#25D366] left-0 h-[150px]  blur-lg mix-blend-screen  pointGreen  filter duration-150  brightness-75`} />

        </motion.div>
      </div>
    </div>
  )
}

export default Projects;
