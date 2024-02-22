import { StaticImageData } from "next/image";
import KevinChilliGIF from "../../../../public/images/feedback/kevins-famous-chilli.gif";
import KevinCookiesGIF from "../../../../public/images/feedback/kevin-cookies.gif";

export const kevinsDefaultData = {
  title: "Why are you like that?",
  subtitle: "Kevin dropped his famous chilli because of you",
  gif: KevinChilliGIF,
  gifAlt:
    "GIF of Kevin from The Office TV Series dropping his famous chilli on the ground",
  apologized: false,
};

export const kevinSecretData = {
  title: "Ok, we're cool now but you still need to answer the question though",
  subtitle: null,
  gif: KevinCookiesGIF,
  gifAlt:
    "GIF of Kevin from The Office TV Series spinning on a chair and saying 'cookies, aye?",
};
