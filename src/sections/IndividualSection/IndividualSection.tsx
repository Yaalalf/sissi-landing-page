import TitleContainer from "@/components/TitleContainer/TitleContainer";
import "./style/mobile.css";
import AnimatedVisibilityObserver from "@/components/AnimatedVisibilityObserver/AnimatedVisibilityObserver";

export default function IndividualSection() {
  return (
    <section className="IndividualSection">
      <div className="SectionContainer">
        <TitleContainer
          title="Tratamientos individualizados según la necesidad de su piel"
          subtitle="Cuidado Personalizado"
        />

        <ul className="Process">
          <AnimatedVisibilityObserver
            className="AnimatedCard"
            once
            animationInit="slideRightInSmall"
            animationEnd="slideRightOutSmall"
          >
            <li>
              <div className="IconContainer">
                <span className="Icon"></span>
              </div>
              <span className="Text">Analisis especializado de la piel</span>
            </li>
          </AnimatedVisibilityObserver>
          <AnimatedVisibilityObserver
            className="AnimatedCard"
            once
            animationInit="slideLeftInSmall"
            animationEnd="slideLeftOutSmall"
          >
            <li>
              <div className="IconContainer">
                <span className="Icon"></span>
              </div>
              <span className="Text">Aplicacion del tratamiento </span>
            </li>
          </AnimatedVisibilityObserver>
          <AnimatedVisibilityObserver
            className="AnimatedCard"
            once
            animationInit="slideRightInSmall"
            animationEnd="slideRightOutSmall"
          >
            <li>
              <div className="IconContainer">
                <span className="Icon"></span>
              </div>
              <span className="Text">Comienza con el cuidado de tu piel</span>
            </li>
          </AnimatedVisibilityObserver>
        </ul>
        <AnimatedVisibilityObserver className="AnimatedCard" once>
          <p>
            En nuestra clínica de medicina estética, entendemos que{" "}
            <span>cada piel es única.</span> Por eso, ofrecemos{" "}
            <span>tratamientos personalizados</span> diseñados específicamente
            para abordar las{" "}
            <span> necesidades individuales de cada paciente.</span>
          </p>
        </AnimatedVisibilityObserver>
      </div>
      <div className="DecorationPositioned">
        <div className="DecorationContainer">
          <div className="Decoration"></div>
          {/* <div className="Decoration"></div> */}
        </div>
      </div>
      <div className="Decoration_Icon"></div>
    </section>
  );
}
