"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/smooth-scroll/smooth-scroll";
import LocalFont from "next/font/local";
import "cal-sans";
import PageTransition from "./ui/page-transition/stairs";
import { AnimatePresence } from "framer-motion";

import { usePathname } from "next/navigation";
import Cursor from "./ui/cursor/cursor";
import PageWrapper from "./ui/page-transition/fade";
import Navigation from "./ui/navigation/navigation";

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

  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <SmoothScroll>
        <body>
          <Navigation currentPath={path} />
          <Cursor />
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </body>
      </SmoothScroll>
    </html>
  );
}
