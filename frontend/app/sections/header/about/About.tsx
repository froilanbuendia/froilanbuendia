import AboutCSS from "./about.module.css";
import Me from "../../../assets/images/me.jpg";
// import Resume from "../../../assets/files/Resume.pdf";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
export default function About() {
  return (
    <div className={AboutCSS.aboutMe}>
      <div className={AboutCSS.me}>
        <img src={Me.src} alt="" className={AboutCSS.meImg} />
        <div className={AboutCSS.icons}>
          <a href="Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button type="button" className={AboutCSS.resume}>
              Download Resume
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/froilan-buendia-97b602209/"
            target="_blank"
            className={AboutCSS.linkedIn}
          >
            <BsLinkedin size={70} />
          </a>

          <a
            href="https://github.com/froilanbuendia?tab=repositories"
            target="_blank"
            className={AboutCSS.github}
          >
            <FaGithub size={70} />
          </a>
        </div>
      </div>
      <div className={AboutCSS.about}>
        <div className={AboutCSS.aboutTitle}> About Me</div>
        <div className={AboutCSS.aboutText}>
          Hello, I'm Froilan! I am an aspiring software engineer pursuing a
          Bachelor's degree in Computer Science at Cal State Long Beach. I am
          currently a senior, expecting to graduate in May 2024. I like to build
          full-stack web applications and always looking forward to learning
          something new.
        </div>
        <a href="#contact" className={AboutCSS.contact}>
          <button type="button" className={AboutCSS.contactBtn}>
            Let&lsquo;s Talk
          </button>
        </a>
      </div>
    </div>
  );
}
