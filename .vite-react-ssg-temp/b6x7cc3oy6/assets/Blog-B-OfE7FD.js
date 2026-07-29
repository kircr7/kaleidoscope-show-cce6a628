var _a;
import { a as articles, b as blogPosts, j as jsxDEV } from "../main.mjs";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { N as Navbar, F as Footer } from "./Footer-DvbiZHnP.js";
import { S as SEO } from "./SEO-W-VNpolK.js";
import { Calendar, ArrowRight } from "lucide-react";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "@tanstack/react-query";
import "next-themes";
import "sonner";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
(_a = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _a.call(globalThis, "src/pages/Blog.tsx");
const allPosts = [
  ...articles.map((a) => ({
    slug: a.slug,
    title: a.h1,
    excerpt: a.excerpt,
    category: a.category,
    image: a.image,
    date: a.date,
    source: "articles"
  })),
  ...blogPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    image: p.image,
    date: p.date,
    source: "blog"
  }))
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-black overflow-x-hidden", children: [
    /* @__PURE__ */ jsxDEV(
      SEO,
      {
        title: "Блог о печати чертежей и проектной документации | ПринтПРО",
        description: "Полезные статьи о печати чертежей, требованиях ГОСТ, подготовке файлов и переплёте проектной документации.",
        keywords: "печать чертежей блог, ГОСТ чертежи, подготовка файлов печать, переплёт документации"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 38,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Navbar, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Blog.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { className: "pt-24 sm:pt-32 pb-16 sm:pb-24 px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12 sm:mb-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[hsl(var(--border))] text-[hsl(45,90%,55%)] text-xs font-black uppercase tracking-widest mb-5", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-2 rounded-full bg-[hsl(45,90%,55%)] animate-pulse" }, void 0, false, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, void 0),
          "Блог"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[hsl(var(--foreground))]", children: "Полезные материалы" }, void 0, false, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-[hsl(var(--muted-foreground))] text-base sm:text-lg max-w-xl mx-auto", children: "Статьи о печати, стандартах ГОСТ и работе с проектной документацией" }, void 0, false, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6", children: allPosts.map((post) => /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: `/blog/${post.slug}`,
          className: "group relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(0,0%,6%)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(45,90%,55%)/0.3] hover:shadow-[0_8px_40px_-12px_rgba(245,158,11,0.15)]",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "aspect-[16/10] overflow-hidden", children: /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: post.image,
                alt: post.title,
                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                loading: "lazy"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/Blog.tsx",
                lineNumber: 70,
                columnNumber: 19
              },
              void 0
            ) }, void 0, false, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 69,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[hsl(45,90%,55%)/0.15] text-[hsl(45,90%,55%)] border border-[hsl(45,90%,55%)/0.2]", children: post.category }, void 0, false, {
                  fileName: "/dev-server/src/pages/Blog.tsx",
                  lineNumber: 80,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1 text-[11px] text-[hsl(var(--muted-foreground))]", children: [
                  /* @__PURE__ */ jsxDEV(Calendar, { className: "w-3 h-3" }, void 0, false, {
                    fileName: "/dev-server/src/pages/Blog.tsx",
                    lineNumber: 84,
                    columnNumber: 23
                  }, void 0),
                  new Date(post.date).toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                  })
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/Blog.tsx",
                  lineNumber: 83,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Blog.tsx",
                lineNumber: 79,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h2", { className: "text-base font-bold text-[hsl(var(--foreground))] mb-2 leading-snug group-hover:text-[hsl(45,90%,55%)] transition-colors line-clamp-2", children: post.title }, void 0, false, {
                fileName: "/dev-server/src/pages/Blog.tsx",
                lineNumber: 93,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-3 mb-4", children: post.excerpt }, void 0, false, {
                fileName: "/dev-server/src/pages/Blog.tsx",
                lineNumber: 97,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(45,90%,55%)] group-hover:gap-2.5 transition-all", children: [
                "Читать далее ",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Blog.tsx",
                  lineNumber: 102,
                  columnNumber: 34
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Blog.tsx",
                lineNumber: 101,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 78,
              columnNumber: 17
            }, void 0)
          ]
        },
        post.slug,
        true,
        {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 64,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Blog.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Blog.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Blog.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Blog.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, void 0);
};
export {
  Blog as default
};
