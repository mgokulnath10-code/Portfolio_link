import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";
import { hero } from "./heroData";

function HeroContent() {
  return (
    <div className="hero-content">

      <motion.p
        className="hero-greeting"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {hero.greeting}
      </motion.p>

      <motion.h1
        className="hero-name"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {hero.name}
      </motion.h1>

      <div className="hero-title">

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "Frontend Developer",
            2000,
            "Problem Solver",
            2000,
          ]}
          wrapper="span"
          speed={45}
          repeat={Infinity}
        />

      </div>

      <motion.p
        className="hero-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
        }}
      >
        {hero.description}
      </motion.p>

      <HeroButtons />

      <SocialLinks />

    </div>
  );
}

export default HeroContent;