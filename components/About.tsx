"use client";
import { Suspense } from "react";
import Progcess from "./Progcess";
import TimeLine from "./TimeLine";
import LoadingPage from "./LoadingPage";
function About() {
  return (
    <div className=" max-w-7xl mx-auto h-screen flex flex-col bg-[#111] items-center justify-center border-none">
      <TimeLine />
      <div className="relative  w-full -top-7">
        <Suspense fallback={<LoadingPage />}>
          <Progcess />
        </Suspense>
      </div>
    </div>
  );
}

export default About;
