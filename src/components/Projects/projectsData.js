import {
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

const projects = [
  {
    id: 1,

    title: "AI Study Notes Generator",

    image: "/projects/ai-study-notes.png",

    description:
      "Generate smart notes from PDFs and YouTube videos using AI.",

    technologies: [
      "React",
      "Python",
      "OpenAI",
      "Streamlit",
    ],

    icons: [
      FaReact,
      FaPython,
    ],

    github:
      "https://github.com/mgokulnath10-code",

    live:
      "https://your-demo-link.vercel.app",

    category: "AI",
  },

  {
    id: 2,

    title: "Student Management System",

    image: "/projects/student-management.png",

    description:
      "Complete student management system using Python and MySQL.",

    technologies: [
      "Python",
      "MySQL",
    ],

    icons: [
      FaPython,
      SiMysql,
    ],

    github:
      "https://github.com/mgokulnath10-code",

    live:
      "#",

    category: "Desktop",
  },

  {
    id: 3,

    title: "Netflix Clone",

    image: "/projects/netflix.png",

    description:
      "Responsive Netflix landing page built using React.",

    technologies: [
      "React",
      "JavaScript",
    ],

    icons: [
      FaReact,
      SiJavascript,
    ],

    github:
      "https://github.com/mgokulnath10-code",

    live:
      "#",

    category: "Frontend",
  },

  {
    id: 4,

    title: "Portfolio Website",

    image: "/projects/portfolio.png",

    description:
      "Modern animated developer portfolio using React, Framer Motion and Tailwind CSS.",

    technologies: [
      "React",
      "Node",
      "MongoDB",
    ],

    icons: [
      FaReact,
      FaNodeJs,
      SiMongodb,
    ],

    github:
      "https://github.com/mgokulnath10-code",

    live:
      "#",

    category: "Full Stack",
  },
];

export default projects;