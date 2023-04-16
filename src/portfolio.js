// import emoji from "react-easy-emoji";

import microsoft from "./assets/img/icons/common/microsoft.png";
import cyberTrace from "./assets/img/icons/common/cyberTrace.png";
import ARSII from "./assets/img/icons/common/arsii.png";
import capgemini from "./assets/img/icons/common/capgemini.png";
import proxym from "./assets/img/icons/common/proxym.png";
export const greetings = {
  name: "Mehdi Ben Hariz",
  title: "Hi there, I'm Mehdi",
  description:
    "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with Reactjs / Nodejs  / Dotnet  and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
  resumeLink: "_Resume_Mehdi_Ben_Hariz.pdf",
};

export const openSource = {
  githubUserName: "mehdi-benhariz",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/mehdi.benhariz.3",
  blogger: "https://blogging--it.blogspot.com/",
  github: "https://github.com/mehdi-benhariz",
  linkedin: "https://www.linkedin.com/in/mehdi-ben-hariz/",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "A software engineer passionate with solving real-world problem and building efficient solution",
  skills: [
    // emoji(
    //   "⚡ develop web and mobile solution with security and perfermance measurmenet"
    // ),
    // emoji(
    //   "⚡ lead the development of a product from the scrach to the production"
    // ),
    // emoji(
    //   "⚡ Write technical articles and create rich and pedagogic training materials"
    // ),
      "⚡ develop web and mobile solution with security and perfermance measurmenet",
      "⚡ lead the development of a product from the scrach to the production",
      "⚡ Write technical articles and create rich and pedagogic training materials",
  ],
  //icon source is ,fontawesome
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "logos:flutter",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "express",
      fontAwesomeClassname: "logos:express",
    },
    {
      skillName: "dotnet",
      fontAwesomeClassname: "logos:dotnet",
    },
    {
      skillName: "django",
      fontAwesomeClassname: "logos:django",
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "vscode-icons:file-type-mysql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "C",
      fontAwesomeClassname: "logos:c",
    },
    {
      skillName: "CPP",
      fontAwesomeClassname: "logos:c-plusplus",
    },
    {
      skillName: "java",
      fontAwesomeClassname: "logos:java",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "logos:linux-tux",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Frontend", //Insert stack or technology you have experience in
    progressPercentage: "78", //Insert relative proficiency in percentage
  }
  ,
  {
    Stack: "Mobile",
    progressPercentage: "50",
  },
  {
    Stack: "DevOps",
    progressPercentage: "45",
  }
];

export const educationInfo = [
  {
    schoolName: "ISSATsousse",
    subHeader: "Integrated Preparatory Cycle",
    duration: "September 2019 - June 2021",
    desc: "Studied Subjects in Maths, Physics and Computer Science.",
    descBullets: ["I was a Major of my promotion"],
  },
  {
    schoolName: "ISSATsousse",
    subHeader: "Software Engineering degree",
    duration: "September 2021 - Jully 2024",
    desc: "Studied Software Engineering.",
    descBullets: [],
  },
  {
    schoolName: "UW-Stout - USA",
    subHeader: "Computer Science degree",
    duration: "September 2022 - Mai 2023",
    desc: "1 year as an Exchange Student as part of international Scholarship program.",
    descBullets: ["Chosen with 32 other students from 10k candidats"],
  },
];

export const experience = [
  {
    role: "Web Dev Intern",
    company: "Proxym-group",
    companylogo: proxym,
    date: "june 2022 - july 2022",
    desc: "I have implemented the concept of maker checker using a web app . The project is designed for financial services using dotnet and react .",
  },
  {
    role: "Consultant Assistant",
    company: "Capgemini",
    companylogo: capgemini,
    date: "February 2022 - May 2022",
    desc: "I was part of chineese architect community program. I have been learning and testing devops tools under the supervising of company architect .",
  },
  {
    role: "Mobile App Intern",
    company: "ARSII",
    companylogo: ARSII,
    date: "Jully 2021 – September 2021",
    desc: "i have participate in the conception ,prototyping ,implimentation and deployment of a cross-plateform moblie app. ",
  },
  {
    role: "President",
    company: "Microsoft Issatso Club",
    companylogo: microsoft,
    date: "December 2019 – Present",
    desc: "I have taken different roles and responsabilities envolving the club. I have been a member of the club since 2019.",
  },
  {
    role: "Dev Team Member",
    company: "CyberTrace Club",
    companylogo: cyberTrace,
    date: "Jully 2021 – Present",
    desc: "I have participated in the development of a web application for the club. I have taken the role of a backend developer.",
  },
];

export const projects = [
  {
    name: "Real Time chat app",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: "https://chat-app-mehdi.netlify.app/",
  },
  {
    name: "Ecommerce plateform ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    github: "https://github.com/mehdi-benhariz",
  },
  {
    name: "Smart City ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    github: "https://github.com/mehdi-benhariz/smart-city",
  },
  {
    name: "meme generator",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    github: "https://github.com/mehdi-benhariz/meme-generator",
    link: "https://meme-generator-mehdi.netlify.app/",
  },
  {
    name: "covid tracker",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    github: "https://github.com/mehdi-benhariz/covid-tracker19",
    link: "http://covid-tracker19.surge.sh/",
  },
];

export const feedbacks = [
  {
    name: "Hassan Mehmood",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
  },
  {
    name: "Maheen Altaf",
    feedback:
      "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
  },
];
