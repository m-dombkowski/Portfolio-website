import { KevinsDataType } from "@/app/lib/definitions/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export default function KevinTemplate({
  kevinsData,
  apologized,
  setApologized,
}: {
  kevinsData: KevinsDataType;
  apologized: boolean;
  setApologized?: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="text-3xl">{kevinsData.title}</h1>
      <h2 className="text-xl">{kevinsData.subtitle}</h2>
      {!apologized && (
        <button
          onClick={() => setApologized && setApologized(true)}
          className="transition duration-300 text-lg bg-zinc-nav-active rounded-full text-color-text-lighter z-[10] py-3 px-6 hover:bg-[#444447]"
        >
          Sorry Kevin
        </button>
      )}
      <motion.div className="w-[300px] h-auto sm:w-[480px] relative">
        <Image
          className="w-100 h-100 rounded-lg"
          alt={kevinsData.gifAlt}
          src={kevinsData.gif}
          placeholder="blur"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsv3OoHgAG3QKuq5tTVwAAAABJRU5ErkJggg=="
        />
      </motion.div>
    </div>
  );
}
