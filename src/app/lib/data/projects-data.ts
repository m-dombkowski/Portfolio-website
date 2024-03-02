import { ProjectCardType } from "../definitions/types";
import Bafi from "../../../../public/images/bafi.jpg";

export const projectData: ProjectCardType[] = [
  {
    date: "March 2024",
    projectTitle: "Portfolio",
    briefDescription: "Website that you're currently looking at.",
    img: Bafi,
    alt: `Bafi's pic`,
    description:
      "My personal portfolio website showing visitors a bit about me, what I've been up to when I'm not working aswell as some code/work stuff",
    technologies: [
      "Next",
      "React",
      "Typescript",
      "Tailwind",
      "Shadcn UI",
      "Framer Motion",
      "GSAP",
    ],
    repoLink: "#",
    websiteLink: "#",
  },
  {
    date: "Work in progress",
    projectTitle: "Moc grzybiarzy",
    briefDescription:
      "Weather checking application with beautiful visuals, database connection, account where user can bookmark his favorite cities.",
    img: Bafi,
    alt: `Bafi's pic`,
    description:
      "Application where users are able to check weather, bookmark their favorites cities and also check more specific data like forecast, time, humidity, pressure, sunset time, air quality and many more. Powered by OpenWeather API and Supabase Postgres SQL Database.",
    technologies: [
      "Next",
      "React",
      "Typescript",
      "Openweather API",
      "Tailwind",
      "Supabase",
      "React Hook Form",
    ],
    repoLink: "#",
    websiteLink: "#",
  },
];
