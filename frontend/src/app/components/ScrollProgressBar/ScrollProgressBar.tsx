import { motion, useScroll, useSpring } from "framer-motion";
import "./progress.css";
const ScrollProgressBar = () => {
  // Tracks vertical scroll progress (0 = top, 1 = bottom)
  const { scrollYProgress } = useScroll();

  // Smooth out the animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  return (
    <motion.div className="progress-bar-container">
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scaleX,
        }}
      />
    </motion.div>
  );
};

export default ScrollProgressBar;
