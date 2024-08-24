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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
