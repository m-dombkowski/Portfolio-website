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
      source: ciasteczka,
      alt: "cookies",
    },
    {
      source: drozdzowka,
      alt: "raspberry, blueberry bun",
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
    <div className="px-[25px] pt-[25px] sm:p-0">
      <Swiper
        pagination={true}
        style={{ padding: "2rem", paddingBottom: "3rem" }}
        className="my-[50px] mx-[auto] max-w-[440px] h-[300px] xs1:h-[375px] xs2:h-[450px] xs3:h-[500px] bg-nav-light-bg-highlight dark:bg-[#72b09b] rounded-xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
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
            className="flex items-center justify-center w-[100%] h-[100%]
            rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
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
// 025a4e
// 4c6763
