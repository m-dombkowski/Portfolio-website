"use client";
import styles from "./styles.module.scss";
import { Dispatch, SetStateAction, useState } from "react";

export default function Burger({
  toggleMenu,
}: {
  toggleMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    if (isActive) {
      toggleMenu(false);
    } else {
      toggleMenu(true);
    }
    setIsActive((prevState) => !prevState);
  };

  return (
    <div onClick={handleClick} className={styles.mobileNav}>
      <div className={styles.bgMobileNav}></div>
      <div
        className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
      ></div>
    </div>
  );
}
