"use client";

import "./style/mobile.css";
import { useEffect, useRef } from "react";

export default function VisibilityObserver({
  onVisibility,
  className,
}: {
  onVisibility: (entry: IntersectionObserverEntry) => void;
  className?: string;
}) {
  const visibilityObserverRef = useRef(null);

  useEffect(() => {
    if (visibilityObserverRef.current) {
      const nodeRef = visibilityObserverRef.current;

      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          console.log(entries);
          onVisibility(entries[0]);
        },
        { threshold: [1] }
      );
      intersectionObserver.observe(nodeRef);

      return () => {
        if (nodeRef) {
          intersectionObserver.unobserve(nodeRef);
          intersectionObserver.disconnect();
        }
      };
    }
  }, []);

  return (
    <div
      ref={visibilityObserverRef}
      className={`VisibilityObserver ${className}`}
    ></div>
  );
}
