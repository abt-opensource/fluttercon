import { ThemeToggle } from "@/components/theme-toggle";
import Example from "./landing-page/example";
import FeatureCard from "./landing-page/featurecards";
import HeroSection from "./landing-page/hero";
import IconCustomizer from "./landing-page/preview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureCard />
      <IconCustomizer />
      <Example />
      <ThemeToggle />
    </>
  );
}
