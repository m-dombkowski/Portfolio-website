"use client";
import styles from "./styles.module.scss";
import { Dispatch, SetStateAction } from "react";

export default function Burger({
  toggleMenu,
  setIsActive,
  isActive,
}: {
  toggleMenu: Dispatch<SetStateAction<boolean>>;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  isActive: boolean;
}) {
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
