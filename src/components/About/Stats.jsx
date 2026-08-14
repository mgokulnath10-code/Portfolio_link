import { motion } from "framer-motion";
import { stats } from "./aboutData";

function Stats() {
  return (
    <div className="stats-container">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          className="stat-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.15,
            duration: 0.5,
          }}
        >
          <h2 className="stat-number">
            {item.number}
          </h2>

          <p className="stat-label">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default Stats;