import { MotionValue } from "framer-motion";
import { StaticImageData } from "next/image";

export type NavDataType = {
  href: string;
  description: string;
  name: string;
  speed: number;
  index: number;
  image: StaticImageData;
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

export type SocialMediaDataType = {
  title: string;
  text: string;
  href: string;
};

export type CardParallaxDataType = {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  i?: number;
};
