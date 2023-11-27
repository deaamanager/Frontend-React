"use client";

import { useState } from "react";

function TestSection() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true);
  return (
    <>
      <div className="h-screen w-full bg-[#111] text-white flex flex-col  ">
        <div className="flex items-center justify-center bg-red-500 ">
          <h1>deaa</h1>
          <p>deaa it's there</p>
        </div>
      </div>
    </>
  );
}

export default TestSection;
