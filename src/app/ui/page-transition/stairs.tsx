import { anim, expand2, expand } from "@/app/lib/anim";
import { motion } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const numberOfColumns = 5;

  return (
    <>
      <div className="h-[100vh] w-[100vw] fixed top-0 left-0 pointer-events-none flex z-[9999] ">
        {[...Array(numberOfColumns)].map((_, i) => {
          return (
            <motion.div
              {...anim(expand, numberOfColumns - i)}
              className="height-[100%] w-[100%] bg-light-brown relative"
              key={i}
            ></motion.div>
          );
        })}
      </div>
      {children}
    </>
  );
}
