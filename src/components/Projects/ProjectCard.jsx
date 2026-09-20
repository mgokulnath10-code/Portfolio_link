import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function ProjectCard({
  project,
  openModal,
}) {
  return (
    <motion.div
      className="project-card"
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -10,
      }}
    >
      {/* Image */}

      <div
        className="project-image"
        onClick={() => openModal(project)}
      >
        <img
          src={project.image}
          alt={project.title}
        />

        <div className="project-overlay">
        </div>

      </div>

      {/* Content */}

      <div className="project-content">

        <span className="project-category">
          {project.category}
        </span>

        <h3>
          {project.title}
        </h3>

        <p>
          {project.description}
        </p>

        {/* Tech */}

        <div className="tech-stack">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="tech-badge"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Icons */}

        <div className="project-icons">

          {project.icons.map(
            (Icon, index) => (

              <Icon
                key={index}
                className="stack-icon"
              />

            )
          )}

        </div>

        {/* Buttons */}

        <div className="project-buttons">

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

      </div>

    </motion.div>
  );
}

export default ProjectCard;