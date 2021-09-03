import emoji from "react-easy-emoji";

import microsoft from "./assets/img/icons/common/microsoft.png";
import cyberTrace from "./assets/img/icons/common/cyberTrace.png";
import ARSII from "./assets/img/icons/common/arsii.png";

export const greetings = {
  name: "Mehdi Ben Hariz",
  title: "Hi there, I'm Mehdi",
  description:
    "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with   Reactjs / Nodejs  / Django /Laravel  and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
  resumeLink: "https://cv.hanzla.ga",
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
    emoji(
      "⚡ develop web and mobile solution with security and perfermance measurmenet"
    ),
    //  emoji("⚡ "),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // ),
  ],

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
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "logos:flutter",
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
      skillName: "CPP",
      fontAwesomeClassname: "logos:c-plusplus",
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "logos:linux-tux",
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
      skillName: "laravel",
      fontAwesomeClassname: "logos:laravel",
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "logos:docker-icon",
    // },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend", //Insert stack or technology you have experience in
    progressPercentage: "78", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Mobile",
    progressPercentage: "76",
  },
  {
    Stack: "ML",
    progressPercentage: "56",
  },
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
];

export const experience = [
  {
    role: "Mobile App Intern",
    company: "ARSII",
    companylogo: ARSII,
    date: "Jully 2021 – September 2021",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    role: "Head of Basic Web Department",
    company: "Microsoft Issatso Club",
    companylogo: microsoft,
    date: "Mars 2020 – Present",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    role: "Dev Team Member",
    company: "CyberTrace Club",
    companylogo: cyberTrace,
    date: "Jully 2021 – Present",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    github: "https://github.com/1hanzla100",
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
