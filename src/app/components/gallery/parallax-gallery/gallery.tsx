"use client";
import styles from "./page.module.css";
import { descriptions } from "@/app/lib/card-parallax-data";
import Card from "./card";

export default function ParallaxGallery() {
  return (
    <main className="mt-[-100px]">
      {descriptions.map((description, i) => {
        return <Card key={`p_${i}`} {...description} i={i} />;
      })}
    </main>
  );
}
