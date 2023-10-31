import About from "@/components/About";
import Chatbott from "@/components/Chatbot";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

function home() {
  return (
    <div className="overflow-x-hidden relative w-full mx-auto h-screen bg-[#111] ">
      {/*Navbar */}
      <Navbar />
      {/*about me  need to edit*/}
      <About />

      {/*skills */}
      <Skills />

      {/*projects */}
      <Projects />

      {/*contact me */}
      <section id="contact">
        <Contact />
      </section>
      <Chatbott />
    </div>
  );
}

export default home;
