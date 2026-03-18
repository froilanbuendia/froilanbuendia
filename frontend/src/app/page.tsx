"use client";
// import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import ScrollProgressBar from "./components/ScrollProgressBar/ScrollProgressBar";
// import { useRef } from "react";

export default function Page() {
  // const aboutRef = useRef<HTMLElement>(null);
  // const projectsRef = useRef<HTMLElement>(null);
  // const heroRef = useRef<HTMLElement>(null);
  // const scrollToAbout = () => {
  //   aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  // };
  // const scrollToProjects = () => {
  //   projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  // };
  // const scrollToHero = () => {
  //   heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  // };

  return (
    <div className="page-container">
      {/* <ScrollProgressBar />
      <Hero
        heroRef={heroRef}
        handleAboutRef={scrollToAbout}
        handleProjectsRef={scrollToProjects}
      />
      <Projects projectsRef={projectsRef} />
      <About aboutRef={aboutRef} handleHeroRef={scrollToHero} /> */}
      Hello World
    </div>
  );
}
