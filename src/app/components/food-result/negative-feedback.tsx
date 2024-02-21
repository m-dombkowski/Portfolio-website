import {
  anim,
  animByBoolean,
  bigSlideUp,
  opacity,
  slideRight,
} from "@/app/lib/anim";
import { motion } from "framer-motion";
import KevinChilliGIF from "../../../../public/images/feedback/kevins-famous-chilli.gif";
import KevinCookiesGIF from "../../../../public/images/feedback/kevin-cookies.gif";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/app/lib/utils";
import Feedback from "./feedback-template";
import {
  negativeFinalFeedback,
  positiveFinalFeedback,
} from "@/app/lib/data/feedback-data";

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
    <>
      {!hideFirstFeedback && (
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
                alt="GIF of Kevin from The Office TV Series dropping his famous chilli on the ground"
                src={KevinChilliGIF}
              />
            </motion.div>
          ) : (
            <motion.div
              {...animByBoolean(slideRight, sorryKevin, null)}
              className="w-[300px] h-auto sm:w-[480px] relative"
            >
              <Image
                className="w-100 h-100 rounded-lg"
                alt="GIF of Kevin from The Office TV Series spinning on a chair and saying 'cookies, aye?' "
                src={KevinCookiesGIF}
              />
            </motion.div>
          )}

          <div className="flex gap-5 flex-col sm:flex-row sm:gap-10">
            <button
              onClick={() => {
                setHideFirstFeedback(true);
                setNegativeQuestionResult(NegativeQuestionResultEnum.positive);
              }}
              className="transition duration-300 text-lg bg-zinc-nav-active rounded-full text-color-text-lighter z-[10] py-3 px-6 hover:bg-[#444447]"
            >
              Ok, I changed my mind
            </button>
            <button
              onClick={() => {
                setHideFirstFeedback(true);
                setNegativeQuestionResult(NegativeQuestionResultEnum.negative);
              }}
              className="transition duration-300 text-lg bg-zinc-nav-active rounded-full text-color-text-lighter z-[10] py-3 px-6 hover:bg-[#444447]"
            >
              Still think it was awful
            </button>
          </div>
        </motion.div>
      )}
      {negativeQuestionResult === NegativeQuestionResultEnum.positive && (
        <Feedback
          hidePreviousFeedback={hideFirstFeedback}
          feedbackData={positiveFinalFeedback}
        />
      )}
      {negativeQuestionResult === NegativeQuestionResultEnum.negative && (
        <Feedback
          hidePreviousFeedback={hideFirstFeedback}
          feedbackData={negativeFinalFeedback}
        />
      )}
    </>
  );
}
