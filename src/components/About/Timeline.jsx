import { motion } from "framer-motion";
import { timeline } from "./aboutData";

function Timeline() {
  return (
    <section className="timeline-section">

      <h2 className="timeline-heading">
        My Journey
      </h2>

      <div className="timeline">

        {timeline.map((item, index) => (

          <motion.div
            key={index}
            className="timeline-item"

            initial={{
              opacity: 0,
              x: -50,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              delay: index * 0.2,
            }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <h4>{item.subtitle}</h4>

              <p>{item.description}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Timeline;