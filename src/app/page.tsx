import InformationTopBanner from "@/components/InformationTopBanner/InformationTopBanner";
import ConsultingSection from "@/sections/ConsultingSection/ConsultingSection";
import HeaderSection from "@/sections/HeaderSection/HeaderSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import IndividualSection from "@/sections/IndividualSection/IndividualSection";
import TreatmentSection from "@/sections/TreatmentSection/TreatmentSection";

export default function Home() {
  return (
    <main style={{ overflow: "hidden" }}>
      <InformationTopBanner />
      <HeaderSection />
      <HeroSection />
      <IndividualSection />
      <TreatmentSection />
      <ConsultingSection />
    </main>
  );
}
