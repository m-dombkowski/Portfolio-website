"use client";
import "@lottiefiles/lottie-player";
import { AnimatePresence } from "framer-motion";
import HomePage from "./home/page";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import PageTransition from "./ui/page-transition/stairs";

export default function Home() {
  // const router = useRouter();
  const pathname = usePathname();
  const router = useRouter();

  const editedPathname = pathname.replace("/", "");

  useEffect(() => {
    router.replace("/home");
  }, [router]);

  return (
    <>
      <AnimatePresence mode="wait">
        <HomePage key={editedPathname} />
      </AnimatePresence>
    </>
  );
}
