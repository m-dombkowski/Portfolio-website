import { motion } from "framer-motion";
import React from "react";
import { fadePage, animPage } from "@/app/lib/anim";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-y-hidden">
      <motion.div className="relative overflow-hidden" {...animPage(fadePage)}>
        {children}
      </motion.div>
    </div>
  );
}
