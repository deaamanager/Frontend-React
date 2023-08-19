"use client";
import { Typewriter, Cursor } from "react-simple-typewriter";
function HeroTypewrite() {
  return (
    <h1
      className="font-[900] text-xl flex items-center text-center py-5  
    bg-gradient-to-r from-[#428dd4] via-gray-400 to-[#4b9ae3]  bg-clip-text  text-transparent"
    >
      <span>
        <Typewriter
          loop={true}
          delaySpeed={2000}
          words={[
            "Hi, The Name's Dea",
            "Full-Stack-Developer",
            "<React-3D-Hero-Developer/>",
          ]}
        />
      </span>
      <Cursor cursorColor="#4b9ae3" />
    </h1>
  );
}

export default HeroTypewrite;
