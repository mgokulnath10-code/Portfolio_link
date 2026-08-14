import { motion } from "framer-motion";

import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";
import Stats from "./Stats";
import Timeline from "./Timeline";

import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      {/* Background Effects */}
      <div className="about-bg">
        <div className="about-circle circle-one"></div>
        <div className="about-circle circle-two"></div>
      </div>

      <div className="about-container">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AboutContent />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <AboutCards />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Stats />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Timeline />
        </motion.div>

      </div>
    </section>
  );
}

export default About;