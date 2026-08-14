import { motion } from "framer-motion";

const filters = [
  "All",
  "Frontend",
  "Full Stack",
  "AI",
  "Desktop",
];

function ProjectFilter({
  activeFilter,
  setActiveFilter,
}) {
  return (
    <motion.div
      className="project-filter"
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
        duration: 0.6,
      }}
    >
      {filters.map((filter) => (
        <button
          key={filter}
          className={
            activeFilter === filter
              ? "filter-btn active-filter"
              : "filter-btn"
          }
          onClick={() =>
            setActiveFilter(filter)
          }
        >
          {filter}
        </button>
      ))}
    </motion.div>
  );
}

export default ProjectFilter;