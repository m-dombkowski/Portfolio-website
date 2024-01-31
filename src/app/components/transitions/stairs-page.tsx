import { anim, expand, opacityBg } from "@/app/lib/anim";
import { motion } from "framer-motion";

export default function StairsTransition({}: {}) {
  const numberOfColumns = 5;

  return (
    <>
      <motion.div
        {...anim(opacityBg, null)}
        className="h-[100vh] w-[100%] fixed top-0 left-0 pointer-events-none flex z-[9998] bg-black"
      ></motion.div>
      <div className="h-[100vh] w-[100vw] fixed top-0 left-0 pointer-events-none flex z-[9999]">
        {[...Array(numberOfColumns)].map((_, i) => {
          return (
            <motion.div
              {...anim(expand, i)}
              className="h-[100%] w-[100%] bg-black relative top-0"
              key={i}
            />
          );
        })}
      </div>
    </>
  );
}
