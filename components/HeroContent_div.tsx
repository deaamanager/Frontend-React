"use client";

import HeroTypewrite from "./HeroTypewrite";
import Plx from "react-plx";
import Image from "next/image";
import HeroContent from "./HeroContent";
import HeroButton from "./HeroButton";
function HeroContent_div() {
  return (
    <div className="flex  items-center justify-center  ">
      <Image
        className="  object-cover z-10 mix-blend-lighten  imageAnimate  transition-all duration-150  "
        fill
        src="https://cdn.sanity.io/images/7n5v8za3/production/9092d4325094a4fda37013ecd52723ca4c400237-1160x912.png"
        alt="V_5"
      />

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
                endValue: 1,
                property: "opacity",
              },
              {
                startValue: 0.4,
                endValue: 1.3,
                property: "scale",
              },
            ],
          },
        ]}
        className="z-20 fixed top-[10%]    max-w-7xl mx-auto"
      >
        <HeroContent />
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
                endValue: 1,
                property: "opacity",
              },
              {
                startValue: 0.4,
                endValue: 1.3,
                property: "scale",
              },
            ],
          },
        ]}
        className="z-20 fixed top-[49%]"
      >
        <HeroTypewrite />
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
                endValue: 1,
                property: "opacity",
              },
              {
                startValue: 0.4,
                endValue: 1.3,
                property: "scale",
              },
            ],
          },
        ]}
        className="z-40 fixed bottom-[10%]"
      >
        <HeroButton />
      </Plx>
    </div>
  );
}

export default HeroContent_div;
