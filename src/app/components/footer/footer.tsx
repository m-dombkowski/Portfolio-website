import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SpotifyLink from "../spotify-link/spotify-link";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/components/ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import {
  NextSvg,
  TailwindSvg,
  TypescriptSvg,
  VercelSvg,
} from "@/app/lib/data/svgs";
import { Typewriter } from "react-simple-typewriter";
import { motion, useInView } from "framer-motion";
import { anim, animByBoolean, slideDown, slideUp } from "@/app/lib/anim";
import {
  ContactFooterType,
  TechStackFooterType,
} from "@/app/lib/definitions/types";
import { useRef } from "react";

const contactLinks: ContactFooterType[] = [
  {
    name: "CV",
    href: "#",
  },
  {
    name: "Email",
    href: "mailto:dombkowskimateusz@gmail.com",
  },
  {
    name: "Github",
    href: "https://github.com/m-dombkowski",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mateusz-dombkowski-683b26241/",
  },

  {
    name: "Instagram",
    href: "https://www.instagram.com/mateusz.dombkowski/",
  },
];

const techstack: TechStackFooterType[] = [
  {
    name: "Code",
    technology: "Next.js",
    icon: NextSvg(),
  },
  {
    name: "Styling",
    technology: "Tailwind",
    icon: TailwindSvg(),
  },
  {
    name: "Types",
    technology: "Typescript",
    icon: TypescriptSvg(),
  },
  {
    name: "Launch",
    technology: "Vercel",
    icon: VercelSvg(),
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isFooterInView = useInView(footerRef);
  // TODO: change padding top (put it to page itself as margin/padding bottom) so it can be animated
  return (
    <motion.footer
      ref={footerRef}
      {...animByBoolean(slideUp, isFooterInView, null)}
      className="m-auto flex justify-center items-center my-32 gap-20 flex-col xl:flex-row xl:gap-32 xl:items-start"
    >
      <div className="flex flex-col gap-10 items-center">
        <div className="w-[250px] bg-bg-dark-gray h-[75px] flex justify-center items-center gap-5 text-sm sm:w-[350px] sm:gap-12 sm:h-[120px] sm:text-xl rounded-full">
          <Link
            target="_blank"
            href="https://open.spotify.com/user/hevrak?si=3764935cfac041dd"
          >
            {" "}
            <FontAwesomeIcon size="3x" color="#8fdcc2" icon={faSpotify} />
          </Link>

          <div className="text-xs sm:text-sm lg:text-base">
            <span className="pb-1 inline-block w-[90px]">
              On repeat
              <Typewriter
                words={[" ..."]}
                loop={false}
                typeSpeed={150}
                deleteSpeed={150}
              />
            </span>
            <div>
              <SpotifyLink />
            </div>
          </div>
        </div>
        <div className="flex  items-center gap-5 justify-center text flex-col sm:flex-row">
          <p className="text-base sm:text-xl">© 2024 Mateusz Dombkowski</p>
          <div>
            <Dialog>
              <DialogTrigger className="underline cursor-pointer text-color-text-primary">
                Technologies
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <motion.h1
                      {...anim(slideDown, null)}
                      className="text-xl mb-5 text-center text-[#fff]"
                    >
                      Technologies and tools used to build this website
                    </motion.h1>
                  </DialogTitle>
                  <DialogDescription>
                    <div className="flex gap-10 flex-col sm:flex-row">
                      <ul className="flex flex-col justify-between gap-4 text-base ">
                        {techstack.map((tech, index) => {
                          return (
                            <motion.li
                              {...anim(slideDown, index + 3)}
                              key={index}
                              className="flex items-center gap-3 w-[200px]"
                            >
                              <div className="p-2 bg-[#fff] inline-block rounded-full">
                                <div className="w-[20px] h-[20px] ">
                                  {tech.icon}
                                </div>
                              </div>
                              <span className="my-auto">
                                {`${tech.name}: ${tech.technology}`}
                              </span>
                            </motion.li>
                          );
                        })}
                      </ul>
                      <motion.div
                        {...anim(slideDown, 7)}
                        className="flex flex-col gap-5 text-lg"
                      >
                        <p>
                          CalcSans and Inter used as fonts. Animations made with
                          Framer Motion and Green Sock a.k.a GSAP.
                        </p>
                        <p>
                          For detailed information and code check{" "}
                          <Link
                            target="_blank"
                            href="https://github.com/m-dombkowski/Portfolio-website"
                          >
                            repository
                          </Link>
                        </p>
                      </motion.div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-20 lg:flex-row">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-3xl mb-10">Contact info</h1>
          <ul className="flex flex-col gap-5 items-center lg:items-start">
            {contactLinks.map((link, index) => {
              return (
                <li key={index} className="text-xl">
                  <Link
                    href={link.href}
                    className="text-[#fff] transition duration-300 hover:text-color-text-primary"
                    target="_blank"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="max-w-[500px] px-10 lg:px-0">
          <h1 className="text-3xl mb-10 text-center xl:text-left">
            Open to work
          </h1>
          <div className="text-sm text-justify leading-8 sm:text-lg flex flex-col gap-5">
            <p>
              {`Always happy and open for a chat, if you're looking for a Frontend Developer for a role on site or hybrid model in Wroclaw/Krakow or remotely anywhere in Poland feel free to contact me the way that suits you best.`}
            </p>
            <p>{`I'm always open for a new opportunities so if the offer would be really good but not in stated cities feel free to contact me anyway, I might consider reloacation.`}</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
