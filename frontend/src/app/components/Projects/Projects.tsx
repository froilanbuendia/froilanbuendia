import { RefObject } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { FaReact, FaNodeJs, FaStrava, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiGooglemaps,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiRender,
  SiFirebase,
  SiAvaloniaui,
  SiDotnet,
} from "react-icons/si";
import "./projects.css";

type ProjectsProps = {
  projectsRef: RefObject<HTMLElement | null>;
};

const Projects = ({ projectsRef }: ProjectsProps) => {
  return (
    <section ref={projectsRef}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="projects-wrapper">
        <ProjectCard
          title="Nilly's Website"
          description="Contributed to the development of a website for a local family-owned restaurant, leading implementation of the Menu and Contact pages using reusable components. Integrated Google Maps API to display the restaurant location and improve customer accessibility."
          stack={[
            { name: "React", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Google Maps API", icon: SiGooglemaps },
            { name: "Netlify", icon: SiNetlify },
          ]}
          github="https://github.com/nillysburgers/nillysburgershop-website"
        />
        <ProjectCard
          title="LetMeRun"
          description="A full-stack training and analytics app that connects with Strava to track and visualize runner performance. Features interactive cards for mileage and injury risk, heatmaps for distance, effort, and elevation, and personalized insights to optimize training and recovery."
          stack={[
            { name: "React", icon: FaReact },
            { name: "Node", icon: FaNodeJs },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Strava", icon: FaStrava },
          ]}
          github="https://github.com/froilanbuendia/RunBalance"
        />
        <ProjectCard
          title="Aim Trainer"
          description="A full-stack aim training web app where users can log in, play timed sessions, and track scores. Features secure authentication with Firebase, automated CI/CD deployment with GitHub Actions, and robust unit tests using Jest and React Testing Library to ensure reliability and smooth gameplay."
          stack={[
            { name: "React", icon: FaReact },
            { name: "Node", icon: FaNodeJs },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Render", icon: SiRender },
            { name: "Firebase", icon: SiFirebase },
          ]}
          github="https://github.com/froilanbuendia/aim-trainer"
        />
        <ProjectCard
          title="ProTasker"
          description="A Chrome Extension that helps users boost productivity by tracking time-on-site and blocking distracting websites. Features intuitive UI for configuring blocklists and time limits, robust session management, and real-time application of blocking rules across active tabs. Developed collaboratively using GitHub PRs, issue tracking, and iterative feature delivery."
          stack={[
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
          ]}
          github="https://github.com/JHowellLB/ProTasker"
        />
        <ProjectCard
          title="GradBook"
          description="A photo album web app for storing and sharing senior year and graduation photos. Features fast global delivery using CloudFront with S3-hosted images, and smooth user experience through pagination and asynchronous image loading."
          stack={[
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Amazon S3", icon: FaAws },
            { name: "Render", icon: SiRender },
          ]}
          github="https://github.com/froilanbuendia/Froi-Grad"
        />
        <ProjectCard
          title="Chess Engine"
          description="A fully-featured chess engine and interface supporting move validation, check/checkmate detection, and advanced attack calculations. Features a visual board with piece images, interactive square selection, and dynamic highlighting of possible moves and attacked positions. Implements core chess rules including pawn and king movement, and provides an extensible architecture for future enhancements like castling and en passant."
          stack={[
            { name: ".NET", icon: SiDotnet },
            { name: "Avalonia", icon: SiAvaloniaui },
          ]}
          github=""
        />
      </div>
      <motion.a
        href="https://github.com/froilanbuendia"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.1 },
        }}
        className="github-profile"
      >
        View my GitHub Profile
      </motion.a>
    </section>
  );
};

export default Projects;
