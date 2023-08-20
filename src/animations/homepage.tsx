export const MobilenavVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const slidevariants = {
  initial: {
    x: "100vw",
  },
  final: {
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    x: "100vw",
    transition: {
      duration: 0.6,
    },
  },
};
