import { motion } from "framer-motion";

const username = "mgokulnath10-code";

function GitHubCard() {
  return (
    <motion.div
      className="github-grid"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* GitHub Stats */}
      <div className="github-card">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&border_radius=15`}
          alt="GitHub Stats"
          loading="lazy"
        />
      </div>

      {/* GitHub Streak */}
      <div className="github-card">
        <img
          src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true&border_radius=15`}
          alt="GitHub Streak"
          loading="lazy"
        />
      </div>

      {/* Top Languages */}
      <div className="github-card full-width">
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&border_radius=15`}
          alt="Top Languages"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}

export default GitHubCard;