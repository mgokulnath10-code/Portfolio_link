import { motion } from "framer-motion";

function SkillProgress({ level }) {
  return (
    <div className="skill-progress">

      <motion.div
        className="skill-progress-fill"
        initial={{
          width: 0,
        }}
        whileInView={{
          width: `${level}%`,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      />

      <span className="skill-percent">
        {level}%
      </span>

    </div>
  );
}

export default SkillProgress;