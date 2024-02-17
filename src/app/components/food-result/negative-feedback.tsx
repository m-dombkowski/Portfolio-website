import { animByBoolean, bigSlideUp } from "@/app/lib/anim";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NegativeFeedback({
  isTitleHidden,
}: {
  isTitleHidden: boolean;
}) {
  return (
    <motion.div {...animByBoolean(bigSlideUp, isTitleHidden, 0)}>
      <h1>Why are you like that</h1>
    </motion.div>
  );
}
