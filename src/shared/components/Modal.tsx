import ReactDOM from "react-dom";
import { MountTransition } from "./MountTransition";

import { useLockBodyScroll } from "../lib/hooks/useLockBodyScroll";

import { Card } from "./Card";
import { useEffect } from "react";
import { cn } from "../lib/utils";

type ModalProps = {
  open: boolean;
  onClose?: () => void;
  className?: string;
} & React.PropsWithChildren;

export function Modal({ className = "", open, onClose, children }: ModalProps) {
  useLockBodyScroll(open);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose?.();
      }
    };
    window.addEventListener("keydown", handler);

    return () => {
      return window.removeEventListener("keydown", handler);
    };
  }, []);

  // SSR приколы ;)
  return typeof window !== "undefined"
    ? ReactDOM.createPortal(
        <MountTransition mount={open} duration={300}>
          {({ entered, entering, exiting }) => {
            return (
              <>
                <div
                  onClick={onClose}
                  className={cn(
                    "fixed top-0 left-0 w-full duration-300 h-full z-40 transition-all bg-black/25",
                    {
                      "opacity-0": entering || exiting,
                      "opacity-100": entered,
                    }
                  )}
                />
                <Card
                  className={cn(
                    "fixed z-[50] top-1/2 left-1/2 transition-all duration-300 -translate-x-1/2 -translate-y-1/2 bg-white max-h-[calc(100vh-100px)] w-full max-w-[640px]",
                    className,
                    {
                      "-translate-y-[calc(50%-40px)] opacity-0":
                        entering || exiting,
                      "-translate-y-1/2 opacity-100": entered,
                    }
                  )}
                >
                  {children}
                </Card>
              </>
            );
          }}
        </MountTransition>,
        window.document.body
      )
    : null;
}
