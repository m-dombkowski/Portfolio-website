import { Dispatch, SetStateAction, useState } from "react";
import Burger from "./burger";
import { AnimatePresence } from "framer-motion";
import StairsNavTransition from "../../transitions/stairs-nav";
import Menu from "./menu";

export default function MobileNav({
  menuIsOpen,
  setMenuIsOpen,
}: {
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="font-sans">
      <Burger
        toggleMenu={setMenuIsOpen}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <AnimatePresence mode="wait">
        {menuIsOpen && (
          <>
            <StairsNavTransition />
            <Menu toggleMenu={setMenuIsOpen} setIsActive={setIsActive} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
