import Link from "next/link";
import { Card } from "../card/card";

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
      <Card>
        <Link href={href} target="_blank">
          <div className="flex flex-col justify-start items-start  flex-wrap text-color-text-lighter h-full">
            <span className="pt-10 px-10 mb-5">{date}</span>
            <h1 className="px-10 text-4xl mb-7 font-calc text-color-text-lighter">
              {projectTitle}
            </h1>
            <p className="px-10 mb-10 text-lg  sm:text-base text-color-text-lighter">
              {description}
            </p>
            {bottomLink && (
              <p className="px-10 mt-auto mb-10 text-color-text-lighter">
                Read more →
              </p>
            )}
          </div>
        </Link>
      </Card>
    </>
  );
}
