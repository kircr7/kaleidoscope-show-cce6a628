import { useEffect, useState } from "react";

/**
 * Returns false during SSR and the first client render, true after hydration.
 * Use it to gate any browser-only value (window size, Date, random) so the
 * server HTML and the first client render stay identical.
 */
export const useHydrated = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
};
