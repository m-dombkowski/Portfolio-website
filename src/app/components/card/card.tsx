"use client";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className="h-full group overflow-hidden relative duration-700 border rounded-xl border-white md:gap-8 bg-[transparent]"
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 transition duration-500 [mask-image:linear-gradient(white,transparent)]" />
        <motion.div
          className="absolute inset-0 dark:bg-gradient-to-br opacity-20 dark:from-[#d4ede4] dark:via-[#7bbea8] dark:to-[#8fdcc2] bg-gradient-to-br from-[#025a4e] via-[#02483e] to-[#025146]  transition duration-500 group-hover:opacity-30"
          style={style}
        />
        <motion.div
          className="absolute inset-0 opacity-0 mix-blend-overlay group-hover:opacity-100"
          style={style}
        />
      </div>
      {children}
    </div>
  );
};
