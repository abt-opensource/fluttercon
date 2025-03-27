"use client";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";

const Conditionalfooter = () => {
  const pathname = usePathname();
  if (
    !pathname.startsWith("/fluttercon") &&
    !pathname.startsWith("/documentaion")
  ) {
    return <Footer />;
  }
  return null;
};

export default Conditionalfooter;
