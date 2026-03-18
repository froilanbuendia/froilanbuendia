"use client";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

type Tag = {
  label: string | IconType;
};
type AboutDescriptionProps = {
  content: string;
  tags: Tag[];
};
const AboutDescription = ({ content, tags }: AboutDescriptionProps) => {
  return (
    <div className="about-description-container">
      <article className="flip-card about-description">
        <p style={{ whiteSpace: "pre-line" }}>{content}</p>
        <div className="tags-container">
          {tags.map((tag, i) => {
            if (typeof tag.label === "string") {
              return (
                <motion.span
                  key={i}
                  className="tag"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
                >
                  {tag.label}
                </motion.span>
              );
            }

            const Icon = tag.label;
            return (
              <motion.span
                key={i}
                className="tag"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.1 },
                }}
              >
                <Icon />
              </motion.span>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default AboutDescription;
