import { useMotionTemplate, useMotionValue } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card/card";

const contacts = [
  {
    icon: <Github size={32} />,
    href: "https://github.com/m-dombkowski",
    description: "Check my Github!",
    label: "Github",
  },
  {
    icon: <Mail size={32} />,

    href: "mailto:dombkowskimateusz@gmail.com",
    description: "Send me an email!",
    label: "Email",
  },
  {
    icon: <Linkedin size={32} />,
    href: "https://www.linkedin.com/in/mateusz-dombkowski-683b26241/",
    description: "Let's connect!",
    label: "LinkedIn",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-bl from-zinc-900-flipped via-zinc-900 to-zinc-900-flipped ">
      <div className="flex flex-col min-h-screen justify-center">
        <div className="flex justify-center mt-32">
          <h1 className="text-3xl mb-16 font-display lg:text-5xl text-center xl:text-6xl">{`Choose the way to connect that suits you best`}</h1>
        </div>
        <div className="container flex items-center justify-center px-4 mx-auto font-sans text-center">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:mt-16 lg:gap-16">
            {contacts.map((contact, i) => (
              <Card key={i}>
                <Link key={i} href={contact.href} target="_blank">
                  <div className="flex flex-col justify-center items-center border-solid border rounded-xl flex-wrap">
                    <span className="mt-20 mb-20 p-5 border-solid border-[2px] rounded-full">
                      {contact.icon}
                    </span>
                    <h1 className="text-3xl mb-5 font-display ">
                      {contact.label}
                    </h1>
                    <p className="text-lg mb-40 sm:mb-28 sm: text-base">
                      {contact.description}
                    </p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
