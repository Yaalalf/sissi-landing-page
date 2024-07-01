"use client";

import "./style/mobile.css";
import "./style/desktop_media_query.css";

import { useRef, useState } from "react";
import HeaderContainer from "@/components/header_container";
import AnimatedContainer from "@/components/AnimatedContainer/AnimatedContainer";

import Dialog from "@/components/dialog";
import Link from "next/link";

export default function HeaderSection() {
  const [selected, setSelected] = useState("none");
  const [isHero, setIsHero] = useState(true);
  const [isFacialMenu, setIsFacialMenu] = useState("pending");
  const [isCorporalMenu, setIsCorporalMenu] = useState("pending");

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

                <nav className={selected != "none" ? "expanded" : ""}>
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
                      <Link className="Link" href="/tratamientosCorporales">
                        Tratamientos Corporales
                        <span
                          className={`ArrowIcon ${
                            selected == "corporal" ? "open" : "closed"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            if (selected == "corporal") {
                              setSelected("none");
                            } else {
                              setSelected("corporal");
                            }
                          }}
                        ></span>
                      </Link>

                      {selected == "corporal" && (
                        <ul className="InnerNavList">
                          {dataBodyTreatmentLink.map((el) => (
                            <li key={el.id}>
                              <Link
                                onClick={() => {
                                  if (dialogRef.current)
                                    dialogRef.current.close();
                                }}
                                className="Link"
                                href={`/tratamientosCorporales#${el.id}`}
                              >
                                {el.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>

                    <li className="Item">
                      <Link
                        className="Link"
                        href="/catalogo"
                        onClick={() => {
                          if (dialogRef.current) dialogRef.current.close();
                        }}
                      >
                        Catalogo
                      </Link>
                    </li>

                    <li className="ItemCite">
                      <a
                        className="Link"
                        href="/#"
                        onClick={() => {
                          if (dialogRef.current) dialogRef.current.close();
                        }}
                      >
                        Agendar una Cita
                      </a>
                    </li>
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
                <li
                  onMouseLeave={() => {
                    setIsFacialMenu("end");
                  }}
                >
                  <Link
                    onMouseEnter={() => {
                      setIsFacialMenu("init");
                    }}
                    className="Link"
                    href="/tratamientosFaciales"
                  >
                    Tratamientos Faciales
                  </Link>

                  <AnimatedContainer
                    className="SubMenuContainer"
                    state={isFacialMenu}
                    animationInit="scaleInTop"
                    animationEnd="scaleOutTop"
                  >
                    <ul className="SubMenu">
                      {dataFacialTreatmentLink.map((el) => (
                        <li key={el.id}>
                          <Link
                            className="SubLink"
                            href={`/tratamientosFaciales#${el.id}`}
                          >
                            {el.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AnimatedContainer>
                </li>
                <li
                  onMouseLeave={() => {
                    setIsCorporalMenu("end");
                  }}
                >
                  <Link
                    onMouseEnter={() => {
                      setIsCorporalMenu("init");
                    }}
                    className="Link"
                    href="/tratamientosCorporales"
                  >
                    Tratamientos Corporales
                  </Link>

                  <AnimatedContainer
                    className="SubMenuContainer"
                    state={isCorporalMenu}
                    animationInit="scaleInTop"
                    animationEnd="scaleOutTop"
                  >
                    <ul className="SubMenu">
                      {dataBodyTreatmentLink.map((el) => (
                        <li key={el.id}>
                          <Link
                            className="SubLink"
                            href={`/tratamientosCorporales#${el.id}`}
                          >
                            {el.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AnimatedContainer>
                </li>

                <li>
                  <Link className="Link" href="/catalogo">
                    Catalogo
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
const dataBodyTreatmentLink = [
  {
    id: "drenaje",
    title: "Drenaje Linfático y Remodelación con Maderoterapia",
  },
  {
    id: "mesoterapia",
    title: "Mesoterapia Corporal",
  },
  {
    id: "radiofrecuencia",
    title: "Radiofrecuencia Corporal",
  },
  {
    id: "vacumterapia",
    title: "Vacumterapia",
  },
  {
    id: "cavitación",
    title: "Cavitación",
  },
  {
    id: "laser",
    title: "Láser Lipolítico",
  },
];
