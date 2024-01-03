import React, { useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { NavigationData } from "../lib/navData";
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
  setSelectedProject: Dispatch<SetStateAction<null>>;
}) {
  return (
    <div className={styles.titles}>
      {NavigationData.map((project, i) => {
        return (
          <Title
            key={i}
            data={{ ...project, i }}
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
  data: NavDataType[];
  setSelectedProject: Dispatch<SetStateAction<null>>;
}) {
  const { name, speed } = NavigationData;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={container} className={styles.title}>
      <div
        className={styles.wrapper}
        onMouseOver={() => {
          setSelectedProject(i);
        }}
        onMouseLeave={() => {
          setSelectedProject(null);
        }}
      >
        <motion.p style={{ clipPath: clip }}>{name}</motion.p>
        <p>{name}</p>
      </div>
    </div>
  );
}
