import NavbarCSS from "./navbar.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";

export default function Navbar() {
  return (
    <div className={NavbarCSS.navbarContainer}>
      <div className={NavbarCSS.navbar}>
        <a href="#about" className={NavbarCSS.icons}>
          <AiOutlineUser />
        </a>
        <a href="#projects" className={NavbarCSS.icons}>
          <GrProjects />
        </a>
      </div>
    </div>
  );
}
