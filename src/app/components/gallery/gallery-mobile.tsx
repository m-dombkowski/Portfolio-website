import brownie from "../../../../public/images/food/brownie-kokos.png";
import chmurka from "../../../../public/images/food/chmurka.jpg";
import ciasteczka from "../../../../public/images/food/ciasteczka.jpg";
import cynamonki from "../../../../public/images/food/cynamonki.jpg";
import drozdzowka from "../../../../public/images/food/drozdzowka-maliny.jpg";
import jagodzianka from "../../../../public/images/food/jagodzianka.jpg";
import pierogi from "../../../../public/images/food/pierogi.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

export default function GalleryMobile() {
  const pics = [
    {
      src: drozdzowka,
      alt: "raspberry filled bun",
    },
    {
      src: ciasteczka,
      alt: "cookies",
    },
    {
      src: chmurka,
      alt: "raspberry cloud",
    },
    {
      src: pierogi,
      alt: "pierogi (polish dumplings)",
    },
    {
      src: cynamonki,
      alt: "cinnamon rolls",
    },
    {
      src: jagodzianka,
      alt: "blueberry filled bun",
    },
    {
      src: brownie,
      alt: "brownie",
    },
  ];

  return (
    <div className="p-[25px] sm:p-0">
      <Swiper
        pagination={true}
        className="my-[100px] mx-[auto] max-w-[440px] h-[auto]"
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
        {pics.map((picture, index) => (
          <SwiperSlide
            className="flex items-center justify-center w-[100%] h-[100%]"
            key={index}
          >
            <Image
              className="w-[100%] h-[100%]"
              src={picture.src}
              alt={picture.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
