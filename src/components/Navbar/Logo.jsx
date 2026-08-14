import { motion } from "framer-motion";

function Logo() {
  const scrollToHome = () => {
    const section = document.getElementById("home");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      className="logo"
      onClick={scrollToHome}
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <span className="logo-gradient">G</span>
      OKULNATH
    </motion.div>
  );
}

export default Logo;