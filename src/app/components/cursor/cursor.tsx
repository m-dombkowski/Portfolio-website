import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
export default function Cursor() {
  const innerSize = 8;
  const outerSize = 50;

  const mouseInner = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const mouseOuter = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const smoothInnerOptions = { damping: 17, stiffnes: 200, mass: 0.3 };
  const smoothOuterOptions = { damping: 22, stiffnes: 500, mass: 0.6 };

  const smoothInnerMouse = {
    x: useSpring(mouseInner.x, smoothInnerOptions),
    y: useSpring(mouseInner.y, smoothInnerOptions),
  };
  const smoothOuterMouse = {
    x: useSpring(mouseOuter.x, smoothOuterOptions),
    y: useSpring(mouseOuter.y, smoothOuterOptions),
  };

  const manageInnerMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    mouseInner.x.set(clientX - innerSize / 2);
    mouseInner.y.set(clientY - innerSize / 2);
  };
  const manageOuterMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    mouseOuter.x.set(clientX - outerSize / 2);
    mouseOuter.y.set(clientY - outerSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageInnerMouseMove);
    return () => window.removeEventListener("mousemove", manageInnerMouseMove);
  });
  useEffect(() => {
    window.addEventListener("mousemove", manageOuterMouseMove);
    return () => window.removeEventListener("mousemove", manageOuterMouseMove);
  });

  return (
    <>
      <motion.div
        style={{ left: smoothInnerMouse.x, top: smoothInnerMouse.y }}
        className="hidden w-[8px] h-[8px] bg-color-text-primary fixed rounded-full pointer-events-none lg:block z-[9999]"
      ></motion.div>
      <motion.div
        style={{ left: smoothOuterMouse.x, top: smoothOuterMouse.y }}
        className="hidden w-[50px] h-[50px] border-solid border-2 border-color-text-primary fixed rounded-full z-[9999] pointer-events-none lg:block"
      ></motion.div>
    </>
  );
}
