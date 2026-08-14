import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

function ScrollIndicator() {

  const scrollToAbout = () => {

    const section = document.querySelector("#about");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }

  };

  return (

    <motion.div
      className="scroll-indicator"
      onClick={scrollToAbout}
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
    >

      <div className="mouse">

        <motion.div
          className="mouse-wheel"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
          }}
        />

      </div>

      <FaAngleDown />

    </motion.div>

  );

}

export default ScrollIndicator;