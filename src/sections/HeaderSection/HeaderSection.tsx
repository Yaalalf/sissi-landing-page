"use client";

import VisibilityObserver from "@/components/VisibilityObserver/VisibilityObserver";
import "./style/mobile.css";
import { useState } from "react";

export default function HeaderSection() {
  const [isHero, setIsHero] = useState(true);

  return (
    <>
      <header className={`HeaderSection ${isHero ? "" : "IsNotHero"}`}>
        <div className="LogoContainer">
          <div className="Logo"></div>
          {!isHero && <div className="Text"></div>}
        </div>

        <button className="Menu"></button>
      </header>

      <VisibilityObserver
        onVisibility={(entry) => {
          setIsHero(entry.isIntersecting);
        }}
      />
    </>
  );
}
