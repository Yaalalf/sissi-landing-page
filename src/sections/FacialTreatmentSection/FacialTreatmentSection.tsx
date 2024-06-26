import TitleContainer from "@/components/TitleContainer/TitleContainer";

import "./style/mobile.css";
import "./style/desktop_media_query.css";

import AnimatedVisibilityObserver from "@/components/AnimatedVisibilityObserver/AnimatedVisibilityObserver";

export default function FacialTreatmentSection() {
  return (
    <section className="FacialTreatmentSection">
      <TitleContainer
        title="Tratamientos Faciales"
        subtitle="Cambia tu apariencia para siempre"
      />
      <AnimatedVisibilityObserver className="P" once delay={200}>
        <p>
          Descubre los mejores tratamientos faciales para mantener tu piel
          saludable y radiante. Desde limpiezas profundas hasta técnicas
          avanzadas de rejuvenecimiento, encuentra el tratamiento perfecto para
          tus necesidades.
        </p>
      </AnimatedVisibilityObserver>
      <ul className="TreatmentList">
        {data.map((el) => (
          <AnimatedVisibilityObserver className="TreatmentItemContainer" once>
            <li id={el.id} key={el.title} className="TreatmentItem">
              <div className="Title">
                <div
                  className="Background"
                  style={{ backgroundImage: `url("${el.imgUrl}")` }}
                ></div>
                <h3>{el.title}</h3>
              </div>
              <div className="Content">
                <div className="Description">
                  <h4>Descripción</h4>
                  <p>{el.description}</p>
                </div>

                <div className="Benefits">
                  <h4>Beneficios</h4>
                  <ul className="BenefitsList">
                    {el.benefits.map((subEl, index) => (
                      <li key={index}>{subEl}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="DecorationIcon"
                style={{ maskImage: `url("${el.iconUrl}")` }}
              ></div>
            </li>
          </AnimatedVisibilityObserver>
        ))}
      </ul>
    </section>
  );
}

const data = [
  {
    id: "botox",
    title: "Inyección de Toxina Botulínica (Botox)",
    description:
      "La inyección de toxina botulínica, comúnmente conocida como Botox, es un procedimiento no quirúrgico que implica la inyección de pequeñas dosis de toxina botulínica tipo A en los músculos faciales. Este tratamiento ayuda a reducir la apariencia de líneas de expresión y arrugas al relajar los músculos subyacentes.",
    benefits: [
      <p key={0}>
        Reducción de <span>líneas de expresión</span> y <span>arrugas</span>
      </p>,
      "Resultados rápidos y visibles en pocos días",
      "Procedimiento mínimamente invasivo con poco tiempo de recuperación",
      "Prevención de nuevas arrugas y líneas finas",
    ],
    imgUrl: "/treatment/facial/botox_treatment.png",
    iconUrl: "/icons/treatment/facial/botox_treatment_icon.webp",
  },

  {
    id: "rellenos",

    title: "Rellenos con Ácido Hialurónico",
    description:
      "Los rellenos dérmicos con ácido hialurónico son inyecciones que aportan volumen y firmeza a la piel. El ácido hialurónico es una sustancia natural que retiene agua, lo que proporciona hidratación y volumen a la piel.",
    benefits: [
      "Rellena arrugas y líneas finas.",
      "Añade volumen a áreas como labios, pómulos y mandíbula.",
      "Mejora la textura y apariencia de la piel.",
      "Resultados inmediatos y naturales.",
      "Hidrata profundamente la piel.",
    ],
    imgUrl: "/treatment/facial/relleno_treatment.jpg",
    iconUrl: "/icons/treatment/facial/relleno_treatment_icon.webp",
  },

  {
    id: "peelings",

    title: "Peelings Médicos Faciales",
    description:
      "El peeling médico facial es un tratamiento que utiliza soluciones químicas para exfoliar y eliminar las capas superficiales de la piel, promoviendo así la regeneración de nuevas células cutáneas.",
    benefits: [
      "Mejora la textura y tono de la piel.",
      "Reduce manchas, cicatrices y arrugas superficiales.",
      "Estimula la producción de colágeno.",
      "Proporciona una piel más luminosa y rejuvenecida.",
    ],
    imgUrl: "/treatment/facial/peeling_treatment.jpg",
    iconUrl: "/icons/treatment/facial/peeling_treatment_icon.webp",
  },
  {
    id: "radiofrecuencia",

    title: "Radiofrecuencia Facial",
    description:
      "La radiofrecuencia facial es un tratamiento no invasivo que utiliza ondas de radiofrecuencia para calentar las capas profundas de la piel, estimulando la producción de colágeno y elastina.",
    benefits: [
      "Mejora la firmeza y elasticidad de la piel.",
      "Reduce arrugas y flacidez.",
      "Resultados visibles sin tiempo de inactividad.",
      "Proporciona un efecto lifting natural.",
    ],
    imgUrl: "/treatment/facial/radiofrecuencia-treatment.jpg",
    iconUrl: "/icons/treatment/facial/radiofrecuencia_treatment_icon.webp",
  },
  {
    id: "microdermoabrasión",

    title: "Microdermoabrasión Facial",
    description:
      "La microdermoabrasión facial es un procedimiento de exfoliación mecánica que utiliza cristales finos o una punta de diamante para eliminar las células muertas de la piel.",
    benefits: [
      "Suaviza y rejuvenece la piel.",
      "Reduce cicatrices, manchas y líneas finas.",
      "Estimula la regeneración celular.",
      "Mejora la absorción de productos tópicos.",
    ],
    imgUrl: "/treatment/facial/microdermo-treatment.jpg",
    iconUrl: "/icons/treatment/facial/microdermo_treatment_icon.webp",
  },
  {
    id: "mesoterapia",

    title: "Mesoterapia Facial y Capilar",
    description:
      "La mesoterapia es un tratamiento que consiste en microinyecciones de vitaminas, minerales, aminoácidos y otros nutrientes directamente en la piel o el cuero cabelludo.",
    benefits: [
      "Hidrata y revitaliza la piel.",
      "Estimula la producción de colágeno y elastina.",
      "Mejora la calidad y crecimiento del cabello.",
      "Proporciona una piel más luminosa y saludable.",
    ],
    imgUrl: "/treatment/facial/mesoterapia-treatment.jpg",
    iconUrl: "/icons/treatment/facial/mesoterapia_treatment_icon.webp",
  },
  {
    id: "plasma",

    title: "Plasma Rico en Plaquetas (PRP)",
    description:
      "El tratamiento con plasma rico en plaquetas (PRP) utiliza la sangre del paciente, que se centrifuga para concentrar las plaquetas y factores de crecimiento, y se inyecta de nuevo en la piel.",
    benefits: [
      "Estimula la regeneración celular y la producción de colágeno.",
      "Mejora la textura y tono de la piel.",
      "Acelera la cicatrización y rejuvenecimiento de la piel.",
      "Resultados naturales y biocompatibles.",
    ],
    imgUrl: "/treatment/facial/plasma-tratment.jpg",
    iconUrl: "/icons/treatment/facial/plasma_treatment_icon.webp",
  },
  {
    id: "bioestimulación",

    title: "Bioestimulación Celular con Vitaminas o Estimuladores de Colágeno",
    description:
      "La bioestimulación celular consiste en la inyección de vitaminas, minerales y estimuladores de colágeno para mejorar la salud y apariencia de la piel.",
    benefits: [
      "Revitaliza y rejuvenece la piel.",
      "Estimula la producción de colágeno.",
      "Mejora la firmeza y elasticidad de la piel.",
      "Proporciona una piel más radiante y saludable.",
    ],
    imgUrl: "/treatment/facial/bioestimulacion-traetment.jpg",
    iconUrl: "/icons/treatment/facial/bioestimulacion_treatment_icon.webp",
  },
  {
    id: "lifting",

    title: "Lifting con Hilos Tensores",
    description:
      "El lifting con hilos tensores es un procedimiento mínimamente invasivo que utiliza hilos biocompatibles para levantar y tensar la piel flácida.",
    benefits: [
      "Efecto lifting inmediato sin cirugía.",
      "Estimula la producción de colágeno.",
      "Mejora la firmeza y contorno facial.",
      "Resultados duraderos con tiempo de recuperación mínimo.",
    ],
    imgUrl: "/treatment/facial/hilos-treatment.jpg",
    iconUrl: "/icons/treatment/facial/lifting_treatment_icon.webp",
  },
];
