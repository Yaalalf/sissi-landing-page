"use client";

import "./style/mobile.css";

import {
  forwardRef,
  MutableRefObject,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

export default forwardRef(function Dialog(
  {
    className,
    children,
    parentElement,
    onChange,
  }: {
    className?: string;
    parentElement: MutableRefObject<HTMLElement | null>;
    children?: ReactNode;

    onChange?: (value: boolean) => void;
  },
  ref
) {
  const [isMenu, setIsMenu] = useState(false);

  const currentBoundingRect = useRef({ x: 0, y: 0 });

  const DialogContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (parentElement.current) {
      parentElement.current.addEventListener("click", onClickMenu);
    }
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return {
        close() {
          setTimeout(() => {
            console.log("cerrar");

            setIsMenu(false);
          }, 100);
        },
      };
    },
    []
  );

  return (
    <>
      {isMenu &&
        createPortal(
          <div className="dialog_container">
            <div className="dialog_container_background">
              <div
                className="dialog_container_close_area"
                onClick={(e) => onCloseMenu(e)}
              ></div>
              <div
                ref={DialogContainerRef}
                className={`dialog_container_content ${className || " "}`}
                style={{
                  top: currentBoundingRect.current.y,
                  left: currentBoundingRect.current.x,
                }}
              >
                {children}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );

  function onClickMenu(e: MouseEvent) {
    e.stopPropagation();
    console.log("hice Click");

    setIsMenu(true);
  }

  function onCloseMenu(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();

    setTimeout(() => {
      console.log("cerrar");

      setIsMenu(false);
    }, 100);
  }
});
