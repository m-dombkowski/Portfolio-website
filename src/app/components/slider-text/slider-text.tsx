"use client";
import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SliderText() {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  const xPercent = useRef<number>(0);
  const direction = useRef<number>(-1);

  const animate = useCallback(() => {
    if (!slider.current) return;
    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent.current });
    gsap.set(secondText.current, { xPercent: xPercent.current });
    requestAnimationFrame(animate);
    xPercent.current += 0.05 * direction.current;
  }, []);

  useEffect(() => {
    if (!slider.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: slider.current,
        scrub: 0.5,
        start: "bottom bottom",
        end: "top top",
        onUpdate: (event) => {
          direction.current = event.direction * -1;
        },
      },
    });
    requestAnimationFrame(animate);
  }, [animate]);

  useEffect(() => {
    if (!secondText.current) return;

    gsap.set(secondText.current, {
      left: secondText.current.getBoundingClientRect().width,
    });
    requestAnimationFrame(animate);
  }, [animate]);

  return (
    <div className="relative flex  overflow-hidden">
      <div ref={slider} className="relative whitespace-nowrap">
        <p ref={firstText} className="relative m-0 font-medium pr-20">
          Fancy something sweet?
        </p>
        <p
          className="m-0 font-medium pr-20 absolute left-[100%] bottom-0"
          ref={secondText}
        >
          Fancy something sweet?
        </p>
      </div>
    </div>
  );
}
