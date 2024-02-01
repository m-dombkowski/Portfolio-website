import brownie from "../../../../public/images/food/brownie-kokos.png";
import chmurka from "../../../../public/images/food/chmurka.jpg";
import ciasteczka from "../../../../public/images/food/cookies.jpg";
import cynamonki from "../../../../public/images/food/cynamonki.jpg";
import drozdzowka from "../../../../public/images/food/drozdzowka-maliny.jpg";
import jagodzianka from "../../../../public/images/food/jagodzianka.jpg";
import sernik from "../../../../public/images/food/sernik.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import Image, { ImageLoaderProps } from "next/image";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

export default function GalleryMobile() {
  const pics = [
    {
      source: drozdzowka,
      alt: "raspberry, blueberry bun",
    },
    {
      source: ciasteczka,
      alt: "cookies",
    },
    {
      source: chmurka,
      alt: "raspberry cloud",
    },
    {
      source: sernik,
      alt: "blueberry cheesecake",
    },
    {
      source: cynamonki,
      alt: "cinnamon rolls",
    },
    {
      source: jagodzianka,
      alt: "blueberry filled bun",
    },
    {
      source: brownie,
      alt: "brownie",
    },
  ];

  return (
    <div className="p-[25px] sm:p-0">
      <Swiper
        pagination={true}
        className="my-[100px] mx-[auto] max-w-[440px] h-[300px] xs1:h-[375px] xs2:h-[450px] xs3:h-[500px]"
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative, Pagination]}
      >
        {pics.map(({ source, alt }, index) => (
          <SwiperSlide
            className="flex items-center justify-center w-[100%] h-[100%]"
            key={index}
          >
            <Image
              className="w-[100%] h-[100%]"
              src={source}
              alt={alt}
              loader={({ src, width, quality }: ImageLoaderProps) => {
                return `${source.src ? source.src : src}?w=${width}&q=${
                  quality || 75
                }`;
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
