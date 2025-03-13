import { Card } from "@/components/ui/card";
import Image from "next/image";

const ShowCaseCards = () => {
  return (
    <div className="mt-20 w-full bg-primary text-primary-foreground">
      <h1 className="mb-10 text-center font-bold text-3xl">Used by</h1>
      <div className="mx-auto grid w-[95%] grid-cols-1 gap-4 md:grid-cols-2 xl:w-[85%] xl:grid-cols-3 2xl:grid-cols-4">
        <Card className="bg-accent py-12 hover:border-red-500">
          <div>
            <Image
              src={"/assets/showcase/vercel-dark.svg"}
              alt={"abcd"}
              width={200}
              height={200}
              className="mx-auto object-cover"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ShowCaseCards;
