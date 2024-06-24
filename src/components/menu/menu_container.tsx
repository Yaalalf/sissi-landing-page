"use client";

import "./style/mobile.css";

import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

export default function Select({
  className,
  children,
  parentElement,
  position,
  onChange,
}: {
  className?: string;
  children?: ReactNode;
  parentElement: MutableRefObject<HTMLElement | null>;
  position?: { top: number; left: number };
  onChange?: (e: { value: string; icon: string }) => void;
}) {
  const [isMenu, setIsMenu] = useState(false);

  const currentBoundingRect = useRef({ x: 0, y: 0 });

  const menuContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (parentElement.current) {
      parentElement.current.addEventListener("click", onClickMenu);
    }
  }, []);

  return (
    <>
      {isMenu &&
        createPortal(
          <div className="menu_container_background">
            <div
              className="menu_select_close_area"
              onClick={(e) => onCloseMenu(e)}
            ></div>
            <div
              ref={menuContainerRef}
              className={`menu_container ${className}`}
              style={{
                top: currentBoundingRect.current.y,
                left: currentBoundingRect.current.x,
              }}
            >
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  );

  function onClickMenu(e: MouseEvent) {
    e.stopPropagation();
    console.log("hice Click");
    if (parentElement.current) {
      if (position) {
        currentBoundingRect.current.x = position.left;
        currentBoundingRect.current.y = position.top;
      } else {
        const { x, y, height } = parentElement.current.getBoundingClientRect();

        currentBoundingRect.current.x = x + window.scrollX;
        currentBoundingRect.current.y = y + window.scrollY + height;
        console.log(x, y, height);
      }
      setIsMenu(true);
    }
  }

  function onCloseMenu(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();

    setTimeout(() => {
      setIsMenu(false);
    }, 100);
  }
}
