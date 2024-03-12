"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card/card";
import PageWrapper from "../components/transitions/fade";
import { ContactCardType } from "../lib/definitions/types";
import { useContext, useEffect, useState } from "react";
import MyThemeContext from "../lib/context/theme";

export default function ContactPage() {
  const { isDarkTheme } = useContext(MyThemeContext);

  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    const isInitialDark: boolean = JSON.parse(
      localStorage.getItem("isDarkTheme")!
    );
    isInitialDark ? setDarkTheme(true) : setDarkTheme(false);
    console.log(isDarkTheme);
  }, [isDarkTheme]);

  const contacts: ContactCardType[] = [
    {
      icon: <Github size={32} color={darkTheme ? "#d4ede4" : "#025a4e"} />,
      href: "https://github.com/m-dombkowski",
      description: "Check my Github!",
      label: "Github",
    },
    {
      icon: <Mail size={32} color={darkTheme ? "#d4ede4" : "#025a4e"} />,
      href: "mailto:dombkowskimateusz@gmail.com",
      description: "Send me an email!",
      label: "Email",
    },
    {
      icon: <Linkedin size={32} color={darkTheme ? "#d4ede4" : "#025a4e"} />,
      href: "https://www.linkedin.com/in/mateusz-dombkowski-683b26241/",
      description: "Let's connect!",
      label: "LinkedIn",
    },
  ];

  return (
    <PageWrapper>
      <section className="flex flex-col justify-center mt-40">
        <div className="flex justify-center">
          <h1 className="text-3xl mb-16 font-calc lg:text-5xl text-center px-8 md:px-0 xl:text-6xl dark:text-color-text-primary">{`Choose the way to connect that suits you best`}</h1>
        </div>
        <div className="container flex items-center justify-center px-4 mx-auto font-sans text-center">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto mb-8 sm:mt-0 sm:grid-cols-3 lg:mt-16 lg:gap-16">
            {contacts.map((contact, i) => (
              <Card key={i}>
                <Link href={contact.href} target="_blank">
                  <div className="flex flex-col justify-center items-center border-solid border rounded-xl flex-wrap">
                    <span className="mt-20 mb-20 p-5 border-solid border-color-text-primary-light-mode dark:border-color-text-lighter border-[2px] rounded-full">
                      {contact.icon}
                    </span>
                    <h1 className="text-3xl mb-5 font-calc dark:text-color-text-lighter">
                      {contact.label}
                    </h1>
                    <p className="text-lg mb-40 sm:mb-28 sm:text-base dark:text-color-text-lighter">
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
