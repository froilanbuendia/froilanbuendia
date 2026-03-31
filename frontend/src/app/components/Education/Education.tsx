"use client";
import { RefObject } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
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
    </section>
  );
};

export default Education;