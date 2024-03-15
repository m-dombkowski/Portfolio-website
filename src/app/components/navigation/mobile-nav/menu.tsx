import { motion } from "framer-motion";
import { opacityNav, mountAnim, slideDown, anim } from "../../../lib/anim";
import MenuLink from "./menu-link";
import Link from "next/link";
import { NavigationData } from "@/app/lib/data/nav-data";
import { socials } from "@/app/lib/data/socials-data";
import { Dispatch, SetStateAction, useContext } from "react";
import ThemeButton from "../../theme/theme-button";
import { ScreenSizeContext } from "@/app/lib/context/screenSize";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import Image from "next/image";
import uk from "@pub/uk.png";
import pl from "@pub/pl.png";

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
        <Dialog>
          <DialogTrigger className="text-[2.5vw] border-2 bg-nav-light-bg-highlight dark:bg-black dark:border-[#fff] rounded-full py-0 px-5 text-color-text-light-mode-dark dark:text-[#fff]">
            CV
          </DialogTrigger>
          <DialogContent className=" bg-background-light">
            <DialogHeader>
              <DialogTitle>
                <motion.h1
                  {...anim(slideDown, null)}
                  className="text-xl mb-5 text-center text-color-text-primary-light-mode dark:text-[#fff]"
                >
                  Which version do you prefer?
                </motion.h1>
              </DialogTitle>
              <DialogDescription>
                <div className="flex justify-center items-center gap-20">
                  <Link
                    className="w-20 h-auto border-color-text-light-mode-dark rounded-full border-2"
                    href="/cv/ENG.pdf"
                  >
                    <Image
                      className=" w-full h-full"
                      src={uk}
                      alt="rounded flag of UK"
                    ></Image>
                  </Link>
                  <Link
                    className="w-20 h-auto border-color-text-light-mode-dark rounded-full border-2"
                    href="/cv/PL.pdf"
                  >
                    <Image
                      src={pl}
                      className=" w-full h-full"
                      alt="rounded flag of Poland"
                    ></Image>
                  </Link>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {socials.map((el, index) => {
          return (
            <Link
              href={el.href}
              key={index}
              target="_blank"
              className=" text-[2.5vw] border-2 bg-nav-light-bg-highlight dark:bg-black dark:border-[#fff] rounded-full py-0 px-5"
            >
              <span className="text-color-text-light-mode-dark dark:text-[#fff]">
                {el.text}
              </span>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
