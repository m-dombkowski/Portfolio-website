import { motion } from "framer-motion";

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
      <div className="relative py-2 px-[0.55rem] sm:py-3 sm:px-6">
        <div className="z-[10] relative ">{name}</div>
        <motion.div
          layoutId="bg-tech"
          className="absolute bg-nav-light-bg-highlight text-color-text-light-mode-dark  dark:bg-zinc-nav-active w-[100%] h-[100%] top-0 left-0 rounded-full pointer-events-none"
        ></motion.div>
      </div>
    );
  };

  const UseCaseButton = ({ name }: { name: string }) => {
    return (
      <div className="py-2 px-[0.55rem] sm:py-3 sm:px-6 ">
        <div className="text-color-text-light-mode-dark dark:text-color-text-lighter z-[10] relative ">
          {name}
        </div>
      </div>
    );
  };

  return (
    <ul className="flex gap-4 justify-center items-center text-xs bg-nav-light-bg dark:bg-zinc-900 rounded-full px-[0.75rem] py-[0.5rem] sm:px-3 sm:py-2 md:px-6 md:py-3 sm:gap-6 sm:text-base md:gap-10">
      {filterButtons.map((button, index) => {
        return button.value[1] === chosenUseCase[1] &&
          button.value[0] === chosenUseCase[0] ? (
          <li>
            <button key={index} onClick={() => handleUseCase(button.value)}>
              <UseCaseButtonHighlighted name={button.name} />
            </button>
          </li>
        ) : (
          <li>
            <button key={index} onClick={() => handleUseCase(button.value)}>
              <UseCaseButton name={button.name} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
