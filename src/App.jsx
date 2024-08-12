import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Events } from "./components/Events";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased">
        <ScrollToTop
          smooth
          top={900}
          color="white"
          className="pl-[6px] bg-black py-2 rounded-full"
        />
        <div className="fixed w-full h-full -z-10">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="mx-auto px-10">
          <Navbar />
          <Hero />
          <About />
          <Tech />
          <Timeline />
          <Projects />
          <Events />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
