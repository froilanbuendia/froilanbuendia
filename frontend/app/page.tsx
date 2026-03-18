import HomeCSS from "./page.module.css";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <div className={HomeCSS.home}>
      <Main />
      <Projects />
    </div>
  );
}
