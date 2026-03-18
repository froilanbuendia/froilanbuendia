import forestJPEG from "../../assets/images/forest.jpeg";
import MainCSS from "./main.module.css";
import selfJPG from "../../assets/images/self.jpeg";
const Main = () => {
  return (
    <div className={MainCSS.mainWrapper}>
      <img src={forestJPEG.src} className={MainCSS.forestImg} />

      <div className={MainCSS.selfWrapper}>
        <div className={MainCSS.selfContainer}>
          <div>
            <img src={selfJPG.src} className={MainCSS.selfImg} />
          </div>
          <div className={MainCSS.textWrapper}>
            <div className={MainCSS.selfText}>
              Hello, I&apos;m Froilan! I am an aspiring software engineer
              pursuing a Bachelor&apos;s degree in Computer Science at Cal State
              Long Beach. I am currently a senior, expecting to graduate in
              December 2024. I like to build full-stack web applications and
              always looking forward to learning something new.
            </div>
            <div className={MainCSS.techSkills}>
              <div className={MainCSS.skillsTitle}>Technical Skills</div>
              <div className={MainCSS.skills}>
                <div className={MainCSS.skillsText}>Python</div>
                <div className={MainCSS.skillsText}>Java</div>
                <div className={MainCSS.skillsText}>HTML</div>
                <div className={MainCSS.skillsText}>CSS</div>
                <div className={MainCSS.skillsText}>JavaScript</div>
                <div className={MainCSS.skillsText}>TypeScript</div>
                <div className={MainCSS.skillsText}>React</div>
                <div className={MainCSS.skillsText}>Next.js</div>
                <div className={MainCSS.skillsText}>Node.js</div>
                <div className={MainCSS.skillsText}>Express.js</div>
                <div className={MainCSS.skillsText}>SQL</div>
                <div className={MainCSS.skillsText}>PostgreSQL</div>
                <div className={MainCSS.skillsText}>MongoDB</div>
                <div className={MainCSS.skillsText}>Django</div>
                <div className={MainCSS.skillsText}>Linux</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
