"use client";

import Image from "next/image";

function Contact() {
  return (
    <div className="flex  items-center justify-center pb-4">
      <h1 className="z-50 pt-1 font-[600] pl-1">
        I am {""}
        <span className="font-[900] text-amber-600 underline ">
          {" "}
          Deaa Aldin Alawad
        </span>{" "}
        a passionate and skilled software developer dedicated to transforming
        your business ideas into reality. With a wealth of experience and a deep
        understanding of cutting edge technologies, I am your trusted partner in
        the world of software development.
      </h1>
      <Image
        fill
        src="https://cdn.sanity.io/images/7n5v8za3/production/b20ab9f1216d355a2f90464683fb85892c674875-804x664.png"
        alt="Deaa-aboutme"
        className="pt-12 z-10 px-1 md:px-6 object-fill opacity-40 brightness-[0.7]"
      />
    </div>
  );
}

export default Contact;
