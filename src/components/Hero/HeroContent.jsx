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

      
    </div>
  );
}

export default HeroContent;