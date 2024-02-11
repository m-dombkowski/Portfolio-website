import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

type TechStackFiltersProps = {
  chosenUseCase: string[];
  handleUseCase: (arg: string[]) => void;
};

export default function TechStackFilters({
  chosenUseCase,
  handleUseCase,
}: TechStackFiltersProps) {
  const filterButtons = [
    {
      name: "Commercial",
      value: ["commercial"],
    },
    {
      name: "Personal",
      value: ["personal"],
    },
    {
      name: "All",
      value: ["commercial", "personal"],
    },
  ];

  const UseCaseButtonHighlighted = ({ name }: { name: string }) => {
    return (
      <li className="relative py-2 px-[0.55rem] sm:py-3 sm:px-6">
        <div className="z-[10] relative ">{name}</div>
        <motion.div
          layoutId="bg-tech"
          className="absolute bg-zinc-nav-active w-[100%] h-[100%] top-0 left-0 rounded-full pointer-events-none"
        ></motion.div>
      </li>
    );
  };

  const UseCaseButton = ({ name }: { name: string }) => {
    return (
      <li className="py-2 px-[0.55rem] sm:py-3 sm:px-6 ">
        <div className="text-color-text-lighter z-[10] relative ">{name}</div>
      </li>
    );
  };

  return (
    <ul className="flex gap-10 justify-center items-center text-xs bg-zinc-900 rounded-full px-[0.75rem] py-[0.5rem] sm:px-3 sm:py-2 sm:px-6 sm:py-3 sm:gap-6 sm:text-base">
      {filterButtons.map((button, index) => {
        console.log(button.value[0], chosenUseCase[0]);
        return button.value[1] === chosenUseCase[1] &&
          button.value[0] === chosenUseCase[0] ? (
          <button key={index} onClick={() => handleUseCase(button.value)}>
            <UseCaseButtonHighlighted name={button.name} />
          </button>
        ) : (
          <button key={index} onClick={() => handleUseCase(button.value)}>
            <UseCaseButton name={button.name} />
          </button>
        );
      })}
    </ul>
  );
}