import { motion } from "framer-motion";
import SkillProgress from "./SkillProgress";

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      className="skill-card"
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
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
    >
      <div className="skill-header">

        <div className="skill-icon">
          <Icon />
        </div>

        <div className="skill-info">
          <h3>{skill.name}</h3>
        </div>

      </div>

      <SkillProgress level={skill.level} />

    </motion.div>
  );
}

export default SkillCard;