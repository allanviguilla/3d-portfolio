import { logo } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  react,
  sass,
  tailwindcss,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const jobs = [
  {
    title: "Shopify Web Developer",
    company_name: "Pure Essence Labs",
    icon: logo,
    iconBg: "#a2d2ff",
    date: "2021-2022",
    points: [
      "Developed JavaScript snippets using G4 Analytics and Google Tag Manager to track customer conversion rate from product page to checkout",
      "Perform ETL process to migrate customer subscription data from previous service to Recharge resulting in a 12% subscription increase",
      "Designed and implemented new product pages, landing pages, and mobile versions of the Shopify store",
    ],
  },
  {
    title: "Junior Web Developer",
    company_name: "Arsenal Inc.",
    icon: logo,
    iconBg: "#b7e4c7",
    date: "2018-2021",
    points: [
      "Revamp Recurrly email campaign from image-based template to HTML-based template resulting in a 3% open rate increase",
      "Designed and implemented new product pages, landing pages, and mobile versions of Ecommerce platform",
      "Conduct content audit across the company's network of websites and update content to improve SEO performance",
    ],
  },
  {
    title: "Student Web Developer/Student Coordinator",
    company_name: "Civic Engagement Computer Center @ NJIT",
    icon: logo,
    iconBg: "#fbc3bc",
    date: "2015-2017",
    points: [
      "Engaged community organizations to gather user specifications and requirements for web projects",
      "Developed code, reports, and data analysis for web projects",
      "Supported community organizations to troubleshoot technical issues, create documentation, and training on how to update, maintain, and use web products",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    theme: "btn-back-red",
    name: "Libre",
    description:
      "A full stack application that leverages Google Calendar API to share free time with your friends",
    link: "https://github.com/allanviguilla/libre",
  },
  {
    theme: "btn-back-green",
    name: "Fresh Threadz",
    description:
      "A microservice API created with Nodejs and Postgres for Full Stack Ecommerce application",
    link: "https://github.com/allanviguilla/Fresh-Threadz-QA",
  },
  {
    theme: "btn-back-blue",
    name: "Atelier",
    description: "An ecommerce product page front end created in React",
    link: "https://github.com/allanviguilla/atelier-ecommerce-application",
  },
  {
    theme: "btn-back-pink",
    name: "Floor Watchers",
    description:
      "A dynamic UI layout for product landing page of an NFT website",
    link: "https://github.com/allanviguilla/floorwatchers-frontend-concept",
  },
];
