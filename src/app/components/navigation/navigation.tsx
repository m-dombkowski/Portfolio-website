import { motion } from "framer-motion";
import Link from "next/link";
import { NavDataType } from "../../lib/definitions";
import { NavigationData } from "../../lib/navData";

export default function Navigation({ currentPath }: { currentPath: string }) {
  const NavItemHighlighted = ({ element }: { element: NavDataType }) => {
    return (
      <li className="relative py-2 px-[0.55rem] sm:py-3 sm:px-6">
        <Link href={element.href} className="z-[10] relative">
          {element.name}
        </Link>
        <motion.div
          layoutId="bg"
          className="absolute bg-zinc-nav-active w-[100%] h-[100%] top-0 left-0 rounded-full pointer-events-none"
        ></motion.div>
      </li>
    );
  };

  const NavItemDefault = ({ element }: { element: NavDataType }) => {
    return (
      <li className="py-2 px-[0.55rem] sm:py-3 sm:px-6">
        <Link className="z-[10] relative" href={element.href}>
          {element.name}
        </Link>
      </li>
    );
  };

  return (
    <header className="fixed inset-0 margin-0 z-[999] w-[100%]  h-[105px]">
      <nav className="flex justify-center mt-5 sm:mt-10">
        <ul className="text-xs font-display flex justify-center align-center gap-[5px] bg-zinc-900 rounded-full px-[0.75rem] py-[0.5rem] sm:px-3 sm:py-2 sm:px-6 sm:py-3 sm:gap-6 sm:text-base">
          {NavigationData.map((element, i) => {
            return currentPath !== element.href ? (
              <div key={i}>
                <NavItemDefault element={element} />
              </div>
            ) : (
              <div key={i}>
                <NavItemHighlighted element={element} />
              </div>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
