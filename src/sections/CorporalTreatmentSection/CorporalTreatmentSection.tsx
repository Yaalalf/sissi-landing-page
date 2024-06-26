import TitleContainer from "@/components/TitleContainer/TitleContainer";

import "./style/mobile.css";
import "./style/desktop_media_query.css";

import AnimatedVisibilityObserver from "@/components/AnimatedVisibilityObserver/AnimatedVisibilityObserver";

export default function CorporalTreatmentSection() {
  return (
    <section className="CorporalTreatmentSection">
      <TitleContainer
        title="Tratamientos Corporales"
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
    id: "drenaje",
    title: "Drenaje Linfático y Remodelación con Maderoterapia",
    description:
      "El drenaje linfático es una técnica de masaje suave que ayuda a estimular el sistema linfático, promoviendo la eliminación de toxinas y líquidos retenidos. La maderoterapia es una técnica de masaje que utiliza herramientas de madera especialmente diseñadas para remodelar y tonificar el cuerpo.",
    benefits: [
      <p key={0}>
        Reduce la <span>retención de líquidos</span> y mejora la
        <span> circulación.</span>
      </p>,
      "Ayuda a eliminar toxinas del cuerpo.",
      "Tonifica y reafirma la piel.",
      "Reduce la apariencia de celulitis.",
      "Relaja y mejora el bienestar general.",
    ],
    imgUrl: "/treatment/body/",
    iconUrl: "/icons/treatment/body/drenaje_treatment_icon.webp",
  },

  {
    id: "mesoterapia",

    title: "Mesoterapia Corporal",
    description:
      "La mesoterapia corporal consiste en la aplicación de microinyecciones de vitaminas, minerales, aminoácidos y otras sustancias activas en las capas medias de la piel para tratar la grasa localizada y mejorar la apariencia de la piel.",
    benefits: [
      "Reduce la grasa localizada y la celulitis.",
      "Mejora la firmeza y elasticidad de la piel.",
      "Estimula la circulación sanguínea y linfática.",
      "Promueve una apariencia más tonificada y rejuvenecida.",
    ],
    imgUrl: "/treatment/body/",
    iconUrl: "/icons/treatment/body/mesoterapia_treatment_icon.webp",
  },

  {
    id: "radiofrecuencia",

    title: "Radiofrecuencia Corporal",
    description:
      "La radiofrecuencia corporal utiliza ondas de radiofrecuencia para calentar las capas profundas de la piel, estimulando la producción de colágeno y elastina, y promoviendo la reducción de la grasa y la flacidez.",
    benefits: [
      "Reduce la flacidez y mejora la firmeza de la piel.",
      "Disminuye la apariencia de celulitis.",
      "Estimula la producción de colágeno.",
      "Resultados visibles sin tiempo de inactividad.",
      "Mejora el contorno corporal.",
    ],
    imgUrl: "/treatment/body/",
    iconUrl: "/icons/treatment/body/radio_treatment_icon.webp",
  },
  {
    id: "vacumterapia",

    title: "Vacumterapia",
    description:
      "La vacumterapia es un tratamiento que utiliza succión mecánica para estimular la circulación, mejorar el drenaje linfático y reducir la apariencia de celulitis.",
    benefits: [
      "Mejora la circulación sanguínea y linfática.",
      "Reduce la apariencia de celulitis.",
      "Estimula la eliminación de toxinas.",
      " Tonifica y reafirma la piel.",
      "Promueve una silueta más definida.",
    ],
    imgUrl: "/treatment/body/",
    iconUrl: "/icons/treatment/body/vacunterapia_treatment_icon.webp",
  },
  {
    id: "cavitación",

    title: "Cavitación",
    description:
      "La cavitación es un tratamiento no invasivo que utiliza ultrasonidos de baja frecuencia para descomponer las células de grasa, convirtiéndolas en una sustancia líquida que el cuerpo puede eliminar fácilmente.",
    benefits: [
      "Reduce la grasa localizada de manera efectiva.",
      "Mejora la apariencia de la piel y reduce la celulitis.",
      "Proporciona resultados rápidos y visibles.",
      "No requiere cirugía ni tiempo de recuperación.",
      "Moldea y esculpe el cuerpo.",
    ],
    imgUrl: "/treatment/body/",
    iconUrl: "/icons/treatment/body/cavitacion_treatment_icon.webp",
  },
  {
    id: "laser",

    title: "Láser Lipolítico",
    description:
      "El láser lipolítico es un tratamiento que utiliza energía láser para penetrar la piel y descomponer las células de grasa, facilitando su eliminación por el cuerpo.",
    benefits: [
      "Reduce la grasa localizada sin cirugía.",
      "Mejora la firmeza y apariencia de la piel.",
      "Resultados rápidos y eficaces.",
      "Mínimamente invasivo con poco tiempo de recuperación.",
      "Ayuda a definir y esculpir el contorno corporal.",
    ],
    imgUrl: "/treatment/body/",
    iconUrl: "/icons/treatment/body/laser_treatment_icon.webp",
  },
];
