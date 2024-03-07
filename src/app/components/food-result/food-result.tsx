import { useState } from "react";
import NegativeFeedback from "./negative-feedback";
import { AnimatePresence, motion } from "framer-motion";
import { animByBoolean, hideElement } from "@/app/lib/anim";
import Feedback from "./feedback-template";
import { positiveFeedback } from "@/app/lib/data/feedback-data";

enum FoodResultEnum {
  positive = "positive",
  negative = "negative",
}
export default function FoodResult() {
  const [foodResult, setFoodResult] = useState<FoodResultEnum | null>(null);
  const [hide, setHide] = useState<boolean>(false);

  return (
    <div className="flex-col flex justify-start items-start relative mt-[35vh] mb-24 min-h-[375px] min-w-[650px]">
      {!hide && (
        <motion.div
          {...animByBoolean(hideElement, hide, null)}
          className="flex justify-start items-center flex-col mx-[auto]"
        >
          <h1 className="text-3xl sm:text-5xl pb-10">Liked what you saw?</h1>
          <div className="flex gap-8 sm:gap-10">
            <button
              onClick={() => {
                setHide(true);
                setFoodResult(FoodResultEnum.positive);
              }}
              className="transition duration-300 text-xl bg-zinc-nav-active rounded-full dark:text-color-text-lighter z-[10] py-3 px-6 hover:bg-[#444447]"
            >
              Yep 😋
            </button>
            <button
              onClick={() => {
                setHide(true);
                setFoodResult(FoodResultEnum.negative);
              }}
              className="transition duration-300 text-xl bg-zinc-nav-active rounded-full dark:text-color-text-lighter z-[10] py-3 px-6 hover:bg-[#444447]"
            >
              Nope 😬
            </button>
          </div>
        </motion.div>
      )}

      {foodResult === FoodResultEnum.positive && (
        <Feedback hidePreviousFeedback={hide} feedbackData={positiveFeedback} />
      )}
      {foodResult === FoodResultEnum.negative && (
        <NegativeFeedback isTitleHidden={hide} />
      )}
    </div>
  );
}
