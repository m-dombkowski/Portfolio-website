import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function ScrollProgressBar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrollValue, setScrollValue] = useState<number>(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (scrollValue === 0) {
      setScrollValue(latest);
    }
    if (latest === 0) {
      setScrollValue(0);
    }
  });
  return (
    <>
      {scrollValue === 0 ? null : (
        <motion.div
          className="fixed top-0 h-[10px] left-0 right-0 origin-[0%] bg-color-text-darker z-[999]"
          style={{ scaleX: scrollYProgress }}
        />
      )}
    </>
  );
}
