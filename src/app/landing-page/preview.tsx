"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Icons } from "../fluttercon/icons";

export default function IconCustomizer() {
  const [color, setColor] = useState("#ffffff");
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [size, setSize] = useState(24);
  const [absoluteStroke, setAbsoluteStroke] = useState(false);

  return (
    <div className="mt-60 flex min-h-full w-full flex-col items-center justify-center bg-background px-4 py-10 text-white">
      <div className="flex w-full max-w-7xl flex-col gap-6 rounded-xl bg-[#161616] p-6 shadow-lg lg:flex-row">
        {/* Sidebar */}{" "}
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <motion.div
          className="flex h-8 w-8 items-center justify-center"
          initial={{ opacity: 0, y: 50 }} // Initial state: invisible and shifted down
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          viewport={{ once: true }} // Trigger animation once when in view
        ></motion.div>
        <div className="w-full rounded-lg bg-[#121212] p-4 lg:w-1/4">
          <h2 className="font-semibold text-foreground text-lg">
            Style as you please
          </h2>
          <p className="text-gray-400 text-sm">
            Customize icons to match your UI.
          </p>

          <div className="mt-4">
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label className="text-gray-400 text-primary text-sm">Color</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="mt-1 h-10 w-full cursor-pointer rounded-md "
            />
          </div>

          <div className="mt-4">
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label className="text-primary text-sm">Stroke Width</label>
            <input
              type="range"
              min="1"
              max="5"
              step="0.1"
              value={strokeWidth}
              onChange={(e) =>
                setStrokeWidth(Number.parseFloat(e.target.value))
              }
              className="mt-1 w-full accent-primary"
            />
          </div>

          <div className="mt-4">
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label className="text-primary text-sm">Size</label>
            <input
              type="range"
              min="12"
              max="48"
              step="2"
              value={size}
              onChange={(e) => setSize(Number.parseInt(e.target.value))}
              className="mt-1 w-full accent-primary"
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
              className="ml-auto h-5 w-5 accent-primary"
            />
          </div>
        </div>
        {/* Icons Section */}
        <div className="ml-14 w-[60%] items-center justify-center rounded-lg bg-[#121212] p-4 sm:w-[60%] sm:flex-1">
          <div className="grid grid-cols-4 gap-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
            {Icons.map((icon) => (
              <motion.div
                key={icon.name}
                className="flex h-8 w-8 items-center justify-center"
                initial={{ opacity: 0, y: 50 }} // Initial state: invisible and shifted down
                whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position
                transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
                viewport={{ once: true }} // Trigger animation once when in view
              >
                {icon.svg({ strokeWidth, color })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
