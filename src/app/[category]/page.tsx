
"use client";

import { useParams } from "next/navigation";
import Sbar from "../fluttercon/sbar";
import { Icons } from "../fluttercon/icons";
import { type JSX, type SVGProps, useContext, useState } from "react";
import { StrokeContext } from "../global";

interface IconType {
  name: string;
  svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element;
}

const CategoryPage = () => {
  
  const context = useContext(StrokeContext);
  if (!context) {
    throw new Error("CategoryPage must be used within a StrokeProvider");
  }

  const { strokeWidth, color, iconSize } = context;

  const categoryParam = useParams()?.category;
  const categoryName = Array.isArray(categoryParam) ? categoryParam[0] : categoryParam || "";

  const filteredIcons = Icons.filter(
    (icon) => icon.name.toLowerCase().replace(/\s+/g, "-") === categoryName.toLowerCase()
  );

  
  const [selectedIcon, setSelectedIcon] = useState<IconType | null>(null);

  function handleClick(icon: IconType) {
    setSelectedIcon(icon);
  }

  const copySvgToClipboard = () => {
    if (selectedIcon) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = selectedIcon.svg({ strokeWidth, color, width: iconSize, height: iconSize }).props.children;

      const svgString = `<svg viewBox="0 0 24 24" stroke="currentColor">${tempDiv.innerHTML}</svg>`;

      navigator.clipboard
        .writeText(svgString)
        .then(() => alert("SVG copied to clipboard!"))
        .catch((err) => console.error("Failed to copy SVG:", err));
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-black">
        <div className="w-64">
          <Sbar />
        </div>

        <div className="flex-1 p-6">
          <h1 className="mb-4 font-bold text-2xl text-white capitalize">{categoryName}</h1>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] gap-4">
          {filteredIcons.length > 0 ? (
  filteredIcons.map((icon) => (
    <button type="button"
      key={icon.name}
      className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-700 bg-gray-900 p-2 shadow-md transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
      onClick={() => handleClick(icon)}
      onKeyDown={(e) => e.key === "Enter" && handleClick(icon)}
    >
      <div className="flex h-6 w-6 items-center justify-center">
        {icon.svg({ strokeWidth, color, width: 24, height: 24 })}
      </div>
    </button>
  ))
) : (
  <p className="col-span-full text-center text-gray-500">No icons found</p>
)}

          </div>
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
                {selectedIcon.svg({ strokeWidth, color, width: 50, height: 50 })}
              </div>

              <div className="mt-4 flex items-center gap-2">
                <h2 className="font-bold text-lg">{selectedIcon.name}</h2>
                <span className="rounded-md bg-[#252525] px-2 py-1 text-gray-300 text-xs">v0.201.0</span>
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
    </>
  );
};

export default CategoryPage;
