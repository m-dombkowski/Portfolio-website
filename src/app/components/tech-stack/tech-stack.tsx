import { motion } from "framer-motion";
import { anim, opacity } from "../../lib/anim";
import { useContext } from "react";
import { ScreenSizeContext } from "@/app/lib/context/screenSize";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { TechStackDataType } from "@/app/lib/definitions/types";

export default function TechStack({
  filteredData,
}: {
  filteredData: TechStackDataType[];
}) {
  const deviceType = useContext(ScreenSizeContext);
  return (
    <motion.div {...anim(opacity, null)} className="pt-20">
      <ul className="flex gap-16 flex-wrap justify-center">
        {filteredData.map((data, index) => {
          return (
            <div key={index}>
              {deviceType === "desktop" ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex flex-col justify-center items-center gap-5">
                        <div className="w-[48px] h-100">{data.svg}</div>
                        {data.name}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{data.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <Dialog>
                  <DialogTrigger className="text-xs bg-zinc-900 rounded-full px-[0.75rem] py-[0.5rem] sm:px-3 sm:py-2 sm:px-6 sm:py-3 sm:gap-6 sm:text-base border border-color-text-darker border-2">
                    {data.name}
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{data.name}</DialogTitle>
                      <DialogDescription>{data.tooltip}</DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          );
        })}
      </ul>
    </motion.div>
  );
}
