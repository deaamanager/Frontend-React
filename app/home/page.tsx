import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

function page() {
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
    </div>
  );
}

export default page;
