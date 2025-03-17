"use client";
import type React from "react";
import { type JSX, useContext, useState } from "react"
import Link from "next/link";
import { StrokeContext } from "../global";
import { Search } from "lucide-react";
import { Icons } from "./icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface IconType {
  name: string;
  svg: (props: { strokeWidth: number; color: string; iconSize: number }) => JSX.Element;
}

const IconList: React.FC = () => {
  const context = useContext(StrokeContext);
  if (!context) {
    throw new Error("StrokeContext must be used within a StrokeProvider.");
  }

  const { strokeWidth, color, iconSize } = context;
  const [selectedIcon, setSelectedIcon] = useState<IconType | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIcons = Icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClick = (icon: IconType) => {
    setSelectedIcon(icon);
  };

  const copySvgToClipboard = () => {
    if (selectedIcon) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = selectedIcon.svg({ strokeWidth, color, iconSize }).props.children;

      const svgString = `<svg viewBox="0 0 24 24" stroke="currentColor">${tempDiv.innerHTML}</svg>`;

      navigator.clipboard
        .writeText(svgString)
        .then(() => alert("SVG copied to clipboard!"))
        .catch((err) => console.error("Failed to copy SVG:", err));
    }
  };

  return (
    <TooltipProvider>
   
      <header className="bg-black p-4 text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-end space-x-6">
          <div className="hidden space-x-6 font-medium text-sm md:block">
            <Link href="#" className="text-red-400">Icons</Link>
            <Link href="#" className="hover:text-gray-400">Guide</Link>
            <Link href="#" className="hover:text-gray-400">Packages</Link>
            <Link href="#" className="hover:text-gray-400">Showcase</Link>
            <Link href="#" className="hover:text-gray-400">License</Link>
          </div>
          <button type="button" className="text-gray-400 text-lg hover:text-white">⋯</button>
        </nav>

        {/* Search Input */}
        <div className="relative mt-5">
          <input
            type="text"
            placeholder="Search icons..."
            className="w-full rounded-md border border-gray-700 bg-gray-900 py-2 pr-4 pl-10 text-sm text-white focus:border-gray-500 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
        </div>
      </header>

      {/* Icon Grid */}
      <div className="relative bg-black p-6 text-white">
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-16">
        {filteredIcons.map((icon) => (
  <Tooltip key={icon.name}>
    <TooltipTrigger asChild>
      <button type="button"
        className="relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-lg border border-gray-700 bg-black text-white shadow-md transition-all hover:scale-105 hover:bg-gray-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={() => handleClick(icon)}
        onKeyDown={(e) => e.key === "Enter" && handleClick(icon)}
      >
        <div className="flex h-6 w-6 items-center justify-center">
          {icon.svg({ strokeWidth, color })}
        </div>
      </button>
    </TooltipTrigger>

    <TooltipContent side="bottom" align="center" className="rounded bg-gray-800 p-2 text-white shadow-lg">
      <span className="font-medium text-sm">{icon.name}</span>
    </TooltipContent>
  </Tooltip>
))}


        </div>
      </div>

    
      {selectedIcon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-[400px] rounded-lg bg-[#181818] p-6 text-white shadow-lg">
            <button type="button"
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
              onClick={() => setSelectedIcon(null)}
            >
              ✖
            </button>

            <div className="flex flex-col items-center">
              <div className="flex h-[100px] w-[100px] items-center justify-center rounded-md bg-[#252525] p-4">
                {selectedIcon.svg({ strokeWidth, color, iconSize })}
              </div>

              <div className="mt-4 flex items-center gap-2">
                <h2 className="font-bold text-lg">{selectedIcon.name}</h2>
                <span className="rounded-md bg-[#252525] px-2 py-1 text-gray-300 text-xs">
                  v0.201.0
                </span>
              </div>

              <div className="mt-3 flex gap-2">
                <span className="rounded-md bg-black px-3 py-1 text-white text-xs">Arrows</span>
                <span className="rounded-md bg-black px-3 py-1 text-white text-xs">Navigation</span>
                <span className="rounded-md bg-black px-3 py-1 text-white text-xs">Development</span>
              </div>

              <div className="mt-4 flex gap-2">
                <button type="button" className="rounded bg-[#E63946] px-4 py-2 font-medium text-sm hover:bg-red-600">
                  See in action
                </button>
                <button type="button"
                  className="rounded bg-gray-700 px-4 py-2 font-medium text-sm hover:bg-gray-600"
                  onClick={copySvgToClipboard}
                >
                  Copy SVG
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </TooltipProvider>
  );
};

export default IconList;
