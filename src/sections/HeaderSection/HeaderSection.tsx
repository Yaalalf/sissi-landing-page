"use client";

import VisibilityObserver from "@/components/VisibilityObserver/VisibilityObserver";
import "./style/mobile.css";
import "./style/desktop_media_query.css";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import HeaderContainer from "@/components/header_container";
import Menu from "@/components/menu";
import Dialog from "@/components/dialog";
import Link from "next/link";

export default function HeaderSection() {
  const [selected, setSelected] = useState("none");
  const pathName = usePathname();
  const [isHero, setIsHero] = useState(true);
  const buttonRef = useRef(null);
  const dialogRef = useRef<{ close: () => void }>(null);

  return (
    <>
      <HeaderContainer
        className="HeaderSection"
        onIsHero={(isHero) => {
          setIsHero(isHero);
        }}
        mobile={
          <>
            <Link className="Link LogoContainer" href="/">
              <div className="Logo"></div>
              {!isHero && <div className="Text"></div>}
            </Link>

            <button ref={buttonRef} className="Menu">
              <Dialog
                ref={dialogRef}
                className="NavMenu"
                parentElement={buttonRef}
              >
                <button
                  className="CloseButton"
                  onClick={(e) => {
                    if (dialogRef.current) dialogRef.current.close();
                  }}
                >
                  <span className="Icon"></span>
                </button>

                <nav>
                  <ul className="NavList">
                    <li>
                      <Link className="Link LogoContainer" href="/">
                        <div className="Logo"></div>
                        <div className="Text"></div>
                      </Link>
                    </li>
                    <li className="Item">
                      <Link
                        className="Link"
                        href="/tratamientosFaciales"
                        onClick={() => {
                          if (dialogRef.current) dialogRef.current.close();
                        }}
                      >
                        Tratamientos Faciales
                        <span
                          className={`ArrowIcon ${
                            selected == "facial" ? "open" : "closed"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            if (selected == "facial") {
                              setSelected("none");
                            } else {
                              setSelected("facial");
                            }
                          }}
                        ></span>
                      </Link>

                      {selected == "facial" && (
                        <ul className="InnerNavList">
                          {dataFacialTreatmentLink.map((el) => (
                            <li key={el.id}>
                              <Link
                                onClick={() => {
                                  if (dialogRef.current)
                                    dialogRef.current.close();
                                }}
                                className="Link"
                                href={`/tratamientosFaciales#${el.id}`}
                              >
                                {el.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                    <li className="Item">
                      <Link className="Link" href="/tratamientosFaciales">
                        Tratamientos Corporales
                        <span className="ArrowIcon"></span>
                      </Link>
                    </li>
                    <li className="ItemCite">Agendar una Cita</li>
                  </ul>
                </nav>
              </Dialog>
            </button>
          </>
        }
        desktop={
          <>
            <div className="LogoContainer">
              <Link className="Link" href="/">
                <div className="Logo"></div>
                {!isHero && <div className="Text"></div>}
              </Link>
            </div>
            <nav>
              <ul className="NavList">
                <li>
                  <Link className="Link" href="/tratamientosFaciales">
                    Tratamientos Faciales
                  </Link>
                </li>
                <li>
                  <Link className="Link" href="/tratamientosFaciales">
                    Tratamientos Corporales
                  </Link>
                </li>
                <li>
                  <a className="Link" href="">
                    Agendar Cita
                  </a>
                </li>
              </ul>
            </nav>
          </>
        }
      />
    </>
  );
}

const dataFacialTreatmentLink = [
  {
    id: "botox",
    title: "Inyección de Toxina Botulínica",
  },
  {
    id: "rellenos",
    title: "Rellenos con Ácido Hialurónico",
  },
  {
    id: "peelings",
    title: "Peelings Médicos Faciales",
  },
  {
    id: "radiofrecuencia",
    title: "Radiofrecuencia Facial",
  },
  {
    id: "microdermoabrasión",
    title: "Microdermoabrasión Facial",
  },
  {
    id: "mesoterapia",
    title: "Mesoterapia Facial y Capilar",
  },
  {
    id: "plasma",
    title: "Plasma Rico en Plaquetas",
  },
  {
    id: "bioestimulación",
    title: "Bioestimulación Celular",
  },
  {
    id: "lifting",
    title: " Lifting con Hilos Tensores",
  },
];
