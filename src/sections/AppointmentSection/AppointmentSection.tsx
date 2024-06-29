import Link from "next/link";
import "./style/mobile.css";

export default function AppointmentSection() {
  return (
    <section className="AppointmentSection">
      <div className="Background"></div>

      <div className="Content">
        <div className="Decoration_Icon"></div>

        <p>
          Lista para dar el siguiente paso hacia una apariencia más radiante y
          saludable
        </p>

        <a href="/#">Agenda una cita</a>
        <Link href="catalogo"> Ver Catálogo</Link>

        <div className="Decoration"></div>
      </div>
    </section>
  );
}
