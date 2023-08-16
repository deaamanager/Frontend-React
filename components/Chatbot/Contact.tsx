"use client";

import { SocialIcon } from "react-social-icons";
import Link from "next/link";

function Contact() {
  return (
    <div className="flex items-center justify-center pb-10">
      <ul className="flex flex-col w-full items-start justify-start pl-5 md:pl-10 list-disc text-sm  text-amber-500 ">
        <h1 className="text-[14px]. text-base font-[600] pb-3 pr-2 ">
          Contact with me on:
        </h1>

        <li className="w-full">
          <span className="w-full flex flex-col items-start justify-start ">
            <span>On LinkedIn :</span>
            <span className=" flex flex-row items-center justify-center">
              <span className="animate-pulse">
                <SocialIcon
                  fgColor="#0e76a8"
                  bgColor="transparent"
                  style={{ width: 40, height: 40 }}
                  url="https://www.linkedin.com/in/deaa-aldin-alawad/"
                />
              </span>
              <Link href="https://www.linkedin.com/in/deaa-aldin-alawad/">
                <span className="text-[12px] cursor-pointer hover:text-gray-300 text-blue-300">
                  /deaa-aldin-alawad
                </span>
              </Link>
            </span>
          </span>
        </li>
        <li className="pt-1">
          <span className=" flex flex-col justify-start items-start">
            <span>On Phone :</span>
            {/*
                <span className="px-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </span>
                
                */}
            <span className=" flex items-center justify-center ">
              <SocialIcon
                className="animate-pulse"
                fgColor="#25d366"
                bgColor="transparent"
                style={{ width: 45, height: 45 }}
                url="https://api.whatsapp.com/send/?phone=491630299378&text&type=phone_number&app_absent=0"
              />
              <span className="hover:text-gray-300 text-blue-300">
                {" "}
                +491630299378
              </span>
            </span>
          </span>
        </li>
        <li>
          <span>on Enail :</span>
          <span className=" flex items-center justify-center ">
            <SocialIcon
              className="animate-pulse."
              fgColor="gray"
              bgColor="transparent"
              style={{ width: 45, height: 45 }}
              network="email"
              ////url="https://api.whatsapp.com/send/?phone=491630299378&text&type=phone_number&app_absent=0"
            />
            <span className="hover:text-gray-300 text-[11px] text-blue-300">
              {" "}
              deaabusniss@gmail.com
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
