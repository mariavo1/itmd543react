import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import htmlImg from "@/public/html.png";
import cssImg from "@/public/css.png";
import javascriptImg from "@/public/javascript.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Student at Illinois Institute of Technology",
    location: "Chicago, IL",
    description:
      "Last year at IIT studying to become a front-end web developer",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "HTML",
    description:
      "I started learning HTML back in highschool and had an oppurtunity to create a website for a local business.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: htmlImg,
  },
  {
    title: "CSS",
    description:
      "CSS goes hand in hand with HTML and I was able to utilize skills I learned to create a styled webpage.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: cssImg,
  },
  {
    title: "Javascript",
    description:
      "I know my limits with JavaScript, but I'm still learning.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: javascriptImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "Python",
] as const;