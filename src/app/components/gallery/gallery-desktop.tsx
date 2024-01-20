import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import brownie from "../../../../public/images/food/brownie-kokos.png";
import chmurka from "../../../../public/images/food/chmurka.jpg";
import ciasteczka from "../../../../public/images/food/ciasteczka.jpg";
import cynamonki from "../../../../public/images/food/cynamonki.jpg";
import drozdzowka from "../../../../public/images/food/drozdzowka-maliny.jpg";
import jagodzianka from "../../../../public/images/food/jagodzianka.jpg";
import pierogi from "../../../../public/images/food/pierogi.jpg";
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
      src: drozdzowka,
      scale: scale4,
      alt: "raspberry filled bun",
    },
    {
      src: ciasteczka,
      scale: scale5,
      alt: "cookies",
    },
    {
      src: chmurka,
      scale: scale6,
      alt: "raspberry cloud",
    },
    {
      src: pierogi,
      scale: scale9,
      alt: "pierogi (polish dumplings)",
    },
    {
      src: cynamonki,
      scale: scale6,
      alt: "cinnamon rolls",
    },
    {
      src: jagodzianka,
      scale: scale8,
      alt: "blueberry filled bun",
    },
    {
      src: brownie,
      scale: scale9,
      alt: "brownie",
    },
  ];

  return (
    <div ref={container} className="h-[300vh] relative mt-[50vh] mb-[100vh]">
      <div className="sticky overflow-hidden top-0 h-[100vh]">
        {pictures.map(({ src, scale, alt }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image
                  className="object-cover"
                  src={src}
                  alt={alt}
                  placeholder="blur"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
