import { Variants } from "framer-motion";

export const mountAnim = { initial: "initial", animate: "enter", exit: "exit" };

export const anim = (variants: Variants, custom: number | null) => {
  return {
    initial: "initial",
    animate: "open",
    open: "open",
    // exit: "exit",
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

export const rotateX = {
  initial: {
    rotateX: 90,
    opacity: 0,
  },
  enter: (i: number) => ({
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.3 + i * 0.05,
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

export const height = {
  initial: {
    height: 0,
  },
  enter: (i: number) => ({
    height: "100%",
    transition: { duration: 0.5, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] },
  }),
  exit: (i: number) => ({
    height: 0,
    transition: { duration: 0.5, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const background = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.5,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
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
export const opacityNav = {
  initial: {
    opacity: 0,
  },
  enter: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: i },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

export const slideLeft = {
  initial: { x: "-15px", opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 * i },
  }),
  // exit: { x: "15px", opacity: 0 },
};

export const slideUp = {
  initial: { y: "15px", opacity: "0" },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.75 * i },
  }),
  // exit: {
  //   y: "15px",
  //   opacity: 0,
  // },
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
  // exit: (i: number) => ({
  //   height: "100vh",
  //   transition: {
  //     duration: 0.65,
  //     delay: 0.1 * i,
  //     ease: [0.215, 0.61, 0.355, 1],
  //   },
  // }),
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

  // exit: {
  //   opacity: 1,
  // },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 1 },
  },
  // exit: {
  //   opacity: 0,
  // },
};
export const opacityWithDelay = {
  initial: {
    opacity: 0,
  },
  open: (i: number) => ({
    opacity: 1,
    transition: { duration: 1, delay: i },
  }),
  // exit: {
  //   opacity: 0,
  // },
};
