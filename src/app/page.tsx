"use client";
import "@lottiefiles/lottie-player";
import { motion } from "framer-motion";
import { useState } from "react";

import { Typewriter } from "react-simple-typewriter";
import Navigation from "./ui/navigation";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center ">
      <motion.div className="mb-20 min-h-screen flex flex-col justify-center ">
        <div className="mt-32 mb-16">
          <h1 className="text-8xl text-center mb-6">Hello there!</h1>
          <p className="mb-3">{`My name's Mateusz and I'm currently working as a Junior Front-end Developer`}</p>
          <p>
            Currently looking for a position as a{" "}
            <Typewriter
              words={[
                "Frontend Developer",
                "Frontend Engineer",
                "React Developer",
                "React Engineer",
              ]}
              loop={false}
            />
            , you name it ;)
          </p>
        </div>
        <div className="flex justify-center items-center">
          <lottie-player
            src="https://lottie.host/4d41eeb0-af4b-45f2-bd31-08e3b5d1bf54/Ysyn9jJDCK.json"
            background="transparent"
            speed="1"
            style={{ width: "75px", height: "75px" }}
            direction="1"
            mode="normal"
            loop
            autoplay
          ></lottie-player>
        </div>
      </motion.div>
      <motion.div className="flex flex-col gap-20 min-h-screen justify-center items-center">
        <Navigation />
      </motion.div>
    </main>
  );
}
