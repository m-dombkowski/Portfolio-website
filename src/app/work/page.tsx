"use client";

import ParallaxGallery from "../components/gallery/parallax-gallery/gallery";
import PageWrapper from "../components/transitions/fade";

export default function WorkPage() {
  return (
    <PageWrapper>
      <section className="flex justify-center items-center flex-col">
        <div className="max-w-[600px] xl:max-w-[900px] flex justify-center flex-col items-center font-calc">
          <h1 className="text-4xl pb-10 sm:text-6xl">Day to day tech stack</h1>
        </div>
        <ParallaxGallery />
      </section>
    </PageWrapper>
  );
}
