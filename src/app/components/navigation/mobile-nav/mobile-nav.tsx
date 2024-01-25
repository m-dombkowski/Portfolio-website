import { useState } from "react";
import Burger from "./burger";

export default function MobileNav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => {
    setMenuIsOpen(true);
  };

  return (
    <div>
      <Burger openMenu={openMenu} />
    </div>
  );
}
