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

  const dialogContainerRef = useRef<HTMLDivElement | null>(null);

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
          dialogContainerRef.current?.classList.remove("enter");
          dialogContainerRef.current?.classList.add("exit");

          setTimeout(() => {
            setIsMenu(false);
          }, 400);
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
                ref={dialogContainerRef}
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
    setIsMenu(true);
    setTimeout(() => {
      console.log(dialogContainerRef.current);
      dialogContainerRef.current?.classList.remove("exit");
      dialogContainerRef.current?.classList.add("enter");
    }, 100);
  }

  function onCloseMenu(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();

    dialogContainerRef.current?.classList.remove("enter");
    dialogContainerRef.current?.classList.add("exit");

    setTimeout(() => {
      setIsMenu(false);
    }, 400);
  }
});
