import { Variants } from "framer-motion";

export const anim = (variants: Variants, custom: number | null) => {
  return {
    initial: "initial",
    animate: "enter",
    open: "open",
    exit: "exit",
    variants,
    custom,
  };
};

export const animByBoolean = (
  variants: Variants,
  animateValue: boolean,
  custom: number | null
) => {
  return {
    initial: "initial",
    animate: animateValue ? "open" : "exit",
    open: "open",
    exit: "exit",
    variants,
    custom,
  };
};

export const animPage = (variants: Variants) => {
  return {
    initial: "initial",
    animate: "open",
    exit: "exit",
    variants,
  };
};

export const fadePage = {
  initial: { top: "35px", opacity: 0 },
  open: () => ({
    top: "0",
    opacity: 1,
    transition: { duration: 0.3 },
  }),
  exit: () => ({ top: "50px", opacity: 0, transition: { duration: 0.3 } }),
};

export const slideLeft = {
  initial: { x: "-15px", opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 * i },
  }),
  exit: { x: "15px", opacity: 0 },
};

export const slideUp = {
  initial: { y: "15px", opacity: "0" },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.75 * i },
  }),
  exit: {
    y: "15px",
    opacity: 0,
  },
};

export const expand = {
  initial: {
    top: 0,
  },
  enter: (i: number) => ({
    top: "100vh",
    transition: {
      duration: 0.65,
      delay: 0.1 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: {
      height: "0",
      top: "0",
    },
  }),
  exit: (i: number) => ({
    height: "100vh",
    transition: {
      duration: 0.65,
      delay: 0.1 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const opacityBg = {
  initial: {
    opacity: 1,
  },

  enter: {
    opacity: 0,
    transition: {
      duration: 0.05,
    },
  },

  exit: {
    opacity: 1,
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
  },
};
export const opacityWithDelay = {
  initial: {
    opacity: 0,
  },
  open: (i: number) => ({
    opacity: 1,
    transition: { duration: 1, delay: i },
  }),
  exit: {
    opacity: 0,
  },
};
