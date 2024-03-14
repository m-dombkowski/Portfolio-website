"use client";
import Image from "next/image";
import { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

export default function Card({
  title,
  description,
  src,
  darkColor,
  lightColor,
  alt,
  i,
  progress,
  range,
  targetScale,
  darkTheme,
}: {
  title: string;
  description: string;
  src: string;
  alt: string;
  darkColor: string;
  lightColor: string;
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  darkTheme: boolean;
}) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[100vh] flex items-center justify-center sticky top-0 font-calc"
    >
      <motion.div
        className="flex flex-col relative h-[500px] w-[300px] xs2:w-[375px] xs3:w-[450px] rounded-lg p-10 transform-origin-top sm:w-[550px] lg:w-[900px] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"
        style={{
          backgroundColor: darkTheme ? darkColor : lightColor,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <h2 className="text-lg text-center m-0 text:xl sm:text-4xl lg:mb-8">
          {title}
        </h2>
        <div className="flex flex-col h-[100%] mt-4 gap-4 lg:flex-row lg:gap-12">
          <div className="w-[100%] top-0 lg:top-[5%] lg:w-[40%] lg:relative">
            <p className="text-xs text-justify sm:text-sm lg:first-letter:text-2xl lg:text-lg ">
              {description}
            </p>
          </div>

          <div className="relative w-[100%] h-[100%] rounded-xl overflow-hidden lg:w-[60%] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            <motion.div
              style={{ scale: imageScale }}
              className="w-[100%] h-[100%] relative"
            >
              <Image className="object-fit-cover" fill src={src} alt={alt} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
