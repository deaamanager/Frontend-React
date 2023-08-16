"use client";

import { createChatBotMessage } from "react-chatbot-kit";
import Botavatar from "../components/Botavatar";
import Image from "next/image";
import Options from "../components/Chatbot/Options";
import Quiz from "../components/Chatbot/Quiz";
const config = {
  initialMessages: [
    createChatBotMessage(
      `👋 Hello and welcome to my Live Support! , How can I assist you ? `,
      {
        widget: "options",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "laningPageQuiz",
      widgetFunc: (props) => <Quiz {...props} />,

      delay: 500,
      props: {
        questions: [
          {
            question: "whats happeng",
            answer: "static landing-page with high level seo",
            id: 1,
          },
          {
            question: "About Technoligies",
            answer:
              "Ibuild laing-page with Next.js 13 APPdir with SSR to make sure Ranging on SEO",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "aboutmeQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      delay: 100,
      props: {
        questions: [
          {
            question: "what I can ?",
            answer: `💼 My software development services cover a wide range of solutions,
            from web app and Website and Online-Shop development to custom software
            solutions. Whether you're a startup, a small business, or a large
            enterprise, I've got the expertise to bring your ideas to life. Let us
            know what specific services you're interested in or any questions you
            have!`,
            id: 1,
          },
          {
            question: "overview of the services",
            answer: `🔍 Experiencing issues with your software? I can help troubleshoot and resolve technical problems efficiently. Whether it's a bug, performance concern, or compatibility issue ,    
                 🛠️ I'm dedicated to ensuring your software runs smoothly,
            plus ,🚀 I can help you outline a development roadmap and provide insights to ensure your project's success.`,
            id: 2,
          },
        ],
      },
    },
  ],
  botName: "Deaa Aldin Alawad",
  customComponents: {
    header: () => (
      <>
        <div className="text-sm py-2 flex items-center justify-center gap-x-4 z-50 ">
          <span className="text-[#111] bg-amber-600 px-3 py-1 rounded-full underline font-medium">
            Contact Live Support
          </span>
          <span className="border realtive border-amber-500 rounded-full ">
            <Image
              src="https://cdn.sanity.io/images/7n5v8za3/production/089a1d822aed6c5b76abca22ea1fa9ed65bc3a86-720x720.png"
              alt="deaa-logo"
              width={35}
              height={35}
              className=" object-cover mix-blend-screen rounded-full z-0 "
            />
            <div className="h-3 w-3 bg-green-500 rounded-full blur-[1px] animate-pulse absolute top-8" />
          </span>
        </div>
        <hr className="border border-amber-500  opacity-70 mx-3 mb-4  " />
      </>
    ),
    botAvatar: (props) => <Botavatar {...props} />,
    botChatMessage: "",
    userAvatar: "",
    userChatMessage: "",
  },

  customStyles: {
    botMessageBox: {
      backgroundColor: "rgba(108, 122, 137,0.4)",
    },
  },

  // state: {  movieTitles: ["the lord of the rings", "deaa is there"],},
};

export default config;
