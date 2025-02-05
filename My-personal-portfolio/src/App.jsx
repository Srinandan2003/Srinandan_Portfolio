import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/Contact";
import ProjectSection from "./components/projects"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      offset: 200, // Trigger offset
    });
  }, []);

  return (
    <>
      <NavBar />
      <div id="home">
        <Home data-aos="fade-up" />
      </div>
      <div id="about">
        <About data-aos="fade-left" />
      </div>
      <div id="projects">
       <ProjectSection/>
      </div>
      <div id="skills">
        <Skills data-aos="fade-right" />
      </div>
      <div id="contact">
        <Contact data-aos="fade-up" />
      </div>
    </>
  );
}

export default App;
