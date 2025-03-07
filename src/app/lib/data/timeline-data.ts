import { TimelineDataType } from "../definitions/types";
import { NeonetDescription } from "./timeline-descriptions";

export const timelineData: TimelineDataType[] = [
  {
    img: "https://i.ibb.co/qj4tf6c/neonet-logo.jpg",
    imgAlt: "Neonet's logo",
    date: "Sep 2022 - Nov 2024",
    jobTitle: "Junior Frontend Developer",
    companyName: "Neonet S.A.",
    description: NeonetDescription(),
  },
  {
    img: "https://i.ibb.co/qj4tf6c/neonet-logo.jpg",
    imgAlt: "Neonet's logo",
    date: "Dec 2024 - present",
    jobTitle: "Frontend Developer",
    companyName: "Neonet S.A.",
    description: null,
  },
];
