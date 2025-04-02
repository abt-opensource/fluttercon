// "use client";

// import {
//   Sheet,
//   SheetContent,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// export const Header = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="fixed top-4 z-10 w-full items-center justify-center xl:flex">
//       <div className="float-right mx-auto flex h-14 max-w-3xl items-center justify-between rounded-2xl bg-opacity-50 px-6 py-3 text-background backdrop-blur-sm xl:border xl:border-neutral-500">
//         <nav className="hidden flex-wrap items-center gap-4 font-semibold text-sm text-white lg:gap-6 xl:flex">
//           <Link href="/">Fluttercon</Link>
//           <Link href="/fluttercon">Icons</Link>
//           <Link href="/documentaion">Docs</Link>
//           {/* <Link href="/licensepage">License</Link> */}
//           <Link href="#">Blog</Link>
//           {/* <Link href="#">Pricing</Link> */}

//           <div className="flex gap-2">
//             {/* <button type="button" className="rounded-lg px-2 py-1 text-white">
//               Get Started
//             </button> */}
//             <button type="button" className="rounded-lg px-3 py-1 text-white">
//               GitHub
//             </button>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger className="text-foreground xl:hidden">
//             <Menu size={24} className="text-white" />
//           </SheetTrigger>

//           <SheetContent side="right" className="bg-sidebar text-foreground">
//             <SheetTitle className="p-4 font-bold text-xl">
//               Fluttercon Menu
//             </SheetTitle>
//             <nav className="flex flex-col space-y-4 p-4">
//               <Link href="#" className="hover:text-gray-300">
//                 Icons
//               </Link>
//               <Link href="documentaion" className="hover:text-gray-300">
//                 Docs
//               </Link>
//               <Link href="#" className="hover:text-gray-300">
//                 Changelog
//               </Link>
//               <Link href="#" className="hover:text-gray-300">
//                 Blog
//               </Link>
//               <Link href="#" className="hover:text-gray-300">
//                 Pricing
//               </Link>
//               <button
//                 type="button"
//                 className="w-full·rounded-lg·bg-gray-800·px-3·py-2·text-white"
//               >
//                 Get Started
//               </button>
//             </nav>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   );
// };
import { Button } from "@/primitives/button";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="fixed top-0 z-50 flex h-16 w-full items-center bg-opacity-50 px-4 text-white backdrop-blur-sm">
      <div>
        <Image
          src={"/fluttercon.png"}
          alt={"logo"}
          width={40}
          height={40}
          className="mr-5 rounded-2xl"
        />
      </div>
      <div className="font-semibold">FLUTTERCON</div>
      <div className="ml-auto flex items-center gap-2 md:gap-4">
        <Link href={"https://github.com/abt-opensource"}>
          <Button className="max-sm:hidden">
            <Github /> Explore
          </Button>
        </Link>
        <Link href={"/about-us"}>
          <Button variant={"secondary"} className="max-md:hidden">
            About us
          </Button>
        </Link>
      </div>
    </div>
  );
};
