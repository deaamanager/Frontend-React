"use client";

import { AnimatePresence } from "framer-motion";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import useContactForm from "../hooks/useContactForm";
import { useState } from "react";
import sendEmail from "../lib/sendmail";
import { useRouter } from "next/navigation";

function Contact() {
  const { values, handleChange } = useContactForm();
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });
  const [drop, setDrop] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const req = await sendEmail(
        values.name,
        values.email,
        values.betreff,
        values.message,
        values.checkbox
      );
      if (req.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: "",
        });
        router.push("/thankyou");
      }
    } catch (e) {
      setResponseMessage({
        isSuccessful: false,
        message: "Oops, something went wrong. Please try again!",
      });
    }
  };

  const privacy = {
    title: "Privacy Policy for Contact Form",
    disc: "I am committed to protecting your privacy. This Privacy Policy outlines how I handle the personal information collected through my contact form, which utilizes Nodemailer for sending messages. Please read this policy carefully to understand how I collect, use, protect, and disclose your personal information.",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
      className="h-screen max-w-7xl mx-auto flex items-center flex-col justify-center z-30"
    >
      <AnimatePresence
        initial={false}
        //exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {drop && (
          <>
            <div className="max-w-4xl mx-auto  text-gray-300 absolute flex backdrop-brightness-[0.2] h-screen items-center justify-center flex-col z-50  space-y-10 ">
              <h1 className="text-lg font-[800] bg-gradient-to-r from-[#25D366] via-gray-400 to-[#25D366]  bg-clip-text  text-transparent">
                {" "}
                {privacy.title}{" "}
              </h1>
              <div className="px-10 md:px-16 text-sm ">
                <p className="md:pb-10 pb-5"> {privacy.disc} </p>
                <ul className=" list-disc space-y-3">
                  <li>
                    When you submit a message through my contact form, I collect
                    the following information(Name , Email , Message ){" "}
                  </li>
                  <li>
                    I use the collected information to respond your inquiries or
                    messages
                  </li>
                  <li>
                    I do not sell, trade, or otherwise transfer your personal
                    information to third parties without your consent.
                  </li>
                </ul>
              </div>
              <button
                className=" relative z-50 px-4 py-1 text-[#25D366]/80 text-sm hover:border border-[#25D366] hover:pointGreen  rounded-full   bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]   before:opacity-30"
                onClick={() => setDrop(false)}
              >
                close
              </button>
            </div>
          </>
        )}
      </AnimatePresence>
      <h1
        className="text-center pb-10 tracking-wider text-xl font-[900]
              bg-gradient-to-r from-[#25D366] via-gray-400 to-[#25D366]  bg-clip-text  text-transparent "
      >
        <span>
          <Typewriter
            loop={true}
            delaySpeed={1000}
            words={[
              "Contact me . . . ",
              "Via Whatsapp .",
              "Via LinkedIn .",
              "Or Write me Message .",
            ]}
          />
        </span>
        <Cursor cursorColor="#4b9ae3" />
      </h1>

      <div className="flex flex-row items-center max-w-7xl  mx-0 ">
        {/* nächste update img for  */}
        {/*
             <div className="text-white  hidden md:block  ">
        <img
         className=" object-cover mix-blend-screen  h-[45rem]  ml-24 "
        src="https://cdn.sanity.io/images/7n5v8za3/production/86aa4945b84fc46ce06e2d57092ff51f1c149f8a-960x1280.png" alt="" />
       </div>
        */}

        <div className=" overflow-hidden relative w-full md:w-[25rem] mx-auto mt-8 lg:m-0 filter  bg-black pointGreen  border-2 border-[#25D366] mix-blend-screen   rounded-2xl p-8">
          <div className="absolute opacity-50 w-full h-full top-0 left-0 rounded-2xl  z-0">
            <div className="h-52 w-52 z-0 animat__effekt absolute contactBgSchadow  blur-sm top-32  left-24 rounded-full opacity-30 bg-[#ADD8E6]/70  " />
            <div className="h-48 w-48 z-0 animat__effekt rounded-full contactBgSchadow bottom-[10rem] blur-sm    absolute left-0 opacity-30 bg-[#ADD8E6]/70 " />
            <div className="h-48 w-48 z-0 animat__effekt rounded-full contactBgSchadow bottom-[10rem] blur-sm   absolute right-0 opacity-30 bg-[#ADD8E6]/70 " />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="mb-4 flex items-center justify-evenly z-50 "
          >
            <SocialIcon
              url="https://api.whatsapp.com/send/?phone=491630299378&text&type=phone_number&app_absent=0"
              className="hover:scale-125 hover:pointGreen rounded-full transition-all duration-300 "
              fgColor="#fff"
              style={{ height: 30, width: 30 }}
            />
            {/*
                <SocialIcon url="https://www.facebook.com/profile.php?id=100078049085080"
              className="hover:scale-125 hover:facebookschadow rounded-full transition-all duration-300" fgColor="#fff" style={{ height: 30, width: 30 }} />
              */}
            <SocialIcon
              url="https://www.linkedin.com/in/deaa-aldin-alawad/"
              className="hover:scale-125 hover:linkedinshadow rounded-full transition-all duration-300"
              fgColor="#fff"
              style={{ height: 30, width: 30 }}
            />
          </motion.div>
          <hr className="border-[#25D366] blur-[2px]  my-5 animate-pulse " />
          <form
            onSubmit={handleSubmit}
            className=" z-30  w-full flex flex-col text-white text-sm font-semibold space-y-3  mix-blend-lighten"
          >
            {/*Nmae faild */}
            <input
              className="text-white bg-gray-500 rounded-lg opacity-30 md:text-xl border-b-2 py-3 placeholder-white border-[#25D366]/40 focus:border-[#25D366] outline-none"
              type="text"
              placeholder="Name"
              required
              id="name"
              value={values.name}
              onChange={handleChange}
            />
            {/*errors.name && <span className="mx-6 my-2 text-pink-500 text-sm">please write your fullname</span>*/}

            {/*Email faild */}
            <input
              className="'text-white bg-gray-500 rounded-lg opacity-30 md:text-xl border-b-2 py-3 placeholder-white border-[#25D366]/40 focus:border-[#25D366] outline-none"
              type="email"
              placeholder="Email"
              required
              id="email"
              value={values.email}
              onChange={handleChange}
            />
            {/*errors.email && <span className="mx-6 my-2 text-pink-500 text-sm">please write a valid email</span>*/}

            {/*message faild */}
            <textarea
              className="text-white bg-gray-500 opacity-30 md:text-xl rounded-lg border-b-2 py-3 placeholder-white border-[#25D366]/40 focus:border-[#25D366] outline-none"
              placeholder="Message"
              required
              value={values.message}
              onChange={handleChange}
              id="message"
              rows={4}
            />
            {/*errors.message && <span className="mx-6 my-2 text-pink-500 text-sm">please write your message</span>*/}

            {/*checkbox faild */}
            <div className="flex flex-row space-x-2 py-[18px] ">
              <input
                type="checkbox"
                required
                checked={values.checkbox}
                onChange={handleChange}
                id="checkbox"
              />
              <label className="text-white text-sm font-semibold">
                I agree to the{" "}
                <button
                  type="button"
                  onClick={() => setDrop(true)}
                  className="text-[#25D366]/40 font-[800] cursor-pointer hover:text-[#25D366] text-center pl-1"
                >
                  privacy policy
                </button>
              </label>
            </div>

            {/*submit button */}

            <button
              className=" z-0 transition-all duration-150  font-bold link animate-puls 
                    py-1 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]   before:opacity-30"
              value="submit"
              type="submit"
            >
              Submit
            </button>

            {responseMessage && (
              <span
                className={`mx-3 pb-4 text-[9px] ${
                  responseMessage.isSuccessful
                    ? "text-green-500"
                    : "text-red-500"
                } `}
              >
                {responseMessage.message}{" "}
              </span>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;

/// link animate-pulse
