import TitleContainer from "@/components/TitleContainer/TitleContainer";
import Link from "next/link";

import "./style/mobile.css";
import "./style/desktop_media_query.css";

export default function TreatmentSection() {
  return (
    <section className="TreatmentSection">
      <div className="TitleSection">
        <TitleContainer
          title="Tratamientos médicos faciales y corporales para el cuidado de su piel"
          subtitle="aumente su autoestima"
        />
        <div className="Decoration_Icon"></div>
      </div>
      <div className="TreatmentContainer FacialSection">
        <div className="Content">
          <h5>Donde su bienestar es nuestra misión.</h5>
          <p>
            <span>Tratamientos faciales</span> diseñados para{" "}
            <span>rejuvenecer tu piel</span> y{" "}
            <span>mejorar tu apariencia.</span>
          </p>
          <Link href="/tratamientosFaciales">Tratamientos Faciales</Link>
        </div>
        <div className="Decoration"></div>
        <div className="LogoIcon"></div>
      </div>

      <div className="TreatmentContainer CorporalSection">
        <div className="Content">
          <h5>Transformando cuerpos, elevando confianza.</h5>
          <p>
            <span>Tratamientos corporales</span> para ayudarte a{" "}
            <span>lucir</span> y <span>sentirte mejor</span> que nunca.
          </p>
          <Link href="/tratamientosFaciales">Tratamientos Corporales</Link>
        </div>
        <div className="Decoration"></div> <div className="LogoIcon"></div>
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
