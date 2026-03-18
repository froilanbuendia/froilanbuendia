"use client";
import { useState } from "react";
import NavCSS from "./navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className={NavCSS.navWrapper}>
      <div className={NavCSS.navContainer}>
        <div className={NavCSS.initialBrand}>
          <div className={NavCSS.initialFont}>FB</div>
          <div className={NavCSS.occupation}>Software Engineer</div>
        </div>
        <div className={NavCSS.nameFont}>Froilan Buendia</div>
        <div className={NavCSS.sectionWrapper}>
          {menu ? (
            <IoClose
              className={NavCSS.hamburgerExit}
              onClick={() => {
                setMenu(!menu);
              }}
            />
          ) : (
            <div className={NavCSS.sectionContainer}>
              <Link href="#projects">
                <div className={NavCSS.contact}>Projects</div>
              </Link>
              <Link href="#contacts">
                <div className={NavCSS.contact}>Contact</div>
              </Link>
            </div>
          )}
          {menu ? (
            <IoClose
              className={NavCSS.hamburger}
              onClick={() => {
                setMenu(!menu);
              }}
            />
          ) : (
            <GiHamburgerMenu
              className={NavCSS.hamburger}
              onClick={() => {
                setMenu(!menu);
              }}
            />
          )}
        </div>
      </div>
      {menu && (
        <div className={NavCSS.menuContainer}>
          <a
            href="mailto:froilangbuendia@gmail.com"
            target="_blank"
            className={NavCSS.contactsBox}
          >
            <div className={NavCSS.contactsSocial}>
              <MdOutlineEmail className={NavCSS.contactsSocialIcon} />
              <h5>froilangbuendia@gmail.com</h5>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/froilan-buendia-97b602209/"
            target="_blank"
            className={NavCSS.contactsBox}
          >
            <div className={NavCSS.contactsSocial}>
              <BsLinkedin className={NavCSS.contactsSocialIcon} />
              <h5>Froilan Buendia</h5>
            </div>
          </a>
          <a
            href="https://github.com/froilanbuendia"
            target="_blank"
            className={NavCSS.contactsBox}
          >
            <div className={NavCSS.contactsSocial}>
              <FaGithub className={NavCSS.contactsSocialIcon} />
              <h5>froilanbuendia</h5>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};
export default Navbar;
