"use client";

import { useEffect, useRef, useState } from "react";
import "./style/mobile.css";

export default function SimpleCarrousel() {
  const [selected, setSelected] = useState(0);
  const previousSelected = useRef(0);
  let previousSlider = data[previousSelected.current];
  let currentSlider = data[selected];
  let nextSlider = data[selected + 1];

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      if (selected < data.length - 1) {
        previousSelected.current = selected;
        setSelected(selected + 1);
      } else {
        previousSelected.current = selected;
        setSelected(0);
      }
    }, 5000);
    return () => {
      clearInterval(autoPlayInterval);
    };
  });

  switch (selected) {
    case 0:
      previousSlider = data[previousSelected.current];
      currentSlider = data[selected];
      nextSlider = data[selected + 1];

      break;
    case 1:
      previousSlider = data[previousSelected.current];
      currentSlider = data[selected];
      nextSlider = data[selected + 1];

      break;
    case 2:
      previousSlider = data[previousSelected.current];
      currentSlider = data[selected];
      nextSlider = data[0];
      break;
  }

  return (
    <div className="SimpleCarrousel">
      <div className="SliderContainer">
        <div className="Slider">
          <div
            className={`TransitionMarker exited ${previousSlider.className}`}
            key={selected - 1}
          >
            <div
              className="Content"
              style={{
                backgroundImage: `url(${previousSlider.backgroundUrl})`,
              }}
            ></div>
            {previousSlider.description1 && (
              <div className="Card Fisrt">
                <div className="CardContainer">
                  <div className="Circle">
                    <div
                      className="Icon"
                      style={{
                        backgroundImage: `url(${previousSlider.icon1})`,
                      }}
                    ></div>
                  </div>
                  <p> {previousSlider.description1}</p>
                </div>
              </div>
            )}
            {previousSlider.description2 && (
              <div className="Card Second">
                <div className="CardContainer">
                  <div className="Circle">
                    <div
                      className="Icon"
                      style={{
                        backgroundImage: `url(${previousSlider.icon2})`,
                      }}
                    ></div>
                  </div>
                  <p> {previousSlider.description2}</p>
                </div>
              </div>
            )}
          </div>

          <div
            className={`TransitionMarker entered ${currentSlider.className}`}
            key={selected}
          >
            <div
              className="Content"
              style={{ backgroundImage: `url(${currentSlider.backgroundUrl})` }}
            ></div>
            {currentSlider.description1 && (
              <div className="Card Fisrt">
                <div className="CardContainer">
                  <div className="Circle">
                    <div
                      className="Icon"
                      style={{ backgroundImage: `url(${currentSlider.icon1})` }}
                    ></div>
                  </div>
                  <p> {currentSlider.description1}</p>
                </div>
              </div>
            )}
            {currentSlider.description2 && (
              <div className="Card Second">
                <div className="CardContainer">
                  <div className="Circle">
                    <div
                      className="Icon"
                      style={{ backgroundImage: `url(${currentSlider.icon2})` }}
                    ></div>
                  </div>
                  <p> {currentSlider.description2}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    className: "One",
    description1: "Mejora de la Textura y Tono de la Piel",
    description2: "Reducción de la Celulitis",
    icon1: "/bote_icon.png",
    icon2: "/puntos_icon.png",
    backgroundUrl: "/relleno.webp",
  },
  {
    className: "Two",
    description1: "Apariencia Rejuvenecida",
    description2: "Reducción de Arrugas y Líneas Finas",
    icon1: "/mascara_icon.png",
    icon2: "/hilo_icon.png",
    backgroundUrl: "/rostro.webp",
  },
  {
    className: "Three",
    description1: "Apariencia Rejuvenecida",
    description2: "Reducción de Arrugas y Líneas Finas",
    icon1: "/tenedor_icon.png",
    icon2: "/hilo_icon.png",
    backgroundUrl: "/botox_lips.webp",
  },
];
