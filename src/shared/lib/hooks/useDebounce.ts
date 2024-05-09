import { useCallback, useRef } from "react";

export const useDebounce = () => {
  const timeoutId = useRef<number | null>(null);

  const debounce = useCallback(
    (callback: Function, timeout: number) => {
        timeoutId.current = setTimeout(callback, timeout);
    },
    []
  );

  const cancelDebounce = useCallback(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
  }, []);

  return [debounce, cancelDebounce] as const;
};
