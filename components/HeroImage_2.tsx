"use client";
import Plx from "react-plx";
import Image from "next/image";
import { motion } from "framer-motion";
function HeroImage_2() {
  return (
    <>
      <Plx
        animateWhenNotInViewport={true}
        parallaxData={[
          {
            start: 100,
            end: 300,
            duration: 800,
            easing: "easeOut",
            properties: [
              {
                startValue: 0,
                endValue: 1350,
                property: "translateY",
              },
              {
                startValue: 1,
                endValue: -3,
                property: "opacity",
              },
            ],
          },
        ]}
        className=" z-50 fixed top-[50%]  md:top-[48%]   max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          className="h-[23rem]  md:h-[33rem] w-full  mix-blend-screen bg-red-5 "
        >
          <Image
            className=" md:h-[25rem] md:w-full   object-contain mix-blend-screen mx-auto max-w-7xl  bg-transparent   "
            src="https://cdn.sanity.io/images/7n5v8za3/production/de3e25e8ac538e694356452b1e552b6e96fac290-300x830.png"
            alt="V_3"
            width={100}
            height={200}
          />
        </motion.div>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 300,
            duration: 800,
            easing: "easeOut",
            properties: [
              {
                startValue: 0,
                endValue: 1005,
                property: "translateY",
              },
            ],
          },
        ]}
        className="z-40 fixed  left-0 right-0 top-[0%] 2xl:top-10 "
      >
        <Image
          className=" object-cover w-full h-screen mix-blend-screen  "
          src="https://cdn.sanity.io/images/7n5v8za3/production/5f42635d01f8759dd3a20a05ef00f7bc6658dd6c-1920x1080.png"
          alt="V_4"
          width={1000}
          height={500}
        />
      </Plx>
    </>
  );
}

export default HeroImage_2;
