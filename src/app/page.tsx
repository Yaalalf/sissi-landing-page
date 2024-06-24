import InformationTopBanner from "@/components/InformationTopBanner/InformationTopBanner";
import AppointmentSection from "@/sections/AppointmentSection/AppointmentSection";
import ConsultingSection from "@/sections/ConsultingSection/ConsultingSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import IndividualSection from "@/sections/IndividualSection/IndividualSection";
import TreatmentSection from "@/sections/TreatmentSection/TreatmentSection";

export default function Home() {
  return (
    <main style={{ overflow: "hidden" }}>
      <InformationTopBanner />
      <HeroSection />
      <IndividualSection />
      <TreatmentSection />
      <ConsultingSection />
      <AppointmentSection />
    </main>
  );
}
