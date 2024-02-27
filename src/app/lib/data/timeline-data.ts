import { TimelineDataType } from "../definitions/types";
import NeonetLogo from "../../../../public/images/neonet-logo.jpg";
import { NeonetDescription } from "./timeline-descriptions";

export const timelineData: TimelineDataType[] = [
  {
    img: NeonetLogo,
    imgAlt: "Neonet's logo",
    date: "Sep 2022 - present",
    jobTitle: "Junior Frontend Developer",
    companyName: "Neonet S.A.",
    description: NeonetDescription(),
  },
];
