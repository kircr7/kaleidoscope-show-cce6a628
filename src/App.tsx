import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieBanner from "./components/CookieBanner";
import FloatingTelegram from "./components/FloatingTelegram";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    let lenisInstance: import("lenis").default | null = null;
    let rafId: number | null = null;
    let cleanupClick: (() => void) | null = null;

    // Dynamic import to keep Lenis out of SSR/SSG bundle entirely
    import("lenis").then(({ default: Lenis }) => {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
        if (anchor) {
          const id = anchor.getAttribute("href");
          if (id && id !== "#") {
            const el = document.querySelector(id);
            if (el) {
              e.preventDefault();
              lenisInstance?.scrollTo(el as HTMLElement, { offset: -80 });
            }
          }
        }
      };
      document.addEventListener("click", handleAnchorClick);
      cleanupClick = () => document.removeEventListener("click", handleAnchorClick);

      const raf = (time: number) => {
        lenisInstance?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      cleanupClick?.();
      lenisInstance?.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
        <CookieBanner />
        <FloatingTelegram />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
