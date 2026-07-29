import { jsxs, jsx } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { S as SEO } from "./SEO-DxOSIxlI.js";
import "vite-react-ssg";
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen items-center justify-center bg-muted", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Страница не найдена — 404 | ПринтПРО",
        description: "Запрошенная страница не найдена. Вернитесь на главную страницу типографии ПринтПРО."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-4 text-3xl sm:text-4xl font-bold", children: "404 — Страница не найдена" }),
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-base sm:text-xl text-muted-foreground", children: "Похоже, такой страницы не существует или она была перемещена." }),
      /* @__PURE__ */ jsx("a", { href: "/", className: "text-primary underline hover:text-primary/90", children: "Вернуться на главную" })
    ] })
  ] });
};
export {
  NotFound as default
};
