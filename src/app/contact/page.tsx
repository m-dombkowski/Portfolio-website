import { useMotionTemplate, useMotionValue } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card/card";

const contacts = [
  {
    icon: <Github size={32} />,
    href: "https://github.com/m-dombkowski",
    description: "Check my Github!",
    label: "Github",
  },
  {
    icon: <Mail size={32} />,

    href: "mailto:dombkowskimateusz@gmail.com",
    description: "Send me an email!",
    label: "Email",
  },
  {
    icon: <Linkedin size={32} />,
    href: "https://www.linkedin.com/in/mateusz-dombkowski-683b26241/",
    description: "Let's connect!",
    label: "LinkedIn",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-bl from-zinc-900-flipped via-zinc-900 to-zinc-900-flipped ">
      <div className="flex flex-col min-h-screen justify-center">
        <div className="flex justify-center mt-32">
          <h1 className="text-3xl mb-20 font-display lg:text-6xl text-center">{`Choose the way to connect that suits you best`}</h1>
        </div>
        <div className="container flex items-center justify-center   px-4 mx-auto font-sans text-center">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:mt-32 lg:gap-16">
            {contacts.map((contact, i) => (
              <Card key={i}>
                <Link
                  key={i}
                  href={contact.href}
                  target="_blank"
                  className="w-[25%]"
                >
                  <div className="flex flex-col justify-center items-center border-solid border border-light-brown rounded-xl flex-wrap">
                    <span className="mt-20 mb-20 p-5 border-solid border-[2px] border-light-brown rounded-full">
                      {contact.icon}
                    </span>
                    <h1 className="text-3xl mb-5 font-display">
                      {contact.label}
                    </h1>
                    <p className="text-lg mb-40">{contact.description}</p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Example() {
//   return (
//     <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
//       <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
//         <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
//           {contacts.map((s, i) => (
//             <Card key={i}>
//               <Link
//                 href={s.href}
//                 target="_blank"
//                 className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
//               >
//                 <span
//                   className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
//                   aria-hidden="true"
//                 />
//                 <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
//                   {s.icon}
//                 </span>{" "}
//                 <div className="z-10 flex flex-col items-center">
//                   <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
//                     {s.label}
//                   </span>
//                 </div>
//               </Link>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
