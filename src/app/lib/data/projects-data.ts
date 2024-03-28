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
      "Next.js",
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
  {
    date: "Work in progress",
    projectTitle: "Blog with newsletter",
    briefDescription:
      "Blog website with a possibility to signup for newsletter",
    gifs: ["https://i.ibb.co/jgSw65P/giphy.gif"],
    alt: `Placeholder gif`,
    description:
      "Blog powered by Next.js and Sanity where person with permission can add/edit/delete posts which can be later viewed by everyone else. Newslettter powered by Sendgrid API.",
    technologies: [
      "Next.js",
      "Typescript",
      "Sanity",
      "Tailwind",
      "Sendgrid API",
    ],
    repoLink: "https://github.com/m-dombkowski/blog-nextjs-sanity/",
    websiteLink: null,
  },
];
