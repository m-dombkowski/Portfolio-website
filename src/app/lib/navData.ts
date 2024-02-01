import { NavDataType } from "./definitions/types";
import ciasteczka from "../../../../public/images/food/cookies.jpg";
import sernik from "../../../../public/images/food/sernik.jpg";
import brownie from "../../../../public/images/food/brownie-kokos.png";
import drozdzowka from "../../../../public/images/food/drozdzowka-maliny.jpg";

export const NavigationData: NavDataType[] = [
  {
    href: "/",
    description: "Main page of this website",
    name: "Home",
    speed: 0.33,
    index: 0,
    image: ciasteczka,
  },
  {
    href: "/about",
    description:
      "Get to know me, not only by what I do professionally but also what I do and am up to outside of a work time",
    name: "About",
    speed: 0.65,
    index: 1,
    image: sernik,
  },
  {
    href: "/work",
    description:
      "My (mostly) commercial experiance shown in a nice visual way, with a short description for each chapter",
    name: "Work",
    speed: 0.65,
    index: 2,
    image: brownie,
  },
  {
    href: "/contact",
    description: `Let's chat! Feel free to hit me up via email or on any social media`,
    name: "Contact",
    speed: 1,
    index: 3,
    image: drozdzowka,
  },
];
