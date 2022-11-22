import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/froilan-buendia-97b602209"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/froilanbuendia?tab=repositories"
        target="_blank"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
