"use client";
import "react-chatbot-kit/build/main.css";
import "./chatbot.css";
import Image from "next/image";
import react, { useState } from "react";
import config from "../lib/configchatbot";
import MessageParser from "../lib/MessageParser";
import ActionProvider from "../lib/ActionProvider";
import Chatbot from "react-chatbot-kit";

function Chatbott() {
  const [bot, setBot] = useState(false);

  return (
    <div className="sticky  bottom-0 md:px-5 w-full rounded-2xl">
      <div className="absolute md:right-8 right-4  flex items-center bottom-36 w-[70%] md:w-[35%] md:px-6 ">
        <div
          className={`${
            bot ? "block" : "hidden"
          } max-w-md  mx-auto z-50 rounded-2xl boxshadow_chatbot   `}
        >
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>

        <button
          onClick={() => setBot(!bot)}
          className={`absolute  right-4 -bottom-24 z-50 flex  items-center  justify-center  `}
        >
          {bot ? (
            <div className="flex items-center justify-center text-amber-500 border border-amber-500 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          ) : (
            <div className="flex items-center justify-center text-green-500 border border-green-500 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 animate-pulse"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Chatbott;
{
  /*
            <Image
            width={55}
            height={55}
            src="https://cdn.sanity.io/images/7n5v8za3/production/830f362005044e8f0235b3b9ec7156c7d0fa02cc-1080x1080.webp"
            alt="chatbot-logo"
            className={`
            mix-blend-screen cursor-pointer rounded-full object-cover animate-pulse.  `}
            />
          */
}

{
  /*
         <Image
              width={55}
              height={55}
              src="https://cdn.sanity.io/images/7n5v8za3/production/6b2dffb830ec36a6cba4b89112392e02d833f4fa-449x555.png"
              alt="chatbot-logo"
              className={`
                mix-blend-screen cursor-pointer rounded-full object-cover animate-pulse.  `}
            />
        */
}
