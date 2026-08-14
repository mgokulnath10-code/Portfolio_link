import { motion } from "framer-motion";
import "./leetcode.css";

const username = "Gokulnath__M";

function LeetCodeCard() {
  return (
    <motion.div
      className="leetcode-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="leetcode-card">

        <h2>LeetCode Profile</h2>

        <p>
          Username:
          <span> {username}</span>
        </p>

        <img
          src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=Poppins&ext=contest`}
          alt="LeetCode Stats"
          loading="lazy"
        />

      </div>
    </motion.div>
  );
}

export default LeetCodeCard;