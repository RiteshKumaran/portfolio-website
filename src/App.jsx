import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Events } from "./components/Events";
import ScrollToTop from "react-scroll-to-top";
import { Loading } from "./components/Loading";
import { Toaster } from "sonner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700); // Adjust the delay as needed (e.g., 3000ms for 3 seconds)

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Toaster />
      <div className="overflow-x-hidden text-neutral-300 antialiased">
        <ScrollToTop
          smooth
          top={900}
          color="white"
          style={{
            backgroundColor: "rgba(255,255,255,0)",
            borderRadius: "50%",
            paddingLeft: "6px",
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
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
