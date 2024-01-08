"use client";
import { motion, useInView } from "framer-motion";
import { opacity, slideUp, anim, animByBoolean } from "../lib/anim";
import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";
import galaxy from "../../../public/galaxy-bg.png";
import Navigation from "../ui/hero-nav/navigation";
import Cursor from "../ui/cursor/cursor";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

export default function HomePage() {
  const descContainer = useRef<HTMLDivElement>(null);
  const isInView = useInView(descContainer);

  return (
    <>
      <Cursor />
      <main
        style={{
          backgroundImage: `url(${galaxy.src})`,
          // other styles
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col items-center justify-center font-sans"
      >
        <div className="mb-20 min-h-screen flex flex-col justify-center ">
          <div
            className="mt-32 mb-16 flex gap-5 flex-col text-xl"
            ref={descContainer}
          >
            <motion.p {...animByBoolean(slideUp, isInView, 0.6)}>
              Hey there! My name is{" "}
            </motion.p>
            <motion.h1
              {...animByBoolean(opacity, isInView, null)}
              className="text-7xl text-light-brown font-display"
            >
              Mateusz Dombkowski
            </motion.h1>

            <motion.p
              {...animByBoolean(slideUp, isInView, 1.2)}
            >{`and I'm a Devloper passionate about everything code related with a focus on Frontend,`}</motion.p>
            <motion.p {...animByBoolean(slideUp, isInView, 1.8)}>
              {`especially React, Next.js, Typescript. I also love baking but more about that on `}
              <span className="text-light-brown">
                <Link href="/about">another</Link>
              </span>
              {" page."}
            </motion.p>
            <motion.p {...animByBoolean(slideUp, isInView, 2.4)}>
              At the moment looking for a new full-time position as a{" "}
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
          </div>
          <div className="flex justify-center items-center">
            <Player
              src="https://lottie.host/bb61b936-d6cd-416e-83ad-7bae45f4a48b/ByPgffCY5H.json"
              background="transparent"
              speed={1}
              style={{ width: "100px", height: "100px" }}
              direction={1}
              // mode="normal"
              loop
              autoplay
            ></Player>
          </div>
        </div>
        <motion.div className="flex flex-col gap-20 min-h-screen justify-center items-center ">
          <Navigation />
        </motion.div>
      </main>
    </>
  );
}
