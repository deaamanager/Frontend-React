"use client";
import HeroContent_div from "./HeroContent_div";
import HeroImage_1 from "./HeroImage_1";
import HeroImage_2 from "./HeroImage_2";

function Hero() {
  return (
    <div className=" flex flex-col h-[120vh] items-center  overscroll-none py-24 z-50 ">
      <HeroImage_1 />
      <HeroImage_2 />
      <HeroContent_div />
      <div className="relative w-full h-full bg-gradient-to-t from-blue-800 top-24 " />
    </div>
  );
}

export default Hero;
