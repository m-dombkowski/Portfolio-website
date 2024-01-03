import Link from "next/link";
import { useState } from "react";

export default function NavigationTitles() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Link href={"/home"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/experience"}>Experience</Link>
      <Link href={"/contact"}>Contact</Link>
    </>
  );
}
