"use client";

import Chatbott from "@/components/Chatbot";
import ThankyouPage from "@/components/ThankyouPage";

function page() {
  return (
    <>
      <div className="h-screen max-w-7xl mx-auto flex-col flex  items-center justify-start pt-24  gap-y-8 ">
        <ThankyouPage />
      </div>
      <Chatbott />
    </>
  );
}

export default page;
