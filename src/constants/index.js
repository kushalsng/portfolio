import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  figma,
  docker,
  jft,
  quadb,
  threejs,
  howdy,
  cryptoanalysis,
  buyout,
  khushbooImage,
  prithviImage,
  rajeswarImage,
  irh,
  spring,
  aws,
  azure,
  gcp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Spring Enthusiast",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "GCP",
    icon: gcp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Ironrod Health",
    icon: irh,
    iconBg: "#000",
    date: "July 2024 - Present",
    points: [
      "Created an HL7 parser to extract and transform healthcare data from HL7 documents into JSON format, improving data interoperability.",
      "Applied functional programming principles using Ramda to enhance code maintainability and readability.",
      "Designed and implemented an extract, transform, and load (ETL) process to streamline data workflows.",
      "Developed a configurable architecture enabling dynamic UI component customization from a centralized settings page, increasing flexibility.",
      "Engineered business workflow automation to reduce manual intervention and increase operational efficiency in complex processes.",
      "Independently managed full project lifecycle including frontend, backend, and automation components, ensuring seamless integration and delivery.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Jellyfish Technologies",
    icon: jft,
    iconBg: "#000",
    date: "May 2023 - June 2024",
    points: [
      "Worked on Konarkpro.com, a time-tracking application, using technologies such as Spring Bean Pages, React, Spring, Spring Boot, Electron.js, SCSS, and Docker.",
      "Improved website performance by reducing load time by 2000 ms through the migration of Spring Bean pages to client-side React pages.",
      "Optimized desktop application build size, reducing it from 75 MB to 60 MB.",
      "Developed a reusable script for efficient organization of data stored in AWS S3 buckets, resulting in faster data retrieval.",
      "Handled all aspects of the project independently, including frontend, backend, and desktop application development.",
      "Contributed to other projects like Assessmart, an Online Coding Test Platform.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Jellyfish Technologies",
    icon: jft,
    iconBg: "#000",
    date: "November 2022 - April 2023",
    points: [
      "Contributed to a live project and worked on Spring bean pages and Spring Boot",
      "Made small frontend and full stack projects to practice and learn thoroughly about the fundamentals of web development.",
      "Interacted with other peers and seniors who provided me with resources to work on in real-world scenarios.",
      "Learned basics of various different frameworks like React, Spring, Spring Boot",
    ],
  },
  {
    title: "Backend Web Developer Intern",
    company_name: "QuadB Technologies",
    icon: quadb,
    iconBg: "#fff",
    date: "June 2021 - October 2021",
    points: [
      "Worked on a live course selling e-commerce website with more than 5000 active users.",
      "Created 100+ new rest APIs including analytical APIs and improved the response time of numerous existing slow APIs resulting in a loading time reduction of 27%.",
      "Overall reduced the initial loading time of the website by 15 seconds.",
      "Collaborated with frontend engineers and provided them with APIs and resolved any query or confusion with effective communication",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Kushal has been awesome! He’s a good team mate , always stepping up to solve any problems with his good skill set",
    name: "Khushboo Pal",
    designation: "Senior Software Engineer",
    company: "Jellyfish Technologies",
    image: khushbooImage,
  },
  {
    testimonial:
      "Great person. Technically very strong and has a good grasp on the product and the development life cycle.",
    name: "Prithvi Raj",
    designation: "Senior Software Engineer",
    company: "Jellyfish Technologies",
    image: prithviImage,
  },
  {
    testimonial:
      "He is an outstanding software engineer. His technical skills, quick grasp of complex concepts, and dedication to delivering high-quality work have been impressive.",
    name: "Rajeswar Sarma",
    designation: "Senior Software Engineer",
    company: "Jellyfish Technologies",
    image: rajeswarImage,
  },
];

const projects = [
  {
    name: "Howdy Chat App",
    description:
      "Web-based responsive social platform that allows users interact with each other, create groups to make a collective plans. Backed with seamless features like typing and emoji keyboard to improve the overall experience. One can reply to or send multiple type of messages like, text, audio, image or any other type",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "chakraui",
        color: "pink-text-gradient",
      },
      {
        name: "lottie",
        color: "blue-text-gradient",
      },
    ],
    image: howdy,
    source_code_link: "https://github.com/kushalsng/howdy",
    deployed_link: "https://howdy-there.onrender.com",
  },
  {
    name: "Crypto Analysis",
    description:
      "Web-based responsive cryptocurrency tracking website built using React. It allows users to view current prices and information about various cryptocurrencies. Also, users can authenticate using custom sign in or Google authentication, add coins to a watchlist, with all data being stored in a Firebase database.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: cryptoanalysis,
    source_code_link: "https://github.com/kushalsng/crypto-analysis",
    deployed_link: "https://crypto-analysis-info.netlify.app",
  },
  {
    name: "Buy Out",
    description:
      "Built a secure ecommerce platform with login/logout functionality. Utilized bcrypt.js for password encryption and cookies for token management. Integrated messaging stored in the database for communication. Designed an intuitive UI with ReactJS's Material UI. Deployed on a reliable hosting platform for accessibility.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
    ],
    image: buyout,
    source_code_link: "https://github.com/kushalsng/eCommerceWebApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
