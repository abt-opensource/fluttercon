"use client";
import { useState } from "react";
import { Icons } from "../fluttercon/icons";

export default function IconCustomizer() {
  const [color, setColor] = useState("#fff");
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [size, setSize] = useState(24);
  const [absoluteStroke, setAbsoluteStroke] = useState(false);

  return (
    <div className="mb-10 flex min-h-28 w-full flex-col items-center justify-center bg-black px-4">
      <div className="flex w-full max-w-7xl flex-col gap-6 rounded-xl bg-[#161616] p-6 shadow-lg lg:flex-row">
        {/* Sidebar */}
        <div className="w-full rounded-lg bg-[#121212] p-4 lg:w-1/4">
          <h2 className="font-semibold text-lg text-white">
            Style as you please
          </h2>
          <p className="text-gray-400 text-sm">
            Customize icons to match your UI.
          </p>

          <div className="mt-4">
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label className="text-gray-400 text-sm">Color</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="mt-1 h-10 w-full cursor-pointer rounded-md bg-gray-800"
            />
          </div>

          <div className="mt-4">
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label className="text-gray-400 text-sm">Stroke Width</label>
            <input
              type="range"
              min="1"
              max="5"
              step="0.1"
              value={strokeWidth}
              onChange={(e) =>
                setStrokeWidth(Number.parseFloat(e.target.value))
              }
              className="mt-1 w-full"
            />
          </div>

          <div className="mt-4">
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label className="text-gray-400 text-sm">Size</label>
            <input
              type="range"
              min="12"
              max="48"
              step="2"
              value={size}
              // biome-ignore lint/style/useNumberNamespace: <explanation>
              onChange={(e) => setSize(parseInt(e.target.value))}
              className="mt-1 w-full"
            />
          </div>

          <div className="mt-4 flex items-center">
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label className="text-gray-400 text-sm">
              Absolute Stroke Width
            </label>
            <input
              type="checkbox"
              checked={absoluteStroke}
              onChange={() => setAbsoluteStroke(!absoluteStroke)}
              className="ml-auto h-5 w-5"
            />
          </div>
        </div>

        <div className=" w-[60%] ml-14 items-center  justify-center sm:w-[60%] sm:flex-1 rounded-lg bg-[#121212] p-4 ">
          <div className="grid grid-cols-4 gap-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
            {Icons.map((icon) => (
              <div
                key={icon.name}
                className="flex h-8 w-8 items-center justify-center"
              >
                {icon.svg({ strokeWidth, color })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
