"use client";

import "./style/mobile.css";
import { CSSProperties, ReactNode } from "react";

export default function AnimatedContainer({
  state,
  children,
  className,
  animationInit = "slideInSmall",
  animationPending = "scalePending",
  animationEnd = "slideOutSmall",
  delay = 0,
}: {
  state: string;
  children: ReactNode;
  className?: string;
  animationInit?: string;
  animationPending?: string;

  animationEnd?: string;
  delay?: number;
}) {
  return (
    <div
      className={`AnimatedContainer   ${className || ""}  ${
        state !== "pending" ? (state == "init" ? "init" : "end") : "pending"
      }`}
      style={
        {
          animationDelay: delay + "ms",
          "--animation-init-name": animationInit,
          "--animation-pending-name": animationPending,
          "--animation-end-name": animationEnd,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
