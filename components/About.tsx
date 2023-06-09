"use client";;
import Progcess from "./Progcess";
import TimeLine from "./TimeLine";
function About() {
  return (
    <div className=" max-w-7xl mx-auto h-screen flex flex-col bg-[#111] items-center justify-center border-none">
         <TimeLine />
        <div className="relative  w-full -top-7">
        <Progcess /> 
        </div>
    </div>
  )
}

export default About;






