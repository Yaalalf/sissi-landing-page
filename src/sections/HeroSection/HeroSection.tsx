import SimpleCarrousel from "@/components/SimpleCarrousel";
import "./style/mobile.css";
import "./style/mobile_media_query.css";
import "./style/desktop_media_query.css";

export default function HeroSection() {
  return (
    <section className="HeroSection">
      <div className="Background"></div>
      <div className="TitleContainer">
        <span className="TextLogo"></span>
        <h2>
          Tratamientos de <span>estética facial</span> y{" "}
          <span>estética corporal</span> no invasivos.
        </h2>
        <a href="/#">
          Agenda una Cita
          {/* <div className="DecoratorContainer">
            <div className="Decorator"></div>
            <div className="Decorator"></div>
          </div> */}
        </a>
      </div>

      <SimpleCarrousel />
    </section>
  );
}
