{/*import { motion } from "framer-motion";
import educationData from "./educationData";

function EducationTimeline() {
  return (
    <section className="education-timeline-section">

      <h2 className="timeline-title">
        Academic Journey
      </h2>

      <div className="education-timeline">

        {educationData.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.id}
              className="timeline-item"

              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
            >

              <div className="timeline-node">

                <Icon />

              </div>

              <div className="timeline-card">

                <span className="timeline-date">
                  {item.duration}
                </span>

                <h3>
                  {item.degree}
                </h3>

                <h4>
                  {item.specialization}
                </h4>

                <h5>
                  {item.institution}
                </h5>

                <p>
                  {item.description}
                </p>

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}

export default EducationTimeline;
*/}