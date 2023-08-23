"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Images = [
  {
    image:
      "https://cdn.sanity.io/images/7n5v8za3/production/daaff73491b397f9291237136d21972243280410-3000x1800.png",
    technologies: [
      "https://cdn.sanity.io/images/7n5v8za3/production/830f362005044e8f0235b3b9ec7156c7d0fa02cc-1080x1080.webp",
      "https://cdn.sanity.io/images/7n5v8za3/production/3c3b0b58c69ca53097785a1f7f4a233e78615717-512x512.png",
      "https://cdn.sanity.io/images/7n5v8za3/production/f1100a12475a4fa1e009c6291c0f20df12a7e2e0-640x640.png",
      "https://cdn.sanity.io/images/7n5v8za3/production/720c153a0ec04caea201987f8294d4c5f491a5e6-800x800.svg",
    ],
    name: "(UX/UI) Responsive Web-app with Redux & Google Assistant(Firebase)",
    title: "React: powerful JavaScript library for building user interfaces",
    titleI:
      "Redux: state management tool for JavaScript applications, making it easier to control data flow",
    titleIV:
      "Firebase:  Google platform for web and mobile app development that provides services such as databases, authentication, and hosting",
    link: "https://netflex-clone-a2c65.web.app/",
  },
  {
    image:
      "https://cdn.sanity.io/images/7n5v8za3/production/f338aa271935e9b49eeb69d6f578fc1a6c035344-3000x1800.png",
    technologies: [
      "https://cdn.sanity.io/images/7n5v8za3/production/e4d1a7214013df1d10ff09b11cb62730fe85d9c1-225x225.png",
      "https://cdn.sanity.io/images/7n5v8za3/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png",
      "https://cdn.sanity.io/images/7n5v8za3/production/e5fc9de77d06ace427f0310d25ef62e2ced56d3a-1024x1024.png",
      "https://cdn.sanity.io/images/7n5v8za3/production/d1ade0293b31972292028de376bd5403c6e225a9-640x320.png",
      "https://cdn.sanity.io/images/7n5v8za3/production/ddd7f70f28c091c7611162f0544e30d48b11e9ce-1600x1200.webp",
    ],
    name: "(UX/UI) Responsive Web-site with ( CMS & Email Engine )",
    title:
      "Next.js 13 & TailwindCss: providing a streamlined workflow and optimized performance",
    titleI:
      "Sanity & Nodemailer: Managing content with a customizable CMS and sending emails using Nodemailer for server-side email handling",
    titleIV:
      "Framer-motion: Adding smooth animations and interactive motion effects to enhance the user experience",
    link: "https://syr-services-deaamanger-deaa.vercel.app/",
  },
  {
    image:
      "https://cdn.sanity.io/images/7n5v8za3/production/a83dfe5e9b908da627b6076d59d2073ac5b2ffd9-3000x1800.png",
    technologies: [
      "https://cdn.sanity.io/images/7n5v8za3/production/e4d1a7214013df1d10ff09b11cb62730fe85d9c1-225x225.png",
      "https://cdn.sanity.io/images/7n5v8za3/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png",
      "https://cdn.sanity.io/images/7n5v8za3/production/371a61014874cf1cb78ec4466e944fbbf8839af4-400x400.png",
      "https://cdn.sanity.io/images/7n5v8za3/production/e5fc9de77d06ace427f0310d25ef62e2ced56d3a-1024x1024.png",
    ],
    name: "(UX/UI) Responsive 3D Landing-Page & 3D Cards Effect",
    title:
      "Next.js & TailwindCss: Building performant and responsive React applications with a utility-first CSS framework",
    titleI:
      "Three.js:  Creating immersive 3D visualizations and interactive experiences using the powerful combination of THREE.js library with React Fiber and React Drei",
    titleIV: "Sanity: headless CMS",
    link: "https://loading-page-ten.vercel.app/",
  },
];

function Card() {
  const ref = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | undefined>();
  const autoslideInterval = 100;

  //*  AutoScroll function  *//

  {
    /*

   useEffect(() => {
    const autoplay = () => {
      if (ref.current) {
        const container = ref.current;
        const canScroll = container.scrollWidth > container.scrollWidth;
        if (canScroll) {
          container.scrollBy({
            left: container.scrollWidth,
            behavior: "smooth",
          });
        } else {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    };

    timerRef.current = window.setInterval(autoplay, autoslideInterval);

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, [ref, timerRef]);

  */
  }

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center cursor-grab w-[400%]"
    >
      {Images.map((image, i) => (
        <div
          key={i}
          className=" w-[300%]  realtive  text-white flex-col flex items-center justify-center py-24 cursor-grab"
        >
          <Image
            width={360}
            height={350}
            src={image.image}
            alt="projeckts "
            className="pb-10 object-cover mix-blend-lighten ml-2 "
          />
          <div className="flex flex-row gap-x-3  pb-5  text-white">
            {image.technologies.map((tech, i) => (
              <div key={i}>
                <Image
                  src={tech}
                  width={50}
                  height={50}
                  alt="Technologies"
                  className="rounded-full h-10 w-10 object-cover mix-blend-screen  border-none"
                />
              </div>
            ))}
          </div>

          <h1 className=" md:text-lg text-sm px-3 text-center pb-5 text-gray-400">
            {image.name}{" "}
          </h1>

          <ul className="flex flex-col items-start justify-center text-gray-300 px-10 md:px-16  list-disc text-[10px]  md:text-sm">
            <li> {image.title} </li>
            <li>{image.titleI} </li>
            <li>{image.titleIV} </li>
          </ul>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="grid gap-8 items-end justify-center pt-10"
          >
            <div className="relative group ">
              <div
                className="absolute -inset-0.5   opacity-75 bg-gradient-to-r from-[#fff] via-[#111] to-[#fff]  rounded-xl blur-xl
                        group-hover:opacity-100 transition duration-1000 group-hover:duration-200 overflow-hidden btnCard"
              ></div>
              <Link href={image.link}>
                <button className=" ga-click relative divide-x divide-gray-600 px-4 py-4 bg-black rounded-xl leading-none flex items-center">
                  <span className="flex justify-center  items-start ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="md:w-6 md:h-6 w-5 h-5 text-[#25D366]/50  mr-1 animate-pulse"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </span>
                  <span className="text-[#25D366]/50 px-3 group-hover:text-gray-100 transition duration-200">
                    Go Live To Demo
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Card;
