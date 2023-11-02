"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import { motion } from "framer-motion";

import { CardContent } from "./Card";
import { useRef, useState, useEffect } from "react";

import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Link from "next/link";

function Projects() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

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
    <div className="h-screen mx-w-7xl mx-auto flex  items-center   ">
      <motion.div
        initial={{ scale: 0.4 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.8,
          type: "spring",
          stiffness: 50,
        }}
        className="relative z-30"
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          pagination={true}
          slidesPerView={"auto"}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          className="w-[90%] md:w-[70%]  2xl:w-[50%] rounded-2xl backdrop-blur pointGreen bg-black relative -bottom-20  "
        >
          {CardContent.map((item, id) => (
            <SwiperSlide key={id} className=" w-full h-full   bg-black ">
              <div className="text-white flex-col flex items-center justify-center  cursor-grab">
                <Image
                  width={320}
                  height={310}
                  src={item.image}
                  alt="projeckts "
                  className="py-8  object-cover object-center mix-blend-lighten  "
                />
                <div className="flex flex-row gap-x-3  pb-5  text-white">
                  {item.technologies.map((tech, i) => (
                    <div key={i}>
                      <Image
                        src={tech}
                        width={50}
                        height={50}
                        alt="Technologies"
                        className="rounded-full h-10 w-10 object-cover mix-blend-screen  border-none"
                      />
                    </div>
                  ))}
                </div>

                <h1 className=" md:text-lg text-sm px-3 text-start pb-5 text-gray-400">
                  {item.name}{" "}
                </h1>

                <ul className="flex flex-col items-start justify-center. text-gray-300  list-disc text-[10px] pl-[2rem] md:text-sm">
                  <li> {item.title} </li>
                  <li>{item.titleI} </li>
                  <li>{item.titleIV} </li>
                </ul>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="grid gap-8 items-end justify-center pt-10"
                >
                  <div className="relative group">
                    <div
                      className="absolute top-2 -inset-0.5 h-[80%]  opacity-40 bg-gradient-to-r from-[#fff] via-[#746363] to-[#fff]  rounded-2xl blur-2xl
                        group-hover:opacity-100 transition duration-1000 group-hover:duration-200 overflow-hidden btnCard"
                    />
                    <Link href={item.link}>
                      <button className=" mb-5 ga-click relative h-full divide-x divide-gray-600 px-4 py-4 mt-5 bg-black rounded-xl leading-none flex items-center">
                        <span className="flex justify-center  items-start ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="md:w-6 md:h-6 w-5 h-5 text-[#25D366]/50  mr-1 animate-pulse"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                            />
                          </svg>
                        </span>
                        <span className="text-[#25D366]/50 px-3 group-hover:text-gray-100 transition duration-200">
                          Go Live To Demo
                        </span>
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div className="absolute z-0 left-0 w-full h-full flex overflow-hidden">
        <div
          ref={ref}
          className={` ${
            isVisible &&
            "md:-skew-y-[20deg] -skew-y-[60deg] transition-all  duration-1000 delay-300"
          } btnCard w-[100%] absolute top-[50%] bg-[#25D366]  h-[3rem]  blur-lg mix-blend-screen  pointGreen  filter duration-150  brightness-75`}
        />
        <div
          ref={ref}
          className={` ${
            isVisible &&
            "md:-skew-y-[-20deg] -skew-y-[-60deg]  transition-all  duration-1000 delay-300"
          }  btnCard w-[100%] absolute top-[50%] bg-[#25D366]  h-[3rem]  blur-lg mix-blend-screen  pointGreen  filter duration-150  brightness-75`}
        />
      </motion.div>
    </div>
  );
}

export default Projects;
