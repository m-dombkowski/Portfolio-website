import React from "react";
import styles from "./style.module.scss";
import { height, background, mountAnim } from "../../lib/anim";
import { motion } from "framer-motion";

export default function StairsNavTransition() {
  return (
    <div className="fixed top-0 left-0 z-[1000] h-[100vh] flex transition duration-1000 pointer-events-none">
      {[...Array(5)].map((_, i) => {
        return <Stair key={i} i={i} />;
      })}

      <Background />
    </div>
  );
}

const Stair = ({ i }: { i: number }) => {
  return (
    <motion.div
      variants={height}
      {...mountAnim}
      custom={4 - i}
      className="w-[20vw] h-[100%] bg-black"
    ></motion.div>
  );
};

const Background = () => {
  return (
    <motion.div
      variants={background}
      {...mountAnim}
      className="w-[100%] h-[100%] absolute bg-black"
    ></motion.div>
  );
};
