import { motion } from "framer-motion";
import { anim, slideUp } from "../../lib/anim";
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
  const { deviceType } = useContext(ScreenSizeContext);
  return (
    <div className="pt-20">
      <ul className="flex gap-16 flex-wrap justify-center items-center">
        {filteredData.map((data, index) => {
          return (
            <motion.li
              {...anim(slideUp, index * 0.1)}
              key={`k_${Math.random()}`} // passing math random because if key is the same (like when index is passed) then the anim function will only animate elements with new "key" so basicaly only if  array will expand
              className="min-w-[105px] flex justify-center align-center"
            >
              {deviceType === "desktop" ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex flex-col justify-center items-center gap-5">
                        <div className="p-4 bg-[#fff] rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                          <div className="w-[48px] h-[48px]">{data.svg}</div>
                        </div>
                        {data.name}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-nav-light-bg-highlight text-color-text-light-mode-dark">
                      <p>{data.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <Dialog>
                  <DialogTrigger>
                    <div className="flex flex-col justify-center items-center gap-5">
                      <div className="p-4 bg-[#fff] rounded-full">
                        <div className="w-[48px] h-[48px]">{data.svg}</div>
                      </div>
                      {data.name}
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-background-light">
                    <DialogHeader>
                      <DialogTitle>{data.name}</DialogTitle>
                      <DialogDescription>{data.tooltip}</DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              )}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
