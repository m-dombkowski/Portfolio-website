import { SpotifyDataType } from "@/app/lib/definitions/types";
import { spotifyData } from "@/app/lib/data/spotify-data";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SpotifyLink() {
  const [selectedSong, setSelectedSong] = useState<SpotifyDataType>();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * spotifyData.length);
    spotifyData.filter((el, index) => {
      if (index === randomIndex) {
        setSelectedSong(el);
        return;
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
