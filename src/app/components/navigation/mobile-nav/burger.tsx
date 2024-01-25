"use client";
import styles from "./styles.module.scss";
import { Dispatch, SetStateAction, useState } from "react";

export default function Burger({
  openMenu,
}: {
  openMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      onClick={() => {
        openMenu(true);
        setIsActive((prevState) => !prevState);
        console.log(isActive);
      }}
      className={styles.mobileNav}
    >
      <div className={styles.bgMobileNav}></div>
      <div
        className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
      ></div>
    </div>
  );
}
