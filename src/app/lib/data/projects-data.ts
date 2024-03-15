import { ProjectCardType } from "../definitions/types";

export const projectData: ProjectCardType[] = [
  {
    date: "March 2024",
    projectTitle: "Portfolio",
    briefDescription: "Website that you're currently looking at.",
    gifs: [
      "https://i.ibb.co/TBB0YH2/vid-1.gif",
      "https://i.ibb.co/wdgtYTP/vid-2.gif",
      "https://i.ibb.co/0cNvtYg/vid-3.gif",
    ],
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
    repoLink: "https://github.com/m-dombkowski/Portfolio-website",
    websiteLink: "https://www.dombkowski.pl",
  },
  // {
  //   date: "Work in progress",
  //   projectTitle: "Moc grzybiarzy",
  //   briefDescription:
  //     "Weather checking application with beautiful visuals, database connection, account where user can bookmark his favorite cities.",
  //   gifs: ["https://i.ibb.co/TBB0YH2/vid-1.gif"],
  //   alt: `Bafi's pic`,
  //   description:
  //     "Application where users are able to check weather, bookmark their favorites cities and also check more specific data like forecast, time, humidity, pressure, sunset time, air quality and many more. Powered by OpenWeather API and Supabase Postgres SQL Database.",
  //   technologies: [
  //     "Next",
  //     "React",
  //     "Typescript",
  //     "Openweather API",
  //     "Tailwind",
  //     "Supabase",
  //     "React Hook Form",
  //   ],
  //   repoLink: "#",
  //   websiteLink: "#",
  // },
];
