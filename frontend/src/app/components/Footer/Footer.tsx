import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./footer.css";

const Footer = () => {
  const [count, setCount] = useState<number | null>(null);

  const VISITOR_API_URL = process.env.NEXT_PUBLIC_VISITOR_API_URL;

  console.log("here", VISITOR_API_URL);
  useEffect(() => {
    if (!VISITOR_API_URL) {
      console.error("NEXT_PUBLIC_VISITOR_API_URL is not set");
      return;
    }

    fetch(VISITOR_API_URL, { method: "POST" })
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error("Visitor counter error:", err));
  }, []);
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">Froilan Buendia</p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} — Built with Next.js
        </p>
        <div className="footer-links">
          <span>{count !== null ? `Visitor #${count}` : "Loading..."}</span>
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
