"use client";
import { motion, useInView } from "framer-motion";
import { opacity, slideUp, animByBoolean } from "./lib/anim";
import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";
import galaxy from "../../public/galaxy-bg.png";
import Navigation from "./ui/hero-nav/navigation";
import Cursor from "./ui/cursor/cursor";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import PageWrapper from "./ui/page-transition/fade";

export default function HomePage() {
  const descContainer = useRef<HTMLDivElement>(null);
  const isInView = useInView(descContainer);

  return (
    <>
      <PageWrapper>
        <main
          style={{
            backgroundImage: `url(${galaxy.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="flex flex-col items-center justify-center font-display"
        >
          <div className="min-h-screen flex flex-col justify-center text-center lg:text-left">
            <div
              className="mt-32 mb-16 flex flex-col text-sm px-8 gap-3 sm:text-base md:px-40 lg:text-xl lg:px-52 lg:gap-5 xl:p-0 xl: mb-32"
              ref={descContainer}
            >
              <motion.p
                className="mb-2 text-2xl"
                {...animByBoolean(slideUp, isInView, 0.6)}
              >
                Hey there! My name is{" "}
              </motion.p>
              <motion.h1
                {...animByBoolean(opacity, isInView, null)}
                className="text-4xl text-light-brown  mb-2 md:text-6xl lg:text-7xl"
              >
                Mateusz Dombkowski
              </motion.h1>

              <motion.p
                className="xl:max-w-[750px]"
                {...animByBoolean(slideUp, isInView, 1.2)}
              >
                {`I'm a Devloper passionate about everything code related with a focus on Frontend, especially React, Next.js, Typescript.`}
              </motion.p>
              <motion.span
                className="max-w-[245px] block m-[auto] sm:max-w-[unset] sm:m-[unset]"
                {...animByBoolean(slideUp, isInView, 1.8)}
              >
                {`  I also love baking but more about that on `}
                <span className="text-light-brown">
                  <Link href="/about">another</Link>
                </span>
                {" page."}
              </motion.span>

              <motion.p
                className="lg:min-w-[720px]"
                {...animByBoolean(slideUp, isInView, 2.4)}
              >
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
            {/* <div className="flex justify-center items-center">
              <Player
                className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]"
                src="https://lottie.host/bb61b936-d6cd-416e-83ad-7bae45f4a48b/ByPgffCY5H.json"
                background="transparent"
                speed={1}
                // style={{ width: "72px", height: "72px" }}
                direction={1}
                loop
                autoplay
              ></Player>
            </div> */}
          </div>
          {/* <motion.div className="flex flex-col gap-20 min-h-[450px] justify-center items-center lg:min-h-screen sm:min-h-[50vh] md:min-h-[90vh]">
            <Navigation />
          </motion.div> */}
        </main>
      </PageWrapper>
    </>
  );
}
