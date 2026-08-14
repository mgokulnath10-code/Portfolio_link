import { AnimatePresence, motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";

function ProjectModal({
  project,
  closeModal,
}) {
  return (
    <AnimatePresence>

      {project && (

        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >

          <motion.div
            className="modal-content"

            initial={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}

            transition={{
              duration: 0.4,
            }}

            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}

            <button
              className="modal-close"
              onClick={closeModal}
            >
              <FaTimes />
            </button>

            {/* Image */}

            <img
              src={project.image}
              alt={project.title}
              className="modal-image"
            />

            {/* Title */}

            <h2>
              {project.title}
            </h2>

            {/* Description */}

            <p className="modal-description">
              {project.description}
            </p>

            {/* Technologies */}

            <div className="modal-tech">

              {project.technologies.map((tech) => (

                <span
                  key={tech}
                  className="modal-badge"
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* Buttons */}

            <div className="modal-buttons">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <FaGithub />

                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="demo-btn"
              >
                <FaExternalLinkAlt />

                Live Demo
              </a>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default ProjectModal;