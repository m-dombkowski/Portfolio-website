import Image from "next/image";
import { ProjectCardType } from "@/app/lib/definitions/types";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { cn } from "@/app/lib/utils";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

export default function ProjectInfo({ ...projectData }: ProjectCardType) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-justify font-sans ">{projectData.briefDescription}</p>
      <div className="m-auto flex w-[350px] h-[310px] sm:w-[450px]">
        <Swiper
          pagination={true}
          style={{ paddingBottom: "3rem" }}
          className="w-full h-full"
          grabCursor={true}
          modules={[Pagination]}
        >
          {projectData.gifs.map((gif, index) => (
            <SwiperSlide
              className="w-full h-full flex gap-12 justify-center items-center "
              key={index}
            >
              <Image
                src={gif}
                width={350}
                height={310}
                alt={projectData.alt}
                className="rounded-xl w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <h2 className="text-xl mb-3 text-color-text-primary-light-mode dark:text-color-text-primary">
          Description
        </h2>
        <p className="text-justify font-sans">{projectData.description}</p>
      </div>
      <div>
        <h2 className="text-xl mb-3 text-color-text-primary-light-mode dark:text-color-text-primary">
          Technologies
        </h2>
        <div className="flex flex-wrap gap-3">
          {projectData.technologies.map((tech, index) => {
            return (
              <span
                key={index}
                className="p-4 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-nav-light-bg-highlight dark:bg-zinc-nav-active text-center rounded-lg pointer-events-none"
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
            className="flex justify-center items-center gap-4 dark:text-[#fff] border-b"
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
          className="flex justify-center items-center gap-4 dark:text-[#fff] border-b"
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
