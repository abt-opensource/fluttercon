import Image from "next/image";

const Example = () => {
  return (
    <div className="mx-auto mb-20 w-[95%] xl:w-[75%]">
      <div className="mb-10 flex w-full flex-col">
        <h1 className="mb-5 w-full font-extrabold text-2xl md:w-[50%] md:text-4xl">
          Making beautiful designs with Flutercon is easy
        </h1>
        <p className="w-full text-slate-300 text-xs sm:text-sm md:w-[50%]">
          Whether you're working with SaaS platforms, websites, or any modern
          interfaces, Flutercon brings a magical touch to your designs. Discover
          a selection below...
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 *:border *:border-gray-200 sm:grid-cols-6 md:gap-10">
        <Image
          src={"/assets/example/grid1.avif"}
          alt={"example"}
          width={400}
          height={400}
          className="w-full rounded-xl sm:col-span-2 sm:row-span-1"
        />
        <Image
          src={"/assets/example/grid2.avif"}
          alt={"example"}
          width={400}
          height={400}
          className="w-full rounded-xl sm:col-span-4 sm:row-span-2"
        />
        <Image
          src={"/assets/example/grid3.avif"}
          alt={"example"}
          width={400}
          height={400}
          className="w-full rounded-xl sm:col-span-2 sm:row-span-1"
        />
        <Image
          src={"/assets/example/grid4.avif"}
          alt={"example"}
          width={400}
          height={400}
          className="w-full rounded-xl sm:col-span-3 sm:row-span-2"
        />
        <Image
          src={"/assets/example/grid5.avif"}
          alt={"example"}
          width={400}
          height={400}
          className="w-full rounded-xl sm:col-span-3 sm:row-span-2"
        />
        <Image
          src={"/assets/example/grid6.avif"}
          alt={"example"}
          width={400}
          height={400}
          className="w-full rounded-xl sm:col-span-2 sm:row-span-1"
        />
        <Image
          src={"/assets/example/grid7.avif"}
          alt={"example"}
          width={400}
          height={400}
          className="w-full rounded-xl sm:col-span-4 sm:row-span-2"
        />
        <Image
          src={"/assets/example/grid8.avif"}
          alt={"example"}
          width={400}
          height={400}
          className="w-full rounded-xl sm:col-span-2 sm:row-span-1"
        />
      </div>
    </div>
  );
};

export default Example;
