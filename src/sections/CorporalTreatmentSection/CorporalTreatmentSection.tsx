import TitleContainer from "@/components/TitleContainer/TitleContainer";

import "./style/mobile.css";
import "./style/desktop_media_query.css";

import AnimatedVisibilityObserver from "@/components/AnimatedVisibilityObserver/AnimatedVisibilityObserver";

export default function CorporalTreatmentSection() {
  return (
    <section className="CorporalTreatmentSection">
      <TitleContainer
        title="Tratamientos Corporales"
        subtitle="Ten una silueta perfecta"
      />
      <AnimatedVisibilityObserver className="P" once delay={200}>
        <p>
          Explora los <span>tratamientos corporales</span> más efectivos para
          cuidar y embellecer tu cuerpo. Desde <span>masajes relajantes</span> y
          <span> exfoliaciones revitalizantes</span> hasta terapias de reducción
          de celulitis y técnicas de tonificación, encuentra el{" "}
          <span>tratamiento ideal</span> para tus objetivos.
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
    description: (
      <>
        El drenaje linfático es una <span>técnica de masaje suave</span> que
        ayuda a estimular el sistema linfático, promoviendo la eliminación de
        toxinas y líquidos retenidos. La <span>maderoterapia</span> es una
        técnica de masaje que utiliza herramientas de madera especialmente
        diseñadas para remodelar y tonificar el cuerpo.
      </>
    ),
    benefits: [
      <p key={0}>
        Reduce la <span>retención de líquidos</span> y mejora la
        <span> circulación.</span>
      </p>,
      <p key={1}>
        Ayuda a eliminar <span>toxinas del cuerpo</span>.
      </p>,
      <p key={2}>
        <span>Tonifica</span> y <span>reafirma</span> la piel.
      </p>,
      <p key={3}>
        <span>Reduce la apariencia</span> de celulitis.
      </p>,
      <p key={4}>
        <span>Relaja</span> y <span>mejora</span> el bienestar general.
      </p>,
    ],
    imgUrl: "/treatment/body/drenaje-treatment.webp",
    iconUrl: "/icons/treatment/body/drenaje_treatment_icon.webp",
  },

  {
    id: "mesoterapia",

    title: "Mesoterapia Corporal",
    description: (
      <>
        La mesoterapia corporal consiste en la aplicación de{" "}
        <span>microinyecciones</span> de vitaminas, minerales, aminoácidos y
        otras sustancias activas en las
        <span>capas medias de la piel</span> para tratar la grasa localizada y
        mejorar la apariencia de la piel.
      </>
    ),
    benefits: [
      <p key={0}>
        Reduce la <span>grasa localizada</span> y <span>la celulitis</span>.
      </p>,
      <p key={1}>
        Mejora la <span>firmeza</span> y <span>elasticidad</span> de la piel.
      </p>,
      <p key={2}>
        Estimula la <span>circulación sanguínea</span> y <span>linfática</span>.
      </p>,
      <p key={3}>
        Promueve una apariencia más <span>tonificada</span> y{" "}
        <span>rejuvenecida</span>.
      </p>,
    ],
    imgUrl: "/treatment/body/mesoterapia-treatment.webp",
    iconUrl: "/icons/treatment/body/mesoterapia_treatment_icon.webp",
  },

  {
    id: "radiofrecuencia",

    title: "Radiofrecuencia Corporal",
    description: (
      <>
        La radiofrecuencia corporal utiliza{" "}
        <span>ondas de radiofrecuencia</span> para{" "}
        <span>calentar las capas profundas de la piel</span>, estimulando la
        producción de colágeno y elastina, y promoviendo la reducción de la
        grasa y la flacidez.
      </>
    ),
    benefits: [
      <p key={0}>
        Reduce la <span>flacidez</span> y mejora la <span>firmeza</span> de la
        piel.
      </p>,
      <p key={1}>
        <span>Disminuye</span> la apariencia de celulitis.
      </p>,
      <p key={2}>
        <span>Estimula</span> la producción de colágeno.
      </p>,
      <p key={3}>
        <span>Resultados visibles</span> sin tiempo de inactividad.
      </p>,
      <p key={4}>
        <span>Mejora</span> el contorno corporal.
      </p>,
    ],
    imgUrl: "/treatment/body/radiofrecuencia-treatment.webp",
    iconUrl: "/icons/treatment/body/radio_treatment_icon.webp",
  },
  {
    id: "vacumterapia",

    title: "Vacumterapia",
    description: (
      <>
        La vacumterapia es un tratamiento que utiliza{" "}
        <span>succión mecánica</span> para estimular la circulación, mejorar el
        drenaje linfático y reducir la apariencia de celulitis.
      </>
    ),
    benefits: [
      <p key={0}>
        Mejora la <span>circulación sanguínea</span> y <span>linfática</span>.
      </p>,
      <p key={1}>
        <span>Reduce</span> la apariencia de celulitis.
      </p>,
      <p key={2}>
        <span>Estimula</span> la eliminación de toxinas.
      </p>,
      <p key={3}>
        <span>Tonifica</span> y <span>reafirma</span> la piel.
      </p>,
      <p key={4}>
        <span>Promueve</span> una silueta más definida.
      </p>,
    ],
    imgUrl: "/treatment/body/vacumterapia-treatment.webp",
    iconUrl: "/icons/treatment/body/vacunterapia_treatment_icon.webp",
  },
  {
    id: "cavitación",

    title: "Cavitación",
    description: (
      <>
        La cavitación es un <span>tratamiento no invasivo</span> que utiliza
        <span>ultrasonidos de baja frecuencia</span> para descomponer las
        células de grasa, convirtiéndolas en una sustancia líquida que el cuerpo
        puede eliminar fácilmente.
      </>
    ),
    benefits: [
      <p key={0}>
        Reduce la <span>grasa localizada</span> de manera efectiva.
      </p>,
      <p key={1}>
        <span>Mejora</span> la apariencia de la piel y <span>reduce</span> la
        celulitis.
      </p>,
      <p key={2}>
        Proporciona <span>resultados rápidos</span> y <span>visibles</span>.
      </p>,
      <p key={3}>
        <span>No requiere cirugía</span> ni tiempo de recuperación.
      </p>,
      <p key={4}>
        <span>Moldea</span> y <span>esculpe</span> el cuerpo.
      </p>,
    ],
    imgUrl: "/treatment/body/cavitacion-treatment.webp",
    iconUrl: "/icons/treatment/body/cavitacion_treatment_icon.webp",
  },
  {
    id: "laser",

    title: "Láser Lipolítico",
    description: (
      <>
        El láser lipolítico es un tratamiento que{" "}
        <span>utiliza energía láser</span> para penetrar la piel y descomponer
        las células de grasa, facilitando su eliminación por el cuerpo.
      </>
    ),
    benefits: [
      <p key={0}>
        Reduce la <span>grasa localizada</span> sin cirugía.
      </p>,
      <p key={1}>
        Mejora la <span>firmeza</span> y <span>apariencia</span> de la piel.
      </p>,
      <p key={2}>
        Resultados <span>rápidos</span> y <span>eficaces</span>.
      </p>,
      <p key={3}>
        <span>Mínimamente invasivo</span> con poco tiempo de recuperación.
      </p>,
      <p key={4}>
        Ayuda a <span>definir</span> y <span>esculpir</span> el contorno
        corporal.
      </p>,
    ],
    imgUrl: "/treatment/body/laser-treatment.webp",
    iconUrl: "/icons/treatment/body/laser_treatment_icon.webp",
  },
];
