import FroiFrames from "./FroiFrames/FroiFrames";
import ProTasker from "./ProTasker/ProTasker";
import Nillys from "./Nillys/Nillys";
import ProjectsCSS from "./project.module.css";
const Projects = () => {
  return (
    <section id="projects">
      <div className={ProjectsCSS.projectTitleWrapper}>
        <div className={ProjectsCSS.basketball}>
          <div className={ProjectsCSS.ball}>
            <div className={ProjectsCSS.lines}></div>
          </div>
          <div className={ProjectsCSS.shadow}></div>
        </div>
        <div className={ProjectsCSS.projectTitle}>Projects</div>
      </div>
      <FroiFrames />
      <ProTasker />
      <Nillys />
    </section>
  );
};

export default Projects;
