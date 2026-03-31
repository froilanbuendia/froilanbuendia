"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./navbar.css";

type NavbarProps = {
  scrollTo: (section: string) => void;
};

const Navbar = ({ scrollTo }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["skills", "projects", "about", "contact"];

  return (
    <nav className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <motion.button
          className="navbar-logo"
          onClick={() => scrollTo("hero")}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1 }}
        >
          FB.
        </motion.button>
        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link}>
              <button className="navbar-link" onClick={() => scrollTo(link)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
