import { Card } from "../card/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import ProjectInfo from "./project-card-info";
import { useState } from "react";
import { getRandomFromArray } from "@/app/lib/utils";
import { ProjectCardType } from "@/app/lib/definitions/types";

export default function ProjectCard({ ...project }: ProjectCardType) {
  const [height] = useState(getRandomFromArray(["250px", "350px", "300px"]));

  return (
    <div className="w-full mb-8">
      <Sheet>
        <SheetTrigger className="w-full">
          <Card>
            <div className="group" style={{ height }}>
              <div className="flex flex-col justify-start text-justify items-start flex-wrap text-color-text-lighter h-full">
                <span className="pt-10 px-10 mb-5">{project.date}</span>
                <h1 className="px-10 text-4xl mb-7 font-calc text-color-text-primary text-left">
                  {project.projectTitle}
                </h1>
                <p className="px-10 mb-10 text-lg  sm:text-base text-color-text-lighter">
                  {project.briefDescription}
                </p>
                {height === "350px" && (
                  <p className="relative pl-10 mt-auto mb-10 text-color-text-lighter">
                    Read more{" "}
                    <span className="absolute -right-6 transition-[right] duration-300 group-hover:-right-8">
                      →
                    </span>
                  </p>
                )}
              </div>
            </div>
          </Card>
        </SheetTrigger>

        <SheetContent className="overflow-y-auto font-calc">
          <SheetHeader>
            <SheetTitle className="text-left text-3xl mt-4 mb-4 text-color-text-primary">
              {project.projectTitle}
            </SheetTitle>
            <SheetDescription className="flex-1 overflow-auto">
              <ProjectInfo {...project} />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
