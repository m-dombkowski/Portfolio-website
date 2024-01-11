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
    <div className=" flex justify-center items-center flex-col gap-10 pt-[20%]">
      <div className="text-center font-display text-4xl text-color-text-primary">
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
          src="https://lottie.host/eb5692cb-2aeb-4dbb-8613-d511f6b2fdf2/96SeDHXDq6.json"
          background="transparent"
          style={{ width: "500px", height: "500px" }}
          loop
          autoplay
        ></Player>
      </motion.div>
    </div>
  );
}
