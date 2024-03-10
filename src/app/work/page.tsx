"use client";

import { useCallback, useEffect, useState } from "react";
import PageWrapper from "../components/transitions/fade";
import { techData } from "../lib/data/tech-stack-data";
import { TechStackDataType } from "../lib/definitions/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import TechStack from "../components/tech-stack/tech-stack";
import TechStackFilters from "../components/tech-stack/tech-stack-filters";
import Timeline from "../components/timeline/timeline";
import ProjectCard from "../components/project-card/project-card";
import { projectData } from "../lib/data/projects-data";

export default function WorkPage() {
  const [filteredData, setFilteredData] = useState<TechStackDataType[]>([]);
  const [chosenUseCase, setChosenUseCase] = useState<string[]>(["commercial"]);

  const findIntersection = (arr1: string[], arr2: string[]) => {
    return arr1.filter((element) => arr2.includes(element));
  };

  const handleUseCase = useCallback((chosenUseCaseArg: string[]) => {
    setFilteredData([]);
    setChosenUseCase(chosenUseCaseArg);
    techData.forEach((data) => {
      const intersection = findIntersection(chosenUseCaseArg, data.usecase);
      if (intersection.length > 0) {
        setFilteredData((prevState) => [...prevState, data]);
      }
    });
  }, []);

  useEffect(() => {
    handleUseCase(chosenUseCase);
  }, [chosenUseCase, handleUseCase]);

  return (
    <PageWrapper>
      <section className="px-10 flex justify-center items-center flex-col max-w-[700px] xl:max-w-[900px] m-auto font-calc overscroll-contain mt-40">
        <div className="max-w-[600px] xl:max-w-[900px] flex justify-center flex-col items-center font-calc">
          <h1 className="text-4xl mb-20 sm:text-6xl text-center">
            Day to day tech stack
          </h1>
        </div>
        <div className="flex flex-col-reverse gap-8 sm:gap-16 sm:flex-row">
          <TechStackFilters
            chosenUseCase={chosenUseCase}
            handleUseCase={handleUseCase}
          />
          <Dialog>
            <DialogTrigger className="text-xs bg-zinc-900 rounded-full px-[0.75rem] py-[0.5rem]  sm:px-6 sm:py-3 sm:gap-6 sm:text-base border-color-text-darker border-2">
              Find out more
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Information</DialogTitle>
                <DialogDescription>
                  {`In order to know how long I've been working with certain technology/tool just hover your cursor over it (desktop) or click it (mobile).`}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <TechStack filteredData={filteredData} />
        <div className="mt-40">
          <h1 className="text-4xl mb-20 sm:text-6xl text-center">
            Commercial experience
          </h1>
          <Timeline />
        </div>
        <div className="mt-40 md:w-[700px] lg:w-[900px] xl:w-[1200px] transition duration-500">
          <h1 className="text-4xl mb-20 sm:text-6xl text-center">Projects</h1>
          <div className="gap-8 mx-auto font-sans columns-1 md:columns-2">
            {projectData.map((project, index) => {
              return (
                <div key={index}>
                  <ProjectCard {...project} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
