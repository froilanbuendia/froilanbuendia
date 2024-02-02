import Navbar from "./components/navbar/Navbar";
import Header from "./sections/header/Header";
import Projects from "./sections/projects/Projects";
import Contacts from "./sections/contacts/Contacts";
import HomeCSS from "./page.module.css";

export default function Home() {
  return (
    <div className={HomeCSS.home}>
      <Header />
      <Projects />
      <Contacts />
      <Navbar />
    </div>
  );
}
