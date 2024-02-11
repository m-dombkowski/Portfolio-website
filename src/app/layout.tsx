"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/smooth-scroll/smooth-scroll";
import LocalFont from "next/font/local";
import "cal-sans";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { usePathname } from "next/navigation";
import Navigation from "./components/navigation/navigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";
import MobileNav from "./components/navigation/mobile-nav/mobile-nav";
import useWindowDimensions from "./hooks/useWindowDimension";
import { Device } from "./lib/definitions/enums";
import { ScreenSizeContext } from "./lib/context/screenSize";

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
  const { width } = useWindowDimensions();
  const { scrollY } = useScroll();
  const [deviceType, setDeviceType] = useState<Device>(Device.NONE);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 250 && mobileNavRef.current) {
      mobileNavRef.current.style.opacity = "1";
    }
    if (latest < 250 && mobileNavRef.current) {
      mobileNavRef.current.style.opacity = "0";
    }
  });

  useEffect(() => {
    if (width < 1025) {
      setDeviceType(Device.MOBILE);
    } else {
      setDeviceType(Device.DESKTOP);
    }
    console.log(width);
  }, [width]);

  const { scrollYProgress } = useScroll();

  library.add(fas, faSpotify);

  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <SmoothScroll>
        <ScreenSizeContext.Provider value={deviceType}>
          <body>
            <motion.div
              className="fixed top-0 h-[10px] left-0 right-0 origin-[0%] bg-color-text-darker z-[999]"
              style={{ scaleX: scrollYProgress }}
            />
            <Navigation currentPath={path} />
            <div
              className="opacity-0 transition-opacity duration-300"
              ref={mobileNavRef}
            >
              <MobileNav />
            </div>
            <AnimatePresence mode="wait">{children}</AnimatePresence>
          </body>
        </ScreenSizeContext.Provider>
      </SmoothScroll>
    </html>
  );
}
