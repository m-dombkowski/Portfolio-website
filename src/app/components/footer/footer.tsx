import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "lucide-react";
import SpotifyLink from "../spotify-link/spotify-link";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="w-[250px] bg-bg-dark-gray h-[75px] flex justify-center items-center gap-5 text-sm sm:w-[375px] sm:gap-8 sm:h-[120px] sm:text-xl">
      <Link
        target="_blank"
        href="https://open.spotify.com/user/hevrak?si=3764935cfac041dd"
      >
        {" "}
        <FontAwesomeIcon size="3x" color="#8fdcc2" icon={faSpotify} />
      </Link>
      <SpotifyLink />
    </div>
  );
}
