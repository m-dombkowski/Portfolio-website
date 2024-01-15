"use client";

import Image from "next/image";
import portrait from "../../../public/images/me.jpg";
import PageWrapper from "../components/page-transition/fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import Link from "next/link";
import { spotifyData } from "../lib/spotifyData";
import { useEffect } from "react";
import { SpotifyDataType } from "../lib/definitions";

const SpotifyLink = () => {
  const random = Math.random() * 13;

  const selected: SpotifyDataType | undefined = spotifyData.find(
    (el, index) => {
      if (index === Math.floor(random)) {
        return el;
      }
    }
  );

  console.log(selected);

  return (
    <>
      {selected && (
        <Link target="_blank" href={selected.url}>
          <p className="font-black">{selected.band}</p>
          <p className="font-bold">{selected.song}</p>
        </Link>
      )}
    </>
  );
};

export default function AboutPage() {
  useEffect(() => {}, []);
  return (
    <PageWrapper>
      <section className="flex flex-col justify-center items-center pt-48 max-w-[600px] m-[auto]">
        <div className="flex justify-center flex-col gap-10 pb-20">
          <div className="flex flex-col gap-6 text-center sm:text-left">
            <h1 className=" text-4xl font-calc sm:text-6xl">{`Hi! Mateusz here.`}</h1>
            <div className="flex w-100 justify-center flex-col items-center">
              <Image
                className="w-[300px] h-[100%] rounded-t-full"
                src={portrait}
                alt="picture of me"
              />
              <div className="w-[300px] bg-bg-dark-gray h-[85px] flex justify-center items-center gap-5">
                <Link href="https://open.spotify.com/user/hevrak?si=3764935cfac041dd">
                  {" "}
                  <FontAwesomeIcon size="3x" color="#8fdcc2" icon={faSpotify} />
                </Link>
                <SpotifyLink />
              </div>
            </div>
            <h1 className="text-3xl font-calc leading-[1.2] sm:text-5xl">
              Frontend Developer
              <span className="block">from Poland, Wrocław.</span>
            </h1>
          </div>
          <div className="flex flex-col gap-8 text-base text-sans text-color-text-lighter text-justify px-6">
            <p>
              {`Back in 2021 I decided to give programming a shot.
              I can honestly say that it was hell of a ride tumbling head first into a rabbit hole called Frontend Development.
              Since then I stared my first commercial work, gained ton of knowledge and learned a lot but it's just a beginning`}
            </p>
            <p>{`Now I have over 1.5 year of commercial experience in which I've been mainly focused on working with React, Typescript and Next.js.
            `}</p>
            <p>
              {`Outside of my work time I enjoy good coffee, tea. You can also find me ice skating durning winter, roller skating durning summer or doing my new found love, baking.
              I guess I fell in love with baking because simillar as in frontend devlopment you can create something from almost nothing and can see the growth and development of the process. Other than that I really love metalcore and dogs.`}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-10">
          <div className="flex flex-col gap-3 w-[100%]">
            <h1 className="text-4xl font-calc">Like heavy music aswell?</h1>
            <h2 className="text-3xl font-calc text-color-text-darker">
              Feel free to check out my Spotify playlist
            </h2>
          </div>
          <iframe
            className="rounded-[12px] w-[300px] h-[152px] sm:w-[600px]"
            src="https://open.spotify.com/embed/playlist/0Vm128JrgFdU44nQToJtql?utm_source=generator&theme=0"
            allowFullScreen={undefined}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </PageWrapper>
  );
}
