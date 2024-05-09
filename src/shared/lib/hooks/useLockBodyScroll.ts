import { useEffect, useState } from "react";

export const useLockBodyScroll = (locked: boolean) => {
  useEffect(() => {
    if (!locked) {
      return;
    }
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);
};
