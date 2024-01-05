import { Variants } from "framer-motion";

export const anim = (variants: Variants, custom: number) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
    custom,
  };
};

export const expand = {
  initial: {
    top: 0,
  },
  enter: (i: number) => ({
    top: "100%",

    transition: { duration: 0.5, delay: 0.1 * i },
  }),
};

export const expand2 = {
  initial: {
    height: "100%",
  },
  enter: (i: number) => ({
    height: 0,

    transition: { duration: 0.4, delay: i },
  }),
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 1 },
  },
  closed: {
    opacity: 0,
  },
};

export const slideUpFirst = {
  initial: { y: "50px", opacity: "0" },
  open: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.75 },
  },
  closed: {
    y: "50px",
    opacity: 0,
  },
};
export const slideUpSecond = {
  initial: { y: "50px", opacity: "0" },

  open: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 1.5 },
  },
  closed: {
    y: "50px",
    opacity: 0,
  },
};
export const slideUpThird = {
  initial: { y: "50px", opacity: "0" },

  open: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 2.25 },
  },
  closed: {
    y: "50px",
    opacity: 0,
  },
};
