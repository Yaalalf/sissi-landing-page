import InformationTopBanner from "@/components/InformationTopBanner/InformationTopBanner";
import HeaderSection from "@/sections/HeaderSection/HeaderSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import IndividualSection from "@/sections/IndividualSection/IndividualSection";

export default function Home() {
  return (
    <main style={{ height: 4000, overflow: "hidden" }}>
      <InformationTopBanner />
      <HeaderSection />
      <HeroSection />
      <IndividualSection />
    </main>
  );
}
