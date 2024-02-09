import { CardParallaxDataType } from "@/app/lib/definitions/types";
import Bafi from "../../../../public/images/bafi.jpg";
import Start from "../../../../public/images/start.jpg";
import Winter from "../../../../public/images/winter.jpg";
import Code from "../../../../public/images/code.jpg";

export const cards: CardParallaxDataType[] = [
  {
    title: "Beginnings",
    description: `Back in 2021 I decided to give programming a shot.
      I can honestly say that it was hell of a ride tumbling head first into a rabbit hole called Frontend Development.
      Since then I stared my first commercial work, gained ton of knowledge and learned a lot, however I know it's just a beginning.`,
    src: Start,
    alt: "Screen with some code",
    color: "#568576",
  },

  {
    title: "Present",
    description:
      "Now I have over 1.5 years of commercial experience in which I've been mainly focused on working with React, Typescript, CSS. In this time I also learned a lot oustide of my commercial work, doing side projects with technologies like Next.js, Tailwind, Supabase, Firebase, various types of APIs and many more",
    src: Code,
    alt: "Opened laptop with some code",
    color: "#4a7265",
  },

  {
    title: "Free time",
    description:
      "Outside of my work time I enjoy good coffee, tea. You can also find me ice skating durning winter, roller skating durning summer, occasionally hiking or doing something I fell in love with last year, baking.",
    src: Winter,
    alt: "person on top of a mountain durning winter",
    color: "#3e5f54",
  },
  {
    title: "Baking, dogs, music",
    description:
      "Guess I fell in love with baking because simillar as in programming you can create something from almost nothing and you're able to see the growth and development of your project wheter it's a cake or appliaction. Other than that I really love metalcore and dogs. Actually planning on getting/adopting one myself this year. Pictured my friend's dog, Bafi <3",
    src: Bafi,
    alt: "cutest puppy face",
    color: "#314c43",
  },
];
