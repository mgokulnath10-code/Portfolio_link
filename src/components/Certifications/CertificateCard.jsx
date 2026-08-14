import { motion } from "framer-motion";
import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

function CertificateCard({ certificate, index }) {
  return (
    <motion.div
      className="certificate-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -10 }}
    >
      <div className="certificate-image">
        <img src={certificate.image} alt={certificate.title} />
      </div>

      <div className="certificate-content">
        <div className="certificate-date">
          <FaCalendarAlt />
          <span>{certificate.date}</span>
        </div>

        <h3>{certificate.title}</h3>

        <h4>{certificate.issuer}</h4>

        <p>{certificate.description}</p>

        <a
          href={certificate.link}
          target="_blank"
          rel="noreferrer"
          className="certificate-btn"
        >
          View Certificate
          <FaExternalLinkAlt />
        </a>
      </div>
    </motion.div>
  );
}

export default CertificateCard;