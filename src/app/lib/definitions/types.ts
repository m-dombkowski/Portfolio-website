import { MotionValue } from "framer-motion";
import { StaticImageData } from "next/image";

export type NavDataType = {
  href: string;
  description: string;
  name: string;
  speed: number;
  index: number;
};

export type SpotifyDataType = {
  band: string;
  song: string;
  url: string;
};

export type FoodGalleryPicType = {
  source: StaticImageData;
  scale: MotionValue<number>;
  alt: string;
};
