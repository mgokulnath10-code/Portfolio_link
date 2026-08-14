import { motion } from "framer-motion";

import "./projects.css";

import ProjectsGrid from "./ProjectsGrid";

function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
    >
      {/* Background */}

      <div className="projects-bg">

        <div className="projects-circle circle-one"></div>

        <div className="projects-circle circle-two"></div>

      </div>

      <div className="projects-wrapper">

        <motion.div
          className="projects-heading"
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

          <span className="projects-subtitle">
            MY WORK
          </span>

          <h2 className="projects-title">
            Featured Projects
          </h2>

          <p className="projects-description">
            Here are some of the projects I've built using
            React, JavaScript, Node.js, Python and modern
            development tools. Each project demonstrates
            problem solving, responsive UI design and clean
            coding practices.
          </p>

        </motion.div>

        <ProjectsGrid />

      </div>

    </section>
  );
}

export default Projects;