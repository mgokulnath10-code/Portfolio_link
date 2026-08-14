import { FaDownload, FaEnvelope } from "react-icons/fa";
import { hero } from "./heroData";

function HeroButtons() {
  return (
    <div className="hero-buttons">

      <a
        href={hero.resume}
        className="primary-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDownload />
        Download Resume
      </a>

      <a
        href="#contact"
        className="secondary-btn"
      >
        <FaEnvelope />
        Contact Me
      </a>

    </div>
  );
}

export default HeroButtons;