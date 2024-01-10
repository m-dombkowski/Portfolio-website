import { NavigationData } from "@/app/lib/navData";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navigation({ currentPath }: { currentPath: string }) {
  return (
    <header className="fixed inset-0 margin-0 z-[999] w-[100%]  h-[105px]">
      <nav className="flex justify-center mt-5 sm:mt-10">
        <ul className="text-xs font-display flex justify-center align-center gap-[5px] bg-zinc-900 rounded-full px-[0.75rem] py-[0.5rem] sm:px-3 sm:py-2 sm:px-6 sm:py-3 sm:gap-6 sm:text-base">
          {NavigationData.map((element, i) => {
            return currentPath !== element.href ? (
              <li key={i} className="py-2 px-[0.55rem] ">
                <Link className="z-[10] relative" href={element.href}>
                  {element.name}
                </Link>
              </li>
            ) : (
              <li key={i} className="relative py-2 px-4  ">
                <Link href={element.href} className="z-[10] relative">
                  {element.name}
                </Link>
                <motion.div
                  layoutId="bg"
                  className="absolute bg-zinc-nav-active w-[100%] h-[100%] top-0 left-0 rounded-full pointer-events-none"
                ></motion.div>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
