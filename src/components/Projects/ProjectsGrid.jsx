import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import projects from "./projectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ProjectFilter from "./ProjectFilter";

function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <ProjectFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <motion.div
        className="projects-grid"
        layout
      >
        <AnimatePresence mode="wait">

          {filteredProjects.map((project) => (

            <motion.div
              key={project.id}
              layout
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <ProjectCard
                project={project}
                openModal={openModal}
              />
            </motion.div>

          ))}

        </AnimatePresence>
      </motion.div>

      <ProjectModal
        project={selectedProject}
        closeModal={closeModal}
      />
    </>
  );
}

export default ProjectsGrid;