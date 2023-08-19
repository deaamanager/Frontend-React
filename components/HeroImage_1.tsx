"use client";

import Plx from "react-plx";
import Image from "next/image";
function HeroImage_1() {
  return (
    <>
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
                endValue: -350,
                property: "translateY",
              },
              {
                startValue: 0.9,
                endValue: 1.7,
                property: "scale",
              },
              {
                startValue: 0.8,
                endValue: 1,
                property: "brightness",
              },
              {
                startValue: 0.8,
                endValue: 3,
                property: "opacity",
              },
            ],
          },
        ]}
        className="z-40 fixed  -top-[10%] h-[30rem]  max-w-7xl mx-auto"
      >
        <Image
          className="object-cover mix-blend-screen h-full mx-auto max-w-7xl z-10 "
          src="https://cdn.sanity.io/images/7n5v8za3/production/e1a984743070125bd3a3bee0442961a1bfa67b70-900x900.png"
          alt="V_1"
          width={500}
          height={200}
          loading="eager"
        />
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
                endValue: -850,
                property: "translateY",
              },
              {
                startValue: 0.8,
                endValue: 1,
                property: "brightness",
              },
              {
                startValue: 0.3,
                endValue: 0.3,
                property: "opacity",
              },
            ],
          },
        ]}
        className="z-30 hidden md:block fixed left-0 right-0 top-[30%] sm:top-0 2xl:-top-[18rem]  w-full "
      >
        <Image
          className="sm:w-full  max-w-full mx-auto mix-blend-lighten  z-40  object-cover "
          src="https://cdn.sanity.io/images/7n5v8za3/production/6120ae94224d6f8b2798b0d5b0819f217fa0a8da-640x480.png"
          alt="V_2"
          width={200}
          height={200}
        />
      </Plx>
    </>
  );
}

export default HeroImage_1;
