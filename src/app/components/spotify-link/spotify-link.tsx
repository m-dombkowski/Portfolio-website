import { SpotifyDataType } from "@/app/lib/definitions/types";
import { spotifyData } from "@/app/lib/spotifyData";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SpotifyLink() {
  const [selectedSong, setSelectedSong] = useState<SpotifyDataType>();

  useEffect(() => {
    spotifyData.filter((el, index) => {
      if (index === Math.floor(Math.random() * spotifyData.length - 1)) {
        setSelectedSong(el);
      }
    });
  }, []);

  if (!selectedSong) return;

  const { url, band, song } = selectedSong;

  return (
    <>
      {selectedSong && (
        <Link target="_blank" href={url}>
          <p className="font-black">{band}</p>
          <p className="font-bold">{song}</p>
        </Link>
      )}
    </>
  );
}
