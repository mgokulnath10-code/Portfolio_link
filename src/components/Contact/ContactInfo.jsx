import { motion } from "framer-motion";
import { contactInfo } from "./contactData";

function ContactInfo() {
  return (
    <div className="contact-info">

      {contactInfo.map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.a
            key={item.title}
            href={item.link}
            className="contact-card"

            initial={{
              opacity: 0,
              x: -60,
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
              duration: 0.6,
            }}

            whileHover={{
              y: -8,
              scale: 1.03,
            }}
          >

            <div className="contact-icon">

              <Icon />

            </div>

            <div className="contact-details">

              <h3>{item.title}</h3>

              <p>{item.value}</p>

            </div>

          </motion.a>

        );

      })}

    </div>
  );
}

export default ContactInfo;