import { motion } from "framer-motion";
import { opacityNav, mountAnim } from "../../../lib/anim";
import MenuLink from "./menu-link";
import Link from "next/link";
import { NavigationData } from "@/app/lib/data/nav-data";
import { socials } from "@/app/lib/data/socials-data";
import { Dispatch, SetStateAction, useContext } from "react";
import ThemeButton from "../../theme/theme-button";
import { ScreenSizeContext } from "@/app/lib/context/screenSize";

export default function Menu({
  toggleMenu,
  setIsActive,
}: {
  toggleMenu: Dispatch<SetStateAction<boolean>>;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}) {
  const { deviceType } = useContext(ScreenSizeContext);

  return (
    <div className="fixed top-0 flex z-[1003] h-[100%] w-[100%] justify-center items-end">
      {deviceType === "mobile" && (
        <motion.div variants={opacityNav} {...mountAnim} custom={0.5}>
          <ThemeButton />
        </motion.div>
      )}

      <div className=" absolute left-[50%] top-[50%] w-[100%] translate-y-[-50%] translate-x-[-50%]">
        {NavigationData.map((el, index) => {
          return (
            <MenuLink
              data={el}
              index={index}
              key={index}
              toggleMenu={toggleMenu}
              setIsActive={setIsActive}
            />
          );
        })}
      </div>

      <motion.div
        variants={opacityNav}
        {...mountAnim}
        custom={0.5}
        className=" flex justify-center gap-3 p-5"
      >
        {socials.map((el, index) => {
          return (
            <Link
              href={el.href}
              key={index}
              target="_blank"
              className=" text-[2.5vw] border-2 bg-nav-light-bg-highlight dark:bg-black dark:border-[#fff] rounded-full py-0 px-5"
            >
              <span className="dark:text-[#fff]">{el.text}</span>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
