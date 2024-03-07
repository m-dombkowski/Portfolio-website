import { animByBoolean, bigSlideUp } from "@/app/lib/anim";
import { motion } from "framer-motion";
import { useState } from "react";
import Feedback from "./feedback-template";
import {
  negativeFinalFeedback,
  positiveFinalFeedback,
} from "@/app/lib/data/feedback-data";
import KevinTemplate from "./kevin-template";
import { kevinSecretData, kevinsDefaultData } from "@/app/lib/data/kevins-data";

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
          {" "}
          {!sorryKevin ? (
            <KevinTemplate
              kevinsData={kevinsDefaultData}
              apologized={sorryKevin}
              setApologized={setSorryKevin}
            />
          ) : (
            <KevinTemplate
              kevinsData={kevinSecretData}
              apologized={sorryKevin}
            />
          )}
          <div className="flex gap-5 flex-col sm:flex-row sm:gap-10">
            <button
              onClick={() => {
                setHideFirstFeedback(true);
                setNegativeQuestionResult(NegativeQuestionResultEnum.positive);
              }}
              className="transition duration-300 text-lg bg-zinc-nav-active rounded-full dark:text-color-text-lighter z-[10] py-3 px-6 hover:bg-[#444447]"
            >
              Ok, I changed my mind
            </button>
            <button
              onClick={() => {
                setHideFirstFeedback(true);
                setNegativeQuestionResult(NegativeQuestionResultEnum.negative);
              }}
              className="transition duration-300 text-lg bg-zinc-nav-active rounded-full dark:text-color-text-lighter z-[10] py-3 px-6 hover:bg-[#444447]"
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
