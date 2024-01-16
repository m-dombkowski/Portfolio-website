import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import brownie from "../../../../public/images/food/brownie-kokos.png";
import chmurka from "../../../../public/images/food/chmurka.jpg";
import ciasteczka from "../../../../public/images/food/ciasteczka.jpg";
import cynamonki from "../../../../public/images/food/cynamonki.jpg";
import drozdzowka from "../../../../public/images/food/drozdzowka-maliny.jpg";
import jagodzianka from "../../../../public/images/food/jagodzianka.jpg";
import pierogi from "../../../../public/images/food/pierogi.jpg";

export default function Gallery() {
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

  const pictures = [
    {
      src: brownie,
      scale: scale4,
      alt: "brownie",
    },
    {
      src: chmurka,
      scale: scale5,
      alt: "raspberry cloud",
    },
    {
      src: ciasteczka,
      scale: scale6,
      alt: "cookies",
    },
    {
      src: cynamonki,
      scale: scale5,
      alt: "cinnamon rolls",
    },
    {
      src: drozdzowka,
      scale: scale6,
      alt: "raspberry filled bun",
    },
    {
      src: jagodzianka,
      scale: scale8,
      alt: "blueberry filled bun",
    },
    {
      src: pierogi,
      scale: scale9,
      alt: "pierogi (polish dumplings)",
    },
  ];

  return (
    <div ref={container} className="h-[300vh] relative">
      <div className="sticky overflow-hidden top-0 h-[100vh]">
        {pictures.map(({ src, scale, alt }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="w-[100%] h-[100%] top-0 absolute flex justify-center items-center "
            >
              <div
                className="relative w-[25vw] h-[25vh] [&>*:nth-of-type(2)]:top-[-30vh]
                [&>*:nth-of-type(2)]:left-[5vw]
                [&>*:nth-of-type(2)]:width-[35vw]
                [&>*:nth-of-type(2)]:height-[30vh]
                [&>*:nth-of-type(3)]:top-[-10vh]
                [&>*:nth-of-type(3)]:left-[-25vw]
                [&>*:nth-of-type(3)]:width-[20vw]
                [&>*:nth-of-type(3)]:height-[45vh]
                [&>*:nth-of-type(4)]:left-[27.5vw]
                [&>*:nth-of-type(4)]:width-[25vw]
                [&>*:nth-of-type(4)]:height-[25vh]
                [&>*:nth-of-type(5)]:top-[27.5vh]
                [&>*:nth-of-type(5)]:left-[5vw]
                [&>*:nth-of-type(5)]:width-[20vhw
                [&>*:nth-of-type(5)]:height-[25vh]
                [&>*:nth-of-type(6)]:top-[27.5vh]
                [&>*:nth-of-type(6)]:left-[-22.5vw]
                [&>*:nth-of-type(6)]:width-[30vw]
                [&>*:nth-of-type(6)]:height-[25vh]
                [&>*:nth-of-type(7)]:top-[22.5vh]
                [&>*:nth-of-type(7)]:left-[25vw]
                [&>*:nth-of-type(7)]:width-[15vw]
                [&>*:nth-of-type(7)]:height-[15vh]"
              >
                <Image
                  className="object-cover"
                  src={src}
                  fill
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
  {
    /* 
[&>*:nth-of-type(2)]:top-[-30vh]
[&>*:nth-of-type(2)]:left-[5vw]
[&>*:nth-of-type(2)]:width-[35vw]
[&>*:nth-of-type(2)]:height-[30vh]
[&>*:nth-of-type(3)]:top-[-10vh]
[&>*:nth-of-type(3)]:left-[-25vw]
[&>*:nth-of-type(3)]:width-[20vw]
[&>*:nth-of-type(3)]:height-[45vh]
[&>*:nth-of-type(4)]:left-[27.5vw]
[&>*:nth-of-type(4)]:width-[25vw]
[&>*:nth-of-type(4)]:height-[25vh]
[&>*:nth-of-type(5)]:top-[27.5vh]
[&>*:nth-of-type(5)]:left-[5vw]
[&>*:nth-of-type(5)]:width-[20vhw
[&>*:nth-of-type(5)]:height-[25vh]
[&>*:nth-of-type(6)]:top-[27.5vh]
[&>*:nth-of-type(6)]:left-[-22.5vw]
[&>*:nth-of-type(6)]:width-[30vw]
[&>*:nth-of-type(6)]:height-[25vh]
[&>*:nth-of-type(7)]:top-[22.5vh]
[&>*:nth-of-type(7)]:left-[25vw]
[&>*:nth-of-type(7)]:width-[15vw]
[&>*:nth-of-type(7)]:height-[15vh]
*/
  }
}
