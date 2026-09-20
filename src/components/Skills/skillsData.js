import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiCplusplus,
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "HTML,CSS",
        icon: FaHtml5,
        level: 98,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        level: 90,
      },
      {
        name: "React",
        icon: FaReact,
        level: 80,
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
      // {
      //   name: "MongoDB",
      //   icon: SiMongodb,
      //   level: 80,
      // },
      // {
      //   name: "MySQL",
      //   icon: SiMysql,
      //   level: 82,
      // },
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

 
];

export default skillsData;