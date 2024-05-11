import ReactDOM from "react-dom";

import { useEffect } from "react";
import { cn } from "../lib/utils";
import { useLockBodyScroll } from "../lib/hooks";
import { MountTransition } from "../components/MountTransition";

type NodeCurtainProps = {
  open: boolean;
  onClose?: () => void;
  className?: string;
} & React.PropsWithChildren;

export function NodeCurtain({ className = "", open, children }: NodeCurtainProps) {
  // SSR приколы ;)
  return typeof window !== "undefined"
    ? ReactDOM.createPortal(
        <MountTransition mount={open} duration={300}>
          {({ entered, entering, exiting }) => {
            return (
              <>
                <div
                  className={cn(
                    "fixed shadow z-[8] top-12 right-0 h-[calc(100vh-48px)] transition-all duration-300 bg-white w-[320px]",
                    className,
                    // {
                    //   "opacity-0 translate-x-full": 
                    //     entering || exiting,
                    //   "opacity-100 translate-x-0": entered,
                    // }
                  )}
                >
                  {children}
                </div>
              </>
            );
          }}
        </MountTransition>,
        window.document.body
      )
    : null;
}
