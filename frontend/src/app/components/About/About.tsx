"use client";
import { RefObject } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import Image from "next/image";
import "./about.css";

type AboutProps = {
  aboutRef: RefObject<HTMLElement | null>;
};

const tags = [
  "Full-Stack Dev",
  "UI/UX",
  "Sports Analytics",
  "Marathon Runner",
  "Continuous Learner",
  "Open to Work",
];

const About = ({ aboutRef }: AboutProps) => {
  const photoX = useMotionValue(0);
  const photoY = useMotionValue(0);
  const springX = useSpring(photoX, { stiffness: 80, damping: 20 });
  const springY = useSpring(photoY, { stiffness: 80, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    photoX.set(x * -14);
    photoY.set(y * -14);
  };

  const handleMouseLeave = () => {
    photoX.set(0);
    photoY.set(0);
  };

  return (
    <section ref={aboutRef} className="about-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>

      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* ── Left: photo only ── */}
        <div className="about-left">
          <motion.div style={{ x: springX, y: springY }}>
            <div className="about-img-ring">
              <Image
                src="/nillys.jpeg"
                width={0}
                height={0}
                alt="Froilan Buendia headshot"
                className="about-img"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Right: bio + education + tags ── */}
        <div className="about-right">
          <motion.div
            className="about-bio"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="about-bio-lead">
              CS grad building full-stack web apps and sports analytics tools.
            </p>
            <p className="about-bio-body">
              I specialize in React, Node.js, and TypeScript, and enjoy taking
              ideas from concept to polished, functional products. Outside of
              code, I&apos;m a marathon runner who loves exploring the
              intersection of sports and technology.
            </p>
          </motion.div>

          {/* Inline education card */}
          <motion.div
            className="about-edu-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-edu-icon">
              <FaGraduationCap size={22} />
            </div>
            <div>
              <p className="about-edu-degree">B.S. Computer Science</p>
              <p className="about-edu-meta">
                California State University, Long Beach &nbsp;·&nbsp; Dec 2024
              </p>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            className="about-tags"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                className="tag"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
                whileHover={{ scale: 1.06, transition: { duration: 0.1 } }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;