import "./style/mobile.css";

export default function IndividualSection() {
  return (
    <section className="IndividualSection">
      <div className="SectionContainer">
        <div className="TitleContainer">
          <h3>Tratamientos individualizados según la necesidad de su piel</h3>
          <h4>Cuidado Personalizado</h4>
        </div>
        <ul className="Process">
          <li>
            <div className="IconContainer">
              <span className="Icon"></span>
            </div>
            <span className="Text">Analisis especializado de la piel</span>
          </li>
          <li>
            <div className="IconContainer">
              <span className="Icon"></span>
            </div>
            <span className="Text">Aplicacion del tratamiento </span>
          </li>
          <li>
            <div className="IconContainer">
              <span className="Icon"></span>
            </div>
            <span className="Text">Empieza a ser como nunca antes</span>
          </li>
        </ul>

        <p>
          En nuestra clínica de medicina estética, entendemos que{" "}
          <span>cada piel es única.</span> Por eso, ofrecemos{" "}
          <span>tratamientos personalizados</span> diseñados específicamente
          para abordar las{" "}
          <span> necesidades individuales de cada paciente.</span>
        </p>
      </div>
      <div className="DecorationPositioned">
        <div className="DecorationContainer">
          <div className="Decoration"></div>
          <div className="Decoration"></div>
        </div>
      </div>
      <div className="Decoration_Icon"></div>
    </section>
  );
}
