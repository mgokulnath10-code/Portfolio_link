import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    } else {
      document.body.className = "dark";
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    document.body.className = newTheme;

    localStorage.setItem("theme", newTheme);
  };

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{
        scale: 1.1,
        rotate: 180,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </motion.button>
  );
}

export default ThemeToggle;