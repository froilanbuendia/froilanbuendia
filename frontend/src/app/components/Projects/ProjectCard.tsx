"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import "./projects.css";
import Link from "next/link";
type StackItem = {
  name: string;
  icon: IconType;
};

type ProjectCardProps = {
  title: string;
  description: string;
  stack: StackItem[];
  github: string;
};
const ProjectCard = ({
  title,
  description,
  stack,
  github,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="project-container"
    >
      <div className="project-main">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>

      <div className="project-stack-wrapper">
        <div className="project-stack-container">
          {stack.map((s) => {
            const Icon = s.icon;
            return (
              <div className="stack-item" key={s.name}>
                <Icon size={16} />
              </div>
            );
          })}
        </div>

        {github && (
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="project-github" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
