import InformationTopBanner from "@/components/InformationTopBanner/InformationTopBanner";
import HeaderSection from "@/sections/HeaderSection/HeaderSection";
import HeroSection from "@/sections/HeroSection/HeroSection";

export default function Home() {
  return (
    <main style={{ height: 4000 }}>
      <InformationTopBanner />
      <HeaderSection />
      <HeroSection />
    </main>
  );
}
