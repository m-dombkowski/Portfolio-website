import { SetStateAction, useState } from "react";
import NavigationTitles from "./navigation-titles";

import NavigationDescription from "./navigation-descriptions";

export default function Navigation() {
  const [selectedProject, setSelectedProject] =
    useState<SetStateAction<null | number>>(null);

  return (
    <div className="absolute w-[100%] z-10">
      <NavigationTitles setSelectedProject={setSelectedProject} />
      <NavigationDescription selectedProject={selectedProject} />
    </div>
  );
}
