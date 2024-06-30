"use client";

import { useEffect, useState } from "react";
import AnimatedContainer from "../AnimatedContainer/AnimatedContainer";
import "./style/mobile.css";
import "./style/desktop_media_query.css";

export default function CookiesMenu() {
  const [state, setState] = useState("pending");

  useEffect(() => {
    setTimeout(() => {
      if (!localStorage.getItem("cookies")) setState("init");
    }, 1000);
  }, []);

  return (
    <AnimatedContainer className="CookiesMenu" state={state}>
      <div className="CookiesMenuContainer">
        <p>
          Utilizamos cookies para mejorar su experiencia del sitio web al darle
          aceptar esta aprobando el uso de las mismas. Gracias por visitarnos!
        </p>

        <div className="Decoration"></div>

        <button
          onClick={() => {
            localStorage.setItem("cookies", "true");
            setState("end");
          }}
        >
          Aceptar
        </button>
      </div>
    </AnimatedContainer>
  );
}
