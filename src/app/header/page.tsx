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
    <header className="sticky top-4 z-10 mx-auto flex h-14 max-w-3xl items-center justify-between rounded-2xl bg-opacity-50 px-6 py-3 text-background backdrop-blur-sm">
      {/* Desktop Navigation */}
      <nav className="hidden flex-wrap items-center gap-4 font-semibold text-foreground text-sm md:flex lg:gap-6">
        <Link href="/fluttercon" className="hover:text-primary">
          Fluttercon
        </Link>
        <Link href="/fluttercon" className="hover:text-primary">
          Icon
        </Link>
        <Link href="/guide" className="hover:text-primary">
          Docs
        </Link>
        <Link href="/licensepage" className="hover:text-primary">
          License
        </Link>
        <Link href="#" className="hover:text-primary">
          Blog
        </Link>
        <Link href="#" className="hover:text-primary">
          Pricing
        </Link>

        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-lg px-2 py-1 text-foreground"
          >
            Get Started
          </button>
          <button
            type="button"
            className="rounded-lg px-3 py-1 text-foreground"
          >
            GitHub
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="text-foreground md:hidden">
          <Menu size={24} />
        </SheetTrigger>

        <SheetContent side="left" className="bg-red-400 text-foreground">
          <SheetTitle className="p-4 font-bold text-xl">
            Fluttercon Menu
          </SheetTitle>
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="#" className="hover:text-gray-300">
              Icon
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
