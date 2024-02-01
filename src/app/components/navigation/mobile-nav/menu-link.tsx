import { motion, useAnimate } from "framer-motion";
import { mountAnim, rotateX } from "../../../lib/anim";
import Link from "next/link";
import { NavDataType } from "@/app/lib/definitions/types";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";

export default function MenuLink({
  data,
  index,
}: {
  data: NavDataType;
  index: number;
}) {
  const { name, href, description, image } = data;
  const [scope, animate] = useAnimate();

  const outer = useRef(null);

  const inner = useRef(null);

  const animateIn = async (e: React.MouseEvent<HTMLElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;
    await animate(
      outer.current,
      { top: `${direction * 100}%` },
      { duration: 0 }
    );
    await animate(
      inner.current,
      { top: `${-1 * direction * 100}%` },
      { duration: 0 }
    );
    animate([outer.current, inner.current], { top: "0%" }, { duration: 0.3 });
  };

  const animateOut = (e: React.MouseEvent<HTMLElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;
    animate(outer.current, { top: `${direction * 100}%` }, { duration: 0.3 });
    animate(
      inner.current,
      { top: `${-1 * direction * 100}%` },
      { duration: 0.3 }
    );
  };

  return (
    <motion.div
      onMouseEnter={animateIn}
      ref={scope}
      variants={rotateX}
      {...mountAnim}
      custom={index}
      className="border-t flex justify-center pointer origin-top last-of-type:border-b"
    >
      <Link
        href={href}
        className="text-color-text-lighter uppercase text-[7vw] leading-[7.2vw] m-0"
      >
        {name}
      </Link>
      <div ref={outer} className={styles.outer}>
        <div ref={inner} className={styles.inner}>
          {[...Array(2)].map((_, index) => {
            return (
              <SliderContent
                key={index}
                description={description}
                image={image}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
const SliderContent = ({
  description,
  image,
}: {
  description: string;
  image: StaticImageData;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={image} fill alt="image" />
      </div>
      <p>{description}</p>
      <div className={styles.imageContainer}>
        <Image src={image} fill alt="image" />
      </div>
      <p>{description}</p>
    </div>
  );
};
