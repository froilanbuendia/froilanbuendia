import { RefObject, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosArrowUp, IoIosPaper } from "react-icons/io";
import AboutNav from "./AboutNav";
import FroiNillys from "../../../../public/nillys.jpeg";
import "./about.css";
import AboutDescription from "./AboutDescription";
import Image from "next/image";

type AboutProps = {
  aboutRef: RefObject<HTMLElement | null>;
  handleHeroRef: () => void;
};
const About = ({ aboutRef, handleHeroRef }: AboutProps) => {
  const [about, setAbout] = useState("professional");
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
        className="about-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="about-container">
          <div className="about-img-container">
            <Image
              src={FroiNillys}
              alt="Froilan Nilly's Headshot"
              className="about-img"
            />
            <div className="about-icon-cta-container">
              <div className="about-icon-container">
                <a
                  href={`https://www.linkedin.com/in/froilan-buendia-97b602209/`}
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a href={`https://github.com/froilanbuendia`} target="_blank">
                  <FaGithub />
                </a>
                <a href="/resumefbuendia.pdf" target="_blank">
                  <IoIosPaper />
                </a>
              </div>
              <motion.a
                className="work-btn"
                href="mailto:froilangbuendia@gmail.com"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.1 },
                }}
                transition={{ duration: 0.5 }}
              >
                Let's Work Together
              </motion.a>
            </div>
          </div>
          <div className="about-content-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={about}
                initial={{ rotateY: 5, opacity: 0, x: 10 }}
                animate={{ rotateY: 0, opacity: 1, x: 0 }}
                exit={{ rotateY: -5, opacity: 0, x: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <AboutNav about={about} setAbout={setAbout} />
                {about === "professional" && (
                  <AboutDescription
                    content={`\t I’m Froilan, a Computer Science graduate from CSULB with a passion for building intuitive web applications and engaging user interfaces. I specialize in creating dynamic, responsive websites using modern technologies, with a strong focus on performance, usability, and clean design.

In addition to web development, I’m deeply interested in sports analytics and data-driven decision-making. I enjoy leveraging technology to analyze sports data, uncover meaningful insights, and build tools that can support smarter strategies for teams and organizations. This intersection of sports and technology is where I’m especially motivated to grow and make an impact.

My work combines creativity, technical problem-solving, and attention to detail to deliver solutions that are both visually polished and highly functional. I’m comfortable taking ideas from concept to implementation, and I enjoy the process of refining and improving products through iteration.

I thrive on challenging projects, continuous learning, and exploring new technologies. Whether it’s building scalable web applications or experimenting with data-driven tools, I’m always looking for ways to push my skills forward and create meaningful, real-world impact.`}
                    tags={[
                      { label: `Web Development` },
                      { label: `UI/UX` },
                      { label: `Responsive Design` },
                      { label: `Data Analysis` },
                      { label: `Statistical Insights` },
                      { label: `Sports Technology` },
                    ]}
                  />
                )}
                {about === "personal" && (
                  <AboutDescription
                    content={`I’m Froilan, a sports enthusiast who thrives on staying active and constantly pushing my limits. Running and working out are a big part of my life—I’m currently training for marathons, and I enjoy the discipline and mental focus that come with long-distance training. That same mindset carries over into how I approach challenges in both life and tech: consistent effort, incremental improvement, and a drive to get better every day.

Outside of training, I like to unwind with video games and keep up with the latest in sports analytics, where my interest in performance and data naturally overlaps with technology. I’m especially drawn to how data and software can be used to analyze performance, uncover insights, and improve decision-making in sports.

I also enjoy staying up to date with emerging tech trends, tools, and industry developments. Whether it’s new frameworks, AI advancements, or innovations in sports technology, I’m always curious about how things work and how they can be applied in meaningful ways. For me, it’s all about finding that balance—between staying active, continuously learning, and exploring how technology can enhance both performance and everyday experiences.`}
                    tags={[
                      { label: `Marathon Runner` },
                      { label: `Sports Enthusiast` },
                      { label: `Gamer` },
                    ]}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
      <motion.button
        className="about-hero"
        onClick={handleHeroRef}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.1 },
        }}
      >
        Go back to home <IoIosArrowUp />
      </motion.button>
    </section>
  );
};

export default About;
