import React, { SetStateAction } from "react";

import { NavigationData } from "../../lib/navData";

export default function NavigationDescription({
  selectedProject,
}: {
  selectedProject: SetStateAction<number | null>;
}) {
  const crop = (string: string, maxLength: number) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className="absolute top-[2px]  h-[100%] w-[100%] z-[2] pointer-events-none ">
      {NavigationData.map((project, i) => {
        const { name, description } = project;

        return (
          <div
            key={i}
            className="clip-path-hero-nav flex bg-orange justify-between items-center pl-[5%] pr-[5%] transition-all duration-500 w-[100%] mb-[2px] border-transparent text-black"
            style={{
              clipPath:
                selectedProject == i ? "inset(0 0 0)" : `inset(50% 0 50%)`,
            }}
          >
            <p className=" uppercase text-[7vw] leading-[10vw] font-bold m-0 relative z-[1]">
              {crop(name, 10)}
            </p>

            <p className="w-[30%] text-[1.5vw] font-bold font-sans">
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
