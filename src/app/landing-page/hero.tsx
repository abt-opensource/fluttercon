"use client";

import { Button } from "@/primitives/button";
import { ArrowUpRight } from "lucide-react";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <motion.div
      className="min-h-full w-full bg-background py-10 text-2xl text-foreground"
      initial={{ opacity: 0, y: 100 }} // Initial state: invisible and shifted down
      whileInView={{ opacity: 1, y: 0 }} // Final state: visible and normal position
      transition={{ duration: 1.2, ease: "easeOut" }} // Smooth transition effect
      viewport={{ once: true }} // Trigger animation only once
    >
      <div className="mt-60 mb-10 w-full px-10">
        <div className="relative min-h-[30rem] flex-col">
          <h1 className="mb-5 text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Discover.
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
              className="text-primary italic"
            >
              Customize.
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 1.4 }}
            >
              Create.
            </motion.span>
          </h1>

          <p className="playfair-display mb-10 text-center font-geist-sans font-semibold text-foreground text-lg max-sm:text-xs md:mx-auto md:w-[50%]">
            <span className="italic">Flutercon </span>is an open-source icon
            library featuring 1500+ carefully crafted icons, specially designed
            for Flutter applications. Elevate your UI with scalable,
            high-quality icons that blend seamlessly into any project.
          </p>

          <div className="mb-10 flex w-full items-center justify-center gap-4">
            <Link href="/fluttercon">
              <Button className="bg-primary">
                Explore Icons <ArrowUpRight />
              </Button>
            </Link>
            <Link href="/documentaion">
              <Button className="ml-5 bg-secondary text-foreground hover:bg-secondary">
                Get Started <ArrowUpRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
