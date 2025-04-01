"use client";

import { motion } from "framer-motion";
import {
  CircleDashed,
  Expand,
  Package,
  Paintbrush,
  Trees,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <Expand className="h-6 w-6 text-primary" />,
    title: "Lightweight & Scalable",
    description:
      "Icons are lightweight, highly optimized scalable vector graphics (SVG).",
  },
  {
    icon: <CircleDashed className="h-6 w-6 text-primary" />,
    title: "Clean & consistent",
    description:
      "Designed with a strict set of design rules for consistency in style and readability.",
  },
  {
    icon: <Paintbrush className="h-6 w-6 text-primary" />,
    title: "Customizable",
    description: "Customize the color, size, stroke width, and more.",
  },
  {
    icon: <Package className="h-6 w-6 text-primary" />,
    title: "Packages support",
    description:
      "Fluttercon is available as a package for all major package managers.",
  },
  {
    icon: <Trees className="h-6 w-6 text-primary" />,
    title: "Tree shakable",
    description:
      "The icons are tree shakable, so you only import the icons you use.",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Active community",
    description: "Fluttercon has an active community on GitHub and Discord.",
  },
];

const FeatureCard = () => {
  return (
    <div className="mt-30 flex min-h-full items-center justify-center bg-background p-6">
      <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            className="flex flex-col gap-4 rounded-lg border border-[#222] bg-p-6 text-white shadow-md"
            initial={{ opacity: 0, y: 50 }} // Initial state: invisible and shifted down
            whileInView={{ opacity: 1, y: 0 }} // Final state: visible and normal position
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition effect
            viewport={{ once: true }} // Trigger animation only once
          >
            <div className="flex items-center">{feature.icon}</div>
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="font-geist-sans text-gray-400 text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
