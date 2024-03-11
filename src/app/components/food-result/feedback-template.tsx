import { animByBoolean, bigSlideUp } from "@/app/lib/anim";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { InstagramSvg } from "@/app/lib/data/svgs";
import { FeedbackDataType } from "@/app/lib/definitions/types";

export default function Feedback({
  hidePreviousFeedback,
  feedbackData,
}: {
  hidePreviousFeedback: boolean;
  feedbackData: FeedbackDataType;
}) {
  return (
    <motion.div
      {...animByBoolean(bigSlideUp, hidePreviousFeedback, 0)}
      className="flex flex-col gap-8 justify-center items-center px-10 text-sm sm:text-lg max-w-[650px] w-[330px] sm:w-[unset] m-auto"
    >
      <div>
        <h1 className="text-3xl sm:text-5xl mb-3">{feedbackData.title}</h1>
        <h1 className="text-2xl sm:text-3xl dark:text-[#fff]">
          {feedbackData.subTitle}
        </h1>
      </div>
      <div className="transition duration-300">
        <Image
          className="w-100 h-100 rounded-lg "
          alt={feedbackData.alt}
          src={feedbackData.meme}
          placeholder="blur"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsv3OoHgAG3QKuq5tTVwAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="flex justify-center items-center gap-10 flex-col sm:flex-row">
        <p className="text-justify text-lg">{feedbackData.description}</p>
        {feedbackData.showSocial !== false && (
          <Link
            className="transition duration-300 flex gap-3 items-center p-4 border-2 rounded-3xl bg-nav-light-bg-highlight dark:bg-zinc-900 dark:hover:bg-zinc-nav-active"
            href="https://www.instagram.com/mateusz.dombkowski/"
            target="_blank"
          >
            <InstagramSvg />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
