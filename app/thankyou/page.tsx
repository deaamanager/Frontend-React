"use client";

import Link from "next/link";

function page() {
  return (
    <div className="h-screen w-full flex-col flex gap-y-8 items-center justify-center bg-[#111] ">
      <div className="max-w-5xl mx-auto text-gray-500">
        {`Thank you for contacting me,I will reach back to you in a short time`}
      </div>
      <Link href="/home">
        <button className="text-gray-900 px-2 py-1 bg-gray-400 rounded-xl">
          Back To Home-Page
        </button>
      </Link>
    </div>
  );
}

export default page;
