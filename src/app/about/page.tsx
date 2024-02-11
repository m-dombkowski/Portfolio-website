"use client";

import Image, { ImageLoaderProps } from "next/image";
import portrait from "../../../public/images/me.jpg";
import PageWrapper from "../components/transitions/fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { anim, opacityWithDelay } from "../lib/anim";
import { useContext, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import SpotifyLink from "../components/spotify-link/spotify-link";
import GalleryDesktop from "../components/gallery/gallery-desktop";
import GalleryMobile from "../components/gallery/gallery-mobile";
import ParallaxGallery from "../components/gallery/parallax-gallery/gallery";
import { ScreenSizeContext } from "../lib/context/screenSize";

export default function AboutPage() {
  const descContainer = useRef<HTMLDivElement>(null);
  const sptofiyContainer = useRef<HTMLDivElement>(null);
  const galleryTitleContainer = useRef<HTMLDivElement>(null);

  const deviceType = useContext(ScreenSizeContext);

  return (
    <PageWrapper>
      <section className="flex flex-col justify-center items-center  m-[auto] text-center ">
        <div className="max-w-[600px] lg:max-w-[900px] pb-32">
          <div className="flex justify-center flex-col gap-10 pb-20 lg:pb-0">
            <div className="flex flex-col gap-6 mb-20">
              <h1 className=" text-4xl font-calc sm:text-6xl">{`Hi! Mateusz here.`}</h1>
              <div className="flex w-100 justify-center flex-col items-center py-10">
                <Image
                  className="w-[250px] h-[100%] rounded-t-full sm:w-[325px]"
                  src={portrait ? portrait : "/me.jpg"}
                  alt="picture of me"
                  loader={({ src, width, quality }: ImageLoaderProps) => {
                    return `${portrait.src ? portrait.src : src}?w=${width}&q=${
                      quality || 75
                    }`;
                  }}
                />
                <div className="w-[250px] bg-bg-dark-gray h-[85px] flex justify-center items-center gap-5 sm:w-[325px] sm:gap-10">
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
              </div>
              <h1 className="text-3xl font-calc leading-[1.2] sm:text-5xl px-6">
                Frontend Developer
                <span className="block text-2xl sm:text-3xl">
                  from Poland, Wrocław.
                </span>
              </h1>
            </div>
            <h1 className="text-3xl font-calc leading-[1.2] sm:text-5xl px-6">
              A bit about me
            </h1>
            <div
              ref={descContainer}
              className="flex flex-col gap-8 text-lg text-sans text-color-text-lighter text-justify px-6 font-calc"
            >
              <ParallaxGallery />
            </div>
          </div>
          <motion.div
            ref={sptofiyContainer}
            {...anim(opacityWithDelay, 1)}
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
            ref={galleryTitleContainer}
            {...anim(opacityWithDelay, 0.75)}
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
