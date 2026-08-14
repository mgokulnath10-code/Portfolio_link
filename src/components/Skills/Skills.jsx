import { motion } from "framer-motion";

import "./skills.css";

import SkillsGrid from "./SkillsGrid";

function Skills() {
  return (
    <section
      id="skills"
      className="skills-section"
    >
      {/* Background Effects */}

      <div className="skills-bg">

        <div className="skills-circle circle-1"></div>

        <div className="skills-circle circle-2"></div>

      </div>

      <div className="skills-wrapper">

        <motion.div
          className="skills-heading"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <span className="skills-subtitle">
            MY EXPERTISE
          </span>

          <h2 className="skills-title">
            Technical Skills
          </h2>

          <p className="skills-description">
            I enjoy working with modern technologies and
            continuously improving my development skills.
            Here are the technologies and tools that I use
            to build responsive, scalable and efficient
            applications.
          </p>

        </motion.div>

        <SkillsGrid />

      </div>

    </section>
  );
}

export default Skills;