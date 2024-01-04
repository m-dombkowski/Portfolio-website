"use client";
import "@lottiefiles/lottie-player";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Navigation from "./ui/navigation";
import Image from "next/image";
import galaxy from "../../public/galaxy-bg.png";
import {
  opacity,
  slideUpFirst,
  slideUpSecond,
  slideUpThird,
} from "./home/anim";
import { useRef } from "react";

export default function Home() {
  const descContainer = useRef<HTMLDivElement>(null);
  const isInView = useInView(descContainer);

  return (
    <main
      style={{
        backgroundImage: `url(${galaxy.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col items-center justify-center"
    >
      {/* ---- PARTICLES THAT ARE MOVING ON HOVER ----- */}
      {/* <div id="large-header" className="absolute inset-0 -z-10 animate-fade-in">
        <canvas id="demo-canvas" className="min-h-screen w-[100%]"></canvas>
      </div> */}
      <div className="mb-20 min-h-screen flex flex-col justify-center ">
        <div className="mt-32 mb-16" ref={descContainer}>
          <motion.h1
            initial="initial"
            animate={isInView ? "open" : "closed"}
            variants={opacity}
            className="text-8xl text-center mb-6 text-light-brown"
          >
            Hello there!
          </motion.h1>
          <div className="flex gap-5 flex-col text-xl">
            <motion.p
              className="pr-[10px]"
              initial="initial"
              variants={slideUpFirst}
              animate={isInView ? "open" : "closed"}
            >{`My name's Mateusz and I'm currently working as a Junior Frontend Developer.`}</motion.p>
            <motion.p
              initial="initial"
              variants={slideUpSecond}
              animate={isInView ? "open" : "closed"}
            >
              {`At the moment I'm looking for a new full-time position as a`}{" "}
              <span className="text-light-brown">
                <Typewriter
                  words={[
                    "Frontend Developer.",
                    "Frontend Engineer.",
                    "React Developer.",
                    "React Engineer.",
                  ]}
                  loop={false}
                />
              </span>
            </motion.p>
            <motion.p
              initial="initial"
              variants={slideUpThird}
              animate={isInView ? "open" : "closed"}
            >
              Always happy and open to new opportunities/projects.
            </motion.p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <lottie-player
            src="https://lottie.host/bb61b936-d6cd-416e-83ad-7bae45f4a48b/ByPgffCY5H.json"
            background="transparent"
            speed="1"
            style={{ width: "100px", height: "100px" }}
            direction="1"
            mode="normal"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
      <motion.div className="flex flex-col gap-20 min-h-screen justify-center items-center">
        <Navigation />
      </motion.div>
    </main>
  );
}
