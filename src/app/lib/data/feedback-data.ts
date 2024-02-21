import { FeedbackDataType } from "../definitions/types";
import Legend from "../../../../public/images/feedback/legend.jpg";
import Spoderman from "../../../../public/images/feedback/why-u-do-dis.jpg";
import StopItMeme from "../../../../public/images/feedback/oh-stop-it.jpg";

export const positiveFinalFeedback: FeedbackDataType = {
  title: `I'll take it, cheers!`,
  subTitle: `You're a`,
  meme: Legend,
  alt: `Meme presenting young boy saying 'Fucking Legend'`,
  description: `Feel free to check my Instagram where I post my attempts on making
  tasty baked goods.`,
};

export const negativeFinalFeedback: FeedbackDataType = {
  title: `Ok, I'm sad now`,
  subTitle: null,
  meme: Spoderman,
  alt: `Meme presenting caricature of Spider Man called Spoderman`,
  description: `Even though you seem to dislike my craft feel free to check my
  Instagram where I post my attempts on making tasty baked goods.`,
};

export const positiveFeedback: FeedbackDataType = {
  title: `Thanks!`,
  subTitle: `I really appreciate it.`,
  meme: StopItMeme,
  alt: `Meme showing blushing character`,
  description: `Feel free to check out my Instagram page where I post (in highlights)
  all of my cooking/baking attempts on making tasty and sweet thingies.`,
};
