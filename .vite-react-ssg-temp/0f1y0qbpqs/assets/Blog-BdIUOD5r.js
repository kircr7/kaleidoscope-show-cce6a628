import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { S as SEO, N as Navbar, F as Footer } from "./SEO-DT9FDB40.js";
import { a as articles, b as blogPosts } from "../main.mjs";
import { Calendar, ArrowRight } from "lucide-react";
import "react-helmet-async";
import "vite-react-ssg";
import "@tanstack/react-query";
import "next-themes";
import "sonner";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-black overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Блог о печати чертежей и проектной документации | ПринтПРО",
        description: "Полезные статьи о печати чертежей, требованиях ГОСТ, подготовке файлов и переплёте проектной документации.",
        keywords: "печать чертежей блог, ГОСТ чертежи, подготовка файлов печать, переплёт документации"
      }
    ),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-24 sm:pt-32 pb-16 sm:pb-24 px-4", children: /* @__PURE__ */ jsxs("div", { className: "container max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 sm:mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[hsl(var(--border))] text-[hsl(45,90%,55%)] text-xs font-black uppercase tracking-widest mb-5", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-[hsl(45,90%,55%)] animate-pulse" }),
          "Блог"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[hsl(var(--foreground))]", children: "Полезные материалы" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-[hsl(var(--muted-foreground))] text-base sm:text-lg max-w-xl mx-auto", children: "Статьи о печати, стандартах ГОСТ и работе с проектной документацией" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6", children: allPosts.map((post) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/blog/${post.slug}`,
          className: "group relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(0,0%,6%)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(45,90%,55%)/0.3] hover:shadow-[0_8px_40px_-12px_rgba(245,158,11,0.15)]",
          children: [
            /* @__PURE__ */ jsx("div", { className: "aspect-[16/10] overflow-hidden", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: post.image,
                alt: post.title,
                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                loading: "lazy"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsx("span", { className: "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[hsl(45,90%,55%)/0.15] text-[hsl(45,90%,55%)] border border-[hsl(45,90%,55%)/0.2]", children: post.category }),
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[11px] text-[hsl(var(--muted-foreground))]", children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "w-3 h-3" }),
                  new Date(post.date).toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                  })
                ] })
              ] }),
              /* @__PURE__ */ jsx("h2", { className: "text-base font-bold text-[hsl(var(--foreground))] mb-2 leading-snug group-hover:text-[hsl(45,90%,55%)] transition-colors line-clamp-2", children: post.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-3 mb-4", children: post.excerpt }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(45,90%,55%)] group-hover:gap-2.5 transition-all", children: [
                "Читать далее ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ] })
            ] })
          ]
        },
        post.slug
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Blog as default
};
