"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-10 mx-auto·flex h-14 max-w-2xl items-center justify-between rounded-2xl px-6 py-3 backdrop-blur-xl">
      {/* Desktop Navigation */}
      <nav className="hidden flex-wrap items-center gap-4 font-semibold text-black text-sm md:flex lg:gap-6">
        <Link href="#" className="hover:text-gray-900">
          Fluttercon
        </Link>
        <Link href="#" className="hover:text-gray-900">
          Products
        </Link>
        <Link href="#" className="hover:text-gray-900">
          Docs
        </Link>
        <Link href="#" className="hover:text-gray-900">
          Changelog
        </Link>
        <Link href="#" className="hover:text-gray-900">
          Blog
        </Link>
        <Link href="#" className="hover:text-gray-900">
          Pricing
        </Link>

        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-lg bg-gray-800 px-2 py-1 text-white"
          >
            Get Started
          </button>
          <button
            type="button"
            className="rounded-lg bg-gray-800 px-3 py-1 text-white"
          >
            GitHub
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="text-gray-900 md:hidden">
          <Menu size={24} />
        </SheetTrigger>

        <SheetContent side="left" className="bg-red-400 text-white">
          <SheetTitle className="p-4 font-bold text-xl">
            Fluttercon Menu
          </SheetTitle>
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="#" className="hover:text-gray-300">
              Products
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Docs
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Changelog
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Blog
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Pricing
            </Link>
            <button
              type="button"
              className="w-full·rounded-lg·bg-gray-800·px-3·py-2·text-white"
            >
              Get Started
            </button>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
