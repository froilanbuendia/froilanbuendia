import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">Froilan Buendia</p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} — Built with Next.js
        </p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/froilan-buendia-97b602209/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/froilanbuendia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;