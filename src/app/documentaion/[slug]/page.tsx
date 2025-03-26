"use client";
import { useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { AlignJustify } from "lucide-react";

import Link from "next/link";
import { useParams } from "next/navigation";

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const querydata = useParams()?.slug;

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar Toggle Button (Mobile) */}
      <button
        type="button"
        className="absolute top-4 left-4 z-50 rounded-md bg-gray-300 p-2 text-foreground md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <AlignJustify />
      </button>

      {/* Sidebar */}
      <aside
  className={`${
    sidebarOpen ? "block" : "hidden"
  } h-screen overflow-hidden border-r bg-background p-5 md:block md:w-64`}
>
  <ScrollArea className="h-full w-full bg-background">
    <div className="h-full pr-3">
      <nav className="cursor-pointer space-y-4 pl-6">
        <h4 className="font-semibold text-foreground text-lg">Introduction</h4>
        <ul className="space-y-2 font-medium text-foreground text-sm">
          <li>
            <Link href="/documentaion/guide" className="hover:text-primary">
              What is Fluttercon?
            </Link>
          </li>
          <li>
            <Link href="/documentaion/install" className="hover:text-primary">
              Installation
            </Link>
          </li>
          <li>
            <Link href="/documentaion/compare" className="hover:text-primary">
              Comparison
            </Link>
          </li>
        </ul>

        <Separator />
        <h4 className="font-semibold text-foreground text-lg">Basics</h4>
        <ul className="space-y-2 font-medium text-foreground text-sm">
          <li>
            <Link href="/documentaion/color" className="hover:text-primary">
              Color
            </Link>
          </li>
          <li>
            <Link href="/documentaion/sizing" className="hover:text-primary">
              Sizing
            </Link>
          </li>
          <li>
            <Link href="/documentaion/stroke" className="hover:text-primary">
              Stroke Width
            </Link>
          </li>
        </ul>

        <Separator />
        <h4 className="font-semibold text-foreground text-lg">Advanced</h4>
        <ul className="space-y-2 font-medium text-foreground text-sm">
          <li>
            <Link href="/documentaion/accessibility" className="hover:text-primary">
              Accessibility
            </Link>
          </li>
          <li>
            <Link href="/documentaion/global-styling" className="hover:text-primary">
              Global styling
            </Link>
          </li>
          <li>
            <Link href="/documentaion/filled-icons" className="hover:text-primary">
              Filled icons
            </Link>
          </li>
          <li>
            <Link href="/documentaion/aliased-names" className="hover:text-primary">
              Aliased Names
            </Link>
          </li>
        </ul>

        <Separator />
        <h4 className="font-semibold text-foreground text-lg">Packages</h4>
        <ul className="space-y-2 font-medium text-foreground text-sm">
          <li>
            <Link href="/documentaion/fluttercon" className="hover:text-primary">
              Fluttercon
            </Link>
          </li>
          <li>
            <Link href="/documentaion/fluttercon-react" className="hover:text-primary">
              Fluttercon React
            </Link>
          </li>
          <li>
            <Link href="/documentaion/fluttercon-vue" className="hover:text-primary">
              Fluttercon Vue
            </Link>
          </li>
          <li>
            <Link href="/documentaion/fluttercon-svelte" className="hover:text-primary">
              Fluttercon Svelte
            </Link>
          </li>
          <li>
            <Link href="/documentaion/fluttercon-solid" className="hover:text-primary">
              Fluttercon Solid
            </Link>
          </li>
          <li>
            <Link href="/documentaion/fluttercon-react-native" className="hover:text-primary">
              Fluttercon React Native
            </Link>
          </li>
          <li>
            <Link href="/documentaion/fluttercon-angular" className="hover:text-primary">
              Fluttercon Angular
            </Link>
          </li>
          <li>
            <Link href="/documentaion/fluttercon-preact" className="hover:text-primary">
              Fluttercon Preact
            </Link>
          </li>
          <li>
            <Link href="/documentaion/fluttercon-static" className="hover:text-primary">
              Fluttercon Static
            </Link>
          </li>
        </ul>

        <Separator />
        <h4 className="font-semibold text-foreground text-lg">Contributing</h4>
        <ul className="space-y-2 font-medium text-foreground text-sm">
          <li>
            <Link href="/documentaion/icon-design-principles" className="hover:text-primary">
              Icon Design Principles
            </Link>
          </li>
          <li>
            <Link href="/documentaion/designing-illustration" className="hover:text-primary">
              Designing In Illustration
            </Link>
          </li>
          <li>
            <Link href="/documentaion/designing-inkscape" className="hover:text-primary">
              Designing In InkSpace
            </Link>
          </li>
          <li>
            <Link href="/documentaion/designing-figma" className="hover:text-primary">
              Designing In Figma
            </Link>
          </li>
          <li>
            <Link href="/documentaion/designing-affinity-designer" className="hover:text-primary">
              Designing In Affinity Designer
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </ScrollArea>
</aside>



      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center p-10">
        <h1 className="font-bold text-4xl text-gray-400">
          {querydata ? `${querydata} is coming soon...` : "Coming soon..."}
        </h1>
      </main>
    </div>
  );
};

export default Page;
