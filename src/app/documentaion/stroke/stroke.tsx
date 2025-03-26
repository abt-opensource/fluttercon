"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  AlignJustify,
  FilePenLine,
  FolderLock,
  RollerCoaster,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LucidePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen flex-col bg-white text-black md:flex-row">
        <button
          type="button"
          className="w-full border-b bg-stone-200 p-3 text-left text-black md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <AlignJustify />
        </button>

        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } h-screen overflow-hidden border-r bg-stone-100 p-5 md:block md:w-64`}
        >
          <ScrollArea className="h-full w-full">
            <div className="h-full pr-3">
              <nav className="cursor-pointer space-y-4 pl-6">
                <h4 className="font-semibold text-gray-800 text-lg">
                  Introduction
                </h4>
                <ul className="space-y-2 font-medium text-gray-600 text-sm">
                  <li>
                    <Link href="/guide" className="hover:text-red-500">
                      What is Lucide?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/install"
                      className="space-y-2 hover:text-red-500"
                    >
                      Installation
                    </Link>
                  </li>
                  <li>
                    <Link href="/compare" className="hover:text-red-500">
                      Comparison
                    </Link>
                  </li>
                </ul>
                <Separator />
                <h4 className="font-semibold text-gray-800 text-lg">Basics</h4>
                <ul className="space-y-2 font-medium text-gray-600 text-sm">
                  <li>
                    <Link href="/color" className="hover:text-red-500">
                      Color
                    </Link>
                  </li>
                  <li>
                    <Link href="/sizing" className="hover:text-red-500">
                      Sizing
                    </Link>
                  </li>
                  <li className="hover:text-red-500">Stroke width</li>
                </ul>
                <Separator />
                <h4 className="font-semibold text-black text-lg">Advanced</h4>
                <ul className="space-y-2 font-medium text-gray-600 text-sm">
                  <li className="hover:text-red-500">Accessibility</li>
                  <li className="hover:text-red-500">Global styling</li>
                  <li className="hover:text-red-500">Filled icons</li>
                  <li className="hover:text-red-500">Aliased Names</li>
                </ul>

                <Separator />
                <h4 className="font-semibold text-black text-lg">Packages</h4>
                <ul className="space-y-2 font-medium text-gray-600 text-sm">
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
                <h4 className="font-semibold text-black text-lg">
                  Contributing
                </h4>
                <ul className="space-y-2 font-medium text-gray-600 text-sm">
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
        <ScrollArea className="h-screen w-full flex-1 p-8">
          <main className="mx-auto max-w-2xl pb-12">
            <h1 className="mb-6 font-bold text-4xl">Stroke Width</h1>
            <p className="mb-4 text-lg">
              All icons are designed with SVG elements using strokes. These have
              a default stroke width of{" "}
              <span className="rounded bg-gray-200 px-1">2px</span>
              .
              <br />
              <br />
              The <span className="rounded bg-gray-200 px-1">strokeWidth</span>{" "}
              can be adjusted to create a different look of the icons.
            </p>
            <Separator className="my-6" />
            <h2 id="adjust" className="mb-4 font-semibold text-2xl">
              Adjusting stroke width with{" "}
              <span className="rounded bg-gray-200 px-1 ">strokeWidth</span>{" "}
              prop
            </h2>
            <p className="mb-4">
              The color can be adjusted by passing the color prop to the
              element.
            </p>

            <div className="flex min-h-full bg-black text-white">
              {/* Left side: Code block */}
              <div className="w-1/2 overflow-auto bg-gray-900 p-8">
                <pre className="text-sm leading-relaxed">
                  <code className="text-pink-400">import</code> {"{ "}
                  <span className="text-orange-300">lock</span> {" } "}
                  <code className="text-pink-400">from</code>
                  <span className="text-blue-400"> "lucide-react"</span>
                  <br />
                  <br />
                  <code className="text-pink-400">function</code>
                  <span className="text-blue-400"> App()</span> {"{"}
                  <br /> <code className="text-pink-400">return</code> {"("}
                  <br /> {"<"}
                  <span className="text-green-400">div</span> className=
                  <span className="text-yellow-300">"app"</span>
                  {">"}
                  <br /> {"<"}
                  <span className="text-green-400">Lock</span>
                  color=<span className="text-yellow-300">"#3e9392"</span>{" "}
                  {"/>"}
                  <br /> {"</"}
                  <span className="text-green-400">div</span>
                  {">"}
                  <br /> {")"}
                  <br />
                  {"};"}
                  <br />
                  <br />
                  <code className="text-pink-400">export default</code>
                  <span className="text-blue-400"> App ;</span>
                </pre>
              </div>

              {/* Right side: Preview */}
              <div className="relative flex w-1/2 items-center justify-center bg-gray-800">
                <FolderLock color="white" size={48} />

                {/* Open Sandbox Button */}
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-4 bottom-4 rounded-lg bg-gray-700 px-4 py-2 text-sm text-white transition hover:bg-gray-700"
                >
                  Open Sandbox
                </a>
              </div>
            </div>
            <Separator className="my-6" />
            <h2 id="absolute" className="mb-4 font-semibold text-2xl">
              Absolute stroke width
            </h2>
            <p className="mb-4">
              When adjusting the{" "}
              <span className="rounded bg-gray-200 px-1">size</span> prop the
              size of the stroke width will be relative to the size of the icon,
              this is the default SVG behavior. The{" "}
              <span className="rounded bg-gray-200 px-1">
                absolutestrokeWidth
              </span>{" "}
              prop is introduced to adjust this behavior to make the stroke
              width constant no matter the size of the icon.
              <br />
              <br />
              This means that when{" "}
              <span className="rounded bg-gray-200 px-1">
                absolutestrokeWidth
              </span>{" "}
              is enabled and the{" "}
              <span className="rounded bg-gray-200 px-1">size</span> of the
              icons is set to{" "}
              <span className="rounded bg-gray-200 px-1">48px</span> the
              strokeWidth will still be{" "}
              <span className="rounded bg-gray-200 px-1">2px</span> on the
              screen.
              <br />
              Note <span className="rounded bg-gray-200 px-1">2px</span> is the
              default stroke width for a Lucide icon, this can be adjusted to
              all sizes.
            </p>
            <img src="/icon3.png" alt="" className="mb-4" />

            <h2 className="mb-4 font-semibold text-2xl">
              Adjusting stroke width with absoluteStrokeWidth prop
            </h2>
            <p className="mb-4">
              Setting{" "}
              <span className="rounded bg-gray-200 px-1">
                absolutestrokeWidth
              </span>{" "}
              to <span className="rounded bg-gray-200 px-1">true</span> will
              make the stroke width absolute.
            </p>

            <div className="flex min-h-full bg-black text-white">
              {/* Left side: Code block */}
              <div className="w-1/2 overflow-auto bg-gray-900 p-8">
                <pre className="text-sm leading-relaxed">
                  <code className="text-pink-400">import</code> {"{ "}
                  <span className="text-orange-300">rollerCoster</span> {" } "}
                  <code className="text-pink-400">from</code>
                  <span className="text-blue-400"> "lucide-react"</span>
                  <br />
                  <br />
                  <code className="text-pink-400">function</code>
                  <span className="text-blue-400"> App()</span> {"{"}
                  <br /> <code className="text-pink-400">return</code> {"("}
                  <br /> {"<"}
                  <span className="text-green-400">div</span> className=
                  <span className="text-yellow-300">"app"</span>
                  {">"}
                  <br /> {"<"}
                  <span className="text-green-400">rollerCoster</span>
                  color=<span className="text-yellow-300">"#3e9392"</span>{" "}
                  {"/>"}
                  <br /> {"</"}
                  <span className="text-green-400">div</span>
                  {">"}
                  <br /> {")"}
                  <br />
                  {"};"}
                  <br />
                  <br />
                  <code className="text-pink-400">export default</code>
                  <span className="text-blue-400"> App ;</span>
                </pre>
              </div>

              {/* Right side: Preview */}
              <div className="relative flex w-1/2 items-center justify-center bg-gray-800">
                <RollerCoaster color="white" size={48} />

                {/* Open Sandbox Button */}
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-4 bottom-4 rounded-lg bg-gray-700 px-4 py-2 text-sm text-white transition hover:bg-gray-700"
                >
                  Open Sandbox
                </a>
              </div>
            </div>

            <Separator className="my-6" />
            <p className="mt-8 flex cursor-pointer">
              <FilePenLine size={20} />
              Edit this page
            </p>

            <Separator className="my-6" />
            <div className="flex gap-72 ">
              <span>
                <p className="text-sm">Previous page</p>
                <p className="cursor-pointer">Sizing</p>
              </span>
              <span>
                <p className="text-sm">Next page</p>
                <p className="cursor-pointer">Accessibility</p>
              </span>
            </div>
          </main>
        </ScrollArea>

        {/* Right Side Content */}

        <aside className="mt-6 w-full border-t bg-white p-5 md:mt-0 md:h-screen md:w-64 md:border-l">
          <h4 className="font-semibold text-gray-800 text-lg">On This Page</h4>
          <ul className="mt-3 cursor-pointer space-y-2 font-medium text-gray-500 text-sm">
            <li>
              <a href="#adjust" className="hover:text-gray-600">
                Adjusting stroke with strockwidth props
              </a>
            </li>
            <li>
              <a href="#absolute" className="hover:text-gray-600">
                Absolute strokeWidth
              </a>
            </li>
          </ul>

          <Separator className="my-6" />

          <Card>
            <CardContent className="flex flex-col items-center p-5 text-center">
              <Image
                src="/icons.jpg"
                alt="Icon"
                width={500}
                height={300}
                className="flex h-16 w-16 items-center justify-center rounded-lg"
              />
              <p className="mt-3 text-gray-500 text-sm">
                Design and Development tips in your inbox. Every weekday.
              </p>
              <span className="mt-1 text-gray-500 text-xs">ADS VIA CARBON</span>
            </CardContent>
          </Card>
        </aside>
      </div>
    </>
  );
}
