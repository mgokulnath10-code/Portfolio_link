import { motion } from "framer-motion";

import { cards } from "./aboutData";

function AboutCards() {
  return (
    <div className="about-cards">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={index}
            className="about-card"
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
              delay: index * 0.15,
            }}
          >
            <div className="card-icon">
              <Icon />
            </div>

            <h3>{card.title}</h3>

            <p>{card.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default AboutCards;