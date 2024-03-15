"use client";
import { Inter } from "next/font/google";
import "./styles.scss";
import SmoothScroll from "./lib/smooth-scroll/smooth-scroll";
import LocalFont from "next/font/local";
import "cal-sans";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import Navigation from "./components/navigation/navigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";
import MobileNav from "./components/navigation/mobile-nav/mobile-nav";
import Footer from "./components/footer/footer";
import ScrollProgressBar from "./components/scroll-progress-bar/scroll-progress-bar";
import { MyThemeContextProvider } from "./lib/context/theme";
import ThemeButton from "./components/theme/theme-button";
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
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 250 && mobileNavRef.current && !menuIsOpen) {
      mobileNavRef.current.style.opacity = "1";
      mobileNavRef.current.style.pointerEvents = "auto";
    }
    if (latest < 250 && mobileNavRef.current && !menuIsOpen) {
      mobileNavRef.current.style.opacity = "0";
      mobileNavRef.current.style.pointerEvents = "none";
    }
  });

  useEffect(() => {
    if (scrollY.getPrevious() < 250 && mobileNavRef.current && !menuIsOpen) {
      mobileNavRef.current.style.opacity = "0";
      mobileNavRef.current.style.pointerEvents = "none";
    }
  }, [menuIsOpen, scrollY]);

  useEffect(() => {
    width < 1025 ? setDeviceType(Device.MOBILE) : setDeviceType(Device.DESKTOP);
  }, [width]);

  library.add(fas, faSpotify);
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <SmoothScroll>
        <MyThemeContextProvider>
          <ScreenSizeContext.Provider value={{ deviceType }}>
            <body className=" text-color-text-light-mode font-calc bg-background-light transition duration-300 after:bg-bg-gradient after:fixed after:z-[-1] after:w-full after:h-full after:blur-[100px] after:saturate-[100%] after:top-0 after:opacity-10 dark:bg-dark-bg dark:text-color-text-lighter">
              <ScrollProgressBar />
              <Navigation currentPath={path} />
              {deviceType === "desktop" && <ThemeButton />}

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
