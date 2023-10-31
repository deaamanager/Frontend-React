"use client";
import { Suspense } from "react";
import Progcess from "./Progcess";
import TimeLine from "./TimeLine";
import { motion } from "framer-motion";
import LoadingPage from "./LoadingPage";
function About() {
  return (
    <div className=" max-w-7xl mx-auto h-screen flex flex-col bg-[#111] items-center justify-center border-none">
      <TimeLine />
      <div className="relative  w-full -top-7">
        <Suspense fallback={<LoadingPage />}>
          <motion.div
            className=""
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7, type: "spring" }}
          >
            <Progcess />
          </motion.div>
        </Suspense>
      </div>
    </div>
  );
}

export default About;
