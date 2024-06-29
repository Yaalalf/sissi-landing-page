import TitleContainer from "@/components/TitleContainer/TitleContainer";
import "./style/mobile.css";
import "./style/mobile_media_query.css";
import "./style/desktop_media_query.css";

export default function ConsultingSection() {
  return (
    <section className="ConsultingSection">
      <div className="TitleSection">
        <TitleContainer
          title="Consultas médicas para orientación dermocosmética y nutricosmética"
          subtitle="Ayuda Facial y Nutricional"
        />
        <div className="Decoration_Icon"></div>
      </div>
      <div className="ContentContainer">
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
          <div className="Decoration"></div>

          <div className="HeaderContainer">
            <h5>Diagnóstico facial y orientación dermocosmética</h5>
          </div>

          <p>
            El cuidado de la piel es una parte fundamental del{" "}
            <span>bienestar general</span> y la apariencia personal. Un{" "}
            <span>diagnóstico facial preciso</span> y una{" "}
            <span>orientación dermocosmética</span> adecuada son esenciales para
            tener una piel sana, radiante y joven.
          </p>
        </div>
        <div className="MicroSection">
          <div className="Decoration"></div>
          <div className="HeaderContainer">
            <h5>Evaluación nutricional y orientación nutricosmética</h5>
          </div>

          <p>
            La belleza y la salud de la piel no solo dependen de los
            <span> productos que aplicamos externamente</span>, sino también de
            lo que <span>consumimos</span>. La nutrición adecuada y la
            orientación nutricosmética desempeñan un <span>papel crucial</span>{" "}
            en el mantenimiento de la piel.
          </p>
        </div>
      </div>
    </section>
  );
}
