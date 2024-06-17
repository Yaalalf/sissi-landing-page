import TitleContainer from "@/components/TitleContainer/TitleContainer";
import "./style/mobile.css";

export default function ConsultingSection() {
  return (
    <section className="ConsultingSection">
      <div className="TitleSection">
        <TitleContainer
          title="Consultas médicas para orientación dermocosmética y nutricosmética"
          subtitle="Ayuda Facial y Nutricional"
        />
      </div>
      <div className="BackgroundAnimated">
        <div className="AnimatedObject"></div>
        <div className="AnimatedObject"></div>
        <div className="AnimatedObject"></div>
        <div className="AnimatedObject"></div>
        <div className="AnimatedObject"></div>
        <div className="AnimatedObject"></div>
        <div className="AnimatedObject"></div>
      </div>

      <div className="MicroSection">
        <div className="HeaderContainer">
          <h5>Diagnóstico facial y orientación dermocosmética</h5>
        </div>

        <p>
          El cuidado de la piel es una parte fundamental del bienestar general y
          la apariencia personal. Un diagnóstico facial preciso y una
          orientación dermocosmética adecuada son esenciales para tener una piel
          sana, radiante y joven.
        </p>
        <div className="Decoration"></div>
        {/* <div className="Decoration"></div> */}

        {/* <p>
          Este proceso implica la evaluación de la piel para identificar sus
          necesidades específicas y proporcionar recomendaciones personalizadas
          sobre productos y tratamientos dermocosméticos.
        </p> */}
      </div>

      {/* <div className="MicroSection">
        <div className="Decoration"></div>
        <h5>Nutrición y orientación nutricosmética</h5>
        <p>
          La belleza y la salud de la piel no solo dependen de los productos que
          aplicamos externamente, sino también de lo que consumimos. La
          nutrición adecuada y la orientación <br />
          <span>
            nutricosmética desempeñan un papel crucial en el mantenimiento de la
            piel.
          </span>
        </p> */}
      {/* <p>
          La nutricosmética se enfoca en el uso de suplementos alimenticios que
          proporcionan nutrientes esenciales para mejorar la salud y apariencia
          de la piel desde el interior.
        </p> */}
      {/* <div className="Decoration"></div>
      </div>*/}
      <div className="Decoration_Icon"></div>
    </section>
  );
}
