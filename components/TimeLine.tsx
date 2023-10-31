"use client";
import { motion } from "framer-motion";
function TimeLine() {
  return (
    <div className=" h-16 w-[80%] my-0  py-0 mx-auto relative   -top-[15%] right-3  z-0">
      <hr className="border-gray-300 border-2 absolute w-full top-[50%] -z-0   blur-[2px]" />
      <ul className=" absolute ml-3 px-1 gap-x-10 md:gap-x-[7.2rem] lg:px-7 lg:gap-x-[9.2rem] xl:gap-x-[12rem]  md:top-[30%] top-[35%] z-0  flex items-center justify-evenly">
        <motion.li
          className="flex flex-col  items-center justify-start "
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: -0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            whileInView={{
              scale: [1, 1.7, 1.7, 1, 1],
              borderRadius: ["50%", "50%", "20%", "20%", "50%"],
              rotate: [0, 0, 270, 270, 0],
            }}
            transition={{ duration: 2.0, damping: 300, stiffness: 500 }}
            className="h-5 md:h-6 w-5 md:w-6 bg-[#E5E7EB] blur-[3px]  shadowwhite imageAnimate"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2.3,
              delay: 0.3,
              type: "spring",
              damping: 300,
              stiffness: 500,
            }}
            className=" py-0 h-8 w-[2px] blur-[2px] shadowwhite bg-[#E5E7EB] "
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mt-0 p-2 h-10 w-8 md:h-12 md:w-10 object-cover rounded-2xl  bg-[#E5E7EB] shadowwhite text-[#111]  "
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
        </motion.li>

        <motion.li
          className="flex flex-col justify-start items-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: -0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            whileInView={{
              scale: [1, 1.5, 1.5, 1, 1],
              borderRadius: ["50%", "50%", "20%", "20%", "50%"],
              rotate: [0, 0, 270, 270, 0],
            }}
            transition={{
              duration: 2.0,
              delay: 0.6,
              damping: 300,
              stiffness: 500,
            }}
            className="h-5 md:h-6 w-5 md:w-6  rounded-full bg-[#97f3ff]  blur-[3px]  shadowgray imageAnimate"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2.3,
              delay: 0.8,
              type: "spring",
              damping: 300,
              stiffness: 500,
            }}
            className=" py-0 h-8 w-[2px] blur-[2px] shadowgray  bg-[#97f3ff] "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mt-0 p-1 h-10 w-8 md:h-12 md:w-10 object-cover rounded-2xl shadowgray bg-[#97f3ff] text-[#111]    "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </motion.li>

        <motion.li
          className="flex flex-col justify-start items-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: -0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            whileInView={{
              scale: [1, 1.5, 1.5, 1, 1],
              borderRadius: ["50%", "50%", "20%", "20%", "50%"],
              rotate: [0, 0, 270, 270, 0],
            }}
            transition={{
              duration: 2.0,
              delay: 0.6,
              damping: 300,
              stiffness: 500,
            }}
            className="h-5 md:h-6 w-5 md:w-6  rounded-full bg-[#D97706] blur-[3px]  pointyallow imageAnimate"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2.3,
              delay: 0.8,
              type: "spring",
              damping: 300,
              stiffness: 500,
            }}
            className=" py-0 h-8 w-[2px] blur-[2px] pointyallow  bg-[#D97706] "
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mt-0 p-1 h-10 w-8 md:h-12 md:w-10 object-cover rounded-2xl pointyallow bg-[#D97706] text-[#111]   "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </motion.li>
        <motion.li
          className="flex flex-col justify-start items-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: -0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <motion.div
            whileInView={{
              scale: [1, 1.5, 1.5, 1, 1],
              borderRadius: ["50%", "50%", "20%", "20%", "50%"],
              rotate: [0, 0, 270, 270, 0],
            }}
            transition={{
              duration: 2.0,
              delay: 0.9,
              damping: 300,
              stiffness: 500,
            }}
            className="h-5 md:h-6 w-5 md:w-6  rounded-full bg-[#FFEC98] blur-[3px]  shadoworange imageAnimate "
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2.3,
              delay: 1.1,
              type: "spring",
              damping: 300,
              stiffness: 500,
            }}
            className=" py-0 h-8 md:h-9 w-[3px] blur-[2px] shadoworange  bg-[#FFEC98]  "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mt-0 p-1 h-10 w-8 md:h-12 md:w-10 object-cover rounded-2xl shadoworange bg-[#FFEC98] text-[#111]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: -0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-col justify-start items-center"
        >
          <motion.div
            whileInView={{
              scale: [1, 1.5, 1.5, 1, 1],
              borderRadius: ["50%", "50%", "20%", "20%", "50%"],
              rotate: [0, 0, 270, 270, 0],
            }}
            transition={{
              duration: 2.0,
              delay: 1.2,
              damping: 300,
              stiffness: 500,
            }}
            className=" h-5 md:h-6 w-5 md:w-6  rounded-full  bg-[#25D366] blur-[1px]  pointGreen  imageAnimate  "
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2.3,
              delay: 1.4,
              type: "spring",
              damping: 1500,
              stiffness: 3000,
            }}
            className=" py-0 h-8 w-[2px] blur-[2px] pointGreen bg-[#25D366]/70  brightness-[0.7]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mt-0 p-1 h-10 w-8 md:h-12 md:w-10 object-cover rounded-2xl pointGreen bg-[#25D366]  text-[#fff]  brightness-[0.8 ]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
        </motion.li>
      </ul>
    </div>
  );
}

export default TimeLine;
