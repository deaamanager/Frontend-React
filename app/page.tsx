import CookieBanner from "@/components/Cookiesbanner";
import Hero from "@/components/Hero";


import CookieBanner from "@/components/Cookiesbanner";


export default function Home() {
  return (
    <>
        <div className="w-full mx-auto overflow-hidden bg-[#111]/90 relative">
          <Hero />
        </div>
      <CookieBanner />
    </>
  );
}
