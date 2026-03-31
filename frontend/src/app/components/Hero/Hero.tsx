"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosPaper } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { RefObject, useState, useEffect } from "react";
import MagneticButton from "../MagneticButton/MagneticButton";
import "./hero.css";

type HeroProps = {
  heroRef: RefObject<HTMLElement | null>;
  handleProjectsRef: () => void;
};

const titles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Frontend Developer",
  "Sports Tech Builder",
];
const currentlyItems = [
  "Training for a marathon",
  "Building full-stack projects",
  "Open to full-time roles",
];
const nameWords = ["Froilan", "Buendia"];

const Hero = ({ heroRef, handleProjectsRef }: HeroProps) => {
  const MotionImage = motion(Image);

  // ── Typewriter state ──
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    if (isPausing) {
      const id = setTimeout(() => {
        setCharIndex(0);
        setTitleIndex((i) => (i + 1) % titles.length);
        setIsPausing(false);
      }, 400);
      return () => clearTimeout(id);
    }

    if (charIndex < titles[titleIndex].length) {
      const id = setTimeout(() => setCharIndex((c) => c + 1), 65);
      return () => clearTimeout(id);
    } else {
      const id = setTimeout(() => setIsPausing(true), 1800);
      return () => clearTimeout(id);
    }
  }, [charIndex, titleIndex, isPausing]);

  const displayTitle = titles[titleIndex].slice(0, charIndex);

  // ── Currently cycling ──
  const [currentlyIndex, setCurrentlyIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrentlyIndex((i) => (i + 1) % currentlyItems.length),
      2500,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-container" ref={heroRef}>
      <div className="hero-me-container">
        {/* Available badge */}
        <motion.span
          className="hero-available"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="available-dot" />
          Available for full-time roles
        </motion.span>

        {/* Name — word-by-word reveal */}
        <h1 className="hero-name" aria-label="Froilan Buendia">
          {nameWords.map((word, i) => (
            <span key={word} className="word-mask">
              <motion.span
                className="word-inner"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.75,
                  delay: 0.2 + i * 0.18,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Typewriter title */}
        <div className="hero-job-wrapper">
          <h2 className="hero-job">
            {displayTitle}
            <span className="hero-cursor" aria-hidden="true" />
          </h2>
        </div>

        {/* Bio */}
        <motion.p
          className="hero-bio"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          CS grad from CSULB. I build full-stack web apps and sports analytics
          tools with a focus on clean design and real-world impact.
        </motion.p>

        {/* Currently widget */}
        <motion.div
          className="hero-currently"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <span className="currently-label">Now</span>
          <span className="currently-sep">→</span>
          <div className="currently-item-wrapper">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentlyItems[currentlyIndex]}
                className="currently-item"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                {currentlyItems[currentlyIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="hero-btn-container"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <MagneticButton>
            <a className="hero-btn" href="/resumefbuendia.pdf" target="_blank">
              Resume <IoIosPaper />
            </a>
          </MagneticButton>
          <MagneticButton>
            <button
              className="hero-btn primary-btn"
              onClick={handleProjectsRef}
            >
              Projects <GrProjects />
            </button>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="hero-img-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      >
        <MotionImage
          src="/grad-photo.jpeg"
          alt="Froilan Buendia graduation photo, California State University Long Beach"
          className="hero-img"
          width={0}
          height={0}
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.02, 1],
            rotate: [0, 0.3, -0.3, 0],
            filter: [
              "drop-shadow(0px 20px 28px rgba(0,0,0,0.25))",
              "drop-shadow(0px 32px 45px rgba(0,0,0,0.32))",
              "drop-shadow(0px 20px 28px rgba(0,0,0,0.25))",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
