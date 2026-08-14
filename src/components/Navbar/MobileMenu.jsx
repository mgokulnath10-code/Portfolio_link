import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import NavItem from "./NavItem";
import navbarData from "./navbarData";

function MobileMenu({
  isOpen,
  closeMenu,
  activeSection,
  onNavigate,
}) {
  return (
    <AnimatePresence>

      {isOpen && (

        <>

          {/* Overlay */}

          <motion.div
            className="mobile-overlay"
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Sidebar */}

          <motion.aside
            className="mobile-sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
            }}
          >

            <div className="mobile-header">

              <h2>MENU</h2>

              <button
                className="close-btn"
                onClick={closeMenu}
              >
                <FaTimes />
              </button>

            </div>

            <ul className="mobile-links">

              {navbarData.map((item) => (

                <NavItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  icon={item.icon}
                  activeSection={activeSection}
                  onClick={(id) => {
                    onNavigate(id);
                    closeMenu();
                  }}
                />

              ))}

            </ul>

          </motion.aside>

        </>

      )}

    </AnimatePresence>
  );
}

export default MobileMenu;