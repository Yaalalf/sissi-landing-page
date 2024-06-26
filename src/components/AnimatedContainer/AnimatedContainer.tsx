"use client";

import "./style/mobile.css";
import { CSSProperties, ReactNode } from "react";

export default function AnimatedContainer({
  visible,
  children,
  className,
  animationInit = "slideInSmall",
  animationEnd = "slideOutSmall",
  delay = 0,
}: {
  visible: boolean;
  children: ReactNode;
  className?: string;
  animationInit?: string;
  animationEnd?: string;
  delay?: number;
}) {
  return (
    <div
      className={`AnimatedContainer ${className || ""}  ${
        visible ? "init" : "end"
      }`}
      style={
        {
          animationDelay: delay + "ms",
          "--animation-init-name": animationInit,
          "--animation-end-name": animationEnd,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
