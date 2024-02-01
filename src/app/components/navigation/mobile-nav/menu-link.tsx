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
      onMouseLeave={animateOut}
      ref={scope}
      variants={rotateX}
      {...mountAnim}
      custom={index}
      className="group relative border-t flex justify-center pointer origin-top last-of-type:border-b"
    >
      <Link
        href={href}
        className="text-color-text-lighter uppercase text-[7vw] leading-[7.2vw] m-0"
      >
        {name}
      </Link>
      <div
        ref={outer}
        className="flex absolute h-[100%] w-[100%] overflow-hidden pointer-events-none"
      >
        <div
          ref={inner}
          className="flex bg-[#D3FD50] absolute whitespace-nowrap h-[100%] top-[100%]"
        >
          {[...Array(2)].map((_, index) => {
            return (
              <div key={index} className="opacity-0 group-hover:opacity-100 ">
                <SliderContent description={description} image={image} />
              </div>
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
    <div className="flex items-center animate-[slider_12s_linear_infinite] transition-opacity duration-300 relative ">
      <div className="h-[6vw] w-[16vw] relative overflow-hidden rounded-[3vw] ml-[1vw] mr-[1vw] flex">
        <Image src={image} fill alt="image" className="object-cover" />
      </div>
      <p className="text-[#000] uppercase text-[7vw] leading-[7.2vw] m-0 ">
        {description}
      </p>
      <div className="h-[6vw] w-[16vw] relative overflow-hidden rounded-[3vw] ml-[1vw] mr-[1vw] flex">
        <Image src={image} fill alt="image" className="object-cover" />
      </div>
      <p className="text-[#000] uppercase text-[7vw] leading-[7.2vw] m-0">
        {description}
      </p>
    </div>
  );
};
