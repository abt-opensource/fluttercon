import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/primitives/button";
import Image from "next/image";
import Link from "next/link";
import { packageInfoObj, thirdPackageInfoObj } from "./card-info-obj";

const PackagePage = () => {
  return (
    <div className="mt-20 w-full bg-background text-foreground">
      <h1 className="mb-10 text-center font-bold text-4xl">Packages</h1>
      <div className="mx-auto grid w-[95%] grid-cols-1 gap-4 md:grid-cols-2 xl:w-[85%] xl:grid-cols-3 2xl:grid-cols-4">
        {packageInfoObj.map((item) => (
          <Card key={item.id} className="bg-accent">
            <CardHeader>
              <div className="flex flex-col gap-8 sm:flex-row">
                <div className="h-23 min-h-23 w-23 min-w-23 rounded-md bg-background p-4">
                  <div>
                    <Image
                      src={item.img}
                      alt={"abcd"}
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-xl sm:text-center">
                      {item.cardHead}
                    </p>
                    <Link href={"https://lucide.dev/packages"}>
                      <Image
                        src={"/assets/package-manager/lucide.svg"}
                        alt={"abcd"}
                        width={100}
                        height={100}
                      />
                    </Link>
                    <Link href={"https://lucide.dev/packages"}>
                      <Image
                        src={"/assets/downloads/lucide.svg"}
                        alt={"hgv"}
                        width={100}
                        height={100}
                        className=" w-35"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-medium text-base text-foreground">
                {item.dscr}
              </CardDescription>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex gap-4">
                <Button className="rounded-full bg-[#fd6464] px-5 text-white hover:bg-[#FF7070]">
                  <Link href={item.guideLink}>Guide</Link>
                </Button>
                <Button className="rounded-full bg-[#2e323b] px-5 text-white hover:bg-[#414853]">
                  <Link href={item.sourceLink}>Source</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <h1 className="mt-25 mb-10 text-center font-bold text-4xl">
        Third Party Packages
      </h1>
      <div className="mx-auto grid w-[95%] grid-cols-1 gap-4 md:grid-cols-2 xl:w-[85%] xl:grid-cols-3">
        {thirdPackageInfoObj.map((item) => (
          <Card key={item.id} className="bg-accent">
            <CardHeader>
              <div className="flex flex-col gap-8 sm:flex-row">
                <div className="h-23 min-h-23 w-23 min-w-23 rounded-md bg-background p-4">
                  <div>
                    <Image
                      src={item.img}
                      alt={"abcd"}
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-xl sm:text-center">
                      {item.cardHead}
                    </p>
                    <Link href={"https://lucide.dev/packages"}>
                      <Image
                        src={"/assets/package-manager/lucide.svg"}
                        alt={"abcd"}
                        width={100}
                        height={100}
                      />
                    </Link>
                    <Link href={"https://lucide.dev/packages"}>
                      <Image
                        src={"/assets/downloads/lucide.svg"}
                        alt={"hgv"}
                        width={100}
                        height={100}
                        className=" w-35"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-medium text-base text-foreground">
                {item.dscr}
              </CardDescription>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex gap-4">
                <Button className="rounded-full bg-[#fd6464] px-5 text-white hover:bg-[#FF7070]">
                  <Link href={item.guideLink}>Guide</Link>
                </Button>
                <Button className="rounded-full bg-[#2e323b] px-5 text-white hover:bg-[#414853]">
                  <Link href={item.sourceLink}>Source</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PackagePage;
