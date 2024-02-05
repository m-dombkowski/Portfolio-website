"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/smooth-scroll/smooth-scroll";
import LocalFont from "next/font/local";
import "cal-sans";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import Navigation from "./components/navigation/navigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";
import MobileNav from "./components/navigation/mobile-nav/mobile-nav";

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
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 250 && mobileNavRef.current) {
      mobileNavRef.current.style.opacity = "1";
    }
    if (latest < 250 && mobileNavRef.current) {
      mobileNavRef.current.style.opacity = "0";
    }
  });

  library.add(fas, faSpotify);

  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <SmoothScroll>
        <body>
          <Navigation currentPath={path} />
          <div
            className="opacity-0 transition-opacity duration-300"
            ref={mobileNavRef}
          >
            <MobileNav />
          </div>
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </body>
      </SmoothScroll>
    </html>
  );
}
