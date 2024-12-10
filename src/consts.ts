import type { Metadata, Site, Socials, WorkExperience } from "@types";

export const SITE: Site = {
  TITLE: "Fausto Moya",
  DESCRIPTION:
    "Fausto Moya's blog and portfolio: tech insights, coding tips, and innovative projects in one place. Explore and connect with a passionate developer!",
  EMAIL: "faustomoya99@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/MoyaF",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/fausto-moya",
  },
];

export const WORK_EXPERIENCE: WorkExperience = [
  {
    company: "Ahold Delhaize",
    role: "Technical Lead",
    technologies: ["Kotlin", "Spring", "MongoDB", "Kafka"],
    description:
      "At Ahold Delhaize, I led the modernization of the workforce management tool, building a new integration using modern languages and techniques. I spearheaded efforts to improve code quality, promoting good coding practices and a test-driven development mindset.\nI played a key role in helping the team adopt agile methodologies, improving meeting efficiency and sharing agile knowledge to streamline processes. By fostering close collaboration between the business and development teams, I enabled better requirements gathering and greater ownership of projects.",
    start: new Date("2024-08-01"),
    end: null,
    link: "",
  },
  {
    company: "Routescanner",
    role: "Senior Software Engineer",
    technologies: [
      "Kotlin",
      "Spring",
      "Postgres",
      "Neo4j",
      "ActiveMQ",
      "AWS",
      "Github Actions",
    ],
    description:
      "I led the design and implementation of a Trade Lane reporting and optimization tool, significantly enhancing data analysis and reporting capabilities. I optimized API response times, achieving a uniform 200 milliseconds for all data sets, compared to previous times of 2 seconds for small sets and 10 seconds for large sets.\nI successfully migrated 29 services to AWS, establishing infrastructure as code and implementing new CI/CD pipelines that resulted in a 30% reduction in operational costs. Additionally, I reduced deployment times by 25% through enhancements to the testing suite, GitHub Actions pipeline, and AWS Fargate integration, ensuring faster and more efficient software delivery.",
    start: new Date("2022-05-01"),
    end: new Date("2024-08-01"),
    link: "",
  },
  {
    company: "Mercado Libre",
    role: "Software Engineer",
    technologies: ["Java", "Kotlin", "SparkJava", "Lucene", "SQL"],
    description:
      "As a Software Engineer at Mercado Libre, I led the development of innovative solutions that played a key role in the product's success. I designed and implemented scalable, robust, and maintainable systems that exceeded customer expectations, directly contributing to the company's growth. By utilizing modern technologies and agile methodologies, I consistently delivered high-quality results.\nThrough collaboration with cross-functional teams, we established and enforced best practices, striving for excellence in performance and continuous improvement. Notably, I improved store refresh speed by 50%, resulting in faster store indexing and a better customer experience.",
    start: new Date("2021-05-01"),
    end: new Date("2022-05-01"),
    link: "",
  },
  {
    company: "Ualá",
    role: "Software Engineer",
    technologies: [
      "Java",
      "AWS Lambda",
      "AWS SQS",
      "AWS SNS",
      "AWS Api Gateway",
      "AWS DynamoDB",
    ],
    description:
      "As a Java Software Engineer at Ualá, I contributed to the development of robust and scalable software solutions that adhered to the highest industry standards. I leveraged modern technologies, including a full serverless infrastructure in AWS, and worked closely with my team using agile methodologies to deliver high-quality projects.\nA key part of my role was defining development standards and best practices to optimize the team's performance. I wrote clean and efficient code to ensure the optimal functioning of our solutions, which directly impacted Ualá's success. Throughout my experience, I deepened my knowledge of cutting-edge technologies and gained valuable insights into the software development process, consistently delivering results that exceeded expectations.",
    start: new Date("2020-09-01"),
    end: new Date("2021-05-01"),
    link: "",
  },
  {
    company: "Rappi",
    role: "Software Engineer",
    technologies: ["Kotlin", "Spring", "Postgres", "ActiveMQ", "RxJava"],
    description:
      "As a Kotlin Software Engineer at Rappi, I was part of a high-performing team that delivered innovative and efficient software solutions. My role involved developing new features, improving code, and fixing bugs, while collaborating closely with Scrum Masters and Project Managers to keep projects on track. I played a key role in integrating the app with various service providers, enabling offerings like Home Services, Video Conference Doctors, Games, and Sports Betting.\nIn addition to my development work, I provided technical guidance to my colleagues and mentored new team members. My contributions helped the team exceed expectations and positively impacted the development of scalable and robust software solutions for Rappi.",
    start: new Date("2019-08-01"),
    end: new Date("2020-09-01"),
    link: "",
  },
];
