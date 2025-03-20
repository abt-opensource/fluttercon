import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black px-5 py-10 text-center text-white">
      <h1 className="font-bold text-5xl text-green-500 sm:text-6xl md:text-7xl lg:text-8xl">
        Fluttercon
      </h1>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <button
          type="button"
          className="rounded-full bg-gray-800 p-3 transition hover:bg-gray-700"
        >
          <Linkedin size={20} />
        </button>
        <button
          type="button"
          className="rounded-full bg-gray-800·p-3 transition hover:bg-gray-700"
        >
          <Mail size={20} />
        </button>
        <button
          type="button"
          className="rounded-full bg-gray-800 p-3 transition hover:bg-gray-700"
        >
          <Github size={20} />
        </button>
      </div>

      <nav className="mt-6 flex flex-wrap justify-center gap-4 text-gray-400 text-sm sm:gap-6">
        <Link href="#" className="hover:text-white">
          About
        </Link>
        <Link href="#" className="hover:text-white">
          Terms & Conditions
        </Link>
        <Link href="#" className="hover:text-white">
          Privacy Policy
        </Link>
        <Link href="#" className="hover:text-white">
          Contact
        </Link>
      </nav>

      <p className="mt-6 text-gray-500 text-xs">
        ALL RIGHTS RESERVED. VGSEVEN.COM © {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
