import { Button } from "@/primitives/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full bg-black py-10 text-white">
      <div className="mt-30 mb-10 w-full px-10">
        <div className="relative min-h-[30rem] flex-col">
          <h1 className="mb-5 text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Icons that speak louder than words
          </h1>
          <h1 className="mb-5 text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Discover. Customize. Create.
          </h1>
          <p className="mb-10 text-center font-semibold text-slate-300 max-sm:text-xs md:mx-auto md:w-[50%]">
            <span className="text-primary">Flutercon </span>is an open-source
            icon library featuring 1500+ carefully crafted icons, specially
            designed for Flutter applications. Elevate your UI with scalable,
            high-quality icons that blend seamlessly into any project.
          </p>
          <div className="mb-10 flex w-full items-center justify-center">
            <Link href="/fluttercon" className="">
              <Button>
                Explore Icons <MoveRight />
              </Button>
            </Link>
          </div>
          <div className="absolute bottom-0 left-10 hidden w-[30vw] md:block">
            <Image
              src={"/assets/hero/hero-bg-bl.svg"}
              alt={"svg"}
              width={"400"}
              height={"400"}
            />
          </div>

          <div className="absolute right-10 bottom-0 hidden w-[30vw] md:block">
            <Image
              src={"/assets/hero/hero-bg-br.svg"}
              alt={"svg"}
              width={"400"}
              height={"400"}
            />
          </div>

          <div className="md:hidden">
            <Image
              src={"/assets/hero/hero-bg-mobile.svg"}
              alt={"svg"}
              width={"500"}
              height={"500"}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
