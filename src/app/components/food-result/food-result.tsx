import { useState } from "react";

enum FoodResultEnum {
  positive = "positive",
  negative = "negative",
}
export default function FoodResult() {
  const [foodResult, setFoodResult] = useState<FoodResultEnum | null>(null);
  return (
    <div className="flex justify-center items-center flex-col mb-[20rem]">
      <h1 className="text-4xl font-calc sm:text-5xl pb-10">
        Liked what you saw?
      </h1>
      <div className="flex gap-10">
        <button
          onClick={() => setFoodResult(FoodResultEnum.positive)}
          className="text-2xl bg-zinc-nav-active rounded-full text-color-text-lighter z-[10] py-2 px-[0.55rem] sm:py-3 sm:px-6"
        >
          Yep 😋
        </button>
        <button
          onClick={() => setFoodResult(FoodResultEnum.negative)}
          className="text-2xl bg-zinc-nav-active rounded-full text-color-text-lighter z-[10] py-2 px-[0.55rem] sm:py-3 sm:px-6 "
        >
          Nope 😬
        </button>
      </div>
    </div>
  );
}
