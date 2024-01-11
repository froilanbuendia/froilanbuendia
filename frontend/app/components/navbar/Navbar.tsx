import NavbarCSS from "./navbar.module.css";
import { AiOutlineUser } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className={NavbarCSS.navbar}>
      <a href="#about" className={NavbarCSS.icons}>
        <AiOutlineUser />
      </a>
    </div>
  );
}
