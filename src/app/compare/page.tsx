"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { AlignJustify, FilePenLine } from "lucide-react";
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
                  <li className="hover:text-red-500">Comparison</li>
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
                  <li>
                    <Link href="/stroke" className="hover:text-red-500">
                      Stroke Width
                    </Link>
                  </li>
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
            <h1 className="font-bold text-3xl text-gray-800">Comparison</h1>

            <Separator className="my-6" />

            <h2 id="lucid" className="font-semibold text-2xl text-gray-800">
              Lucid vs Feather Icons
            </h2>
            <p className="mt-3 text-gray-700 text-lg">
              Lucide is a community-driven fork of{" "}
              <span className="text-red-400 underline">Feather Icons.</span>
              <br />
              <br />
              The decision to create Lucide arose from growing dissatisfaction
              with the moderation of the Feather Icons project. With more than
              300 open issues and over 100 open PRs, the Feather Icons project
              has been abandoned and is no longer actively maintained.
              Unfortunately, this means that numerous developers and designers
              have invested their time in contributing to Feather Icons without
              the possibility of their PRs being accepted.
              <br />
              <br />
              In an effort to expand the icon set while remaining true to the
              original minimalist design language, Lucide is driven by a
              community of developers and designers. We strive to grow together
              and maintain a faithful continuation of the project.
            </p>

            <Separator className="my-6" />

            <h2 className="font-semibold text-2xl text-gray-800">
              Why should I choose Lucide over Feather Icons?
            </h2>
            <p className="mt-3 text-gray-700 text-lg">
              Lucide has expanded its icon set by 500+ in the last few years.
              Lucide now has over 1000 icons, while Feather has around 287
              icons.
              <br />
              Well maintained code base.
              <br />
              Active community.
            </p>

            <Separator className="my-6" />

            <h2 className="font-semibold text-2xl text-gray-800">
              Should I migrate to Lucide?
            </h2>
            <p className="mt-3 text-gray-700 text-lg">
              That depends on whether you're satisfied with the icons from
              Feather Icons. If that is the case, it may not be worth the
              effort. However, if you find yourself struggling and feeling
              limited by the icons provided by Feather, you can consider
              migrating. When we forked, we didn't remove any icons, but some
              icons have been renamed.
            </p>

            <Separator className="my-6" />

            <p className="mt-8 flex cursor-pointer text-red-400">
              <FilePenLine size={20} />
              Edit this page
            </p>

            <Separator className="my-6" />
            <div className="flex gap-72 ">
              <span>
                <p className="text-sm">Previous page</p>
                <p className="cursor-pointer text-red-400">Installation</p>
              </span>
              <span>
                <p className="text-sm">Next page</p>
                <p className="cursor-pointer text-red-400">Color</p>
              </span>
            </div>
          </main>
        </ScrollArea>

        {/* Right Side Content */}

        <aside className="mt-6 w-full border-t bg-white p-5 md:mt-0 md:h-screen md:w-64 md:border-l">
          <h4 className="font-semibold text-gray-800 text-lg">On This Page</h4>
          <ul className="mt-3 cursor-pointer space-y-2 font-medium text-gray-500 text-sm">
            <li>
              <a href="#lucid" className="hover:text-gray-600">
                Lucid vs Feather Icons
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
