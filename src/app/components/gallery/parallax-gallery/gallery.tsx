"use client";

import { cards } from "@/app/lib/data/card-parallax-data";
import Card from "./card";
import { useRef } from "react";
import { useScroll } from "framer-motion";

export default function ParallaxGallery() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <main
      ref={container}
      className="my-[-100px] sm:mb-[-50px] lg:mb-0 lg:mt-[-150px]"
    >
      {cards.map((card, i) => {
        const targetScale = 1 - (cards.length - i) * 0.05;
        return (
          <Card
            key={i}
            {...card}
            i={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
