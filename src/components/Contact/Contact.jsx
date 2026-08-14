import { motion } from "framer-motion";

import "./contact.css";

import ContactInfo from "./ContactInfo";
import SocialMedia from "./SocialMedia";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      {/* Background */}

      <div className="contact-bg">

        <div className="contact-circle circle-1"></div>

        <div className="contact-circle circle-2"></div>

      </div>

      <div className="contact-wrapper">

        <motion.div
          className="contact-heading"
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

          <span className="contact-subtitle">
            GET IN TOUCH
          </span>

          <h2 className="contact-title">
            Contact Me
          </h2>

          <p className="contact-description">
            Have a project, internship opportunity, or just
            want to say hello? Feel free to reach out.
            I'll respond as soon as possible.
          </p>

        </motion.div>

        <div className="contact-container">

          <div className="contact-left">

            <ContactInfo />

            <SocialMedia />

          </div>

          <div className="contact-right">

            <ContactForm />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;