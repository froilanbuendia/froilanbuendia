"use client";
import { RefObject } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaAws, FaCode } from "react-icons/fa";
import { IconType } from "react-icons";
import "./education.css";

type EducationProps = {
  educationRef: RefObject<HTMLElement | null>;
};

const courses = [
  "Data Structures",
  "Algorithms",
  "Operating Systems",
  "Database Systems",
  "Software Engineering",
  "Computer Networks",
  "Artificial Intelligence",
];

type Cert = {
  id: string;
  title: string;
  issuer: string;
  icon: IconType;
  color: string;
  featured: boolean;
};

const certs: Cert[] = [
  {
    id: "aws",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: FaAws,
    color: "#FF9900",
    featured: true,
  },
  {
    id: "scrimba",
    title: "Front End Developer Career Path",
    issuer: "Scrimba",
    icon: FaCode,
    color: "#623CE4",
    featured: false,
  },
];

const Education = ({ educationRef }: EducationProps) => {
  return (
    <section ref={educationRef} className="education-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <motion.div
        className="education-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="education-icon">
          <FaGraduationCap size={36} />
        </div>
        <div className="education-content">
          <h3 className="education-degree">
            Bachelor of Science, Computer Science
          </h3>
          <p className="education-school">
            California State University, Long Beach
          </p>
          <p className="education-date">Graduated December 2024</p>
          <div className="education-courses">
            <span className="education-course-label">Relevant Coursework</span>
            <div className="education-course-tags">
              {courses.map((course) => (
                <span key={course} className="education-course-tag">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="certs-section">
        <span className="education-course-label">Certifications</span>
        <div className="certs-list">
          {certs.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                className={`cert-card${cert.featured ? " cert-card--featured" : ""}`}
                style={{ "--cert-color": cert.color } as React.CSSProperties}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="cert-icon">
                  <Icon size={cert.featured ? 34 : 22} />
                </div>
                <div className="cert-content">
                  <p className="cert-title">{cert.title}</p>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
                {cert.featured && (
                  <span className="cert-badge">Cloud</span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;