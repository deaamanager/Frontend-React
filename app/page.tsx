import Chatbott from "@/components/Chatbot";
import Hero from "@/components/Hero";
import LoadingPage from "@/components/LoadingPage";
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
