import Image from "next/image";
import { ProjectCardType } from "@/app/lib/definitions/types";
import Link from "next/link";
import { Github } from "lucide-react";
import { cn } from "@/app/lib/utils";

export default function ProjectInfo({ ...projectData }: ProjectCardType) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-justify font-sans ">{projectData.briefDescription}</p>
      <div className="max-w-[350px] m-auto">
        <Image
          src={projectData.img}
          alt={projectData.alt}
          className="h-full w-full rounded-lg"
        />
      </div>
      <div>
        <h2 className="text-xl mb-3 text-color-text-primary">Description</h2>
        <p className="text-justify font-sans">{projectData.description}</p>
      </div>
      <div>
        <h2 className="text-xl mb-3 text-color-text-primary">Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {projectData.technologies.map((tech, index) => {
            console.log(projectData.technologies);
            return (
              <span
                key={index}
                className="p-4 bg-zinc-nav-active text-center rounded-lg pointer-events-none"
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
      <div
        className={cn(
          "flex mt-6 text-lg",
          projectData.websiteLink ? "justify-around" : "justify-center"
        )}
      >
        {projectData.websiteLink && (
          <Link
            href={projectData.websiteLink}
            className="flex justify-center items-center gap-4 text-[#fff] border-b"
          >
            <span className="group relative">
              Website
              <span className="absolute -right-4 inset-y-0 transition-[right] duration-300 group-hover:-right-6">
                →
              </span>
            </span>
          </Link>
        )}

        <Link
          href={projectData.repoLink}
          className="flex justify-center items-center gap-4 text-[#fff] border-b"
        >
          <span className="group relative m-auto">
            Github
            <span className="absolute -right-4 inset-y-0  transition-[right] duration-300 group-hover:-right-6">
              →
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
