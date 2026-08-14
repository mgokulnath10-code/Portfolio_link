import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

import { experiences } from "./experienceData";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">
            Professional Journey
          </span>

          <h2 className="section-title">
            Experience
          </h2>
        </motion.div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="experience-icon">
                <FaBriefcase />
              </div>

              <div className="experience-content">

                <div className="experience-top">

                  <h3 className="experience-role">
                    {exp.role}
                  </h3>

                  <h4 className="experience-company">
                    {exp.company}
                  </h4>

                  <div className="experience-meta">

                    <span>
                      <FaCalendarAlt />
                      {exp.duration}
                    </span>

                    <span>
                      <FaMapMarkerAlt />
                      {exp.location}
                    </span>

                  </div>

                </div>

                <p className="experience-description">
                  {exp.description}
                </p>

                <div className="experience-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;