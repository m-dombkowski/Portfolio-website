import { useState } from "react";
import Burger from "./burger";
import { AnimatePresence } from "framer-motion";
import StairsNavTransition from "../../transitions/stairs-nav";
import Menu from "./menu";

export default function MobileNav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div>
      <Burger toggleMenu={setMenuIsOpen} />
      <AnimatePresence mode="wait">
        {menuIsOpen && (
          <>
            <StairsNavTransition />
            <Menu />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
