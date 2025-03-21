"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { AlignJustify, FilePenLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Commands {
  [key: string]: string;
}

export default function LucidePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const options = ["pnpm", "yarn", "npm", "bun"];
  const [selected, setSelected] = useState<string>("pnpm");

  const commands: Commands = {
    pnpm: "pnpm install lucide",
    yarn: "yarn add lucide",
    npm: "npm install lucide",
    bun: "bun add lucide",
  };

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
                  <li className="hover:text-red-500">Installation</li>
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
          <h1 className="mb-6 font-bold text-3xl">Installation</h1>
          <Separator className="my-6" />

          {/* Web Section */}
          <section className="mb-10">
            <h2 id="web" className="mb-3 font-semibold text-2xl">
              Web
            </h2>
            <p className="mb-4">
              Implementation of the Lucide icon library for web applications.
            </p>
            <div className="flex space-x-4 rounded-md bg-gray-100 p-2">
              {options.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setSelected(option)}
                  className={`rounded px-4 py-1 font-medium text-sm ${
                    selected === option
                      ? "text-blue-600 underline"
                      : "cursor-pointer text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-gray-100 p-3 text-gray-800">
              <code className="text-sm">{commands[selected]}</code>
            </div>
            <p className="mt-3">
              For more details, see the{" "}
              <span className="text-red-400 underline">documentation</span>.
            </p>
          </section>
          <Separator className="my-6" />

          {/* React Section */}
          <section>
            <h2 id="react" className="mb-3 font-semibold text-2xl">
              React
            </h2>
            <p className="mb-4">
              Implementation of the Lucide icon library for React applications.
            </p>
            <div className="flex space-x-4 rounded-md bg-gray-100 p-2">
              {options.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setSelected(option)}
                  className={`rounded px-4 py-1 font-medium text-sm ${
                    selected === option
                      ? "text-blue-600 underline"
                      : "cursor-pointer text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-gray-100 p-3 text-gray-800">
              <code className="text-sm">{commands[selected]}</code>
            </div>
            <p className="mt-3">
              For more details, see the{" "}
              <span className="text-red-400 underline">documentation</span>. For
              React Native use the lucide-react-native package.
            </p>
          </section>
          <Separator className="my-6" />

          {/* Vue Section */}
          <section>
            <h2 id="vue" className="mt-14 mb-3 font-semibold text-2xl">
              Vue
            </h2>
            <p className="mb-4">
              Implementation of the Lucide icon library for Vue applications.
            </p>
            <div className="flex space-x-4 rounded-md bg-gray-100 p-2">
              {options.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setSelected(option)}
                  className={`rounded px-4 py-1 font-medium text-sm ${
                    selected === option
                      ? "text-blue-600 underline"
                      : "cursor-pointer text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-gray-100 p-3 text-gray-800">
              <code className="text-sm">{commands[selected]}</code>
            </div>
            <p className="mt-3">
              For more details, see the{" "}
              <span className="text-red-400 underline">documentation</span>. For
              Vue 2 use the lucide-vue package.
            </p>
          </section>
          <Separator className="my-6" />

          {/* Svelte Section */}
          <section>
            <h2 id="svelte" className="mt-14 mb-3 font-semibold text-2xl">
              Svelte
            </h2>
            <p className="mb-4">
              Implementation of the Lucide icon library for Svelte applications.
            </p>
            <div className="flex space-x-4 rounded-md bg-gray-100 p-2">
              {options.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setSelected(option)}
                  className={`rounded px-4 py-1 font-medium text-sm ${
                    selected === option
                      ? "text-blue-600 underline"
                      : "cursor-pointer text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-gray-100 p-3 text-gray-800">
              <code className="text-sm">{commands[selected]}</code>
            </div>
            <p className="mt-3">
              For more details, see the{" "}
              <span className="text-red-400 underline">documentation</span>.
            </p>
          </section>
          <Separator className="my-6" />

          {/* {solid section} */}
          <section>
            <h2 id="solid" className="mt-14 mb-3 font-semibold text-2xl">
              Solid
            </h2>
            <p className="mb-4">
              Implementation of the Lucide icon library for Solid applications.
            </p>
            <div className="flex space-x-4 rounded-md bg-gray-100 p-2">
              {options.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setSelected(option)}
                  className={`rounded px-4 py-1 font-medium text-sm ${
                    selected === option
                      ? "text-blue-600 underline"
                      : "cursor-pointer text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-gray-100 p-3 text-gray-800">
              <code className="text-sm">{commands[selected]}</code>
            </div>
            <p className="mt-3">
              For more details, see the{" "}
              <span className="text-red-400 underline">documentation</span>.
            </p>
          </section>
          <Separator className="my-6" />

          {/* {angular section} */}
          <section>
            <h2 id="angular" className="mt-14 mb-3 font-semibold text-2xl">
              Angular
            </h2>
            <p className="mb-4">
              Implementation of the Lucide icon library for Angular
              applications.
            </p>
            <div className="flex space-x-4 rounded-md bg-gray-100 p-2">
              {options.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setSelected(option)}
                  className={`rounded px-4 py-1 font-medium text-sm ${
                    selected === option
                      ? "text-blue-600 underline"
                      : "cursor-pointer text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-gray-100 p-3 text-gray-800">
              <code className="text-sm">{commands[selected]}</code>
            </div>
            <p className="mt-3">
              For more details, see the{" "}
              <span className="text-red-400 underline">documentation</span>.
            </p>
          </section>
          <Separator className="my-6" />

          {/* Preact Section */}
          <section>
            <h2 id="preact" className="mt-14 mb-3 font-semibold text-2xl">
              Preact
            </h2>
            <p className="mb-4">
              Implementation of the Lucide icon library for Preact applications.
            </p>
            <div className="flex space-x-4 rounded-md bg-gray-100 p-2">
              {options.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setSelected(option)}
                  className={`rounded px-4 py-1 font-medium text-sm ${
                    selected === option
                      ? "text-blue-600 underline"
                      : "cursor-pointer text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-gray-100 p-3 text-gray-800">
              <code className="text-sm">{commands[selected]}</code>
            </div>
            <p className="mt-3">
              For more details, see the{" "}
              <span className="text-red-400 underline">documentation</span>.
            </p>
          </section>
          <Separator className="my-6" />

          {/* Static Usage Section */}
          <section>
            <h2 id="static-usage" className="mt-14 mb-3 font-semibold text-2xl">
              Static usage
            </h2>
            <p className="mb-4">
              Implementation of the lucide icon library for multiple usages like
              SVG files, SVG Sprite, Icon Fonts, and static SVG strings export
              in CommonJS modules (for NodeJS).
            </p>
            <div className="flex space-x-4 rounded-md bg-gray-100 p-2">
              {options.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setSelected(option)}
                  className={`rounded px-4 py-1 font-medium text-sm ${
                    selected === option
                      ? "text-blue-600 underline"
                      : "cursor-pointer text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-gray-100 p-3 text-gray-800">
              <code className="text-sm">{commands[selected]}</code>
            </div>
            <p className="mt-3">
              For more details, see the{" "}
              <span className="text-red-400 underline">documentation</span>.
            </p>
          </section>
          <Separator className="my-6" />

          {/* Figma Usage Section */}
          <section>
            <h2 id="figma" className="mt-14 mb-3 font-semibold text-2xl">
              Figma
            </h2>
            <p className="mb-4">
              The Lucide Figma plugin. <br />
              <br />
              Visit{" "}
              <span className="text-red-400 underline">
                Figma community page
              </span>{" "}
              to install the plugin.
            </p>
            <Image
              src="/img.png"
              alt="Icon"
              width={500}
              height={500}
              className="flex h-full w-full items-center justify-center rounded-lg"
            />
          </section>
          <Separator className="my-6" />

          {/* Flutter Section */}
          <section>
            <h2 id="flutter" className="mt-14 mb-3 font-semibold text-2xl">
              Flutter
            </h2>
            <p className="mb-4">
              Implementation of the Lucide icon library for Flutter
              applications.
            </p>
            <div className="flex space-x-4 rounded-md bg-gray-100 p-2">
              {options.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setSelected(option)}
                  className={`rounded px-4 py-1 font-medium text-sm ${
                    selected === option
                      ? "text-blue-600 underline"
                      : "cursor-pointer text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-gray-100 p-3 text-gray-800">
              <code className="text-sm">{commands[selected]}</code>
            </div>
            <p className="mt-3">
              For more details, see the{" "}
              <span className="text-red-400 underline">pub.dev</span>.
            </p>
          </section>
          <Separator className="my-6" />

          <p className="mt-8 flex cursor-pointer text-red-400">
            <FilePenLine size={20} />
            Edit this page
          </p>

          <Separator className="my-6" />
          <div className="flex gap-72 ">
            <span>
              <p className="text-sm">Previous page</p>
              <p className="cursor-pointer text-red-400">What is Lucid?</p>
            </span>
            <span>
              <p className="text-sm">Next page</p>
              <p className="cursor-pointer text-red-400">Comparison</p>
            </span>
          </div>
        </ScrollArea>

        {/* Right Side Content */}
        <aside className="mt-6 w-full border-t bg-white p-5 md:mt-0 md:h-screen md:w-64 md:border-l">
          <h4 className="font-semibold text-gray-800 text-lg">On This Page</h4>
          <ul className="mt-3 cursor-pointer space-y-2 font-medium text-gray-500 text-sm">
            <li>
              <a href="#web" className="hover:text-gray-700">
                Web
              </a>
            </li>
            <li>
              <a href="#react" className="hover:text-gray-700">
                React
              </a>
            </li>
            <li>
              <a href="#vue" className="hover:text-gray-700">
                Vue
              </a>
            </li>
            <li>
              <a href="#svelte" className="hover:text-gray-700">
                Svelte
              </a>
            </li>
            <li>
              <a href="#solid" className="hover:text-gray-700">
                Solid
              </a>
            </li>
            <li>
              <a href="#angular" className="hover:text-gray-700">
                Angular
              </a>
            </li>
            <li>
              <a href="#preact" className="hover:text-gray-700">
                Preact
              </a>
            </li>
            <li>
              <a href="#static-usage" className="hover:text-gray-700">
                Static usage
              </a>
            </li>
            <li>
              <a href="#figma" className="hover:text-gray-700">
                Figma
              </a>
            </li>
            <li>
              <a href="#flutter" className="hover:text-gray-700">
                Flutter
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
