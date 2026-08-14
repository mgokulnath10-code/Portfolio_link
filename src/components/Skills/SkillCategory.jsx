import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

function SkillCategory({ category }) {
  return (
    <motion.section
      className="skill-category"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className="category-header">

        <h2 className="category-title">
          {category.category}
        </h2>

        <div className="category-line"></div>

      </div>

      <div className="skills-grid">

        {category.skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}

      </div>

    </motion.section>
  );
}

export default SkillCategory;