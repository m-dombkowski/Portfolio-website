import { MotionValue } from "framer-motion";
import { StaticImageData } from "next/image";
import React, { ReactElement } from "react";

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
  src: StaticImageData;
  alt: string;
  color: string;
  i?: number;
  progress?: MotionValue<number>;
  range?: number[];
  targetScale?: number;
};

export type TechStackDataType = {
  name: string;
  usecase: string[];
  tooltip: string;
  svg: React.ReactElement<SVGSVGElement>;
};
