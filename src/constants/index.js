import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { GiMongolia } from "react-icons/gi";
import {
  SiCplusplus,
  SiExpress,
  SiGithub,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiVisualstudiocode
} from "react-icons/si";
import {
  backend,
  codeMonkey,
  creator,
  jobit,
  mobile,
  NextBlog,
  Scraper,
  techzee,
  web
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "Resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI UX developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: AiFillHtml5,
  },
  {
    name: "CSS",
    icon: DiCss3,
  },
  
  {
    name: "React JS",
    icon: SiReact,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Node JS",
    icon: FaNode,
  },
  {
    name: "Express JS",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "SQL",
    icon: SiMysql,
  },
  {
    name: "C++",
    icon: SiCplusplus,
  }
  
];
const toolsUsed = [
  {
    name: "VS Code",
    icon: SiVisualstudiocode,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "MongoDB Atlas",
    icon: GiMongolia,
  },
  {
    name: "Vercel",
    icon: SiVercel,
  },
  {
    name: "Github",
    icon: SiGithub,
  }
];

const experiences = [
  {
    title: "Web Intern",
    company_name: "Octanet",
    icon: codeMonkey,
    iconBg: "#383E56",
    date: "June 2024 - Aug 2024",
    points: [
      "Engineered scalable full-stack web applications using React.js , optimizing interactions for a 30% performance boost.",
      "Designed client-side functionalities using ReactJs and Tailwind CSS,ensuring responsive and interactiveuser interface.",
      "Created backend service with NodeJs and ExpressJS,integrating MongoDB for efficient data management and storage.",
      "Maintained 100% participation in daily stand-ups and code reviews, consistently completing projects ahead of schedule.",
      "Collaborated with cross-functional teams to implement new features and continuously improved code quality through rigorous testing."
    ],
  },
  
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sava Booking",
    description:
      "Through this  web application you can book appointment online of famous doctor by sitting at your home. Improving patient experience and operational efficiency.Reduced appointment booking time by 40%, increased patient satisfaction by 25%, and enhanced hospital operational efficiency by 30%.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
    ],
    image: Scraper,
    source_code_link: "https://github.com/ABHISHEK3209",
   
  },
  {
    name: "Sorting Visualizer",
    description:
      "Developed an interactive web application for visualizing and comparing various sorting algorithms, including Bubble, Insertion, Merge and Quick.This interface allows users to compare the different sorting algorithms and helps to visualize steps more clearly.This site is basically for understanding sorting alogorithm.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJs",
        color: "green-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/ABHISHEK3209/Sorting-Visualizer",
    live_code_link: "https://sava3209-sorting-visualizer.vercel.app/",
  },
  {
    name: "Image forgery Detection",
    description:
      "This model distinguishes between real and Tampered images using Deep learning techniques i.e CNN.Used cutting-edge technology to improve detection accuracy, identifying manipulated digital media in real life and achieved a accuracy of greater than 95% by training a validating on a particular dataset",
    tags: [
      {
        name: "CNN",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Google Colab",
        color: "pink-text-gradient",
      },
    ],
    image: NextBlog,
    source_code_link: "https://github.com/ABHISHEK3209",
    
  },

  {
    name: "Personal Portfolio",
    description:
      "My Personal Portfolio website is a showcase of my work as a front-end web developer. It offers an elegant, user-friendly design, highlights my projects, and provides insights into my skills and background. Visit to explore my work and get to know me better.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: techzee,
    source_code_link: "https://github.com/ABHISHEK3209",
    live_code_link: "https://github.com/ABHISHEK3209",
  }
];


export {
  experiences, projects, services, technologies, testimonials, toolsUsed
};


