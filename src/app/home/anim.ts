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
