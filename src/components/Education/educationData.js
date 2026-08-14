import {
  FaUniversity,
  FaSchool,
  FaGraduationCap,
  FaBookOpen,
} from "react-icons/fa";

const educationData = [
  {
    id: 1,

    icon: FaUniversity,

    degree: "Bachelor of Engineering",

    specialization: "Computer Science and Engineering",

    institution: "Gnanamani College of Technology",

    location: "Tamil Nadu, India",

    duration: "2023 - 2027",

    cgpa: "8.5 CGPA",

    description:
      "Currently pursuing my Bachelor's degree with a strong focus on software development, data structures, web technologies, artificial intelligence and full stack development.",
  },

  {
    id: 2,

    icon: FaSchool,

    degree: "Higher Secondary",

    specialization: "Computer Science",

    institution: "Higher Secondary School",

    location: "Tamil Nadu, India",

    duration: "2021 - 2023",

    cgpa: "Completed",

    description:
      "Completed higher secondary education with Computer Science, Mathematics and Physics.",
  },
];

export const coursework = [
  {
    icon: FaBookOpen,
    title: "Relevant Coursework",
    items: [
      "Data Structures",
      "Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Web Development",
      "Object-Oriented Programming",
    ],
  },

  {
    icon: FaGraduationCap,
    title: "Areas of Interest",
    items: [
      "Full Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Cyber Security",
      "UI/UX Design",
    ],
  },
];

export default educationData;