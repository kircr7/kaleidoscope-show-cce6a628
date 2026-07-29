var _a;
import { j as jsxDEV } from "../main.mjs";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { S as SEO } from "./SEO-W-VNpolK.js";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "@tanstack/react-query";
import "next-themes";
import "sonner";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
(_a = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _a.call(globalThis, "src/pages/NotFound.tsx");
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxDEV("div", { className: "flex min-h-screen items-center justify-center bg-muted", children: [
    /* @__PURE__ */ jsxDEV(
      SEO,
      {
        title: "Страница не найдена — 404 | ПринтПРО",
        description: "Запрошенная страница не найдена. Вернитесь на главную страницу типографии ПринтПРО."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 14,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "mb-4 text-3xl sm:text-4xl font-bold", children: "404 — Страница не найдена" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "mb-4 text-base sm:text-xl text-muted-foreground", children: "Похоже, такой страницы не существует или она была перемещена." }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("a", { href: "/", className: "text-primary underline hover:text-primary/90", children: "Вернуться на главную" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/NotFound.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/NotFound.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, void 0);
};
export {
  NotFound as default
};
