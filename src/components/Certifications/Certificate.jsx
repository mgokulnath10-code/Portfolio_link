import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";
import { certificates } from "./certificateData";
import "./Certificate.css";

function Certificate() {
  return (
    <section id="certificate" className="certificate">
      <div className="certificate-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Achievements</span>
          <h2 className="section-title">Certificates</h2>
          <p className="section-description">
            Professional certifications and courses I have completed during
            my learning journey in web development and programming.
          </p>
        </motion.div>

        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificate;