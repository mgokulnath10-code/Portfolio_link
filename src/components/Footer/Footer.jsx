import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

import "./footer.css";

import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

function Footer() {

  const scrollToTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  return (

    <footer className="footer">

      {/* Background */}

      <div className="footer-bg">

        <div className="footer-circle footer-circle-1"></div>

        <div className="footer-circle footer-circle-2"></div>

      </div>

      <div className="footer-wrapper">

        {/* Top */}

        <div className="footer-top">

          <motion.div
            className="footer-brand"

            initial={{
              opacity:0,
              x:-50
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:.8
            }}
          >

            <h2>

              <span>G</span>OKULNATH

            </h2>

            <p>

              Computer Science Student •
              Full Stack Developer •
              React Developer

            </p>

          </motion.div>

          <FooterLinks />

          <FooterSocial />

        </div>

        {/* Divider */}

        <div className="footer-divider"></div>

        {/* Bottom */}

        <div className="footer-bottom">

          <p>

            © {new Date().getFullYear()} Gokulnath.
            All Rights Reserved.

          </p>

          <motion.button

            className="scroll-top"

            whileHover={{
              scale:1.1,
              y:-5
            }}

            whileTap={{
              scale:.9
            }}

            onClick={scrollToTop}
          >

            <FaArrowUp />

          </motion.button>

        </div>

      </div>

    </footer>

  );

}

export default Footer;