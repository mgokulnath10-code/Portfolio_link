import { motion } from "framer-motion";

import "./education.css";

import EducationCard from "./EducationCard";
import { coursework } from "./educationData";

function Education() {
  return (
    <section
      id="education"
      className="education-section"
    >
      {/* Background */}

      <div className="education-bg">

        <div className="education-circle circle-1"></div>

        <div className="education-circle circle-2"></div>

      </div>

      <div className="education-wrapper">

        <motion.div
          className="education-heading"
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
            duration: 0.8,
          }}
        >

          <span className="education-subtitle">
            MY EDUCATION
          </span>

          <h2 className="education-title">
            Academic Background
          </h2>

          <p className="education-description">
            My academic journey has helped me build a strong
            foundation in computer science, software
            engineering, web development, problem solving and decision making.
          </p>

        </motion.div>

        <EducationCard />

        <section className="coursework-section">

          {coursework.map((section, index) => {

            const Icon = section.icon;

            return (

              <motion.div
                key={index}
                className="course-card"

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

                <div className="course-icon">

                  <Icon />

                </div>

                <h3>
                  {section.title}
                </h3>

                <ul>

                  {section.items.map((item) => (

                    <li key={item}>
                      ✓ {item}
                    </li>

                  ))}

                </ul>

              </motion.div>

            );

          })}

        </section>

      </div>

    </section>
  );
}

export default Education;