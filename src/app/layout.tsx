"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/smooth-scroll/smooth-scroll";
import LocalFont from "next/font/local";
import "cal-sans";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Navigation from "./components/navigation/navigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  library.add(fas, faSpotify);

  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <SmoothScroll>
        <body>
          <Navigation currentPath={path} />
          <AnimatePresence mode="wait">
            <div>{children}</div>
          </AnimatePresence>
        </body>
      </SmoothScroll>
    </html>
  );
}
