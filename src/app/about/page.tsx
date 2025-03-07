"use client";

import Image from "next/image";
import PageWrapper from "../components/transitions/fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { animByBoolean, opacity, slideRight, slideUp } from "../lib/anim";
import { useContext, useEffect, useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import SpotifyLink from "../components/spotify-link/spotify-link";
import GalleryDesktop from "../components/gallery/gallery-desktop";
import GalleryMobile from "../components/gallery/gallery-mobile";
import ParallaxGallery from "../components/gallery/parallax-gallery/gallery";

import SliderText from "../components/slider-text/slider-text";
import FoodResult from "../components/food-result/food-result";
import { ScreenSizeContext } from "../lib/context/screenSize";
import MyThemeContext from "../lib/context/theme";
import portrait from "../../../public/me.jpg";

export default function AboutPage() {
  const helloContainer = useRef<HTMLDivElement>(null);
  const helloDescContainer = useRef<HTMLDivElement>(null);
  const parallaxContainer = useRef<HTMLDivElement>(null);
  const helloInView = useInView(helloContainer);
  const helloDescInView = useInView(helloDescContainer);
  const parallaxInView = useInView(parallaxContainer);
  const { deviceType } = useContext(ScreenSizeContext);
  const { isDarkTheme } = useContext(MyThemeContext);

  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    const isInitialDark: boolean = JSON.parse(
      localStorage.getItem("isDarkTheme")!
    );
    isInitialDark ? setDarkTheme(true) : setDarkTheme(false);
  }, [isDarkTheme]);

  return (
    <PageWrapper>
      <section className="flex flex-col justify-center items-center  m-[auto] text-center mt-20 sm:mt-40">
        <div className="max-w-[600px] lg:max-w-[1050px] pb-32">
          <div className="flex justify-center flex-col gap-10 pb-20 lg:pb-0">
            <div className="flex flex-col gap-6 mb-20">
              <h1 className="text-color-text-primary-light-mode dark:text-color-text-darker text-4xl font-calc sm:text-6xl pb-20">{`Hi! Mateusz here.`}</h1>
              <div
                ref={helloContainer}
                className="flex flex-col space-between gap-16 lg:flex-row"
              >
                <motion.div
                  {...animByBoolean(opacity, helloInView, null)}
                  className="flex w-full justify-center flex-col items-center "
                >
                  <div className="w-[250px] h-[300px] sm:h-[450px] sm:w-[375px] rounded-t-full  relative">
                    <Image
                      sizes="(min-width: 640px) 375px, 250px"
                      className="w-full h-full rounded-t-full "
                      src={portrait}
                      alt="picture of me"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOs3reiHgAF/wJinwtkaAAAAABJRU5ErkJggg=="
                    />
                  </div>
                  <div className="w-[250px]  bg-nav-light-bg-highlight dark:bg-bg-dark-gray h-[75px] flex justify-center items-center gap-5 text-sm sm:w-[375px] sm:gap-8 sm:h-[120px] sm:text-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <Link
                      target="_blank"
                      href="https://open.spotify.com/user/hevrak?si=3764935cfac041dd"
                      aria-label="link to my spotify profile"
                    >
                      {" "}
                      <FontAwesomeIcon
                        size="3x"
                        color="#357b71"
                        icon={faSpotify}
                      />
                    </Link>
                    <SpotifyLink />
                  </div>
                </motion.div>
                <div className="flex flex-col font-calc justify-center items-center">
                  <h1 className="text-color-text-primary-light-mode dark:text-color-text-darker text-2xl leading-[1.2] sm:text-4xl px-6 mb-12">
                    Frontend Developer working remotely from Poland, Wrocław.
                  </h1>
                  <div
                    ref={helloDescContainer}
                    className="text-sm text-justify flex flex-col gap-5 px-10 sm:text-lg lg:px-0"
                  >
                    <motion.p
                      {...animByBoolean(slideRight, helloDescInView, 0.3)}
                    >{`Even though I wrote my first "Hello World" somewhere around 2019/2020, it all started long time ago around 2014 in the game called World of Warcraft, where I met 3 guys who after few years, started pushing me to check this thing called Javascript. Later on they kept on pushing me to not leave it and keep grinding.`}</motion.p>
                    <motion.p
                      {...animByBoolean(slideRight, helloDescInView, 0.6)}
                    >{`In 2021, I decided to switch my carrer path, and after a bit over a year of commitment and hard work, it paid off, and I landed my first commercial job as a Frontend Developer.`}</motion.p>
                    <motion.p
                      {...animByBoolean(slideRight, helloDescInView, 0.9)}
                    >{`My main goal is to always create pixel perfect, engaging and accessible experience, wheter it's a private or commercial project.`}</motion.p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              {...animByBoolean(slideUp, parallaxInView, 1)}
              ref={parallaxContainer}
              className="flex flex-col gap-8 text-lg text-sans dark:text-color-text-lighter text-justify px-6 font-calc items-center"
            >
              <h1 className="text-color-text-primary-light-mode dark:text-color-text-darker text-3xl font-calc leading-[1.2] sm:text-5xl px-6 mb-10">
                A bit about me
              </h1>
              <ParallaxGallery darkTheme={darkTheme} />
            </motion.div>
          </div>
        </div>
        <div className="w-[100%]">
          <div>
            <div className="pb-10 font-calc dark:text-color-text-primary text-5xl sm:text-7xl lg:text-9xl 2xl:text-[11rem]">
              <SliderText />
            </div>
            {deviceType === "desktop" && (
              <div className="flex justify-center items-center pt-20">
                <Player
                  className="w-[80px] h-[80px] lg:w-[124px] lg:h-[124px]"
                  src={
                    darkTheme
                      ? "https://lottie.host/7ce71967-4e20-40de-a3c7-d1566bb1727d/AglJY8GMuc.json"
                      : "https://lottie.host/db44a044-1120-4eec-ab0c-456508ac6742/ZlYgkvncIA.json"
                  }
                  background="transparent"
                  speed={1}
                  direction={1}
                  loop
                  autoplay
                ></Player>
              </div>
            )}
          </div>
          {deviceType === "desktop" ? <GalleryDesktop /> : <GalleryMobile />}
          {deviceType === "mobile" && (
            <div className="flex justify-center items-center pb-20">
              <Player
                className="w-[80px] h-[80px] lg:w-[124px] lg:h-[124px]"
                src={
                  darkTheme
                    ? "https://lottie.host/69a36f5e-6e7c-4889-8357-63a5313d463e/YUmOxomf88.json"
                    : "https://lottie.host/c99e8ad5-beb0-4ff0-b0b5-e7c2005c5757/bYP7hVCvEZ.json"
                }
                background="transparent"
                speed={1}
                direction={1}
                loop
                autoplay
              ></Player>
            </div>
          )}
        </div>
        <FoodResult />
      </section>
    </PageWrapper>
  );
}
