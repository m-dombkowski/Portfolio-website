import { animByBoolean, bigSlideUp } from "@/app/lib/anim";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Link from "next/link";

export default function PositiveFeedback({
  isTitleHidden,
}: {
  isTitleHidden: boolean;
}) {
  return (
    <motion.div
      {...animByBoolean(bigSlideUp, isTitleHidden, 0)}
      className="flex flex-col gap-8 justify-center items-center px-10 text-sm sm:text-lg max-w-[650px]"
    >
      <div>
        <h1 className="text-6xl">Thanks!</h1>
        <h2 className="text-4xl">I really appreciate it.</h2>
      </div>
      <div className="flex justify-center items-center gap-10">
        <p className="text-justify">
          Feel free to check out my Instagram page where I post (in highlights)
          all of my cooking/baking attempts on making tasty and sweet thingies
        </p>
        <Link
          className="transition duration-300 flex gap-3 items-center p-6 border rounded-full bg-zinc-900 hover:bg-zinc-nav-active"
          href="https://www.instagram.com/mateusz.dombkowski/"
          target="_blank"
        >
          <span>
            <Instagram className="text-[#C13584] w-[48px] h-[48px]" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
