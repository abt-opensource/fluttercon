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
              <h4 className="font-semibold text-foreground text-lg">
                Introduction
              </h4>
              <ul className="space-y-2 font-medium text-foreground text-sm">
                <li>
                  <Link
                    href="/documentaion/guide"
                    className="hover:text-primary"
                  >
                    What is Lucide?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentaion/install"
                    className="hover:text-primary"
                  >
                    Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentaion/compare"
                    className="hover:text-primary"
                  >
                    Comparison
                  </Link>
                </li>
              </ul>

              <Separator />
              <h4 className="font-semibold text-foreground text-lg">Basics</h4>
              <ul className="space-y-2 font-medium text-foreground text-sm">
                <li className="hover:text-primary">Color</li>
                <li>
                  <Link
                    href="/documentaion/sizing"
                    className="hover:text-primary"
                  >
                    Sizing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentaion/stroke"
                    className="hover:text-primary"
                  >
                    Stroke Width
                  </Link>
                </li>
              </ul>

              <Separator />
              <h4 className="font-semibold text-black text-lg">Advanced</h4>
              <ul className="space-y-2 font-medium text-foreground text-sm">
                <li className="hover:text-red-500">Accessibility</li>
                <li className="hover:text-red-500">Global styling</li>
                <li className="hover:text-red-500">Filled icons</li>
                <li className="hover:text-red-500">Aliased Names</li>
              </ul>

              <Separator />
              <h4 className="font-semibold text-black text-lg">Packages</h4>
              <ul className="space-y-2 font-medium text-foreground text-sm">
                <li className="hover:text-red-500">Lucide</li>
                <li className="hover:text-red-500">Lucide React</li>
                <li className="hover:text-red-500">Lucide Vue</li>
                <li className="hover:text-red-500">Lucide Svelte</li>
                <li className="hover:text-red-500">Lucide Solid</li>
                <li className="hover:text-red-500">Lucide React Native</li>
                <li className="hover:text-red-500">Lucide Angular</li>
                <li className="hover:text-red-500">Lucide Preact</li>
                <li className="hover:text-red-500">Lucide Static</li>
              </ul>

              <Separator />
              <h4 className="font-semibold text-black text-lg">Contributing</h4>
              <ul className="space-y-2 font-medium text-foreground text-sm">
                <li className="hover:text-red-500">Icon Design Principles</li>
                <li className="hover:text-red-500">
                  Designing In Illustration
                </li>
                <li className="hover:text-red-500">Designing In InkSpace</li>
                <li className="hover:text-red-500">Designing In Figma</li>
                <li className="hover:text-red-500">
                  Designing In Affinity Designer
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
