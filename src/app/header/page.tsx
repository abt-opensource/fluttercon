"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full border-b bg-white p-4">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <Image
            src="/flutterconlogo.png"
            alt="flutterconlogo"
            width={30}
            height={30}
          />
          <span className="font-semibold text-2xl text-black">FLUTTERCON</span>
        </div>

        <nav className="hidden items-center space-x-6 font-medium text-neutral-700 text-sm md:flex">
          <button type="button" className="hover:underline">
            Icons
          </button>
          <button type="button" className="hover:underline">
            Guide
          </button>
          <button type="button" className="hover:underline">
            Packages
          </button>
          <button type="button" className="hover:underline">
            Showcase
          </button>
          <button type="button" className="hover:underline">
            License
          </button>
        </nav>

        {/* Responsive Design */}
        <Sheet>
          <SheetTrigger asChild>
            <button type="button" className="md:hidden">
              <Menu size={28} className="text-black" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-white p-6">
            <SheetTitle>Navigation Menu</SheetTitle>
            <nav className="space-y-4 font-medium text-neutral-700 text-sm">
              <button
                type="button"
                className="block w-full text-left hover:underline"
              >
                Icons
              </button>
              <button
                type="button"
                className="block w-full text-left hover:underline"
              >
                Guide
              </button>
              <button
                type="button"
                className="block w-full text-left hover:underline"
              >
                Packages
              </button>
              <button
                type="button"
                className="block w-full text-left hover:underline"
              >
                Showcase
              </button>
              <button
                type="button"
                className="block w-full text-left hover:underline"
              >
                License
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
