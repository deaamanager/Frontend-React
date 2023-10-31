"use client";

import { motion } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import Skill from "./Skill";
import { useState, useRef, useEffect } from "react";
import CriclePro from "./CriclePro";
import Progressbar from "./Progressbar";
import SkillVI from "./SkillVI";
function Skills() {
  const [percantgeI, setPercantgeI] = useState<number>(0);
  const [percantgeIV, setPercantgeIV] = useState<number>(0);
  const [percantge, setPercantge] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleAnimation = (
    state: number,
    setState: React.Dispatch<React.SetStateAction<number>>,
    threshold: number
  ) => {
    let animationTimeout: NodeJS.Timeout | null = null;

    if (state < threshold && isVisible) {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
      animationTimeout = setTimeout(() => {
        setState((prev) => prev + 1);
      }, 0.5);
    } else if (state >= threshold && !isVisible) {
      setState(0);
    }

    return () => {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
    };
  };

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

  useEffect(
    () => handleAnimation(percantge, setPercantge, 90),
    [isVisible, percantge]
  );
  useEffect(
    () => handleAnimation(percantgeI, setPercantgeI, 95),
    [isVisible, percantgeI]
  );
  useEffect(
    () => handleAnimation(percantgeIV, setPercantgeIV, 93),
    [isVisible, percantgeIV]
  );

  return (
    <div className="bg-[#111] relative h-screen w-full flex flex-col justify-center items-center text-white ">
      <div className="max-w-7xl mx-auto md:space-x-10 top-24 flex absolute  left-0 right-0 items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
          className="flex flex-col items-center space-y-[2.5rem] "
        >
          <div ref={ref}>
            <CriclePro percantge={percantge} circlewidth="200" />
          </div>
          <h1
            className={` text-sm text-gray-400 uppercase ${
              isVisible && "animate-pulse"
            }`}
          >
            3D Web-Page
          </h1>
          <Progressbar value={percantge} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
          className="flex flex-col items-center space-y-[2.5rem]"
        >
          <div ref={ref}>
            <CriclePro percantge={percantgeI} circlewidth="200" />
          </div>
          <h1
            className={`text-sm text-gray-400 uppercase ${
              isVisible && "animate-pulse"
            }`}
          >
            Web-Site
          </h1>
          <Progressbar value={percantgeI} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
          className="flex flex-col items-center space-y-[2.5rem]"
        >
          <div ref={ref}>
            <CriclePro percantge={percantgeIV} circlewidth="200" />
          </div>
          <h1
            className={`text-sm text-gray-400 uppercase ${
              isVisible && "animate-pulse"
            }`}
          >
            Web-App
          </h1>
          <Progressbar value={percantgeIV} />
        </motion.div>
      </div>

      <div className=" absolute bottom-12 md:bottom-5  flex items-center justify-center max-w-6xl mx-auto  ">
        <svg
          viewBox="0 0 900 900"
          width="600"
          height="600"
          className="w-full h-full bg-white. "
        >
          <g transform="translate(462.8731875474515 468.2619761620962)">
            <motion.path
              d="M257.2 -256.9C317.9 -196.6 341 -98.3 337.5 -3.4C334.1 91.5 304.2 182.9 243.6 240.1C182.9 297.2 91.5 320.1 19.2 300.9C-53 281.7 -106.1 220.4 -174.7 163.2C-243.4 106.1 -327.7 53 -354.2 -26.5C-380.7 -106.1 -349.5 -212.1 -280.8 -272.5C-212.1 -332.8 -106.1 -347.4 -3.9 -343.5C98.3 -339.6 196.6 -317.2 257.2 -256.9"
              className="opacity-10   "
              fill="#25D366"
              animate={{
                d: [
                  "M257.2 -256.9C317.9 -196.6 341 -98.3 337.5 -3.4C334.1 91.5 304.2 182.9 243.6 240.1C182.9 297.2 91.5 320.1 19.2 300.9C-53 281.7 -106.1 220.4 -174.7 163.2C-243.4 106.1 -327.7 53 -354.2 -26.5C-380.7 -106.1 -349.5 -212.1 -280.8 -272.5C-212.1 -332.8 -106.1 -347.4 -3.9 -343.5C98.3 -339.6 196.6 -317.2 257.2 -256.9",
                  "M278.2 -240.7C353.2 -203.2 401.6 -101.6 392.2 -9.4C382.7 82.7 315.5 165.5 240.5 212.5C165.5 259.5 82.7 270.7 12.4 258.4C-58 246 -116 210 -178.6 163C-241.3 116 -308.6 58 -329 -20.4C-349.4 -98.8 -322.9 -197.5 -260.2 -235C-197.5 -272.5 -98.8 -248.8 1.4 -250.2C101.6 -251.6 203.2 -278.2 278.2 -240.7",
                  "M155.8 -162.8C193.3 -118.3 209.2 -59.2 232.6 23.5C256.1 106.1 287.1 212.1 249.6 275.3C212.1 338.5 106.1 358.7 9.4 349.3C-87.2 339.9 -174.4 300.8 -239.1 237.6C-303.8 174.4 -345.9 87.2 -334.9 11C-324 -65.3 -259.9 -130.6 -195.2 -175.1C-130.6 -219.6 -65.3 -243.3 -3.1 -240.2C59.2 -237.2 118.3 -207.3 155.8 -162.8",
                  "M245.4 -215.2C313.1 -177.7 359.5 -88.9 357.5 -2C355.5 84.9 305 169.7 237.4 244.7C169.7 319.7 84.9 384.9 1.6 383.2C-81.6 381.6 -163.1 313.1 -220.1 238.1C-277.1 163.1 -309.6 81.6 -301.3 8.2C-293.1 -65.1 -244.1 -130.1 -187.1 -167.6C-130.1 -205.1 -65.1 -215.1 11.9 -227C88.9 -238.9 177.7 -252.7 245.4 -215.2",
                  "M267 -249.2C339.4 -194.7 386.7 -97.3 376.7 -10C366.6 77.3 299.3 154.6 227 229.6C154.6 304.6 77.3 377.3 -2.7 380C-82.7 382.7 -165.5 315.5 -209.6 240.5C-253.8 165.5 -259.4 82.7 -244.6 14.8C-229.7 -53 -194.4 -106.1 -150.2 -160.6C-106.1 -215.1 -53 -271 22.2 -293.2C97.3 -315.3 194.7 -303.7 267 -249.2",
                  "M197.4 -203.4C252.4 -142.4 291.2 -71.2 305.2 14C319.2 99.2 308.5 198.5 253.5 273.5C198.5 348.5 99.2 399.2 16.9 382.4C-65.5 365.5 -131.1 281.1 -168.6 206.1C-206.1 131.1 -215.5 65.5 -215.8 -0.2C-216 -66 -207 -132 -169.5 -193C-132 -254 -66 -310 2.6 -312.6C71.2 -315.2 142.4 -264.4 197.4 -203.4",
                ],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 5,
              }}
            />
          </g>
        </svg>
      </div>
      <h1 className=" absolute ">
        <span className="font-blod bg-gradient-to-r from-[#25D366] via-gray-400 to-[#25D366]  bg-clip-text font-bold  text-transparent">
          <Typewriter
            loop={true}
            delaySpeed={2000}
            words={["Look at my Skills . . .", "Hover on Skills . . ."]}
          />
        </span>
        <Cursor />
      </h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.7 }}
        className="absolute top-[60%] flex gap-x-4 "
      >
        <SkillVI />
        <Skill />
      </motion.div>
    </div>
  );
}

export default Skills;
