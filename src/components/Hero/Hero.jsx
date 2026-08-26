import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Background Blobs */}

      <div className="hero-background">

        <div className="blob blob1"></div>

        <div className="blob blob2"></div>

        <div className="blob blob3"></div>

      </div>

      <div className="hero-container">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
          }}
        >
          <HeroContent />
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
        >
          <HeroImage />
        </motion.div>

      </div>

      

    </section>
  );
}

export default Hero;