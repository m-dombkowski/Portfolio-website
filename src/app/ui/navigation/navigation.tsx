import { NavigationData } from "@/app/lib/navData";
import Link from "next/link";

export default function Navigation({ currentPath }: { currentPath: string }) {
  return (
    <header className="fixed inset-0 margin-0 z-[999] w-[100%]  h-[105px]">
      <nav className="flex justify-center mt-10 ">
        <ul className="flex justify-center align-center gap-6 bg-zinc-900 rounded-full px-6 py-3">
          {NavigationData.map((element, i) => {
            return currentPath !== element.href ? (
              <li key={i} className="text-base font-display py-2 px-4 ">
                <Link href={element.href}>{element.name}</Link>
              </li>
            ) : (
              <li
                key={i}
                className="text-base font-display py-2 px-4  rounded-full bg-zinc-nav-active"
              >
                <Link href={element.href}>{element.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
