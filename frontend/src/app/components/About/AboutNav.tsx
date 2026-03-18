import { motion } from "framer-motion";
type AboutNavProps = {
  about: string;
  setAbout: (content: string) => void;
};
const AboutNav = ({ about, setAbout }: AboutNavProps) => {
  const tabs = ["professional", "personal"];

  return (
    <nav className="about-nav-container">
      <ul className="about-nav-ul">
        {tabs.map((tab) => (
          <motion.li
            key={tab}
            className="about-nav-li"
            onClick={() => setAbout(tab)}
            whileHover={{ scale: 1.02 }} // hover scale effect
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {about === tab && (
              <motion.div
                className="active-underline active"
                layoutId="underline" // shared layout animation
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default AboutNav;
