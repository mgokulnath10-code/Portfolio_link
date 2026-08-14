import { motion } from "framer-motion";
import { socialMedia } from "./contactData";

function SocialMedia() {
  return (
    <motion.div
      className="social-media"

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
      <h2 className="social-title">
        Connect With Me
      </h2>

      <div className="social-icons">

        {socialMedia.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"

              className="social-btn"

              whileHover={{
                scale: 1.15,
                y: -8,
                rotate: 8,
              }}

              whileTap={{
                scale: 0.9,
              }}
            >

              <Icon />

            </motion.a>

          );

        })}

      </div>
    </motion.div>
  );
}

export default SocialMedia;