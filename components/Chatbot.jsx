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
            <Image
              width={55}
              height={55}
              src="https://cdn.sanity.io/images/7n5v8za3/production/830f362005044e8f0235b3b9ec7156c7d0fa02cc-1080x1080.webp"
              alt="chatbot-logo"
              className={`
                 mix-blend-screen cursor-pointer rounded-full object-cover animate-pulse.  `}
            />
          ) : (
            <Image
              width={55}
              height={55}
              src="https://cdn.sanity.io/images/7n5v8za3/production/6b2dffb830ec36a6cba4b89112392e02d833f4fa-449x555.png"
              alt="chatbot-logo"
              className={`
                mix-blend-screen cursor-pointer rounded-full object-cover animate-pulse.  `}
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default Chatbott;
