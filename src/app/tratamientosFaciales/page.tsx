import FacialTreatmentSection from "@/sections/FacialTreatmentSection/FacialTreatmentSection";
import HeaderSection from "@/sections/HeaderSection/HeaderSection";

export default function FacialTreatment() {
  return (
    <>
      <HeaderSection />
      <main style={{ overflow: "hidden" }}>
        <FacialTreatmentSection />
      </main>
    </>
  );
}
