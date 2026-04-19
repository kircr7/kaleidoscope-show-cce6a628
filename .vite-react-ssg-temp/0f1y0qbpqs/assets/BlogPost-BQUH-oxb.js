import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { S as SEO, N as Navbar, F as Footer } from "./SEO-DT9FDB40.js";
import { a as articles, b as blogPosts } from "../main.mjs";
import { ArrowLeft, Calendar, Printer } from "lucide-react";
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
const BlogPost = () => {
  const { slug } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  const article = articles.find((a) => a.slug === slug);
  const legacyPost = !article ? blogPosts.find((p) => p.slug === slug) : null;
  if (!article && !legacyPost) return /* @__PURE__ */ jsx(Navigate, { to: "/blog", replace: true });
  const renderLegacyContent = (content) => {
    return content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return /* @__PURE__ */ jsx("br", {}, i);
      if (trimmed.startsWith("### ")) {
        return /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-bold text-[hsl(var(--foreground))] mt-8 mb-3", children: trimmed.slice(4) }, i);
      }
      if (trimmed.startsWith("## ")) {
        return /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-bold text-[hsl(var(--foreground))] mt-10 mb-4", children: trimmed.slice(3) }, i);
      }
      if (trimmed.startsWith("- ")) {
        const text = trimmed.slice(2);
        return /* @__PURE__ */ jsx(
          "li",
          {
            className: "text-[hsl(var(--muted-foreground))] text-base leading-relaxed ml-4 list-disc",
            dangerouslySetInnerHTML: { __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[hsl(var(--foreground))] font-semibold">$1</strong>') }
          },
          i
        );
      }
      if (/^\d+\.\s/.test(trimmed)) {
        const text = trimmed.replace(/^\d+\.\s/, "");
        return /* @__PURE__ */ jsx(
          "li",
          {
            className: "text-[hsl(var(--muted-foreground))] text-base leading-relaxed ml-4 list-decimal",
            dangerouslySetInnerHTML: { __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[hsl(var(--foreground))] font-semibold">$1</strong>') }
          },
          i
        );
      }
      return /* @__PURE__ */ jsx(
        "p",
        {
          className: "text-[hsl(var(--muted-foreground))] text-base leading-relaxed mb-3",
          dangerouslySetInnerHTML: { __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[hsl(var(--foreground))] font-semibold">$1</strong>') }
        },
        i
      );
    });
  };
  const title = article ? article.seoTitle : legacyPost.title;
  const description = article ? article.seoDescription : legacyPost.excerpt;
  const category = article ? article.category : legacyPost.category;
  const date = article ? article.date : legacyPost.date;
  const image = article ? article.image : legacyPost.image;
  const h1 = article ? article.h1 : legacyPost.title;
  const SUFFIX = " | ПринтПРО";
  const fullTitle = `${title}${SUFFIX}`;
  const finalTitle = fullTitle.length > 60 ? title : fullTitle;
  const absImage = image.startsWith("http") ? image : `https://printprro.ru${image}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h1,
    datePublished: date,
    image: absImage,
    author: { "@type": "Organization", name: "PrintPRO" },
    publisher: {
      "@type": "Organization",
      name: "PrintPRO",
      logo: { "@type": "ImageObject", url: "https://printprro.ru/og-image.jpg" }
    },
    mainEntityOfPage: `https://printprro.ru/blog/${slug}`
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://printprro.ru/" },
      { "@type": "ListItem", position: 2, name: "Блог", item: "https://printprro.ru/blog" },
      { "@type": "ListItem", position: 3, name: h1, item: `https://printprro.ru/blog/${slug}` }
    ]
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-black overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: finalTitle,
        description,
        type: "article",
        image: absImage,
        jsonLd: [articleJsonLd, breadcrumbJsonLd]
      }
    ),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-24 sm:pt-32 pb-16 sm:pb-24 px-4", children: /* @__PURE__ */ jsxs("article", { className: "container max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/blog",
          className: "inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors mb-8",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Назад к блогу"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[hsl(45,90%,55%)/0.15] text-[hsl(45,90%,55%)] border border-[hsl(45,90%,55%)/0.2]", children: category }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-sm text-[hsl(var(--muted-foreground))]", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "w-3.5 h-3.5" }),
            new Date(date).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] leading-tight", children: h1 })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden border border-[hsl(var(--border))] mb-10", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: image,
          alt: h1,
          className: "w-full aspect-[2/1] object-cover"
        }
      ) }),
      article ? /* @__PURE__ */ jsx(
        "div",
        {
          className: "prose prose-invert prose-lg max-w-none prose-headings:text-[hsl(var(--foreground))] prose-headings:font-bold prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-[hsl(var(--muted-foreground))] prose-p:text-base prose-p:leading-relaxed prose-p:mb-4 prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4 prose-ul:space-y-2 prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-4 prose-ol:space-y-2 prose-li:text-[hsl(var(--muted-foreground))] prose-li:text-base prose-li:leading-relaxed prose-li:marker:text-[hsl(45,90%,55%)] prose-strong:text-[hsl(var(--foreground))] prose-strong:font-bold prose-b:text-[hsl(var(--foreground))] prose-b:font-bold",
          dangerouslySetInnerHTML: { __html: article.content }
        }
      ) : /* @__PURE__ */ jsx("div", { className: "prose-custom", children: renderLegacyContent(legacyPost.content) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(0,0%,6%)] p-6 sm:p-10 text-center", children: [
        /* @__PURE__ */ jsx(Printer, { className: "w-10 h-10 text-[hsl(45,90%,55%)] mx-auto mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-bold text-[hsl(var(--foreground))] mb-3", children: "Нужна печать чертежей?" }),
        /* @__PURE__ */ jsx("p", { className: "text-[hsl(var(--muted-foreground))] mb-6 max-w-md mx-auto", children: "Распечатаем строго по ГОСТу. Быстрый расчет стоимости онлайн." }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/#calculator",
            className: "inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[hsl(45,90%,55%)] text-black rounded-full font-black uppercase tracking-widest text-xs sm:text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(245,158,11,0.2)] active:scale-95",
            children: "Рассчитать стоимость"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  BlogPost as default
};
