"use client";

import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";
import Link from "next/link";
import { slideUp, animByBoolean } from "@/app/lib/anim";

export default function Home() {
  const descContainer = useRef<HTMLDivElement>(null);
  const isInView = useInView(descContainer);

  return (
    <>
      <main className="flex flex-col items-center justify-center font-calc">
        <div className=" flex flex-col justify-center text-center lg:text-left">
          <div
            className="mt-32 mb-16 flex flex-col text-sm px-8 gap-3 sm:text-base md:px-40 lg:text-xl lg:px-52 lg:gap-5 xl:p-0 xl:mb-32"
            ref={descContainer}
          >
            <motion.p
              className="mb-2 text-2xl"
              {...animByBoolean(slideUp, isInView, 0.4)}
            >
              Hey there! My name is{" "}
            </motion.p>
            <h1 className="text-4xl text-dark-text-primary  mb-2 md:text-6xl lg:text-7xl">
              Mateusz Dombkowski
            </h1>
            <div className="max-w-[500px] flex flex-col justify-center items-center m-auto gap-3 lg:gap-5  lg:m-0 lg:max-w-[unset] lg:items-start">
              <motion.p
                className="w-[100%] xl:max-w-[750px]"
                {...animByBoolean(slideUp, isInView, 0.8)}
              >
                {`I'm a Devloper passionate about everything code related with a focus on Frontend, especially `}
                <span className="dark:text-color-text-darker ">
                  <Link href="/work">React, Next.js, Typescript</Link>
                </span>
                {`.`}
              </motion.p>
              <motion.p {...animByBoolean(slideUp, isInView, 1.2)}>
                {`Outside of work I'm a big fan of `}
                <span className=" text-color-text-light-mode-dark dark:text-color-text-darker">
                  <Typewriter
                    words={["baking.", "gaming.", "dogs 🐕.", "metalcore."]}
                    loop={false}
                  />
                </span>
              </motion.p>
              <motion.p {...animByBoolean(slideUp, isInView, 1.6)}>
                {`More about me can be found `}
                <span className="dark:text-color-text-darker">
                  <Link href="/about">here</Link>
                </span>
                {`.`}
              </motion.p>

              <motion.p {...animByBoolean(slideUp, isInView, 2)}>
                {`At the moment looking for a new full-time position as a `}
                <span className="dark:text-color-text-darker">
                  <Link href="/contact">Frontend Developer</Link>
                </span>
                {`.`}
              </motion.p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
