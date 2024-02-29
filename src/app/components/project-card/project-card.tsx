import Link from "next/link";
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

type ProjectCardProps = {
  date: string;
  projectTitle: string;
  description: string;
  href: string;
  bottomLink?: boolean;
};

export default function ProjectCard({
  date,
  projectTitle,
  description,
  href,
  bottomLink,
}: ProjectCardProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Card>
            <div className="group h-full">
              <div className="flex flex-col justify-start text-justify items-start  flex-wrap text-color-text-lighter h-full">
                <span className="pt-10 px-10 mb-5">{date}</span>
                <h1 className="px-10 text-4xl mb-7 font-calc text-color-text-primary">
                  {projectTitle}
                </h1>
                <p className="px-10 mb-10 text-lg  sm:text-base text-color-text-lighter">
                  {description}
                </p>
                {bottomLink && (
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
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-center text-6xl mt-14 mb-6">
              {projectTitle}
            </SheetTitle>
            <SheetDescription>
              <div>
                <ProjectInfo description={description} />
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
