"use client";
import { RefObject } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import "./contact.css";

type ContactProps = {
  contactRef: RefObject<HTMLElement | null>;
};

const Contact = ({ contactRef }: ContactProps) => {
  return (
    <section ref={contactRef} className="contact-section">
      <motion.div
        className="contact-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="contact-title">Let&apos;s Connect</h2>
        <p className="contact-subtitle">
          I&apos;m actively looking for full-time software engineering roles.
          If you have an opportunity, a project, or just want to say hello —
          feel free to reach out.
        </p>
        <motion.a
          className="contact-email-btn"
          href="mailto:froilangbuendia@gmail.com"
          whileHover={{ scale: 1.04, transition: { duration: 0.1 } }}
        >
          <FaEnvelope size={18} />
          froilangbuendia@gmail.com
        </motion.a>
        <div className="contact-links">
          <motion.a
            href="https://www.linkedin.com/in/froilan-buendia-97b602209/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          >
            <FaLinkedin size={16} />
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/froilanbuendia"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          >
            <FaGithub size={16} />
            GitHub
          </motion.a>
          <motion.a
            href="/resumefbuendia.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          >
            <IoIosPaper size={16} />
            Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;