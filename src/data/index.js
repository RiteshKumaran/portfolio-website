import weather from "../assets/weather.png";
import analytics from "../assets/analytics.png";
import crypto from "../assets/crypto.jpeg";
import cyberthon from "../assets/cyberthon.png";
import passwordNew from "../assets/password-new.jpeg";
import gdsc from "../assets/gdsc-logo.png";
import sos from "../assets/sos.webp";

export const HERO_CONTENT = `I am a Frontend Developer specializing in React with TypeScript. As a proactive member of the technical team at Google Developer Students Club, I actively contribute to fostering innovation and knowledge-sharing within my college community. With a passion for attending events and conferences, I am dedicated to staying updated with the latest advancements in technology. Eager to leverage my skills and experiences to drive impactful projects and collaborations.`;

export const ABOUT_TEXT = `Currently, I'm a Second-year student at SRM Ramapuram, doing Bachelor's degree in Computer Science. I'm a Technical team member at Google Developer Students Club SRM Ramapuram. My fascination with web development began when I crafted my very first HTML document. Since then, my journey has been marked by a relentless commitment to refining my skills. I firmly believe that the web is a powerful canvas for transformation, and I'm dedicated to making it a better place.

Beyond the realm of coding, you'll often find me on the badminton court. This sport not only keeps me physically active but also hones my quick reflexes and strategic thinking, skills that are transferrable to problem-solving in web development. Music is another cornerstone of my life, it's both a source of relaxation and a wellspring of creativity.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "Software Developer Intern",
    company: "Ministry of Education",
    description: `Working on the development of the new School Innovation Council Website`,
    technologies: ["React.js", "Tailwind CSS"],
  },
  {
    year: "October 2023 - Present",
    role: "Technical Team Member",
    company: "Google Developer Students Club",
    description: `Developed the home page and sponsors page for the club’s website.
Hosted a panel discussion on "Navigating the Startup Journey" as a key part of the GDSC Chennai Summit up
Gave a presentation on "Mastering the Art of Creating a Sleek and Stylish UI" at DevCord '23, discussing JavaScript's capabilities and React's efficiency in streamlining UI development. Explained React's advantages in building reactive web applications.`,
    technologies: [
      "React.js",
      "Typescript",
      "Next.js",
      "Firebase",
      "Tailwind CSS",
    ],
  },
  {
    year: "September 2023 - October 2022",
    role: "Technical Team Member",
    company: "TechPro Club",
    description: `Engaged deeply with data structures and algorithms, enhancing problem-solving skills. Actively participated in numerous HackerRank and LeetCode contests, demonstrating proficiency in competitive programming.`,
    technologies: ["Python", "C++", "DSA"],
  },
  {
    year: "August 2023 - Present",
    role: "Sophomore in Computer Science",
    company: "SRMIST Ramapuram",
    description: `Currently pursuing a Bachelor's degree in Computer Science, with a focus on web development and software engineering. Actively engaged in various technical and non-technical activities, including hackathons, coding competitions, and web development projects.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
  {
    year: "June 2009 - June 2023",
    role: "High School Graduate",
    company: "New Prince Matriculation Higher Secondary School",
    description: `Completed high school with a focus on science and mathematics, laying the foundation for my future studies in computer science. Actively participated in extracurricular activities, including sports and music, to develop a well-rounded personality.`,
    technologies: ["Python", "C++", "SQL"],
  },
];

export const PROJECTS = [
  {
    title: "Season Of Solutions Website",
    image: sos,
    description:
      "Led the Season of Solutions website team and developed the Hero and footer section of the website using Aceternity UI and Next.js",
    technologies: ["Next.js", "Firebase", "Aceternity UI"],
    link: "https://sos.gdscsrmrmp.club/",
  },
  {
    title: "Weather Application",
    image: weather,
    description:
      "Developed a user-friendly weather application using React and the Weather API, which provides real-time weather updates and forecasts. This project showcases my ability to integrate external APIs and enhance user experience through a responsive design, eﬀectively leveraging modern web development technologies.",
    technologies: ["React.js", "API", "Tailwind CSS"],
    link: "https://forecast-weather-app.vercel.app/",
  },
  {
    title: "Cyberthon Website",
    image: cyberthon,
    description:
      "Utilized React.js to create an engaging and interactive website for Cyberthon, a cybersecurity-focused hackathon during CyberCarnival’24, markedly improving both user engagement and the overall event experience.",
    technologies: ["React.js", "CSS"],
    link: "https://hackathon.cybercarnival.in/",
  },
  {
    title: "GDSC Website",
    image: gdsc,
    description:
      "Developed the home page and sponsors page for the club’s website. Added firebase integration for the sponsors page, enabling dynamic updates and showcasing my skills in leveraging external data sources to enhance user experience.",
    technologies: ["React.js", "CSS", "Firebase"],
    link: "https://dev.gdscsrmrmp.club/",
  },
  {
    title: "Static Webpage using React Tailwind",
    image: analytics,
    description:
      "A static website built using React and Tailwind CSS, which showcases my skills in creating responsive and visually appealing web pages. This project demonstrates my ability to leverage modern web development technologies to deliver a seamless user experience.",
    technologies: ["React.js", "Tailwind CSS"],
    link: "https://ritz-analytics.vercel.app/",
  },
  {
    title: "Crypto coin tracker",
    image: crypto,
    description:
      "Developed a cryptocurrency tracking web application using React and the CoinGecko API, which enables users to monitor real-time data on various cryptocurrencies. This app features a user-friendly interface and provides dynamic updates, showcasing my skills in API integration and modern web frameworks",
    technologies: ["React.js", "CSS", "API"],
    link: "https://crypto-coin-tracker.vercel.app/",
  },
  {
    title: "Password Generator",
    image: passwordNew,
    description:
      "Built a password generator web application using React, which allows users to create secure and customizable passwords. This project demonstrates my ability to develop practical tools using modern web technologies, enhancing user security and convenience.",
    technologies: ["React.js", "CSS"],
    link: "https://ritz-password-generator.vercel.app/",
  },
];

export const CONTACT = {
  phoneNo: "+91 6383458849",
  email: "riteshkumaran.dev@gmail.com",
};
