"use client";
import Image from "next/image";
import Link from "next/link";

function ThankyouPage() {
  return (
    <div className="w-full flex-col flex  items-center justify-start   h-screen">
      <div className="mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-12 h-12 text-[#25D366]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      </div>
      <div className="w-[70%]  flex items-center justify-center text-gray-500/70 ">
        <div className="flex flex-col md:flex-row items-center justify-center py-5  rounded-lg pointGreen  border-2 border-[#25D366]  bg-black ">
          <Image
            width={200}
            height={200}
            src="https://cdn.sanity.io/images/7n5v8za3/production/e3ac9e14216a2ceaac523913f5f5de6f5db2cb8b-500x500.gif"
            alt="thankyou-logo"
            className="mix-blend-hard-light p-3 object-cover "
          />

          <h1 className="font-[700] p-3 ">
            {" "}
            {`Thank you for contacting me. I'll be soon in touch`}
          </h1>
        </div>
      </div>
      <Link href="/home">
        <button className=" animate-pulse relative mt-16  px-6 py-3 text-[#25D366]/70 text-sm hover:border border-[#25D366] hover:pointGreen  rounded-full   bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]   before:opacity-0">
          Back To Home-Page
        </button>
      </Link>
    </div>
  );
}

export default ThankyouPage;
