import { TechStackDataType } from "../definitions/types";
import {
  CssSvg,
  FirebaseSvg,
  GitSvg,
  HtmlSvg,
  JavascriptSvg,
  JiraSvg,
  MagentoSvg,
  NextSvg,
  NpmSvg,
  ReactSvg,
  ReduxSvg,
  RestSvg,
  SassSvg,
  SupabaseSvg,
  TailwindSvg,
  TypescriptSvg,
  VercelSvg,
  ViteSvg,
} from "./tech-stack-svgs";

export const techData: TechStackDataType[] = [
  {
    name: "Next.js",
    usecase: ["personal"],
    tooltip: "0.5 year",
    svg: NextSvg(),
  },
  {
    name: "React",
    usecase: ["commercial", "personal"],
    tooltip: "1.5 years",
    svg: ReactSvg(),
  },
  {
    name: "Typescript",
    usecase: ["commercial", "personal"],
    tooltip: "1.5 years",
    svg: TypescriptSvg(),
  },
  {
    name: "Redux (Toolkit)",
    usecase: ["commercial", "personal"],
    tooltip: "1.5 years",
    svg: ReduxSvg(),
  },
  {
    name: "REST Api",
    usecase: ["commercial", "personal"],
    tooltip: "1.5 years",
    svg: RestSvg(),
  },
  {
    name: "Javasript",
    usecase: ["commercial", "personal"],
    tooltip: "1.5 years",
    svg: JavascriptSvg(),
  },
  {
    name: "CSS",
    usecase: ["commercial"],
    tooltip: "1.5 years",
    svg: CssSvg(),
  },
  {
    name: "SASS/SCSS",
    usecase: ["commercial", "personal"],
    tooltip: "1.5 years",
    svg: SassSvg(),
  },
  {
    name: "Tailwind",
    usecase: ["personal"],
    tooltip: "0.5 year",
    svg: TailwindSvg(),
  },
  {
    name: "HTML",
    usecase: ["commercial"],
    tooltip: "1.5 years",
    svg: HtmlSvg(),
  },
  {
    name: "Git",
    usecase: ["commercial", "personal"],
    tooltip: "1.5 years",
    svg: GitSvg(),
  },
  {
    name: "Supabase",
    usecase: ["personal"],
    tooltip: "0.5 year",
    svg: SupabaseSvg(),
  },
  {
    name: "Magento",
    usecase: ["commercial"],
    tooltip: "1.5 years",
    svg: MagentoSvg(),
  },
  {
    name: "Firebase",
    usecase: ["personal"],
    tooltip: "1.5 years",
    svg: FirebaseSvg(),
  },
  {
    name: "Jira",
    usecase: ["commercial"],
    tooltip: "1.5 years",
    svg: JiraSvg(),
  },
  {
    name: "Npm",
    usecase: ["commercial", "personal"],
    tooltip: "1.5 years",
    svg: NpmSvg(),
  },
  {
    name: "Vite.js",
    usecase: ["personal"],
    tooltip: "1 year",
    svg: ViteSvg(),
  },
  {
    name: "Vercel",
    usecase: ["personal"],
    tooltip: "0.5 years",
    svg: VercelSvg(),
  },
];
