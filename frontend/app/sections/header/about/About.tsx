import AboutCSS from "./about.module.css";
import Me from "../../../assets/images/me.jpg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
export default function About() {
  return (
    <div className={AboutCSS.aboutMe}>
      <div className={AboutCSS.me}>
        <img src={Me.src} alt="" className={AboutCSS.meImg} />
        <div className={AboutCSS.iconsContainer}>
          <div>
            <a
              href="Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={AboutCSS.resume}
            >
              Download Resume
            </a>
          </div>

          <a
            href="https://www.linkedin.com/in/froilan-buendia-97b602209/"
            target="_blank"
            className={AboutCSS.linkedIn}
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/froilanbuendia?tab=repositories"
            target="_blank"
            className={AboutCSS.github}
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className={AboutCSS.about}>
        <div className={AboutCSS.aboutTitle}> About Me</div>
        <div className={AboutCSS.aboutText}>
          Hello, I&apos;m Froilan! I am an aspiring software engineer pursuing a
          Bachelor&apos;s degree in Computer Science at Cal State Long Beach. I
          am currently a senior, expecting to graduate in December 2024. I like
          to build full-stack web applications and always looking forward to
          learning something new.
        </div>
        <div className={AboutCSS.techSkills}>
          <div className={AboutCSS.skillsTitle}>Technical Skills</div>
          <div className={AboutCSS.skills}>
            <div className={AboutCSS.skillsText}>Python</div>
            <div className={AboutCSS.skillsText}>Java</div>
            <div className={AboutCSS.skillsText}>HTML</div>
            <div className={AboutCSS.skillsText}>CSS</div>
            <div className={AboutCSS.skillsText}>JavaScript</div>
            <div className={AboutCSS.skillsText}>TypeScript</div>
            <div className={AboutCSS.skillsText}>React</div>
            <div className={AboutCSS.skillsText}>Next.js</div>
            <div className={AboutCSS.skillsText}>Node.js</div>
            <div className={AboutCSS.skillsText}>Express.js</div>
            <div className={AboutCSS.skillsText}>SQL</div>
            <div className={AboutCSS.skillsText}>PostgreSQL</div>
            <div className={AboutCSS.skillsText}>MongoDB</div>
            <div className={AboutCSS.skillsText}>Django</div>
            <div className={AboutCSS.skillsText}>Linux</div>
          </div>
        </div>
        <div className={AboutCSS.contact}>
          <a href="#contacts" className={AboutCSS.contactBtn}>
            Let&lsquo;s Talk
          </a>
        </div>
      </div>
    </div>
  );
}
