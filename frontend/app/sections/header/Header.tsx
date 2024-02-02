import HeaderCSS from "./header.module.css";
import About from "./about/About";
export default function Header() {
  return (
    <section id="about">
      <div className={HeaderCSS.header}>
        <div className={HeaderCSS.name}>Froilan Buendia</div>
        <div className={HeaderCSS.job}>Software Engineer</div>
        <About />
      </div>
    </section>
  );
}
