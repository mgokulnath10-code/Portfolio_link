import { motion } from "framer-motion";
import GitHubCard from "./GitHubCard";
import "./github.css";

function GitHubStats() {
  return (
    <section
      id="github"
      className="github-section"
    >
      <div className="github-wrapper">

        <motion.div
          className="github-heading"

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.8
          }}
        >

          <span>
            OPEN SOURCE
          </span>

          <h2>
            GitHub Statistics
          </h2>

          <p>
            My coding activity, repositories,
            contribution streak and programming
            languages.
          </p>

        </motion.div>

        <GitHubCard />

      </div>
    </section>
  );
}

export default GitHubStats;