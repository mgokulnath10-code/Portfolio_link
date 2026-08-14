import { motion } from "framer-motion";

function NavItem({
  id,
  title,
  icon: Icon,
  activeSection,
  onClick,
}) {
  return (
    <motion.li
      className="nav-item"
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <button
        onClick={() => onClick(id)}
        className={
          activeSection === id
            ? "nav-link active"
            : "nav-link"
        }
      >
        <Icon className="nav-icon" />

        <span>{title}</span>

        {activeSection === id && (
          <motion.div
            layoutId="activeNav"

            className="active-indicator"

            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
            }}
          />
        )}
      </button>
    </motion.li>
  );
}

export default NavItem;