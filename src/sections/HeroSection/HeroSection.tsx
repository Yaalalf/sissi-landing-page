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
          Tratamientos de <span>alta gama</span> realza tu{" "}
          <span>belleza natural</span> y sientete espectacular.
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
