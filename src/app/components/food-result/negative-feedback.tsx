import {
  anim,
  animByBoolean,
  bigSlideUp,
  hideElement,
  opacity,
} from "@/app/lib/anim";
import { motion } from "framer-motion";
import KevinChilliGIF from "../../../../public/images/feedback/kevins-famous-chilli.gif";
import KevinCookiesGIF from "../../../../public/images/feedback/kevin-cookies.gif";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/app/lib/utils";

enum NegativeQuestionResultEnum {
  positive = "positive",
  negative = "negative",
}

export default function NegativeFeedback({
  isTitleHidden,
}: {
  isTitleHidden: boolean;
}) {
  const [negativeQuestionResult, setNegativeQuestionResult] =
    useState<NegativeQuestionResultEnum | null>(null);
  const [hideFirstFeedback, setHideFirstFeedback] = useState<boolean>(false);
  const [sorryKevin, setSorryKevin] = useState<boolean>(false);

  return (
    <motion.div
      {...animByBoolean(bigSlideUp, isTitleHidden, 0)}
      className="flex flex-col gap-8 justify-center items-center px-10 text-sm sm:text-lg max-w-[650px] w-[330px] sm:w-[unset] m-auto"
    >
      {!sorryKevin && <h1 className="text-3xl">Why are you like that?</h1>}

      <h2
        className={cn(
          !sorryKevin ? "text-xl" : "text-2xl text-color-text-primary"
        )}
      >
        {`${
          !sorryKevin
            ? "Kevin dropped his famous chilli because of you"
            : `Ok, we're cool now but you still need to answer the question though`
        }`}
      </h2>
      {!sorryKevin && (
        <button
          onClick={() => setSorryKevin(true)}
          className="transition duration-300 text-lg bg-zinc-nav-active rounded-full text-color-text-lighter z-[10] py-3 px-6 hover:bg-[#444447]"
        >
          Sorry Kevin
        </button>
      )}
      {!sorryKevin ? (
        <motion.div
          {...anim(opacity, null)}
          className="w-[300px] h-auto sm:w-[480px] relative"
        >
          <Image
            className="w-100 h-100 rounded-lg"
            alt="Kevin from The Office TV Series"
            src={KevinChilliGIF}
          />
        </motion.div>
      ) : (
        <motion.div
          {...animByBoolean(opacity, sorryKevin, null)}
          className="w-[300px] h-auto sm:w-[480px] relative"
        >
          <Image
            className="w-100 h-100 rounded-lg"
            alt="Kevin from The Office TV Series"
            src={KevinCookiesGIF}
          />
        </motion.div>
      )}

      <div className="flex gap-5 flex-col sm:flex-row sm:gap-10">
        <button
          onClick={() => {}}
          className="transition duration-300 text-lg bg-zinc-nav-active rounded-full text-color-text-lighter z-[10] py-3 px-6 hover:bg-[#444447]"
        >
          Ok, I changed my mind
        </button>
        <button
          onClick={() => {}}
          className="transition duration-300 text-lg bg-zinc-nav-active rounded-full text-color-text-lighter z-[10] py-3 px-6 hover:bg-[#444447]"
        >
          Still think it was awful
        </button>
      </div>
    </motion.div>
  );
}
