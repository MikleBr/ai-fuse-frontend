import React, { useEffect, useRef, useState } from "react";

type FunctionArgs = {
  entering: boolean;
  entered: boolean;
  exiting: boolean;
  exited: boolean;
};

type CurtainProps = {
  mount: boolean;
  children: ({
    entering,
    entered,
    exiting,
    exited,
  }: FunctionArgs) => React.ReactNode;
  duration?: number;
  onMount?: () => void;
  onUnmount?: () => void;
};

export function MountTransition({
  mount,
  duration = 150,
  children,
}: CurtainProps) {
  const timeoutID = useRef<NodeJS.Timeout | null>(null);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    if (mount) {
      requestAnimationFrame(() => setTransition(false));
    } else {
      timeoutID.current = setTimeout(() => {
        setTransition(true);
      }, duration);
    }

    return () => {
      if (timeoutID.current !== null) {
        clearTimeout(timeoutID.current);
        timeoutID.current = null;
      }
    };
  }, [mount, duration]);

  return mount || !transition
    ? children({
        entering: mount && transition,
        entered: mount && !transition,
        exiting: !mount && !transition,
        exited: !mount && transition,
      })
    : null;
}
