import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-4 mb-2 flex flex-col items-center gap-12 gap-y-4 border-t px-6 py-4 text-gray-500 text-sm md:mx-12 md:flex-row">
      {/* Left Section */}
      <div className="text-center font-semibold md:text-left">
        <p>Released under the MIT License.</p>
        <p className="mt-1">Copyright © {currentYear} ABT OPEN SOURCE</p>
      </div>

      {/* Center Section (Now Centered) */}
      <nav className="flex flex-wrap gap-4 text-lg">
        <Link href="#" className="hover:underline">
          License
        </Link>
        <Link href="#" className="hover:underline">
          Contribute
        </Link>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:underline"
        >
          Changelog <MoveUpRight className="ml-1" size={12} />
        </Link>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:underline"
        >
          GitHub <MoveUpRight className="ml-1" size={12} />
        </Link>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:underline"
        >
          Issues <MoveUpRight className="ml-1" size={12} />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
