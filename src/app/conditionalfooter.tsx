"use client";
import { usePathname } from "next/navigation";
import Footer from "./footer/page";

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
