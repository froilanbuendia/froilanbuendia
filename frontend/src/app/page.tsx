"use client";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollProgressBar from "./components/ScrollProgressBar/ScrollProgressBar";
import { useRef } from "react";

export default function Page() {
  const heroRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const refs: Record<string, React.RefObject<HTMLElement | null>> = {
    hero: heroRef,
    skills: skillsRef,
    projects: projectsRef,
    about: aboutRef,
    contact: contactRef,
  };

  const scrollTo = (section: string) => {
    refs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="page-container">
      <ScrollProgressBar />
      <Navbar scrollTo={scrollTo} />
      <Hero heroRef={heroRef} handleProjectsRef={() => scrollTo("projects")} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <About aboutRef={aboutRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}
