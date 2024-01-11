import { Variants } from "framer-motion";

export const anim = (variants: Variants, custom: number | null) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    open: "open",
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
    animate: animateValue ? "open" : "closed",
    open: "open",
    closed: "closed",
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
  initial: { top: "25px", opacity: 0 },
  open: () => ({
    top: "0",
    opacity: 1,
    transition: { duration: 0.3 },
  }),
  exit: () => ({ top: "25px", opacity: 0, transition: { duration: 0.3 } }),
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
  closed: {
    opacity: 0,
  },
};

export const slideUp = {
  initial: { y: "15px", opacity: "0" },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.75 * i },
  }),
  closed: {
    y: "15px",
    opacity: 0,
  },
};
