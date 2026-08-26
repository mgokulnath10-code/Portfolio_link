import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

import ThemeSwitcher from "../ThemeSwitcher";

import "./Navbar.css";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Education", href: "#education" },
 { title: "Experience", href: "#experience" },
 { title: "Certificates", href: "#certificate" },
  { title: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (title, href) => {
    setActive(title);
    setMenuOpen(false);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="navbar-container">

        <div
          className="logo"
          onClick={() =>
            handleClick("Home", "#home")
          }
        >
          GOKULNATH
        </div>

        <nav className="desktop-menu">
          <ul>
            {navLinks.map((item) => (
              <li key={item.title}>
                <button
                  onClick={() =>
                    handleClick(
                      item.title,
                      item.href
                    )
                  }
                  className={
                    active === item.title
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-right">


          <a
            href="/resume.pdf"
            className="resume-btn"
            target="_blank"
          >
            Resume
          </a>

          <button
            className="menu-btn"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;