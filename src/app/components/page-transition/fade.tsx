import { motion } from "framer-motion";
import React from "react";
import { fadePage, animPage } from "@/app/lib/anim";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div className="relative" {...animPage(fadePage)}>
      {children}
    </motion.div>
  );
}
