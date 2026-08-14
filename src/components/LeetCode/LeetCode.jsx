import { motion } from "framer-motion";
import LeetCodeCard from "./LeetCodeCard";
import "./leetcode.css";

function LeetCode() {
  return (
    <section
      id="leetcode"
      className="leetcode-section"
    >
      <div className="leetcode-wrapper">

        <motion.div
          className="leetcode-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>CODING PROFILE</span>

          <h2>LeetCode Statistics</h2>

          <p>
            My problem solving journey and coding progress.
          </p>

        </motion.div>

        <LeetCodeCard />

      </div>
    </section>
  );
}

export default LeetCode;