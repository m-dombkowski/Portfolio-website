"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card/card";
import PageWrapper from "../components/transitions/fade";
import { ContactCardType } from "../lib/definitions/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact. Mateusz Dombkowski",
  description: "Contact page with different contact options",
  // metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

const contacts: ContactCardType[] = [
  {
    icon: <Github size={32} color="#d4ede4" />,
    href: "https://github.com/m-dombkowski",
    description: "Check my Github!",
    label: "Github",
  },
  {
    icon: <Mail size={32} color="#d4ede4" />,
    href: "mailto:dombkowskimateusz@gmail.com",
    description: "Send me an email!",
    label: "Email",
  },
  {
    icon: <Linkedin size={32} color="#d4ede4" />,
    href: "https://www.linkedin.com/in/mateusz-dombkowski-683b26241/",
    description: "Let's connect!",
    label: "LinkedIn",
  },
];

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="flex flex-col justify-center">
        <div className="flex justify-center">
          <h1 className="text-3xl mb-16 font-calc lg:text-5xl text-center px-8 md:px-0 xl:text-6xl text-color-text-primary">{`Choose the way to connect that suits you best`}</h1>
        </div>
        <div className="container flex items-center justify-center px-4 mx-auto font-sans text-center">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto mb-8 sm:mt-0 sm:grid-cols-3 lg:mt-16 lg:gap-16 ">
            {contacts.map((contact, i) => (
              <Card key={i}>
                <Link key={i} href={contact.href} target="_blank">
                  <div className="flex flex-col justify-center items-center border-solid border rounded-xl flex-wrap">
                    <span className="mt-20 mb-20 p-5 border-solid border-color-text-lighter border-[2px] rounded-full">
                      {contact.icon}
                    </span>
                    <h1 className="text-3xl mb-5 font-calc text-color-text-lighter">
                      {contact.label}
                    </h1>
                    <p className="text-lg mb-40 sm:mb-28 sm: text-base text-color-text-lighter">
                      {contact.description}
                    </p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
