"use client";
import Image from "next/image";
import { CardParallaxDataType } from "@/app/lib/definitions/types";

const Card: React.FC<CardParallaxDataType> = ({
  title,
  description,
  src,
  link,
  color,
  i,
}) => {
  if (!i && i !== 0) {
    return;
  }
  return (
    <div className="h-[100vh] flex items-center justify-center sticky top-0">
      <div
        className="flex flex-col relative h-[500px] w-[900px] rounded-lg p-10 transform-origin-top"
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <h2 className="text-center m-0 text-xl">{title}</h2>
        <div className="flex h-[100%] mt-10 gap-10">
          <div className="w-[40%] relative top-[10%] ">
            <p className="text-lg first-letter:text-4xl">{description}</p>
            <span className="flex items-center g-2">
              <a href={link} target="_blank">
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="relative w-[60%] h-[100%] rounded-xl overflow-hidden">
            <div className="w-[100%] h-[100%]">
              <Image
                className="object-fit-cover"
                fill
                src={`/images/${src}`}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
