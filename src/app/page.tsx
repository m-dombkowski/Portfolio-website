import { Metadata } from "next";
import Home from "./components/home/home";

export const metadata: Metadata = {
  title: "Home. Mateusz Dombkowski",
  description: "Website's Homepage",
  // metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

// Made it like that so it can be a server component so I can set Metadata (it's impossible to do it in my case in layout since it's checking lots of stuff and need to use hooks there)

export default function HomePage() {
  return <Home />;
}
