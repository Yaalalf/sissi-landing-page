"use client";

import { useEffect, useRef, useState } from "react";
import "./style/mobile.css";
import "./style/mobile_media_query.css";
import "./style/desktop_media_query.css";

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
    description1: "Tratamientos de Botox",
    description2: "Hilos Tensores Faciales",
    icon1: "/bote_icon.png",
    icon2: "/puntos_icon.png",
    backgroundUrl: "/relleno.webp",
  },
  {
    className: "Two",
    description1: "Tratamientos Dermocosméticos",
    description2: "Rellena líneas finas y arrugas",
    icon1: "/mascara_icon.png",
    icon2: "/hilo_icon.png",
    backgroundUrl: "/rostro.webp",
  },
  {
    className: "Three",
    description2: "Rellenos en los Labios",
    description1: "Define el contorno de los labios",
    icon2: "/tenedor_icon.png",
    icon1: "/hilo_icon.png",
    backgroundUrl: "/botox_lips.webp",
  },
];
