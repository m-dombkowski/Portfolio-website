"use client";
import { cn } from "@/app/lib/utils";
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
    <div
      onClick={handleClick}
      className={cn("bg-[#a6a29b] dark:bg-[#18181b]", styles.mobileNav)}
    >
      <div
        className={cn(
          "bg-burger-light dark:bg-burger-dark",
          styles.bgMobileNav
        )}
      ></div>
      <div
        className={cn(
          " after:bg-[#131313] dark:after:bg-[#fff] before:bg-[#131313] dark:before:bg-[#fff]",
          `${styles.burger} ${isActive ? styles.burgerActive : ""}`
        )}
      ></div>
    </div>
  );
}
