import { motion } from "framer-motion";
import { about } from "./aboutData";

function AboutContent() {
  return (
    <div className="about-content">

      <motion.span
        className="section-subtitle"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {about.subtitle}
      </motion.span>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {about.title}
      </motion.h2>

      {about.description.map((text, index) => (
        <motion.p
          key={index}
          className="about-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.2,
          }}
        >
          {text}
        </motion.p>
      ))}

    </div>
  );
}

export default AboutContent;