import { motion } from "framer-motion";

import SkillCategory from "./SkillCategory";
import skillsData from "./skillsData";

function SkillsGrid() {
  return (
    <motion.div
      className="skills-container"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {skillsData.map((category, index) => (
        <motion.div
          key={category.category}
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
            delay: index * 0.2,
            duration: 0.6,
          }}
        >
          <SkillCategory category={category} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default SkillsGrid;