import { useState } from "react";
import PositiveFeedback from "./positive-feedback";
import NegativeFeedback from "./negative-feedback";
import { motion } from "framer-motion";
import { animByBoolean, hideElement } from "@/app/lib/anim";
import { cn } from "@/app/lib/utils";

enum FoodResultEnum {
  positive = "positive",
  negative = "negative",
}
export default function FoodResult() {
  const [foodResult, setFoodResult] = useState<FoodResultEnum | null>(null);
  const [hide, setHide] = useState<boolean>(false);

  return (
    <div className="flex-col flex justify-start items-start relative my-[30vh] min-h-[375px] min-w-[650px]">
      <motion.div
        {...animByBoolean(hideElement, hide, null)}
        className="flex justify-start items-center flex-col mx-[auto]"
      >
        <h1 className="text-4xl  sm:text-5xl pb-10">Liked what you saw?</h1>
        <div className="flex gap-10">
          <button
            onClick={() => {
              setHide(true);
              setFoodResult(FoodResultEnum.positive);
            }}
            className="transition duration-300 text-2xl bg-zinc-nav-active rounded-full text-color-text-lighter z-[10] py-2 px-[0.55rem] sm:py-3 sm:px-6 hover:bg-[#444447]"
          >
            Yep 😋
          </button>
          <button
            onClick={() => {
              setHide(true);
              setFoodResult(FoodResultEnum.negative);
            }}
            className="transition duration-300 text-2xl bg-zinc-nav-active rounded-full text-color-text-lighter z-[10] py-2 px-[0.55rem] sm:py-3 sm:px-6 hover:bg-[#444447]"
          >
            Nope 😬
          </button>
        </div>
      </motion.div>

      {foodResult === FoodResultEnum.positive && (
        <PositiveFeedback isTitleHidden={hide} />
      )}
      {foodResult === FoodResultEnum.negative && (
        <NegativeFeedback isTitleHidden={hide} />
      )}
    </div>
  );
}
