import {
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

const projects = [
  {
    id: 1,

    title: "AgriNexus",

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIus_Sj-QgfOIWVi-0irIQ8SEtyIpJlhoAHfNtdxGNfaXDYHxOBLuf4RcA&s=10 ",

    description:
      "A platform for connecting farmers with buyers and providing agricultural insights.",

    technologies: [
      "React",
      "Python",
      "OpenAI",
      
    ],

    icons: [
      FaReact,
      FaPython,
    ],

    github:
      "https://github.com/mgokulnath10-code",

    live:
      "https://your-demo-link.vercel.app",

    category: "All",
  },

  {
    id: 2,

    title: "Quiz Application",

    image: "https://thumbs.dreamstime.com/b/conceptual-caption-online-quiz-word-written-game-mind-sport-published-internet-sign-displaying-online-quiz-262139019.jpg",

    description:
      "A simple quiz application built with React and Node.js.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "mongoDB",
    ],

    icons: [
      SiJavascript ,
      FaNodeJs,
      SiMongodb,

    ],

    github:
      "https://github.com/mgokulnath10-code/quiz_application",

    live:
      "#",

    category: "Full Stack",
  },

  {
    id: 3,

    title: "rock-paper-scissors",

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQr77_HD8esKMhO-4d2fZyVaCFmcpEboMZMc4lFGyAbv0KOhfwU8r5dwo&s=10",

    description:
      " A simple rock-paper-scissors game built with HTML, CSS and JavaScript.",

    technologies: [
      "html",
      "css",
      "JavaScript",
    ],

    icons: [
      SiJavascript ,
    ],

    github:
      "https://github.com/mgokulnath10-code/R-P-S-GAME",

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