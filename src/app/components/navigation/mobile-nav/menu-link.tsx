import { motion } from "framer-motion";
import { mountAnim, rotateX } from "../../../lib/anim";
import Link from "next/link";
import gsap from "gsap";
import { NavDataType } from "@/app/lib/definitions/types";
import { Dispatch, SetStateAction, useRef } from "react";
import Image, { StaticImageData } from "next/image";

export default function MenuLink({
  data,
  index,
  toggleMenu,
  setIsActive,
}: {
  data: NavDataType;
  index: number;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}) {
  const { name, href, description, image } = data;

  const outer = useRef<HTMLDivElement>(null);

  const inner = useRef<HTMLDivElement>(null);

  const manageMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.set(outer.current, { top: "-100%" });
      gsap.set(inner.current, { top: "100%" });
    } else {
      gsap.set(outer.current, { top: "100%" });
      gsap.set(inner.current, { top: "-100%" });
    }
    gsap.to(outer.current, { top: "0%", duration: 0.3 });
    gsap.to(inner.current, { top: "0%", duration: 0.3 });
  };

  const manageMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.to(outer.current, { top: "-100%", duration: 0.3 });
      gsap.to(inner.current, { top: "100%", duration: 0.3 });
    } else {
      gsap.to(outer.current, { top: "100%", duration: 0.3 });
      gsap.to(inner.current, { top: "-100%", duration: 0.3 });
    }
  };

  return (
    <motion.div
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      variants={rotateX}
      {...mountAnim}
      custom={index}
      className="group relative border-t flex justify-center pointer origin-top last-of-type:border-b"
    >
      <Link
        href={href}
        onClick={() => {
          setIsActive(false);
          toggleMenu(false);
        }}
        className="text-color-text-lighter uppercase text-[7vw] leading-[7.2vw] m-0 tv:text-[5.5vw] tv:leading-[5.7vw] w-[100%] text-center"
      >
        {name}
      </Link>
      <div
        ref={outer}
        className="flex absolute h-[100%] w-[100%] overflow-hidden pointer-events-none will-change-[top]"
      >
        <div
          ref={inner}
          className="flex bg-zinc-300-full absolute whitespace-nowrap h-[100%] top-[100%] "
        >
          {[...Array(2)].map((_, index) => {
            return (
              <div
                key={index}
                className="flex items-center animate-[slider_14s_linear_infinite] transition-opacity duration-500 relative opacity-0 group-hover:opacity-100"
              >
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
    <>
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
    </>
  );
};
