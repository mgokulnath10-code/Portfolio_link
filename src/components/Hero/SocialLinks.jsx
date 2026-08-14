import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { hero } from "./heroData";

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
};

function SocialLinks() {
  return (
    <div className="social-links">

      {hero.socials.map((item) => {
        const Icon = icons[item.icon];

        return (
          <a
            key={item.icon}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Icon />
          </a>
        );
      })}

    </div>
  );
}

export default SocialLinks;