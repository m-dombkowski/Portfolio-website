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
      className="h-full group overflow-hidden relative duration-700 border rounded-xl border-white md:gap-8 bg-[transparent] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 transition duration-500 [mask-image:linear-gradient(white,transparent)]" />
        <motion.div
          className="absolute inset-0 dark:bg-gradient-to-br opacity-20 dark:from-[#d4ede4] dark:via-[#7bbea8] dark:to-[#8fdcc2] bg-gradient-to-br from-[#013f37] via-[#01362f] to-[#01362f]  transition duration-500 group-hover:opacity-30"
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
