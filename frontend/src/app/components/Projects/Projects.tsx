"use client";
import { RefObject } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects.data";
import { fadeUp } from "@/lib/animations";
import "./projects.css";

type ProjectsProps = {
  projectsRef: RefObject<HTMLElement | null>;
};

const Projects = ({ projectsRef }: ProjectsProps) => {
  return (
    <section ref={projectsRef} className="projects-section">
      <motion.h2 className="section-title" {...fadeUp}>
        Projects
      </motion.h2>
      <div className="projects-wrapper">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <motion.a
        href="https://github.com/froilanbuendia"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
        className="github-profile"
      >
        View my GitHub Profile
      </motion.a>
    </section>
  );
};

export default Projects;
