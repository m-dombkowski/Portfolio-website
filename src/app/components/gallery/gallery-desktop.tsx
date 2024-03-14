import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { FoodGalleryPicType } from "@/app/lib/definitions/types";
import { cn } from "@/app/lib/utils";

export default function GalleryDesktop() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures: FoodGalleryPicType[] = [
    {
      source: "https://i.ibb.co/DkYXypS/drozdzowka-maliny.jpg",
      scale: scale4,
      alt: "raspberry filled bun",
    },
    {
      source: "https://i.ibb.co/djNs2Y7/cookies.jpg",
      scale: scale5,
      alt: "cookies",
    },
    {
      source: "https://i.ibb.co/GdXDbVG/chmurka.jpg",
      scale: scale6,
      alt: "raspberry cloud",
    },
    {
      source: "https://i.ibb.co/LR7DgX7/sernik.jpg",
      scale: scale9,
      alt: "blueberry cheesecake",
    },
    {
      source: "https://i.ibb.co/nkcZw3Z/cynamonki.jpg",
      scale: scale6,
      alt: "cinnamon rolls",
    },
    {
      source: "https://i.ibb.co/FJh8X6L/jagodzianka.jpg",
      scale: scale8,
      alt: "blueberry filled bun",
    },
    {
      source: "https://i.ibb.co/NCMkTJH/brownie-kokos.png",
      scale: scale9,
      alt: "brownie",
    },
  ];

  return (
    <div ref={container} className="h-[300vh] relative mt-[25vh] ">
      <div className="sticky overflow-hidden top-0 h-[100vh]">
        {pictures.map(({ source, scale, alt }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={cn(styles.imageContainer, "relative")}>
                <Image
                  fill
                  className="object-cover"
                  style={{ width: "100%", height: "100%" }}
                  src={source}
                  alt={alt}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
