"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { IconType } from "react-icons";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
  demo?: string;
  featured?: boolean;
  status?: "in-progress" | "live" | "archived";
};

const ProjectCard = ({
  title,
  description,
  stack,
  github,
  demo,
  featured,
  status,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const glowBackground = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, var(--info) 0%, transparent 65%)`,
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - y) * 12);
    rotateY.set((x - 0.5) * 12);
    glowX.set(x * 100);
    glowY.set(y * 100);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.div
      className={`project-tilt-wrapper${featured ? " project-tilt-wrapper--featured" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        ref={cardRef}
        className="project-container"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Cursor-following glow */}
        <motion.div
          className="card-glow"
          style={{ background: glowBackground }}
        />

        <div className="project-main">
          {featured && <span className="project-featured-badge">Featured</span>}
          <div className="project-title-row">
            <h3 className="project-title">{title}</h3>
            {status === "in-progress" && (
              <span className="project-status-badge">In Progress</span>
            )}
            {status === "live" && (
              <span className="project-status-badge project-status-badge--live">
                Live
              </span>
            )}
            {status === "archived" && (
              <span className="project-status-badge project-status-badge--archived">
                Archived
              </span>
            )}
          </div>
          <p className="project-description">{description}</p>
        </div>

        <div className="project-stack-wrapper">
          <div className="project-stack-container">
            {stack.map((s) => {
              const Icon = s.icon;
              return (
                <div className="stack-item" key={s.name}>
                  <Icon size={14} />
                  <span>{s.name}</span>
                </div>
              );
            })}
          </div>

          {demo && (
            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-link"
            >
              <FaExternalLinkAlt size={12} />
              <span>Live</span>
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-link"
            >
              <FaGithub size={14} />
              <span>Code</span>
            </Link>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
