import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiCplusplus,
  SiVite,
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: FaHtml5,
        level: 95,
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
        level: 90,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        level: 90,
      },
      {
        name: "React",
        icon: FaReact,
        level: 90,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: 85,
      },
      {
        name: "Vite",
        icon: SiVite,
        level: 85,
      },
    ],
  },

  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        level: 85,
      },
      {
        name: "Express.js",
        icon: SiExpress,
        level: 82,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: 80,
      },
      {
        name: "MySQL",
        icon: SiMysql,
        level: 82,
      },
    ],
  },

  {
    category: "Programming",
    skills: [
      {
        name: "Java",
        icon: FaJava,
        level: 90,
      },
      {
        name: "Python",
        icon: FaPython,
        level: 88,
      },
      {
        name: "C++",
        icon: SiCplusplus,
        level: 80,
      },
    ],
  },

  {
    category: "Tools",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        level: 85,
      },
      {
        name: "GitHub",
        icon: FaGithub,
        level: 88,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        level: 70,
      },
    ],
  },
];

export default skillsData;