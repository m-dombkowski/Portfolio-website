"use client";

import Image from "next/image";
import portrait from "../../../public/images/me.jpg";
import PageWrapper from "../components/page-transition/fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import Link from "next/link";
import { motion, useInView, useScroll } from "framer-motion";
import {
  slideLeft,
  animByBoolean,
  opacityWithDelay,
  anim,
  opacity,
} from "../lib/anim";
import { useEffect, useRef, useState } from "react";
import Gallery from "../components/gallery/gallery-desktop";
import { Player } from "@lottiefiles/react-lottie-player";
import useWindowDimensions from "../hooks/useWindowDimension";
import SpotifyLink from "../components/spotify-link/spotify-link";
import { Device } from "../lib/definitions/enums";
import GalleryDesktop from "../components/gallery/gallery-desktop";

export default function AboutPage() {
  const descContainer = useRef<HTMLDivElement>(null);
  const sptofiyContainer = useRef<HTMLDivElement>(null);
  const galleryTitleContainer = useRef<HTMLDivElement>(null);
  const isDescInView = useInView(descContainer);
  const isSpotifyInView = useInView(sptofiyContainer);
  const isGalleryInView = useInView(galleryTitleContainer);
  const [deviceType, setDeviceType] = useState<Device>(Device.NONE);

  const { scrollYProgress } = useScroll();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 1000) {
      setDeviceType(Device.MOBILE);
    } else {
      setDeviceType(Device.DESKTOP);
    }
  }, [width]);

  return (
    <PageWrapper>
      <section className="flex flex-col justify-center items-center  m-[auto] text-center ">
        <motion.div
          className="fixed top-0 h-[10px] left-0 right-0 origin-[0%] bg-color-text-darker"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="max-w-[600px] xl:max-w-[900px] pb-32">
          <div className="flex justify-center flex-col gap-10 pb-20">
            <div className="flex flex-col gap-6">
              <h1 className=" text-4xl font-calc sm:text-6xl">{`Hi! Mateusz here.`}</h1>
              <div className="flex w-100 justify-center flex-col items-center py-10">
                <Image
                  className="w-[250px] h-[100%] rounded-t-full sm:w-[325px]"
                  src={portrait}
                  alt="picture of me"
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
              <h1 className="text-3xl font-calc leading-[1.2] sm:text-5xl">
                Frontend Developer
                <span className="block">from Poland, Wrocław.</span>
              </h1>
            </div>
            <div
              ref={descContainer}
              className="flex flex-col gap-8 text-lg text-sans text-color-text-lighter text-justify px-6 "
            >
              <motion.p {...animByBoolean(slideLeft, isDescInView, 1)}>
                {`Back in 2021 I decided to give programming a shot.
              I can honestly say that it was hell of a ride tumbling head first into a rabbit hole called Frontend Development.
              Since then I stared my first commercial work, gained ton of knowledge and learned a lot but it's just a beginning`}
              </motion.p>
              <motion.p
                {...animByBoolean(slideLeft, isDescInView, 2)}
              >{`Now I have over 1.5 year of commercial experience in which I've been mainly focused on working with React, Typescript and Next.js.
            `}</motion.p>
              <motion.p {...animByBoolean(slideLeft, isDescInView, 3)}>
                {`Outside of my work time I enjoy good coffee, tea. You can also find me ice skating durning winter, roller skating durning summer or doing my new found love, baking.
              I guess I fell in love with baking because simillar as in frontend devlopment you can create something from almost nothing and can see the growth and development of the process. Other than that I really love metalcore and dogs.`}
              </motion.p>
            </div>
          </div>
          <motion.div
            ref={sptofiyContainer}
            {...animByBoolean(opacityWithDelay, isSpotifyInView, 1)}
            className="flex flex-col justify-start items-center gap-10"
          >
            <div className="flex flex-col gap-3 w-[100%]">
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
            {...animByBoolean(opacityWithDelay, isGalleryInView, 0.75)}
          >
            <h1 className="font-calc text-6xl flex justify-center items-center pb-20">
              Fancy something nice to eat?
            </h1>
            <div className="flex justify-center items-center">
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
          </motion.div>
          {deviceType === "desktop" ? <GalleryDesktop /> : null}
        </div>
      </section>
    </PageWrapper>
  );
}
