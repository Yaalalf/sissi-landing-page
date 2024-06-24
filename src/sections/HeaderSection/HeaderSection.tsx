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
  const [selected, setSelected] = useState(0);

  const [isHero, setIsHero] = useState(true);
  const buttonRef = useRef(null);
  const dialogRef = useRef(null);

  return (
    <>
      <HeaderContainer
        className="HeaderSection"
        onIsHero={(isHero) => {
          setIsHero(isHero);
        }}
        mobile={
          <>
            <div className="LogoContainer">
              <div className="Logo"></div>
              {!isHero && <div className="Text"></div>}
            </div>

            <button ref={buttonRef} className="Menu">
              <Dialog
                ref={dialogRef}
                className="NavMenu"
                parentElement={buttonRef}
              >
                <button
                  className="CloseButton"
                  onClick={(e) => {
                    console.log("Tratando de cerrar");
                    dialogRef.current.close();
                  }}
                >
                  <span className="Icon"></span>
                </button>

                <nav>
                  <ul className="NavList">
                    <li className="LogoContainer">
                      <div className="Logo"></div>
                      <div className="Text"></div>
                    </li>
                    <li className="Item">Tratamientos Faciales</li>
                    <li className="Item">Tratamientos Corporales</li>
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
