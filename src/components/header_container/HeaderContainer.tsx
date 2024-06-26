"use client";

import { forwardRef, ReactNode, useEffect, useState } from "react";
import "./style/desktop.css";
import VisibilityObserver from "../VisibilityObserver/VisibilityObserver";
import { usePathname } from "next/navigation";

export default forwardRef(function HeaderSection(
  {
    className,
    desktop,
    mobile,
    onIsHero,
  }: {
    className?: string;
    desktop: ReactNode;
    mobile: ReactNode;
    onIsHero?: (isHero: boolean) => void;
  },
  ref
) {
  const pathName = usePathname();

  const [isHero, setIsHero] = useState(pathName === "/");
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile(window.screen.width < 1024);

    window.addEventListener("resize", () => {
      console.log("resize");
      setIsMobile(window.screen.width < 1024);
    });
  }, []);

  useEffect(() => {
    setIsHero(pathName === "/");
  }, [pathName]);

  return (
    <>
      <header
        className={`header_container ${className || ""} ${
          isMobile ? "mobile_platform" : "desktop_platform"
        } ${isHero ? "hero_state" : ""}`}
      >
        {isMobile ? mobile : desktop}
      </header>
      <VisibilityObserver
        className="visibility_position"
        onVisibility={(entry) => {
          if (pathName === "/") {
            setIsHero(entry.isIntersecting);
            if (onIsHero) {
              onIsHero(entry.isIntersecting);
            }
          }
        }}
      />
    </>
  );
});
