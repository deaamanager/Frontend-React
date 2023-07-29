"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = [
  {
    image:
      "https://cdn.sanity.io/images/7n5v8za3/production/3c3b0b58c69ca53097785a1f7f4a233e78615717-512x512.png",
    pross: 90,
  },
  {
    image:
      "https://cdn.sanity.io/images/7n5v8za3/production/e4d1a7214013df1d10ff09b11cb62730fe85d9c1-225x225.png",
    pross: 94,
  },
  {
    image:
      "https://cdn.sanity.io/images/7n5v8za3/production/830f362005044e8f0235b3b9ec7156c7d0fa02cc-1080x1080.webp",
    pross: 90,
  },
  {
    image:
      "https://cdn.sanity.io/images/7n5v8za3/production/7f544e34ff2242910bf57afee5e015d84418d256-170x170.jpg",
    pross: 90,
  },
  {
    image:
      "https://cdn.sanity.io/images/7n5v8za3/production/a209720a69c0fd7cd563f6ca50f4fd33b52ced31-400x400.png",
    pross: 85,
  },
  {
    image:
      "https://cdn.sanity.io/images/7n5v8za3/production/f1100a12475a4fa1e009c6291c0f20df12a7e2e0-640x640.png",
    pross: 85,
  },
  {
    image:
      "https://cdn.sanity.io/images/7n5v8za3/production/371a61014874cf1cb78ec4466e944fbbf8839af4-400x400.png",
    pross: 90,
  },
  {
    image:
      "https://cdn.sanity.io/images/7n5v8za3/production/837485ddf8c89e303939b1a935fcca7fec5d6832-450x450.png",
    pross: 85,
  },
];

export default function Skill() {
  return (
    <div className="relative grid grid-cols-2 gap-4 md:gap-6 w-full">
      {Skills?.map((skill, i) => (
        <motion.div
          initial={{
            x: 150,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex group  cursor-pointer "
          key={i}
        >
          <Image
            src={skill.image}
            width={50}
            height={50}
            alt="skills"
            className="group-hover:pointGreen  rounded-full w-12 h-12 md:w-14 md:h-14 group-hover:border-[#25D366] object-cover filter transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#111]  md:w-14 md:h-14  w-12 h-12 bg-black rounded-full z-0 flex justify-center items-center">
            <div className="flex items-center justify-center h-full">
              <p className="text-md font-bold text-[#25D366]   opacity-100">
                {skill.pross}%
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
