import { animPage, fadePage } from "@/app/lib/anim";
import { motion } from "framer-motion";
import React from "react";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div className="relative overflow-hidden" {...animPage(fadePage)}>
      {children}
    </motion.div>
  );
}
