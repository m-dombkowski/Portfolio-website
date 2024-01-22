import { NavDataType } from "./definitions/types";

export const NavigationData: NavDataType[] = [
  {
    href: "/",
    description: "Main page of this website",
    name: "Home",
    speed: 0.33,
    index: 0,
  },
  {
    href: "/about",
    description:
      "Get to know me, not only by what I do professionally but also what I do and am up to outside of a work time",
    name: "About",
    speed: 0.65,
    index: 1,
  },
  {
    href: "/experience",
    description:
      "My (mostly) commercial experiance shown in a nice visual way, with a short description for each chapter",
    name: "Experience",
    speed: 0.65,
    index: 2,
  },
  {
    href: "/contact",
    description: `Let's chat! Feel free to hit me up via email or on any social media`,
    name: "Contact",
    speed: 1,
    index: 3,
  },
];
