import Link from "next/link";
import { useState } from "react";
import NavigationTitles from "./navigation-titles";
import { NavigationData } from "../lib/navData";

export default function Navigation() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="absolute w-[100%] z-10">
      <NavigationTitles data={NavigationData} setSelectedProject={setSelectedProject} />
    </div>
  );
}
