import { MotionValue } from "framer-motion";
import { StaticImageData } from "next/image";
import React from "react";

export type ContactCardType = {
  icon: JSX.Element;
  href: string;
  description: string;
  label: string;
};

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

export type TechStackFooterType = {
  name: string;
  technology: string;
  icon: JSX.Element;
};

export type ContactFooterType = {
  name: string;
  href: string;
};

export type FeedbackDataType = {
  title: string;
  subTitle: string | null;
  meme: StaticImageData;
  alt: string;
  description: string | null;
  showSocial?: boolean;
};

export type KevinsDataType = {
  title: string;
  subtitle: string | null;
  gif: StaticImageData;
  gifAlt: string;
};

export type TimelineDataType = {
  img: StaticImageData;
  imgAlt: string;
  date: string;
  jobTitle: string;
  companyName: string;
  description: JSX.Element;
};

export type ProjectCardType = {
  date: string;
  projectTitle: string;
  briefDescription: string;
  img: StaticImageData;
  alt: string;
  description: string;
  technologies: string[];
  repoLink: string;
  websiteLink: string | null;
};
