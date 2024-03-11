import KevinChilliGIF from "../../../../public/images/feedback/kevins-famous-chilli.gif";
import KevinCookiesGIF from "../../../../public/images/feedback/kevin-cookies.gif";
import { KevinsDataType } from "../definitions/types";

export const kevinsDefaultData: KevinsDataType = {
  title: "Why are you like that?",
  subtitle: "Kevin dropped his famous chilli because of you",
  gif: KevinChilliGIF,
  gifAlt:
    "GIF of Kevin from The Office TV Series dropping his famous chilli on the ground",
};

export const kevinSecretData: KevinsDataType = {
  title: "Ok, we're cool now but you still need to answer the question though",
  subtitle: null,
};
