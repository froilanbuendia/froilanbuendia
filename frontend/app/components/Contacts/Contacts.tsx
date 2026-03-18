import contactCSS from "./contacts.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Contacts = () => {
  return (
    <section id="contacts" className={contactCSS.contactsWrapper}>
      <div>
        <div className={contactCSS.contactsContainer}>
          <a
            href="mailto:froilangbuendia@gmail.com"
            target="_blank"
            className={contactCSS.contactsBox}
          >
            <div className={contactCSS.contactsSocial}>
              <MdOutlineEmail className={contactCSS.contactsSocialIcon} />
              <h5>froilangbuendia@gmail.com</h5>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/froilan-buendia-97b602209/"
            target="_blank"
            className={contactCSS.contactsBox}
          >
            <div className={contactCSS.contactsSocial}>
              <BsLinkedin className={contactCSS.contactsSocialIcon} />
              <h5>Froilan Buendia</h5>
            </div>
          </a>
          <a
            href="https://github.com/froilanbuendia"
            target="_blank"
            className={contactCSS.contactsBox}
          >
            <div className={contactCSS.contactsSocial}>
              <FaGithub className={contactCSS.contactsSocialIcon} />
              <h5>froilanbuendia</h5>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
