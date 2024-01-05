"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/smooth-scroll/smooth-scroll";
import "cal-sans";
import PageTransition from "./ui/page-transition/stairs";
import { AnimatePresence } from "framer-motion";

import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <html lang="en">
      <SmoothScroll>
        <body>
          <AnimatePresence mode="wait">
            <PageTransition key={path}>{children}</PageTransition>
          </AnimatePresence>
        </body>
      </SmoothScroll>
    </html>
  );
}
