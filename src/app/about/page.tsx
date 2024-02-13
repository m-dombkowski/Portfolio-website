"use client";

import Image, { ImageLoaderProps } from "next/image";
import portrait from "../../../public/images/me.jpg";
import PageWrapper from "../components/transitions/fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  anim,
  animByBoolean,
  opacity,
  opacityWithDelay,
  slideLeft,
  slideRight,
  slideUp,
} from "../lib/anim";
import { useContext, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import SpotifyLink from "../components/spotify-link/spotify-link";
import GalleryDesktop from "../components/gallery/gallery-desktop";
import GalleryMobile from "../components/gallery/gallery-mobile";
import ParallaxGallery from "../components/gallery/parallax-gallery/gallery";
import { ScreenSizeContext } from "../lib/context/screenSize";

export default function AboutPage() {
  const helloContainer = useRef<HTMLDivElement>(null);
  const helloDescContainer = useRef<HTMLDivElement>(null);
  const parallaxContainer = useRef<HTMLDivElement>(null);
  const spotifyContainer = useRef<HTMLDivElement>(null);
  const foodGalleryContainer = useRef<HTMLDivElement>(null);
  const helloInView = useInView(helloContainer);
  const helloDescInView = useInView(helloDescContainer);
  const parallaxInView = useInView(parallaxContainer);
  const spotifyInView = useInView(spotifyContainer);
  const foodInView = useInView(foodGalleryContainer);

  const deviceType = useContext(ScreenSizeContext);

  return (
    <PageWrapper>
      <section className="flex flex-col justify-center items-center  m-[auto] text-center ">
        <div className="max-w-[600px] lg:max-w-[1050px] pb-32">
          <div className="flex justify-center flex-col gap-10 pb-20 lg:pb-0">
            <div className="flex flex-col gap-6 mb-20">
              <h1 className=" text-4xl font-calc sm:text-6xl pb-20">{`Hi! Mateusz here.`}</h1>
              <div
                ref={helloContainer}
                className="flex flex-col space-between gap-16 lg:flex-row"
              >
                <motion.div
                  {...animByBoolean(opacity, helloInView, null)}
                  className="flex w-100 justify-center flex-col items-center "
                >
                  <Image
                    className="w-[250px] h-[100%] rounded-t-full sm:w-[375px]"
                    src={portrait ? portrait : "/me.jpg"}
                    alt="picture of me"
                    loader={({ src, width, quality }: ImageLoaderProps) => {
                      return `${
                        portrait.src ? portrait.src : src
                      }?w=${width}&q=${quality || 75}`;
                    }}
                  />
                  <div className="w-[250px] bg-bg-dark-gray h-[120px] flex justify-center items-center gap-5 text-sm sm:w-[375px] sm:gap-8 sm:text-xl">
                    <Link
                      target="_blank"
                      href="https://open.spotify.com/user/hevrak?si=3764935cfac041dd"
                    >
                      {" "}
                      <FontAwesomeIcon
                        size="3x"
                        color="#8fdcc2"
                        icon={faSpotify}
                      />
                    </Link>
                    <SpotifyLink />
                  </div>
                </motion.div>
                <div className="flex flex-col font-calc justify-center items-center">
                  <h1 className="text-2xl leading-[1.2] sm:text-4xl px-6 mb-12">
                    Frontend Developer working remotly from Poland, Wrocław.
                  </h1>
                  <div
                    ref={helloDescContainer}
                    className="text-sm text-justify flex flex-col gap-5 px-10 sm:text-lg lg:px-0"
                  >
                    <motion.p
                      {...animByBoolean(slideRight, helloDescInView, 0.3)}
                    >{`Even though I wrote my first "Hello World" somewhere around 2020/2021 it all started long time ago around 2014 in the game called World of Warcraft where I met 3 guys that after few years would've started pushing me to check this thing called Javascript and later kept on pushing to not leave it and keep grinding.`}</motion.p>
                    <motion.p
                      {...animByBoolean(slideRight, helloDescInView, 0.6)}
                    >{`In 2021 I decided to switch my carrer path and after a bit over 1 year of commitment, hard work it paid off and i landed my first job as a frontend developer.`}</motion.p>
                    <motion.p
                      {...animByBoolean(slideRight, helloDescInView, 0.9)}
                    >{`My main goal is to always create pixel perfect, engaging and accessible experience wheter it's a private project, commercial work or freelance job.`}</motion.p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              {...animByBoolean(slideUp, parallaxInView, 1)}
              ref={parallaxContainer}
              className="flex flex-col gap-8 text-lg text-sans text-color-text-lighter text-justify px-6 font-calc items-center"
            >
              <h1 className="text-3xl font-calc leading-[1.2] sm:text-5xl px-6">
                A bit about me
              </h1>
              <ParallaxGallery />
            </motion.div>
          </div>
          <motion.div
            {...animByBoolean(slideUp, spotifyInView, 1)}
            ref={spotifyContainer}
            className="flex flex-col justify-start items-center gap-10"
          >
            <div className="flex flex-col gap-3 w-[100%] px-6">
              <h1 className="text-4xl font-calc sm:text-5xl">
                Like heavy music aswell?
              </h1>
              <h2 className="text-3xl font-calc text-color-text-darker sm:text-4xl">
                Feel free to check out my Spotify playlist
              </h2>
            </div>
            <iframe
              className="rounded-[12px] w-[300px] h-[152px] sm:w-[600px]"
              src="https://open.spotify.com/embed/playlist/0Vm128JrgFdU44nQToJtql?utm_source=generator&theme=0"
              allowFullScreen={undefined}
              allow="fullscreen"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
        <div className="w-[100%]">
          <motion.div
            ref={foodGalleryContainer}
            {...animByBoolean(slideUp, foodInView, 1)}
          >
            <h1 className="font-calc text-4xl flex justify-center items-center  sm:text-6xl px-6">
              Fancy something sweet?
            </h1>
            {deviceType === "desktop" && (
              <div className="flex justify-center items-center pt-20">
                <Player
                  className="w-[80px] h-[80px] lg:w-[124px] lg:h-[124px]"
                  src="https://lottie.host/7ce71967-4e20-40de-a3c7-d1566bb1727d/AglJY8GMuc.json"
                  background="transparent"
                  speed={1}
                  direction={1}
                  loop
                  autoplay
                ></Player>
              </div>
            )}
          </motion.div>
          {deviceType === "desktop" ? <GalleryDesktop /> : <GalleryMobile />}
          {deviceType === "mobile" && (
            <div className="flex justify-center items-center pb-20">
              <Player
                className="w-[80px] h-[80px] lg:w-[124px] lg:h-[124px]"
                src="https://lottie.host/69a36f5e-6e7c-4889-8357-63a5313d463e/YUmOxomf88.json"
                background="transparent"
                speed={1}
                direction={1}
                loop
                autoplay
              ></Player>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
