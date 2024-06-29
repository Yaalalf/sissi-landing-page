import TitleContainer from "@/components/TitleContainer/TitleContainer";
import "./style/mobile.css";
import "./style/desktop_media_query.css";

import AnimatedVisibilityObserver from "@/components/AnimatedVisibilityObserver/AnimatedVisibilityObserver";

export default function CatalogSection() {
  return (
    <section className="CatalogSection">
      <TitleContainer
        title="Catalogo de Precios y Sesiones"
        subtitle="Nuestros Servicios"
      />

      <AnimatedVisibilityObserver className="P" once delay={200}>
        <p>
          ¿Tiene preguntas sobre nuestros tratamientos estéticos? ¡Estamos aquí
          para ayudarle! Contáctenos y obtenga la información y asesoramiento
          que necesita.
        </p>
      </AnimatedVisibilityObserver>

      <div className="CatalogContainer">
        <h4>Consultas médicas:</h4>
        <ul className="CatalogList">
          {consultingData.map((el) => (
            <li key={el.description} className="ListItem">
              <p>{el.description}</p>{" "}
              <div className="Price">
                <span>{el.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="CatalogContainer">
        <h4>Tratamientos Faciales:</h4>
        <ul className="CatalogList">
          {facialData.map((el) => (
            <li key={el.description} className="ListItem">
              <p>{el.description}</p>{" "}
              {!el.multi ? (
                <div className="Price">
                  <span>{el.price}</span>
                </div>
              ) : (
                <div className="Sesion">
                  <span>{el.price}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="CatalogContainer">
        <h4>Tratamientos Corporales:</h4>
        <ul className="CatalogList">
          {corporalData.map((el) => (
            <li key={el.description} className="ListItem">
              <p>{el.description}</p>{" "}
              {!el.multi ? (
                <div className="Price">
                  <span>{el.price}</span>
                </div>
              ) : (
                <div className="Sesion">
                  <span>{el.price}</span>
                </div>
              )}
            </li>
          ))}
        </ul>

        <h5>Sesiones</h5>
        <ul className="CombinedList">
          {corporalSesionData.map((el) => (
            <li key={el.title} className="CombinedItem">
              <h6>{el.title}</h6>
              {el.p.map((subEl) => (
                <p key={subEl}>{subEl}</p>
              ))}
            </li>
          ))}
        </ul>

        <h5>Combinados</h5>
        <ul className="CombinedList">
          {combinedData.map((el) => (
            <li key={el.title} className="CombinedItem">
              <h6>{el.title}</h6>
              {el.p.map((subEl) => (
                <p key={subEl}>{subEl}</p>
              ))}
              {el.price && <p className="Price">{el.price}</p>}
            </li>
          ))}
        </ul>
      </div>

      <div className="CatalogContainer CabinaContainer">
        <h4>Cabinas</h4>
        <ul className="CombinedList">
          {cabinaData.map((el) => (
            <li key={el.title} className="CombinedItem">
              <h6>{el.title}</h6>
              {el.p.map((subEl) => (
                <p key={subEl}>{subEl}</p>
              ))}
              {el.price && (
                <p className="Price">
                  {el.price.map((pricesEl) => (
                    <span>{pricesEl}</span>
                  ))}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const consultingData = [
  {
    description:
      "Diagnóstico facial con analizador facial y orientación dermocosmética",
    price: "50 €",
  },
  {
    description: "Evaluación nutricional y Orientación nutricosmética",
    price: "35 €",
  },
];
const facialData = [
  {
    description: "Tratamiento antiarrugas con Botox",
    price: "350 €",
  },

  {
    description: "Aumento de labios",
    price: "300 €",
  },
  {
    description: "Rinomodelación",
    price: "400 €",
  },
  {
    description: "Relleno de ojeras ",
    price: "400 €",
  },
  {
    description: "Aumento de pómulos ",
    price: "300 €",
  },
  {
    description: "Surco nasogeneano",
    price: "240 €",
  },
  {
    description: "Código de barras",
    price: "240 €",
  },
  {
    description: "Proyección de mentón",
    price: "300 €",
  },
  {
    description: "Marcación mandibular",
    price: "300 €",
  },
  {
    description: "Sonrisa gingival",
    price: "350 €",
  },
  {
    description: "Bruxismo",
    price: "350 €",
  },
  {
    description: "Blanching",
    price: "350 €",
  },
  {
    description: "Rejuvenecimiento facial con Ellansé",
    price: "400 €",
  },
  {
    description: "Radiesse",
    price: "350 €",
  },
  {
    description: "Hilos PDO monofilamento",
    multi: true,
    price: "1 hil/ 10 €, 20/ 150 €",
  },
  {
    description: "Lifting con hilos tensores",
    multi: true,
    price: "1 hil/100 €, 4/ 350 €",
  },
  {
    description: "Mesoterapia con vitaminas",
    multi: true,
    price: "1 ses/ 120 €, 5/ 500 €",
  },
  {
    description: "Mesoterapia con ácido hialurónico",
    multi: true,
    price: "1 ses/ 150 €",
  },
  {
    description: "Dermapen con hialurónico y vitamina",
    multi: true,
    price: "1 ses/ 90 €, 5/ 400 €",
  },
  {
    description: "Peelings médicos",
    price: "90 €",
  },
  {
    description: "Várices",
    multi: true,
    price: "2 viales 70 € y 6 viales 150 €",
  },
];

const corporalData = [
  {
    description: "Drenaje linfático y remodelación con maderoterapia",
    price: "35 €",
  },
  {
    description: "Drenaje linfático y remodelación con maderoterapia",
    price: "35 €",
  },
  {
    description: "Mesoterapia lipolítica",
    multi: true,
    price: "1 sesión 30 €",
  },
  {
    description: "Mesoterapia reafirmante ",
    multi: true,
    price: "1 sesión 30 €",
  },
  {
    description: "Cosmética con aparatología corporal",
    multi: true,
    price: "Combinados",
  },
];

const corporalSesionData = [
  {
    title: "RADIOFRECUENCIA: 1ses/sem. (Recomendamos 6/8sem)",
    p: [
      "• Mejora el aspecto de la piel.",
      "• Ayuda a eliminar la celulitis y la flacidez.",
      "• Ayuda a eliminar el exceso de grasa localizada.",
      "• Mejora la circulación en la zona tratada.",
      "• Elimina el exceso de toxinas.",
      "• Hace que tu piel esté más tersa y luminosa.",
    ],
  },
  {
    title: "VACUMTERAPIA: 1ses/2sem. (Recomendamos 6/8sem)",
    p: [
      "• Mejora de la circulación.",
      "• Eliminación de toxinas.",
      "• Aumento de la elasticidad de la piel.",
      "• Remodelación corporal después del parto u otras intervenciones.",
      "• Reducción del dolor muscular.",
      "• Limpieza de poros y desintoxicación de la piel.",
    ],
  },
  {
    title: "CAVITACIÓN: 1ses/ 2sem. (Recomendamos según persona)",
    p: [
      "• Mejor circulación.",
      "• Expulsión de toxinas y líquidos.",
      "• Tonificación de los tejidos de la piel.",
      "• Ayuda a regular el tránsito intestinal.",
      "• Eliminación de la celulitis y la piel de naranja.",
      "• Activa la producción de colágeno.",
      "• Elimina exceso de líquidos difíciles de eliminar por otros métodos.",
    ],
  },
  {
    title: "LASER LIPOLÍTICO: 1ses/sem. (Recomendamos 6/8sem)",
    p: [
      "• Reduce el volumen de grasa en zonas difíciles.",
      "• Mejora la tensión, firmeza y textura de la piel.",
      "• Reduce las estrías.",
      "• Combate la celulitis.",
      "• Elimina toxinas.",
      "• Mejora la circulación.",
    ],
  },
];

const combinedData = [
  {
    title: "ADIPOSIDAD LOCALIZADA",
    p: ["1 CAVITACIÓN", "2 LASER LIPOLÍTICO + VACUMTERAPIA"],
    price: "70€ / 12 sesiones -30%...819€",
  },
  {
    title: "CELULITIS DURA",
    p: [
      "1 RADIOFRECUENCIA + LASER LIPOLÍTICO",
      "2 RADIOFRECUENCIA + CAVITACIÓN",
    ],
    price: "75€ / 12 sesiones -30%...877€",
  },
  {
    title: "CELULITIS BLANDA",
    p: ["1 CAVITACIÓN + VACUMTERAPIA", "2 RADIOFRECUENCIA"],
    price: "70€ / 12 sesiones -30%...819€",
  },
  {
    title: "CELULITIS EDEMATOSA (Retención de líquidos)",
    p: ["LASER LIPOLÍTICO + CAVITACIÓN"],
  },
  {
    title: "REAFIRMACIÓN",
    p: ["RADIOFRECUENCIA + LASER LIPOLÍTICO"],
    price: "50€ / 12 sesiones -30%...585€",
  },
];

const cabinaData = [
  {
    title: "CABINA SISSI",
    p: ["Limpieza profunda", "+", "Mascarilla colágeno", " +", "Hidratación"],
    price: ["Sesión: 49€", "Bono de 6: 240€", "Bono de 12: 420€"],
  },

  {
    title: "CABINA PRO ULTRASONIDO",
    p: [
      "Limpieza profunda",
      "+",
      "Ultrasonido",
      " +",
      "Mascarilla adecuada a su tipo de piel",
      "+",
      "Hidratación",
    ],
    price: ["Sesión: 55€", "Bono de 6: 270€", "Bono de 12: 480€"],
  },
  {
    title: "CABINA VIP ANTIAGING",
    p: [
      "Limpieza profunda",
      "+",
      "Radiofrecuencia",
      " +",
      "Dermapen localizado",
      "+",
      "Mascarilla adecuada a su tipo de piel",
      "+",
      "Hidratación",
    ],
    price: ["Sesión: 59€", "Bono de 6: 300€", "Bono de 12: 540€"],
  },
  {
    title: "CABINA FOTOTERAPIA",
    p: [
      "Limpieza profunda",
      "+",
      "Mascarilla adecuada a su tipo de piel",
      " +",
      "Fototerapia",
      "+",
      "Hidratación",
    ],
    price: ["Sesión: 55€", "Bono de 6: 270€", "Bono de 12: 480€"],
  },

  {
    title: "CABINA EMPERATRIZ SISSI",
    p: [
      "Limpieza profunda",
      "+",
      "Microdermoabrasión con punta de diamante",
      " +",
      "Extracción con espátula vibratoria",
      "+",
      "Atomizador con hialurónico y espátula vibratoria",
      "+",
      "Radiofrecuencia",
      "+",
      "Masacrilla adecuada a su tipo de piel",
      "+",
      "Circuito completo de fototerapia",
      "+",
      "Hidratación profunda con masaje facial",
    ],
    price: ["Sesión: 75€ ", "Bono de 6: 420€"],
  },
  {
    title: "CABINA EXTRACCIONES POR MÉDICO ESTÉTICO",
    p: [
      "Limpieza profunda y desinfección",
      "+",
      "Extracción con aparatología específica según presencia de comedones y/o quistes de Milium.",
      " +",
      "Alta frecuencia y mascarilla refrescante.",
    ],
    price: ["Sesión: 80€"],
  },
  {
    title: "CABINA PIELES SENSIBLES",
    p: [
      "Limpieza profunda",
      "+",
      "Atomizador facial con Niacinamina",
      " +",
      "Martillo frio",
      " +",
      "Mascarilla específica piel sensible",
      " +",
      "Fototerapia luz azul y amarilla",
    ],
    price: ["Sesión: 66€", "Bono de 6: 360€", "Bono de 12: 600€"],
  },
  {
    title: "CABINA DESPIGMENTANTE",
    p: [
      "Limpieza profunda",
      "+",
      "Ultrasonido y radiofrecuencia",
      " +",
      "Polisher",
      " +",
      "Vitamina C",
      " +",
      "Fototerapia luz verde",
    ],
    price: ["Sesión: 70€", "Bono de 6: 390€", "Bono de 12: 660€"],
  },
];
