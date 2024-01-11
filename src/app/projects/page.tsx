"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import PageWrapper from "../components/page-transition/fade";
import { motion } from "framer-motion";
import PageUnderContstuction from "../components/construction/page";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <PageUnderContstuction />
    </PageWrapper>
  );
}
