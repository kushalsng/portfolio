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
  corporateAi,
  stockOverflow,
  linkedinReplier,
  courseCloud,
  healthsyncGateway,
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
    company_landing_url: "https://ironrod.health",
    points: [
      "Reduced data extraction time by 60% and improved patient-data accuracy by building a production-grade HL7 parser in Spring Boot using Java Streams to convert HL7 files into JSON.",
      "Increased throughput and scalability for healthcare workloads by architecting a configuration-driven data ingestion engine for CSV/JSON inputs (100k+ records) using Reactor Core streams and PostgreSQL.",
      "Cut manual configuration effort by 70–80% by designing dynamic JSON-based configurations and a settings UI to customize data mappings and tables without code changes.",
      "Reduced repetitive manual operations by 70–80% while preserving edge-case review by implementing a rules engine automating 200+ patient, device, and inventory workflows as Azure Functions.",
      "Improved deployment reliability and release speed by leading DevOps efforts with Terraform, Firebase, Azure Functions, Blob Storage, queues, Docker, and YAML-based CI/CD pipelines.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Jellyfish Technologies",
    company_landing_url: "https://www.jellyfishtechnologies.com/",
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
    company_landing_url: "https://www.jellyfishtechnologies.com/",
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
    company_landing_url: "https://quadbtech.com/",
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
    name: "Corporate.AI",
    description:
      "A full-stack RAG application for corporate knowledge management. Users upload documents and query them using natural language. Built with Spring Boot, Spring AI, and PostgreSQL (pgvector), it ensures accurate, context-aware responses grounded in proprietary data.",
    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: corporateAi,
    source_code_link: "https://github.com/kushalsng/corporate.ai",
  },
  {
    name: "LinkedIn AI Replier Chrome Extension",
    description:
      "Streamline your LinkedIn messaging experience by providing AI-generated replies to your messages. No more struggling to find the right words – let AI do the heavy lifting for you!",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "plasmo",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: linkedinReplier,
    source_code_link: "https://github.com/kushalsng/linkedin-reply-chrome-extension",
  },
  {
    name: "Stock Overflow",
    description:
      "High-performance microservices platform for real-time bidding. Leverages Reactive Programming (WebFlux) and Apache Kafka for low-latency, high-concurrency traffic. Containerized with Docker and orchestrated via Spring Cloud for scalability and fault tolerance.",
    tags: [
      {
        name: "microservices",
        color: "blue-text-gradient",
      },
      {
        name: "kafka",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: stockOverflow,
    source_code_link: "https://github.com/kushalsng/stock-overflow",
  },
  {
    name: "Course Cloud",
    description:
      "Scalable E-Learning Platform using Microservices. Features independent services for User Management, Courses, and Billing, communicating via REST and RabbitMQ. Includes Service Discovery, API Gateway, and Circuit Breakers for high availability.",
    tags: [
      {
        name: "spring-cloud",
        color: "blue-text-gradient",
      },
      {
        name: "rabbitmq",
        color: "green-text-gradient",
      },
      {
        name: "microservices",
        color: "pink-text-gradient",
      },
    ],
    image: courseCloud,
    source_code_link: "https://github.com/kushalsng/course-cloud",
  },
  {
    name: "HealthSync Gateway",
    description:
      "Secure microservices platform for healthcare data integration. Bridges modern apps with legacy systems, ensuring HIPAA compliance. Features include data normalization, audit logging, and legacy system simulation, powered by Spring Cloud.",
    tags: [
      {
        name: "healthcare",
        color: "blue-text-gradient",
      },
      {
        name: "spring-cloud",
        color: "green-text-gradient",
      },
      {
        name: "compliance",
        color: "pink-text-gradient",
      },
    ],
    image: healthsyncGateway,
    source_code_link: "https://github.com/kushalsng/healthsync-gateway",
  },
  {
    name: "Howdy Chat App",
    description:
      "Web-based social platform that allows users interact or create groups to make a collective plans. Backed with seamless features like typing and emoji keyboard to improve the overall experience. Multiple message type supported like, text, audio, image etc.",
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
];

export { services, technologies, experiences, testimonials, projects };
