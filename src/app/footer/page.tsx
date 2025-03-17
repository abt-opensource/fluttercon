import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-4·mb-2 flex flex-col flex-wrap items-center justify-between gap-y-4 border-t px-6 py-4 text-gray-600 text-sm md:mx-12 md:flex-row">
      {/* Left Section */}
      <div className="text-center·text-neutral-900·md:text-left">
        <p>Released under the ISC License.</p>
        <p className="mt-1">Copyright © 2025 Lucide Contributors</p>
      </div>

      {/* Center Section */}
      <nav className="flex flex-wrap justify-center gap-4 text-lg md:justify-start">
        <Link href="#" className="hover:underline">
          License
        </Link>
        <Link href="#" className="hover:underline">
          Contribute
        </Link>
        <Link
          href="#"
          target="_blank"
          rel="noopener·noreferrer"
          className="flex items-center·hover:underline"
        >
          Changelog <MoveUpRight className="ml-1" size={12} />
        </Link>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center·hover:underline"
        >
          GitHub <MoveUpRight className="ml-1" size={12} />
        </Link>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center·hover:underline"
        >
          Issues <MoveUpRight className="ml-1" size={12} />
        </Link>
      </nav>

      {/* Right Section */}
      <div className="flex flex-wrap·items-center justify-center gap-4·text-lg md:justify-end">
        <button
          type="button"
          className="flex items-center rounded bg-black·px-3 py-1 text-white"
        >
          ▲ Powered by Vercel
        </button>
        <Image
          src="/digitalocean-logo.png"
          alt="Powered by DigitalOcean"
          width={150}
          height={75}
        />
      </div>
    </footer>
  );
};

export default Footer;
