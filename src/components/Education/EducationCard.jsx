import { motion } from "framer-motion";
import educationData from "./educationData";

function EducationCard() {
  return (
    <div className="education-grid">

      {educationData.map((education, index) => {

        const Icon = education.icon;

        return (

          <motion.div
            key={education.id}
            className="education-card"

            initial={{
              opacity: 0,
              y: 60,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}

            whileHover={{
              y: -10,
              scale: 1.02,
            }}
          >

            <div className="education-icon">

              <Icon />

            </div>

            <span className="education-duration">
              {education.duration}
            </span>

            <h3>
              {education.degree}
            </h3>

            <h4>
              {education.specialization}
            </h4>

            <h5>
              {education.institution}
            </h5>

            <p className="education-location">
              {education.location}
            </p>

            <div className="cgpa-badge">
              {education.cgpa}
            </div>

            <p className="education-description">
              {education.description}
            </p>

          </motion.div>

        );

      })}

    </div>
  );
}

export default EducationCard;