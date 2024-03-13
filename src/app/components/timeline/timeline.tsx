import Image from "next/image";
import { timelineData } from "@/app/lib/data/timeline-data";

export default function Timeline() {
  return (
    <ul className="flex justify-center">
      {timelineData.map((company, index) => {
        return (
          <li key={index} className="relative flex">
            <div className="min-w-16">
              <div className="relative w-16 h-16">
                <Image
                  fill
                  sizes="16px"
                  src={company.img}
                  alt={company.imgAlt}
                  className="w-full h-full rounded-full z-10 relative border border-color-text-primary-light-mode dark:border-color-text-lighter"
                />
              </div>
              <div className="absolute h-full w-[1px] bg-color-text-primary-light-mode dark:bg-color-text-lighter left-0 ml-8 top-0" />
            </div>
            <div className="flex flex-col gap-4 pl-12">
              <h2 className=" text-base">{company.date}</h2>
              <h1 className="text-3xl">{company.jobTitle}</h1>
              <h2 className="text-2xl">{company.companyName}</h2>
              <div className="max-w-[250px] lg:max-w-[500px] flex flex-col gap-4 font-sans">
                {company.description}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
