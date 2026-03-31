"use client";
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
  SiGatsby,
  SiExpress,
} from "react-icons/si";
import "./projects.css";

type ProjectsProps = {
  projectsRef: RefObject<HTMLElement | null>;
};

const Projects = ({ projectsRef }: ProjectsProps) => {
  return (
    <section ref={projectsRef} className="projects-section">
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
          title="Nilly's Burger Shop"
          description="Built and deployed a website for a real local restaurant — actively used by customers to find the location and get in touch. Led the contact page with Google Maps integration, a direct phone link, and an email form so customers can reach the restaurant in one click."
          stack={[
            { name: "Gatsby", icon: SiGatsby },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Google Maps API", icon: SiGooglemaps },
            { name: "Netlify", icon: SiNetlify },
          ]}
          github=""
          demo="https://www.nillysburgershop.com/"
          featured
          status="live"
        />
        <ProjectCard
          title="LetMeRun"
          description="Personal training dashboard that connects to Strava via OAuth 2.0 to pull real workout data and surface insights I actually use for marathon training. Tracks mileage load, flags overtraining risk, and visualizes pace and elevation trends through interactive Chart.js graphs."
          stack={[
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Node / Express", icon: SiExpress },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Strava API", icon: FaStrava },
          ]}
          github="https://github.com/froilanbuendia/RunBalance"
          featured
          status="in-progress"
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
          status="archived"
        />
        <ProjectCard
          title="ProTasker"
          description="A Chrome Extension that helps users boost productivity by tracking time-on-site and blocking distracting websites. Features intuitive UI for configuring blocklists and time limits, robust session management, and real-time application of blocking rules across active tabs. Developed collaboratively using GitHub PRs, issue tracking, and iterative feature delivery."
          stack={[
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
          ]}
          github="https://github.com/JHowellLB/ProTasker"
          status="archived"
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
          status="archived"
        />
        <ProjectCard
          title="Chess Engine"
          description="A fully-featured chess engine and interface supporting move validation, check/checkmate detection, and advanced attack calculations. Features a visual board with piece images, interactive square selection, and dynamic highlighting of possible moves and attacked positions. Implements core chess rules including pawn and king movement, and provides an extensible architecture for future enhancements like castling and en passant."
          stack={[
            { name: ".NET", icon: SiDotnet },
            { name: "Avalonia", icon: SiAvaloniaui },
          ]}
          github=""
          status="archived"
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
