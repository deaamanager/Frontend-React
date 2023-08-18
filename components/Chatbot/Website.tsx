"use client";
import Image from "next/image";

function Website() {
  return (
    <div className="flex flex-col items-center justify-center py-1">
      <div className=" flex items-center justify-center ">
        <Image
          height={200}
          width={200}
          src="https://cdn.sanity.io/images/7n5v8za3/production/a83dfe5e9b908da627b6076d59d2073ac5b2ffd9-3000x1800.png"
          alt="Loading-page-photo"
          className=" object-cover"
        />
      </div>
      <h1 className="w-full text-start text-[10px] md:text-sm lg:text-base font-[450] pt-2 ">
        {`3D Responsive Landing-Page (UX/UI) :`}
      </h1>
      <ul className="pt-2  w-full flex items-start justify-start flex-col gap-y-4 list-disc pl-2 md:pl-4">
        <li className="text-[11px] md:text-sm text-start text-amber-500/80">
          {` 🔗 ensure seamless integration with your existing platforms, CRM
        systems, and analytics tools, enabling you to track performance,
        gather insights, and refine your marketing strategies.`}
        </li>
        <li className="text-[11px] md:text-sm text-start text-amber-500/80">
          {`📱 Flawless Responsiveness: In today's mobile-driven world,
        responsiveness is non-negotiable.`}
        </li>
        <li className="text-[11px] md:text-sm text-start text-amber-500/80">
          {` 🌟 Elevate your brand: Elevate your brand's online presence with a 3D
        responsive design that leaves a lasting impression on visitors and
        paves the way for success.`}
        </li>
        <li className="text-[11px] md:text-sm text-start text-amber-500/80">
          {` 💡 From scroll-triggered animations to hover effects that unveil
        additional information, I provide users with a dynamic experience that
        encourages exploration and interaction.`}
        </li>
        <li className="text-[11px] md:text-sm text-start text-amber-500/80">
          {`🌐 With carefully sculpted 3D elements, animations, and parallax
        effects, we create an immersive environment that draws visitors into
        your brand's story.`}
        </li>
      </ul>
      <button className="mt-5 px-3 py-1  bg-amber-600/40 text-amber-500 border border-amber-500 rounded-lg ">
        Click To Live Demo
      </button>
    </div>
  );
}

export default Website;
