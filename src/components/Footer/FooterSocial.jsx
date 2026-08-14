import { motion } from "framer-motion";
import { socialLinks } from "./footerData";

function FooterSocial() {
  return (
    <motion.div
      className="footer-social"
      initial={{
        opacity: 0,
        y: 30,
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
      <h3 className="footer-heading">
        Connect
      </h3>

      <div className="footer-social-icons">

        {socialLinks.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"

              whileHover={{
                scale: 1.15,
                rotate: 10,
                y: -6,
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

export default FooterSocial;