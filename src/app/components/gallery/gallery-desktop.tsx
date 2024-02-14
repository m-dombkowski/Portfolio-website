import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image, { ImageLoaderProps } from "next/image";
import styles from "./styles.module.scss";
import brownie from "../../../../public/images/food/brownie-kokos.png";
import chmurka from "../../../../public/images/food/chmurka.jpg";
import ciasteczka from "../../../../public/images/food/cookies.jpg";
import cynamonki from "../../../../public/images/food/cynamonki.jpg";
import drozdzowka from "../../../../public/images/food/drozdzowka-maliny.jpg";
import jagodzianka from "../../../../public/images/food/jagodzianka.jpg";
import sernik from "../../../../public/images/food/sernik.jpg";
import { FoodGalleryPicType } from "@/app/lib/definitions/types";

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
      source: drozdzowka,
      scale: scale4,
      alt: "raspberry filled bun",
    },
    {
      source: ciasteczka,
      scale: scale5,
      alt: "cookies",
    },
    {
      source: chmurka,
      scale: scale6,
      alt: "raspberry cloud",
    },
    {
      source: sernik,
      scale: scale9,
      alt: "blueberry cheesecake",
    },
    {
      source: cynamonki,
      scale: scale6,
      alt: "cinnamon rolls",
    },
    {
      source: jagodzianka,
      scale: scale8,
      alt: "blueberry filled bun",
    },
    {
      source: brownie,
      scale: scale9,
      alt: "brownie",
    },
  ];

  return (
    <div ref={container} className="h-[300vh] relative mt-[25vh] mb-[50vh]">
      <div className="sticky overflow-hidden top-0 h-[100vh]">
        {pictures.map(({ source, scale, alt }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image
                  className="object-cover"
                  src={source}
                  alt={alt}
                  placeholder="blur"
                  loader={({ src, width, quality }: ImageLoaderProps) => {
                    return `${source.src ? source.src : src}?w=${width}&q=${
                      quality || 75
                    }`;
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
