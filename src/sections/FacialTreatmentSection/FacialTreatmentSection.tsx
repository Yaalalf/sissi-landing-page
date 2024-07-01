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
          Descubre los mejores <span> tratamientos faciales</span> para mantener
          tu piel saludable y radiante. Desde <span> limpiezas profundas</span>{" "}
          hasta técnicas avanzadas de rejuvenecimiento, encuentra el{" "}
          <span>tratamiento perfecto</span> para tus necesidades.
        </p>
      </AnimatedVisibilityObserver>
      <ul className="TreatmentList">
        {data.map((el) => (
          <AnimatedVisibilityObserver
            key={el.title}
            className="TreatmentItemContainer"
            once
          >
            <li id={el.id} className="TreatmentItem">
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
                      <li key={el.id + " " + index}>{subEl}</li>
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
    title: "Inyección de Toxina Botulínica",
    description: (
      <>
        La inyección de <span>toxina botulínica</span>, comúnmente conocida como
        Botox, es un procedimiento no quirúrgico que implica la inyección de
        pequeñas dosis de toxina botulínica tipo A en los{" "}
        <span>músculos faciales</span>. Este tratamiento ayuda a{" "}
        <span>reducir la apariencia</span> de líneas de expresión y arrugas al
        relajar los músculos subyacentes.
      </>
    ),
    benefits: [
      <p key={0}>
        Reducción de <span>líneas de expresión</span> y <span>arrugas</span>
      </p>,
      <p key={1}>
        <span>Resultados rápidos</span> y visibles en pocos días
      </p>,
      <p key={2}>
        Procedimiento <span>mínimamente invasivo</span> con poco tiempo de
        recuperación
      </p>,
      <p key={3}>
        Prevención de <span>nuevas arrugas</span> y <span>líneas finas</span>
      </p>,
    ],
    imgUrl: "/treatment/facial/botox_treatment.webp",
    iconUrl: "/icons/treatment/facial/botox_treatment_icon.webp",
  },

  {
    id: "rellenos",

    title: "Rellenos con Ácido Hialurónico",
    description: (
      <>
        Los <span>rellenos dérmicos</span> con ácido hialurónico son inyecciones
        que aportan
        <span>volumen</span> y <span>firmeza</span> a la piel. El ácido
        hialurónico es una sustancia natural que retiene agua, lo que
        proporciona hidratación y volumen a la piel.
      </>
    ),
    benefits: [
      <p key={0}>
        Rellena <span>arrugas</span> y <span>líneas finas.</span>
      </p>,
      <p key={1}>
        Añade <span>volumen</span> a áreas como labios, pómulos y mandíbula.
      </p>,
      <p key={2}>
        Resultados <span>inmediatos</span> y <span>naturales</span>.
      </p>,
      <p key={3}>
        Hidrata <span>profundamente la piel</span>.
      </p>,
    ],
    imgUrl: "/treatment/facial/relleno_treatment.webp",
    iconUrl: "/icons/treatment/facial/relleno_treatment_icon.webp",
  },

  {
    id: "peelings",

    title: "Peelings Médicos Faciales",
    description: (
      <>
        El peeling médico facial es un tratamiento que utiliza{" "}
        <span>soluciones químicas</span> para exfoliar y{" "}
        <span>eliminar las capas superficiales</span> de la piel, promoviendo
        así la regeneración de nuevas células cutáneas.
      </>
    ),
    benefits: [
      <p key={0}>
        Mejora la <span>textura</span> y <span>tono de la piel</span>.
      </p>,
      <p key={1}>
        <span>Reduce</span> manchas, cicatrices y arrugas superficiales.
      </p>,
      <p key={2}>
        Estimula la <span>producción de colágeno</span>.
      </p>,
      <p key={3}>
        Proporciona una piel más <span>luminosa</span> y{" "}
        <span>rejuvenecida</span>.
      </p>,
    ],
    imgUrl: "/treatment/facial/peeling_treatment.webp",
    iconUrl: "/icons/treatment/facial/peeling_treatment_icon.webp",
  },
  {
    id: "radiofrecuencia",

    title: "Radiofrecuencia Facial",
    description: (
      <>
        La radiofrecuencia facial es un <span>tratamiento no invasivo</span> que
        utiliza ondas de radiofrecuencia para calentar las{" "}
        <span>capas profundas</span> de la piel, estimulando la producción de
        colágeno y elastina.
      </>
    ),
    benefits: [
      <p key={0}>
        Mejora la <span>firmeza </span> y <span>elasticidad </span> de la piel.
      </p>,
      <p key={1}>
        Reduce <span>arrugas</span> y <span>flacidez</span>.
      </p>,
      <p key={2}>
        Resultados visibles sin <span>tiempo de inactividad</span>.
      </p>,
      <p key={3}>
        Proporciona un <span>efecto lifting</span> natural.
      </p>,
    ],
    imgUrl: "/treatment/facial/radiofrecuencia-treatment.webp",
    iconUrl: "/icons/treatment/facial/radiofrecuencia_treatment_icon.webp",
  },
  {
    id: "microdermoabrasión",

    title: "Microdermoabrasión Facial",
    description: (
      <>
        La microdermoabrasión facial es un{" "}
        <span>procedimiento de exfoliación</span> mecánica que utiliza{" "}
        <span>cristales finos</span> o una punta de diamante para eliminar las
        <span>células muertas</span> de la piel.
      </>
    ),
    benefits: [
      <p key={0}>
        <span>Suaviza </span> y <span>rejuvenece la piel </span>.
      </p>,
      <p key={1}>
        <span>Reduce</span> cicatrices, manchas y líneas finas.
      </p>,
      <p key={2}>
        Estimula la <span>regeneración celular</span>.
      </p>,
      <p key={3}>
        Mejora la <span>absorción</span> de productos tópicos.
      </p>,
    ],
    imgUrl: "/treatment/facial/microdermo-treatment.webp",
    iconUrl: "/icons/treatment/facial/microdermo_treatment_icon.webp",
  },
  {
    id: "mesoterapia",

    title: "Mesoterapia Facial y Capilar",
    description: (
      <>
        La mesoterapia es un tratamiento que consiste en{" "}
        <span>microinyecciones</span> de vitaminas, minerales, aminoácidos y
        otros nutrientes <span>directamente</span> en la piel o el cuero
        cabelludo.
      </>
    ),
    benefits: [
      <p key={0}>
        <span>Hidrata </span> y <span>revitaliza la piel </span>.
      </p>,
      <p key={1}>
        <span>Estimula</span> la producción de colágeno y elastina.
      </p>,
      <p key={2}>
        Mejora la <span>calidad</span> y <span>crecimiento</span> del cabello.
      </p>,
      <p key={3}>
        Proporciona una piel más <span>luminosa</span> y <span>saludable</span>.
      </p>,
    ],
    imgUrl: "/treatment/facial/mesoterapia-treatment.webp",
    iconUrl: "/icons/treatment/facial/mesoterapia_treatment_icon.webp",
  },
  {
    id: "plasma",

    title: "Plasma Rico en Plaquetas (PRP)",
    description: (
      <>
        El tratamiento con plasma rico en plaquetas (PRP) utiliza la sangre del
        paciente, que se <span>centrifuga</span> para concentrar las plaquetas y
        factores de crecimiento, y se <span>inyecta</span> de nuevo en la piel.
      </>
    ),
    benefits: [
      <p key={0}>
        Estimula la <span>regeneración celular </span> y la{" "}
        <span>producción de colágeno</span>.
      </p>,
      <p key={1}>
        Mejora la <span>textura</span> y <span>tono</span> de la piel.
      </p>,
      <p key={2}>
        Acelera la <span>cicatrización</span> y <span>rejuvenecimiento</span> de
        la piel.
      </p>,
      <p key={3}>
        Resultados <span>naturales</span> y <span>biocompatibles</span>.
      </p>,
    ],
    imgUrl: "/treatment/facial/plasma-tratment.webp",
    iconUrl: "/icons/treatment/facial/plasma_treatment_icon.webp",
  },
  {
    id: "bioestimulación",

    title: "Bioestimulación Celular con Vitaminas o Estimuladores de Colágeno",
    description: (
      <>
        La bioestimulación celular consiste en la inyección de vitaminas,
        minerales y estimuladores de colágeno para <span>mejorar la salud</span>{" "}
        y <span>apariencia de la piel</span>.
      </>
    ),
    benefits: [
      <p key={0}>
        <span>Revitaliza</span> y <span>rejuvenece</span> la piel.
      </p>,
      <p key={1}>
        <span>Estimula</span> la producción de colágeno.
      </p>,
      <p key={2}>
        Mejora la <span>firmeza</span> y <span>elasticidad</span> de la piel.
      </p>,
      <p key={3}>
        Proporciona una piel más <span>radiante</span> y <span>saludable</span>.
      </p>,
    ],
    imgUrl: "/treatment/facial/bioestimulacion-traetment.webp",
    iconUrl: "/icons/treatment/facial/bioestimulacion_treatment_icon.webp",
  },
  {
    id: "lifting",

    title: "Lifting con Hilos Tensores",
    description: (
      <>
        El lifting con hilos tensores es un procedimiento{" "}
        <span>mínimamente invasivo</span>
        que utiliza <span>hilos biocompatibles</span> para levantar y tensar la
        piel flácida.
      </>
    ),
    benefits: [
      <p key={0}>
        <span>Efecto lifting</span> inmediato sin cirugía.
      </p>,
      <p key={1}>
        <span>Estimula</span> la producción de colágeno.
      </p>,
      <p key={2}>
        Mejora la <span>firmeza</span> y <span>contorno facial</span>.
      </p>,
      <p key={3}>
        <span>Resultados duraderos</span> con tiempo de recuperación mínimo.
      </p>,
    ],
    imgUrl: "/treatment/facial/hilos-treatment.webp",
    iconUrl: "/icons/treatment/facial/lifting_treatment_icon.webp",
  },
];
