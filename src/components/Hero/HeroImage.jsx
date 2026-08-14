import { motion } from "framer-motion";
import { hero } from "./heroData";

function HeroImage() {
  return (
    <div className="hero-image-container">

      <div className="image-glow"></div>

      <div className="image-ring"></div>

      <motion.img
        src={hero.image}
        alt={hero.name}
        className="hero-image"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        whileHover={{
          scale: 1.05,
        }}
      />

    </div>
  );
}

export default HeroImage;