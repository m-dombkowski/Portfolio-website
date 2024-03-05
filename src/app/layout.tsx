"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./lib/smooth-scroll/smooth-scroll";
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
import Footer from "./components/footer/footer";
import ScrollProgressBar from "./components/scroll-progress-bar/scroll-progress-bar";
import Cursor from "./components/cursor/cursor";
import { MyThemeContextProvider } from "./lib/context/theme";
import ThemeButton from "./components/theme/theme-button";

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
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 250 && mobileNavRef.current && !menuIsOpen) {
      mobileNavRef.current.style.opacity = "1";
    }
    if (latest < 250 && mobileNavRef.current && !menuIsOpen) {
      mobileNavRef.current.style.opacity = "0";
    }
  });

  useEffect(() => {
    if (scrollY.getPrevious() < 250 && mobileNavRef.current && !menuIsOpen) {
      mobileNavRef.current.style.opacity = "0";
    }
  }, [menuIsOpen, scrollY]);

  useEffect(() => {
    if (width < 1025) {
      setDeviceType(Device.MOBILE);
    } else {
      setDeviceType(Device.DESKTOP);
    }
  }, [width]);

  library.add(fas, faSpotify);

  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <SmoothScroll>
        <MyThemeContextProvider>
          <ScreenSizeContext.Provider value={deviceType}>
            <body>
              {/* {deviceType === "desktop" && <Cursor />} */}
              <ScrollProgressBar />
              <Navigation currentPath={path} />
              <ThemeButton />

              <div
                className="opacity-0 transition-opacity duration-300"
                ref={mobileNavRef}
              >
                <MobileNav
                  menuIsOpen={menuIsOpen}
                  setMenuIsOpen={setMenuIsOpen}
                />
              </div>
              <AnimatePresence mode="wait">{children}</AnimatePresence>
              <Footer />
            </body>
          </ScreenSizeContext.Provider>
        </MyThemeContextProvider>
      </SmoothScroll>
    </html>
  );
}
