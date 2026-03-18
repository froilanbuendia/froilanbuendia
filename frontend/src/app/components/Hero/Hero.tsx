"use client";
import Image from "next/image";
import FroiGrad from "../../../../public/grad-photo.jpeg";
import { motion } from "framer-motion";
import { IoIosArrowDown, IoIosPaper } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { RefObject } from "react";
import "./hero.css";

type ButtonProps = {
  heroRef: RefObject<HTMLElement | null>;
  handleAboutRef: () => void;
  handleProjectsRef: () => void;
};

const Hero = ({ heroRef, handleAboutRef, handleProjectsRef }: ButtonProps) => {
  const MotionImage = motion(Image);
  return (
    <section className="hero-container" ref={heroRef}>
      <motion.div
        className="hero-me-container"
        initial={{ opacity: 1, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="hero-name">Froilan Buendia</h1>
        <h2 className="hero-job">Software Engineer</h2>
        <motion.div
          className="hero-btn-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.a
            className="hero-btn"
            href="/resumefbuendia.pdf"
            target="_blank"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.5 }}
          >
            Resume <IoIosPaper />
          </motion.a>
          <motion.button
            className="hero-btn primary-btn"
            onClick={handleProjectsRef}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.5 }}
          >
            Projects <GrProjects />
          </motion.button>
        </motion.div>
        <motion.button
          className="hero-about"
          onClick={handleAboutRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
        >
          Learn more about me <IoIosArrowDown />
        </motion.button>
      </motion.div>
      <div className="hero-img-wrapper">
        <MotionImage
          src={FroiGrad}
          alt="Picture of Froilan from graduation photos and California State University of Long Beach"
          className="hero-img"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
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
            opacity: { duration: 1 },

            duration: 4,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
