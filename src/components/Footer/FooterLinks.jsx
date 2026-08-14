import { motion } from "framer-motion";
import { quickLinks } from "./footerData";

function FooterLinks() {
  const handleScroll = (id) => {
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      className="footer-links"
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
        Quick Links
      </h3>

      <ul>

        {quickLinks.map((link) => (

          <li key={link.title}>

            <button
              onClick={() => handleScroll(link.href)}
              className="footer-link"
            >
              {link.title}
            </button>

          </li>

        ))}

      </ul>

    </motion.div>
  );
}

export default FooterLinks;