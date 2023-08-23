import Chatbott from "@/components/Chatbot";
import Hero from "@/components/Hero";
import LoadingPage from "@/components/LoadingPage";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <div className="w-full mx-auto overflow-hidden bg-[#111]/90 relative">
          <Hero />
        </div>
      </Suspense>
    </>
  );
}
