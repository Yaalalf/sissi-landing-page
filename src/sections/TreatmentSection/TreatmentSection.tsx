import TitleContainer from "@/components/TitleContainer/TitleContainer";
import "./style/mobile.css";

export default function TreatmentSection() {
  return (
    <section className="TreatmentSection">
      <div className="TitleSection">
        <TitleContainer
          title="Tratamientos médicos faciales y corporales para el cuidado de su piel"
          subtitle="aumente su estetica"
        />
        <div className="Decoration_Icon"></div>
      </div>
      <div className="TreatmentContainer FacialSection">
        <div className="Content">
          <p>
            Tratamientos faciales diseñados para rejuvenecer tu piel, mejorar tu
            apariencia y aumentar tu confianza.
          </p>
          <a href="/#">Tratamientos Faciales</a>
        </div>
        <div className="Decoration"></div>
      </div>

      <div className="TreatmentContainer CorporalSection">
        <div className="Content">
          <p>
            Tratamientos faciales diseñados para rejuvenecer tu piel, mejorar tu
            apariencia y aumentar tu confianza.
          </p>
          <a href="/#">Tratamientos Faciales</a>
        </div>
        <div className="Decoration"></div>
      </div>

      {/* <div className="TreatmentContainer">
          <p>Nuestros tratamientos faciales incluyen:</p>
          <ul>
            <li className="TreatmentItem">Inyección de toxina botulínica</li>
            <li className="TreatmentItem">Rellenos con ácido hialurónico</li>
            <li className="TreatmentItem">Peelings médicos</li>
            <li className="TreatmentItem">Radiofrecuencia</li>
            <li className="TreatmentItem">Microdermoabrasión</li>
            <li className="TreatmentItem">Microdermoabrasión</li>
            <li className="TreatmentItem">Microdermoabrasión</li>
            <li className="TreatmentItem">Microdermoabrasión</li>
          </ul>
        </div> */}
    </section>
  );
}
