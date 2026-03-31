"use client";
import { RefObject } from "react";
import { motion, Variants } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDotnet,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaAws, FaGithub, FaGitAlt } from "react-icons/fa";
import { IconType } from "react-icons";
import "./skills.css";

type SkillItem = {
  name: string;
  icon: IconType;
  color: string;
};

type SkillGroup = {
  label: string;
  skills: SkillItem[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#c9a227" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C# / .NET", icon: SiDotnet, color: "#9B4DE0" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#888888" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#3D9E3D" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    ],
  },
  {
    label: "Tools & Cloud",
    skills: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Firebase", icon: SiFirebase, color: "#F5820D" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#8b5cf6" },
    ],
  },
];

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

type SkillsProps = {
  skillsRef: RefObject<HTMLElement | null>;
};

const Skills = ({ skillsRef }: SkillsProps) => {
  return (
    <section ref={skillsRef} className="skills-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="skills-grid">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            className="skills-group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="skills-group-label">{group.label}</p>

            <motion.div
              className="skills-list"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {group.skills.map((skill, si) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    variants={itemVariants}
                    style={
                      { "--brand-color": skill.color } as React.CSSProperties
                    }
                  >
                    <Icon size={20} />
                    <span>{skill.name}</span>
                    <motion.div
                      className="skill-bar"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{
                        duration: 0.55,
                        delay: si * 0.08 + gi * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      style={{ originX: 0 }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;