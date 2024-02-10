"use client";

import { useEffect, useState } from "react";
import PageWrapper from "../components/transitions/fade";
import { techData } from "../lib/data/tech-stack-data";
import { TechStackDataType } from "../lib/definitions/types";
import { motion } from "framer-motion";
import { anim, animByBoolean, opacity } from "../lib/anim";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

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

export default function WorkPage() {
  const [filteredData, setFilteredData] = useState<TechStackDataType[]>([]);
  const [chosenUseCase, setChosenUseCase] = useState(["commercial"]);
  const [hoveringData, setHoveringData] = useState<{
    hovering: boolean;
    hoveringName: string | null;
  }>({
    hovering: false,
    hoveringName: null,
  });

  const findIntersection = (arr1: string[], arr2: string[]) => {
    return arr1.filter((element) => arr2.includes(element));
  };

  const handleUseCase = (chosenUseCaseArg: string[]) => {
    setFilteredData([]);
    setChosenUseCase(chosenUseCaseArg);
    techData.forEach((data) => {
      const intersection = findIntersection(chosenUseCaseArg, data.usecase);
      if (intersection.length > 0) {
        setFilteredData((prevState) => [...prevState, data]);
      }
    });
  };

  useEffect(() => {
    console.log(chosenUseCase);
    handleUseCase(chosenUseCase);
  }, []);

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
    <PageWrapper>
      <section className="flex justify-center items-center flex-col max-w-[700px] m-auto font-calc">
        <div className="max-w-[600px] xl:max-w-[900px] flex justify-center flex-col items-center font-calc">
          <h1 className="text-4xl pb-10 sm:text-6xl">Day to day tech stack</h1>
        </div>
        <div className="flex gap-16">
          <ul className="flex gap-10 justify-center items-center text-xs bg-zinc-900 rounded-full px-[0.75rem] py-[0.5rem] sm:px-3 sm:py-2 sm:px-6 sm:py-3 sm:gap-6 sm:text-base">
            {filterButtons.map((button, index) => {
              return button.value === chosenUseCase ? (
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
          <Dialog>
            <DialogTrigger className="text-xs bg-zinc-900 rounded-full px-[0.75rem] py-[0.5rem] sm:px-3 sm:py-2 sm:px-6 sm:py-3 sm:gap-6 sm:text-base border border-color-text-darker border-2">
              Find out more
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Information</DialogTitle>
                <DialogDescription>
                  {`In order to know how long I've been working with certain tech just hover your cursor over it.`}
                  {` Some of the values in "commercial" section might be a bit bigger than my overall commercial experience since the values are counted since I've started using certain tech and not exactly how long I've been working with it commercialy`}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <motion.div {...anim(opacity, null)} className="pt-20">
          <ul className="flex gap-16 flex-wrap justify-center">
            {filteredData.map((data, index) => {
              return (
                <div key={index}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>{data.name}</TooltipTrigger>
                      <TooltipContent>
                        <p>{data.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              );
            })}
          </ul>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
// if (prevState !== newState) animate
