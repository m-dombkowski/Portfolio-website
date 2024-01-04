import React, { Dispatch, SetStateAction, useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { NavigationData } from "../lib/navData";
import Link from "next/link";
// import { NavDataType } from "../lib/definitions";

type NavDataType = {
  href: string;
  description: string;
  name: string;
  speed: number;
  index: number;
};

export default function index({
  setSelectedProject,
}: {
  setSelectedProject: Dispatch<SetStateAction<null | number>>;
}) {
  return (
    <div className="w-100 border-t-2 border-solid border-[rgba(183, 171, 152, 0.25)]">
      {NavigationData.map((project, i) => {
        return (
          <Title
            key={i}
            data={{ ...project }}
            setSelectedProject={setSelectedProject}
          />
        );
      })}
    </div>
  );
}

function Title({
  data,
  setSelectedProject,
}: {
  data: NavDataType;
  setSelectedProject: Dispatch<SetStateAction<null | number>>;
}) {
  const container = useRef<HTMLDivElement>(null);
  const { speed, name, index, href } = data;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${10 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div
      key={index}
      ref={container}
      className="w-100 border-b-2  border-solid border-[rgba(183, 171, 152, 0.25)] "
    >
      <div
        className="inline-block pl-[5%] relative"
        onMouseOver={() => {
          setSelectedProject(index);
        }}
        onMouseLeave={() => {
          setSelectedProject(null);
        }}
      >
        <Link
          href={href}
          className="font-bold text-[7vw] leading-[9vw] uppercase"
        >
          <motion.p
            className="inline-block text-light-brown relative m-0  z-[2] "
            style={{ clipPath: clip }}
          >
            {name}
          </motion.p>
          <p className="block absolute text-shadow top-0 z-[1] m-0 ">{name}</p>
        </Link>
      </div>
    </div>
  );
}
