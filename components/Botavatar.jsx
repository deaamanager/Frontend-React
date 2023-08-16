"use client";

import Image from "next/image";

function Botavatar() {
  return (
    <>
      <div className="relative mr-3 w-[35px] h-[35px]  rounded-full my-2 border border-amber-500 flex items-center justify-center">
        <Image
          src="https://cdn.sanity.io/images/7n5v8za3/production/089a1d822aed6c5b76abca22ea1fa9ed65bc3a86-720x720.png"
          alt="deaa-logo"
          width={50}
          height={50}
          className=" bottom-0 rounded-full object-cover mix-blend-screen"
        />
        <div className="h-3 w-3 bg-green-500 rounded-full blur-[1px] animate-pulse absolute top-6 -left-0 z-50" />
      </div>
    </>
  );
}

export default Botavatar;
