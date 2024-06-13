import SimpleCarrousel from "@/components/SimpleCarrousel";
import "./style/mobile.css";

export default function HeroSection() {
  return (
    <section className="HeroSection">
      <div className="Background"></div>
      <div className="TitleContainer">
        <span className="TextLogo"></span>
        {/* <h1>Cuidado de Lujo para Tu Piel</h1> */}
        <h2>
          Tratamientos de <span>estética facial</span> y{" "}
          <span>estética corporal</span> no invasivos.
        </h2>
        <a href="/#">
          Agenda una Cita <div className="Decorator"></div>
          <div className="Decorator"></div>
        </a>
      </div>

      <SimpleCarrousel />

      {/* <div className="DecorationContainer">
        <div className="Decoration"></div>
      </div> */}
    </section>
  );
}
