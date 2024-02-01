import { NavDataType } from "./definitions/types";
import ciasteczka from "../../../public/images/food/cookies.jpg";
import cynamonki from "../../../public/images/food/cynamonki.jpg";
import pierogi from "../../../public/images/food/pierogi.jpg";
import drozdzowka from "../../../public/images/food/drozdzowka-maliny.jpg";

export const NavigationData: NavDataType[] = [
  {
    href: "/",
    description: "Main page",
    name: "Home",
    speed: 0.33,
    index: 0,
    image: ciasteczka,
  },
  {
    href: "/about",
    description: "Something about me",
    name: "About",
    speed: 0.65,
    index: 1,
    image: cynamonki,
  },
  {
    href: "/work",
    description: "Commercial experience and pet projects",
    name: "Work",
    speed: 0.65,
    index: 2,
    image: pierogi,
  },
  {
    href: "/contact",
    description: `Let's chat!`,
    name: "Contact",
    speed: 1,
    index: 3,
    image: drozdzowka,
  },
];
