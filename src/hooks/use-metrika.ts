import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    ym?: (counterId: number, action: string, ...args: unknown[]) => void;
  }
}

const COUNTER_ID = 108189954;

/**
 * Tracks SPA route changes in Yandex.Metrika.
 * Fires a 'hit' on every pathname change.
 */
export const useMetrika = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.ym === "function") {
      window.ym(COUNTER_ID, "hit", window.location.href);
    }
  }, [location.pathname]);
};
