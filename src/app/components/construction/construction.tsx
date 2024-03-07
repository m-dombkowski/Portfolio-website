import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

export default function PageUnderContstuction() {
  const slideUp = {
    initial: { y: "55px", opacity: 0 },
    open: () => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    }),
    exit: {
      y: "55px",
      opacity: 0,
    },
  };

  return (
    <div className=" flex justify-center items-center flex-col gap-10 ">
      <div className="text-center font-calc text-xl dark:text-color-text-primary  sm:text-4xl">
        <p>Oops, this page is currently under construction.</p>
        <p>Please check back later</p>
      </div>
      <motion.div
        initial="initial"
        animate="open"
        exit="exit"
        variants={slideUp}
      >
        <Player
          className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]"
          src="https://lottie.host/eb5692cb-2aeb-4dbb-8613-d511f6b2fdf2/96SeDHXDq6.json"
          background="transparent"
          loop
          autoplay
        ></Player>
      </motion.div>
    </div>
  );
}
