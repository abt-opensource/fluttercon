import FeatureCard from "./landing-page/featurecards";
import HeroSection from "./landing-page/hero";
import IconCustomizer from "./landing-page/preview";
import Example from "./landing-page/example";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureCard />
      <IconCustomizer />
      <Example />
    </>
  );
}
