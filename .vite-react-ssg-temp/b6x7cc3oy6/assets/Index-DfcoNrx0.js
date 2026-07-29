var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
import { j as jsxDEV, u as useToast, F as Fragment, c as cn } from "../main.mjs";
import * as React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { FileText, FileCode, FileType, FileSpreadsheet, Image, Type, CheckCircle, Link2, User, Phone, Mail, Loader2, Send, Ruler, ShieldCheck, Truck, Printer, Plus, ShoppingCart, Minus, Trash2, X, ScanLine, FoldVertical, BookOpenCheck, BookLock, ChevronLeft, ChevronRight, Crosshair, FileCheck, Clock } from "lucide-react";
import { N as Navbar, F as Footer } from "./Footer-DvbiZHnP.js";
import emailjs from "@emailjs/browser";
import { S as SEO } from "./SEO-W-VNpolK.js";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as DialogPrimitive from "@radix-ui/react-dialog";
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
(_a = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _a.call(globalThis, "src/components/CentralIcon.tsx");
const WORDS = ["КАЧЕСТВО", "ЦЕНА", "СРОКИ", "ГАРАНТИЯ", "ОПЫТ"];
const CentralIcon = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 300);
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setVisible(true);
      }, 800);
    }, 4e3);
    return () => {
      clearInterval(interval);
      clearTimeout(showTimer);
    };
  }, []);
  return /* @__PURE__ */ jsxDEV("div", { className: "relative w-36 h-36 md:w-56 md:h-56 flex-shrink-0 z-10", children: [
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "absolute inset-0 rounded-[2rem] border border-border/30",
        style: {
          background: "hsl(0 0% 4%)",
          boxShadow: "0 8px 32px hsl(0 0% 0% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.05)"
        }
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/CentralIcon.tsx",
        lineNumber: 27,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-3 md:inset-4 rounded-[1.25rem] overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", style: {
        background: "radial-gradient(circle at 30% 70%, hsl(340, 80%, 50%), transparent 60%), radial-gradient(circle at 70% 30%, hsl(220, 80%, 55%), transparent 60%), radial-gradient(circle at 50% 50%, hsl(190, 70%, 45%), transparent 50%)",
        backgroundSize: "200% 200%",
        animation: "gradient-morph 6s ease infinite"
      } }, void 0, false, {
        fileName: "/dev-server/src/components/CentralIcon.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute w-[120%] h-[120%] -left-[10%] -top-[10%]", style: {
        background: "radial-gradient(circle at 40% 60%, hsl(350, 75%, 55%), transparent 50%)",
        animation: "blob-move-1 8s ease-in-out infinite"
      } }, void 0, false, {
        fileName: "/dev-server/src/components/CentralIcon.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute w-[120%] h-[120%] -left-[10%] -top-[10%]", style: {
        background: "radial-gradient(circle at 60% 40%, hsl(210, 85%, 50%), transparent 50%)",
        animation: "blob-move-2 10s ease-in-out infinite"
      } }, void 0, false, {
        fileName: "/dev-server/src/components/CentralIcon.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute w-[120%] h-[120%] -left-[10%] -top-[10%]", style: {
        background: "radial-gradient(circle at 50% 80%, hsl(170, 70%, 45%), transparent 45%)",
        animation: "blob-move-3 12s ease-in-out infinite"
      } }, void 0, false, {
        fileName: "/dev-server/src/components/CentralIcon.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/CentralIcon.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 flex items-center justify-center z-20", children: /* @__PURE__ */ jsxDEV(
      "span",
      {
        className: "text-lg md:text-2xl font-black tracking-[0.12em] text-white transition-all duration-700 ease-in-out",
        style: {
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(6px) scale(0.95)",
          filter: visible ? "blur(0px)" : "blur(4px)"
        },
        children: WORDS[wordIndex]
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/CentralIcon.tsx",
        lineNumber: 58,
        columnNumber: 9
      },
      void 0
    ) }, void 0, false, {
      fileName: "/dev-server/src/components/CentralIcon.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "absolute -inset-4 rounded-[2.5rem] opacity-20 blur-xl -z-10",
        style: {
          background: "radial-gradient(circle, hsl(340, 80%, 50%), hsl(210, 85%, 50%), transparent)"
        }
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/CentralIcon.tsx",
        lineNumber: 71,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/CentralIcon.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, void 0);
};
(_b = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _b.call(globalThis, "src/hooks/use-hydrated.ts");
const useHydrated = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
};
const outputBlueprint = "/assets/output-blueprint-DxEuzYXL.jpg";
const outputDocs = "/assets/output-docs-DeTbdW3u.jpg";
const outputPoster = "/assets/output-poster-DOTYNOGE.jpg";
const outputSpec = "/assets/output-spec-DiHcZKjU.jpg";
const outputSection = "/assets/output-section-B879OvGg.jpg";
(_c = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _c.call(globalThis, "src/components/IconCarousel.tsx");
const smallItems = [
  { icon: FileText, label: "PDF" },
  { icon: FileCode, label: "DWG" },
  { icon: FileType, label: "Word" },
  { icon: FileSpreadsheet, label: "Excel" },
  { icon: Image, label: "JPEG" },
  { icon: Type, label: "TXT" },
  { icon: FileCode, label: "SVG" },
  { icon: Image, label: "PNG" }
];
const largeItems = [
  { image: outputBlueprint, label: "Чертежи", alt: "Печать чертежа А1 — распечатать чертеж в типографии ПринтПРО" },
  { image: outputPoster, label: "Проектная", alt: "Печать проектной документации — распечатать проектную документацию А1, А2, А3" },
  { image: outputSpec, label: "Рабочая", alt: "Печать рабочей документации — распечатать рабочую документацию (рабочку) формата А3, А2" },
  { image: outputSection, label: "Исполнительная", alt: "Печать исполнительной документации — распечатать исполнительную документацию А3, А4" },
  { image: outputDocs, label: "Документы", alt: "Печать документации А4 чб и цвет — распечатка документации формата А4" }
];
const IconCarousel = ({ side }) => {
  const isSmall = side === "small";
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hydrated = useHydrated();
  const isMobile = hydrated && typeof window !== "undefined" && window.innerWidth < 768;
  const handleMouseDown = (e) => {
    var _a2, _b2;
    if (isMobile) return;
    isDragging.current = true;
    startX.current = e.pageX - (((_a2 = containerRef.current) == null ? void 0 : _a2.offsetLeft) || 0);
    scrollLeft.current = ((_b2 = containerRef.current) == null ? void 0 : _b2.scrollLeft) || 0;
    if (containerRef.current) containerRef.current.style.animationPlayState = "paused";
  };
  const handleMouseMove = (e) => {
    if (isMobile) return;
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    containerRef.current.style.transform = `translateX(${x - startX.current}px)`;
  };
  const handleMouseUp = () => {
    if (isMobile) return;
    isDragging.current = false;
    if (containerRef.current) containerRef.current.style.animationPlayState = "";
  };
  if (isSmall) {
    const track2 = [...smallItems, ...smallItems, ...smallItems, ...smallItems];
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        ref: containerRef,
        className: `flex items-center gap-3 md:gap-4 animate-carousel-to-right ${isMobile ? "" : "cursor-grab active:cursor-grabbing"}`,
        ...!isMobile ? { onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp } : {},
        children: track2.map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "w-20 h-28 md:w-24 md:h-34 rounded-lg bg-black border border-[hsl(0_0%_30%)]/50 p-1.5 flex flex-col gap-1.5 shadow-lg shadow-black/50", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 rounded border border-[hsl(0_0%_30%)]/60 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-7 h-7 md:w-9 md:h-9 text-[hsl(0_0%_55%)]", strokeWidth: 0.7 }, void 0, false, {
            fileName: "/dev-server/src/components/IconCarousel.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/IconCarousel.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "rounded border border-[hsl(0_0%_30%)]/60 py-1.5 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] md:text-xs text-[hsl(0_0%_60%)] tracking-wider", children: item.label }, void 0, false, {
            fileName: "/dev-server/src/components/IconCarousel.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/IconCarousel.tsx",
            lineNumber: 102,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/IconCarousel.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, void 0) }, i, false, {
          fileName: "/dev-server/src/components/IconCarousel.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, void 0))
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/IconCarousel.tsx",
        lineNumber: 91,
        columnNumber: 7
      },
      void 0
    );
  }
  const track = [...largeItems, ...largeItems, ...largeItems, ...largeItems];
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref: containerRef,
      className: `flex items-center gap-3 md:gap-4 animate-carousel-from-center ${isMobile ? "" : "cursor-grab active:cursor-grabbing"}`,
      ...!isMobile ? { onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp } : {},
      children: track.map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 transition-transform duration-300 md:hover:scale-150 md:hover:z-30 relative", children: /* @__PURE__ */ jsxDEV("div", { className: "w-36 h-32 md:w-44 md:h-40 bg-[hsl(0_0%_4%)] border border-[hsl(0_0%_15%)]/30 p-1.5 shadow-xl shadow-black/50 flex flex-col", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: item.image,
            alt: item.alt,
            loading: "lazy",
            className: "w-full h-full object-cover"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/IconCarousel.tsx",
            lineNumber: 123,
            columnNumber: 15
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/components/IconCarousel.tsx",
          lineNumber: 122,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "text-xs md:text-sm text-white tracking-wider font-light text-center py-1.5", children: item.label }, void 0, false, {
          fileName: "/dev-server/src/components/IconCarousel.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/IconCarousel.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, void 0) }, i, false, {
        fileName: "/dev-server/src/components/IconCarousel.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, void 0))
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/IconCarousel.tsx",
      lineNumber: 114,
      columnNumber: 5
    },
    void 0
  );
};
(_d = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _d.call(globalThis, "src/components/CarouselSection.tsx");
const CarouselSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { className: "w-full max-w-6xl mx-auto py-8 md:py-14 relative -mt-4 z-0", children: [
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "absolute pointer-events-none z-0",
        style: {
          top: "40%",
          left: "50%",
          width: "400%",
          height: "450%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, hsl(0 0% 22% / 0.6) 0%, hsl(0 0% 16% / 0.25) 35%, hsl(0 0% 12% / 0.1) 55%, transparent 85%)"
        }
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/CarouselSection.tsx",
        lineNumber: 8,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "relative h-52 md:h-64 flex items-center justify-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute left-0 top-0 bottom-0 w-1/2 flex items-center overflow-hidden", children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "w-full h-full flex items-center",
          style: {
            maskImage: "linear-gradient(to right, white 20%, white 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, white 20%, white 60%, transparent 100%)"
          },
          children: /* @__PURE__ */ jsxDEV(IconCarousel, { side: "small" }, void 0, false, {
            fileName: "/dev-server/src/components/CarouselSection.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/CarouselSection.tsx",
          lineNumber: 23,
          columnNumber: 11
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/components/CarouselSection.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute right-0 top-0 bottom-0 w-1/2 flex items-center overflow-hidden", children: /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "w-full h-full flex items-center",
          style: {
            maskImage: "linear-gradient(to right, transparent 0%, white 30%, white 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, white 30%, white 80%, transparent 100%)"
          },
          children: /* @__PURE__ */ jsxDEV(IconCarousel, { side: "large" }, void 0, false, {
            fileName: "/dev-server/src/components/CarouselSection.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/CarouselSection.tsx",
          lineNumber: 36,
          columnNumber: 11
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/components/CarouselSection.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "relative z-20 opacity-0",
          style: {
            animation: "scale-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 400ms forwards"
          },
          children: /* @__PURE__ */ jsxDEV(CentralIcon, {}, void 0, false, {
            fileName: "/dev-server/src/components/CarouselSection.tsx",
            lineNumber: 54,
            columnNumber: 11
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/CarouselSection.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/CarouselSection.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "relative w-full -mt-2 opacity-0",
        style: {
          animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 800ms forwards"
        },
        children: /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-start px-2 sm:px-8", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] sm:text-sm text-white flex-1 text-center", children: "Ваши файлы" }, void 0, false, {
            fileName: "/dev-server/src/components/CarouselSection.tsx",
            lineNumber: 66,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] sm:text-sm text-white flex-1 text-center font-bold", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "inline-block", style: { color: "hsl(210, 85%, 55%)", animation: "sparkle 5s ease-in-out infinite" }, children: "✦" }, void 0, false, {
              fileName: "/dev-server/src/components/CarouselSection.tsx",
              lineNumber: 68,
              columnNumber: 13
            }, void 0),
            " ",
            /* @__PURE__ */ jsxDEV("span", { className: "hidden sm:inline", children: "Типография" }, void 0, false, {
              fileName: "/dev-server/src/components/CarouselSection.tsx",
              lineNumber: 68,
              columnNumber: 139
            }, void 0),
            " ПринтПРО ",
            /* @__PURE__ */ jsxDEV("span", { className: "inline-block", style: { color: "hsl(210, 85%, 55%)", animation: "sparkle 5s ease-in-out 2.5s infinite" }, children: "✦" }, void 0, false, {
              fileName: "/dev-server/src/components/CarouselSection.tsx",
              lineNumber: 68,
              columnNumber: 201
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/CarouselSection.tsx",
            lineNumber: 67,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] sm:text-sm text-white flex-1 text-center", children: "Наша работа" }, void 0, false, {
            fileName: "/dev-server/src/components/CarouselSection.tsx",
            lineNumber: 70,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/CarouselSection.tsx",
          lineNumber: 65,
          columnNumber: 9
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/CarouselSection.tsx",
        lineNumber: 59,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/CarouselSection.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, void 0);
};
const work1 = "/assets/work-1-BwQ9jKLB.jpg";
const work2 = "/assets/work-2-DgkTEEhR.jpg";
const work3 = "/assets/work-3-JCm7IU7s.jpg";
const work4 = "/assets/work-4-SwtByKnH.jpg";
const work5 = "/assets/work-5-BXysGmtj.jpg";
const work6 = "/assets/work-6-7CjhkJVk.jpg";
const work7 = "/assets/work-7-Dop_iFtB.jpg";
const work8 = "/assets/work-8-C4OCGmxg.jpg";
const work9 = "/assets/work-9-D6JEmG8D.jpg";
const work10 = "/assets/work-10-Bg7Yk2SH.jpg";
const work11 = "/assets/work-11-DcXpPVpi.jpg";
const work12 = "/assets/work-12-BVobCtOG.jpg";
(_e = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _e.call(globalThis, "src/components/AnimatedHeroWorks.tsx");
const AnimatedHeroWorks = () => {
  const words = [
    "печати чертежей",
    "проектной документации",
    "рабочей документации",
    "исполнительной документации"
  ];
  const imageUrls = [work1, work2, work3, work4, work5, work6, work7, work8, work9, work10, work11, work12];
  const [wordIndex, setWordIndex] = useState(0);
  const hydrated = useHydrated();
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 3e3);
    return () => clearInterval(interval);
  }, [words.length]);
  const altTexts = [
    "Печать рабочей документации А0 чб — распечатать рабочую документацию (рабочку) — фото 1",
    "Распечатать проектную документацию А0",
    "Печать рабочей документации А3",
    "Распечатать исполнительную документацию А2",
    "Печать проектной документации А1 с фальцовкой — распечатать проектную документацию — фото 5",
    "Распечатать чертежи А1 для строительного проекта",
    "Печать проектов формата А0 по ГОСТ",
    "Распечатать рабочую документацию А3 с фальцовкой",
    "Печать исполнительной документации А2",
    "Распечатать техническую документацию А4",
    "Печать А1 — проектная документация",
    "Распечатать А0 — чертежи и проекты"
  ];
  const floatingImages = useMemo(() => {
    const count = 12;
    const isMobile = hydrated && typeof window !== "undefined" && window.innerWidth < 640;
    const sizes = isMobile ? [180, 220, 200, 250, 190, 230, 210, 260, 195, 240, 215, 225] : [320, 450, 380, 520, 340, 480, 400, 560, 360, 500, 420, 470];
    return Array.from({ length: count }).map((_, i) => {
      const angle = i / count * Math.PI * 2;
      const radius = i % 2 === 0 ? 70 : 50;
      const startX = Math.cos(angle) * radius;
      const startY = Math.sin(angle) * radius;
      return {
        id: i,
        src: imageUrls[i % imageUrls.length],
        alt: altTexts[i],
        startX: `${startX}vw`,
        startY: `${startY}vh`,
        size: sizes[i],
        delay: -(i / count) * 50,
        duration: 40 + i % 3 * 8
      };
    });
  }, [hydrated]);
  return /* @__PURE__ */ jsxDEV("section", { id: "works", className: "relative w-full bg-black overflow-hidden", style: { minHeight: "80vh" }, children: [
    /* @__PURE__ */ jsxDEV("style", { children: `
        @keyframes recedeIntoDistance {
          0% {
            transform: translate(calc(var(--start-x) * 2), calc(var(--start-y) * 2)) scale(1.15);
            opacity: 0;
            filter: blur(0px);
          }
          4% {
            opacity: 0.75;
          }
          10% {
            transform: translate(calc(var(--start-x) * 1.8), calc(var(--start-y) * 1.8)) scale(1.04);
            opacity: 0.7;
            filter: blur(0px);
          }
          25% {
            transform: translate(calc(var(--start-x) * 1.5), calc(var(--start-y) * 1.5)) scale(0.88);
            opacity: 0.6;
            filter: blur(0.5px);
          }
          50% {
            transform: translate(calc(var(--start-x) * 1.0), calc(var(--start-y) * 1.0)) scale(0.62);
            opacity: 0.45;
            filter: blur(2px);
          }
          75% {
            transform: translate(calc(var(--start-x) * 0.5), calc(var(--start-y) * 0.5)) scale(0.35);
            opacity: 0.25;
            filter: blur(6px);
          }
          90% {
            opacity: 0.1;
            filter: blur(12px);
          }
          100% {
            transform: translate(0, 0) scale(0.08);
            opacity: 0;
            filter: blur(16px);
          }
        }

        @keyframes textFadeSlide {
          0% { opacity: 0; transform: translateY(20px); }
          15%, 85% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
      ` }, void 0, false, {
      fileName: "/dev-server/src/components/AnimatedHeroWorks.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: [
      floatingImages.map((img) => /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: img.src,
          alt: img.alt,
          loading: "lazy",
          className: "absolute rounded-2xl object-cover shadow-2xl",
          style: {
            width: `${img.size}px`,
            height: `${img.size * 0.7}px`,
            "--start-x": img.startX,
            "--start-y": img.startY,
            animation: `recedeIntoDistance ${img.duration}s linear ${img.delay}s infinite`
          }
        },
        img.id,
        false,
        {
          fileName: "/dev-server/src/components/AnimatedHeroWorks.tsx",
          lineNumber: 139,
          columnNumber: 11
        },
        void 0
      )),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "absolute rounded-full",
          style: {
            width: "60vw",
            height: "60vh",
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, transparent 70%)"
          }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/AnimatedHeroWorks.tsx",
          lineNumber: 155,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/AnimatedHeroWorks.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 flex flex-col items-center justify-center text-center px-3 sm:px-4", style: { minHeight: "80vh" }, children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]", children: [
        /* @__PURE__ */ jsxDEV("span", { children: "Профессиональный подход к" }, void 0, false, {
          fileName: "/dev-server/src/components/AnimatedHeroWorks.tsx",
          lineNumber: 168,
          columnNumber: 11
        }, void 0),
        " ",
        /* @__PURE__ */ jsxDEV("span", { className: "relative inline-block", children: /* @__PURE__ */ jsxDEV("span", { className: "grid", style: { gridArea: "1/1" }, children: words.map((word, index) => /* @__PURE__ */ jsxDEV(
          "span",
          {
            className: "col-start-1 row-start-1 transition-none",
            style: {
              color: "hsl(45, 90%, 55%)",
              animation: wordIndex === index ? "textFadeSlide 3s ease-in-out forwards" : "none",
              opacity: wordIndex === index ? void 0 : 0
            },
            children: word
          },
          word,
          false,
          {
            fileName: "/dev-server/src/components/AnimatedHeroWorks.tsx",
            lineNumber: 172,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/components/AnimatedHeroWorks.tsx",
          lineNumber: 170,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/AnimatedHeroWorks.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/AnimatedHeroWorks.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-4 sm:mt-6 text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl px-2", children: "Выполняем работы любой сложности с соблюдением ГОСТ и СНиП. Гарантия качества на всех этапах." }, void 0, false, {
        fileName: "/dev-server/src/components/AnimatedHeroWorks.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/AnimatedHeroWorks.tsx",
      lineNumber: 166,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/AnimatedHeroWorks.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, void 0);
};
(_f = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _f.call(globalThis, "src/components/OrderSection.tsx");
const WHOLESALE_THRESHOLDS = {
  A0: 50,
  A1: 50,
  A2: 50,
  A3: 100,
  A4: 300
};
const getWholesaleThreshold = (format) => WHOLESALE_THRESHOLDS[format] ?? 50;
const getTierMultiplier = (format, qty) => qty >= getWholesaleThreshold(format) ? 1 : 2;
const getTierUnitPrice = (format, isColor, qty) => {
  const base = isColor ? PRICES[format].color : PRICES[format].bw;
  return base * getTierMultiplier(format, qty);
};
const PRICES = {
  A4: { bw: 5, color: 10, label: "A4", size: "210×297 мм" },
  A3: { bw: 14, color: 24, label: "A3", size: "297×420 мм" },
  A2: { bw: 30, color: 40, label: "A2", size: "420×594 мм" },
  A1: { bw: 50, color: 70, label: "A1", size: "594×841 мм" },
  A0: { bw: 100, color: 110, label: "A0", size: "841×1189 мм" }
};
const FOLDING_PRICES = {
  A4: 0,
  A3: 5,
  A2: 8,
  A1: 14,
  A0: 18
};
const SERVICES = [
  { id: "bindingA4", label: "Брошюровка в А4", price: 100 },
  { id: "bindingA3", label: "Брошюровка в А3", price: 200 },
  { id: "hardcover", label: "Твердый переплет", price: 600 },
  { id: "lamination", label: "Ламинация", price: 100 }
];
const OrderSection = () => {
  const [cart, setCart] = useState([]);
  const [format, setFormat] = useState("A1");
  const [isColor, setIsColor] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [customer, setCustomer] = useState({ name: "", phone: "", email: "" });
  const [fileLink, setFileLink] = useState("");
  const [orderFileLink, setOrderFileLink] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);
  const orderFormRef = useRef(null);
  const fileFormRef = useRef(null);
  const [fileCustomer, setFileCustomer] = useState({ name: "", phone: "", email: "" });
  const [fileTask, setFileTask] = useState("");
  const [fileConsent, setFileConsent] = useState(true);
  const [fileStatus, setFileStatus] = useState("");
  const [showCallModal, setShowCallModal] = useState(false);
  const [consent, setConsent] = useState(true);
  const [orderTask, setOrderTask] = useState("");
  const [status, setStatus] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [foldingEnabled, setFoldingEnabled] = useState(false);
  const [showFoldingReminder, setShowFoldingReminder] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const addPrintToCart = () => {
    const qty = Math.max(1, quantity || 1);
    const unitPrice = getTierUnitPrice(format, isColor, qty);
    setCart((prev) => [...prev, {
      id: Date.now(),
      label: `${PRICES[format].label} ${isColor ? "Цвет" : "ЧБ"} · ${PRICES[format].size}`,
      format,
      unitPrice,
      quantity: qty,
      isService: false,
      isColor
    }]);
    setQuantity(1);
  };
  const addServiceToCart = (service) => {
    setCart((prev) => [...prev, {
      id: Date.now() + Math.random(),
      label: service.label,
      format: "",
      unitPrice: service.price,
      quantity: 1,
      isService: true
    }]);
  };
  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));
  const setItemQuantity = (id, qty, allowZero = false) => {
    const min = allowZero ? 0 : 1;
    const newQty = Math.max(min, Math.min(9999, Math.floor(qty)));
    setCart((prev) => prev.map((item) => {
      if (item.id !== id) return item;
      newQty < 1 ? item.quantity : newQty;
      const newUnitPrice = !item.isService ? getTierUnitPrice(item.format, !!item.isColor, Math.max(1, newQty)) : item.unitPrice;
      return { ...item, quantity: newQty, unitPrice: newUnitPrice };
    }));
  };
  const updateQuantity = (id, delta) => {
    setCart((prev) => prev.map((item) => {
      if (item.id !== id) return item;
      const newQty = Math.max(1, item.quantity + delta);
      const newUnitPrice = !item.isService ? getTierUnitPrice(item.format, !!item.isColor, newQty) : item.unitPrice;
      return { ...item, quantity: newQty, unitPrice: newUnitPrice };
    }));
  };
  const getFoldingPrice = (item) => {
    if (item.isService) return 0;
    return FOLDING_PRICES[item.format] || 0;
  };
  const getItemTotal = (item) => {
    const folding = !item.isService && foldingEnabled ? getFoldingPrice(item) : 0;
    return (item.unitPrice + folding) * item.quantity;
  };
  const currentUnitPrice = getTierUnitPrice(format, isColor, quantity);
  const wholesalePrice = isColor ? PRICES[format].color : PRICES[format].bw;
  const stats = useMemo(() => {
    const subtotal = cart.reduce((acc, item) => acc + getItemTotal(item), 0);
    const discountApplicable = subtotal >= 3e3;
    const discount = discountApplicable ? subtotal * 0.2 : 0;
    return { subtotal, discount, total: subtotal - discount, discountApplicable };
  }, [cart, foldingEnabled]);
  const sendOrder = async (e) => {
    e.preventDefault();
    if (!foldingEnabled && !showFoldingReminder && cart.some((item) => !item.isService && item.format !== "A4")) {
      setShowFoldingReminder(true);
      return;
    }
    setShowFoldingReminder(false);
    if (!consent) {
      alert("Необходимо согласие на обработку персональных данных");
      return;
    }
    if (!orderTask.trim()) {
      alert("Пожалуйста, опишите задание");
      return;
    }
    if (customer.phone.replace(/\D/g, "").length < 11) {
      alert("Пожалуйста, введите полный номер телефона");
      return;
    }
    if (!customer.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) {
      alert("Пожалуйста, введите корректный email");
      return;
    }
    if (!orderFormRef.current) {
      alert("Форма не готова к отправке. Обновите страницу и попробуйте снова.");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.sendForm(
        "service_5lojlb2",
        "template_86or1it",
        orderFormRef.current,
        "ShGXdndtWKIL7zvcD"
      );
      setStatus("success");
      setShowCallModal(true);
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Упс! Произошла ошибка. Пожалуйста, напишите нам на printprro@gmail.com или в Telegram.");
      setStatus("");
    }
  };
  const { toast: showToast } = useToast();
  const sendFiles = async (e) => {
    e.preventDefault();
    if (!fileConsent) {
      showToast({ title: "Ошибка", description: "Необходимо согласие на обработку персональных данных", variant: "destructive" });
      return;
    }
    if (!fileLink && !uploadedFile) {
      showToast({ title: "Ошибка", description: "Прикрепите файл или укажите ссылку", variant: "destructive" });
      return;
    }
    if (!fileTask.trim()) {
      showToast({ title: "Ошибка", description: "Пожалуйста, опишите задание", variant: "destructive" });
      return;
    }
    if (fileCustomer.phone.replace(/\D/g, "").length < 11) {
      showToast({ title: "Ошибка", description: "Пожалуйста, введите полный номер телефона", variant: "destructive" });
      return;
    }
    if (!fileCustomer.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fileCustomer.email)) {
      showToast({ title: "Ошибка", description: "Пожалуйста, введите корректный email", variant: "destructive" });
      return;
    }
    if (!fileFormRef.current) return;
    setFileStatus("sending");
    try {
      await emailjs.sendForm(
        "service_5lojlb2",
        "template_43pwutt",
        fileFormRef.current,
        "ShGXdndtWKIL7zvcD"
      );
      setFileStatus("success");
      setShowCallModal(true);
    } catch (error) {
      console.error("Ошибка отправки файла:", error);
      showToast({ title: "Ошибка отправки", description: "Попробуйте ещё раз или напишите нам в Telegram.", variant: "destructive" });
      setFileStatus("");
    }
  };
  return /* @__PURE__ */ jsxDEV("section", { id: "calculator", className: "relative py-12 sm:py-20 md:py-32 px-3 sm:px-4 bg-white overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 container max-w-7xl mx-auto overflow-hidden", children: /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "relative rounded-2xl opacity-0",
        style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards" },
        children: [
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl pointer-events-none",
              style: { width: "calc(100% + 2px)", height: "calc(100% + 2px)" },
              children: [
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: "absolute inset-0",
                    style: { backgroundImage: "linear-gradient(0deg, hsl(0,0%,100%) -50%, hsl(0,0%,40%) 100%)" }
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/OrderSection.tsx",
                    lineNumber: 272,
                    columnNumber: 13
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-border-rotate pointer-events-none",
                    style: {
                      width: "200%",
                      height: "10rem",
                      transformOrigin: "center",
                      backgroundImage: "linear-gradient(0deg, hsla(0,0%,100%,0) 0%, hsl(277,95%,60%) 40%, hsl(277,95%,60%) 60%, hsla(0,0%,40%,0) 100%)"
                    }
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/OrderSection.tsx",
                    lineNumber: 276,
                    columnNumber: 13
                  },
                  void 0
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/components/OrderSection.tsx",
              lineNumber: 268,
              columnNumber: 11
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "relative overflow-hidden rounded-2xl border border-white/20",
              style: {
                backgroundColor: "hsla(240,15%,9%,0.55)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                backgroundImage: `
                radial-gradient(at 0% 64%, hsla(263,93%,56%,0.15) 0px, transparent 85%),
                radial-gradient(at 41% 94%, hsla(284,100%,84%,0.1) 0px, transparent 85%),
                radial-gradient(at 100% 99%, hsla(306,100%,57%,0.1) 0px, transparent 85%)
              `,
                boxShadow: "0px -16px 24px 0px rgba(255,255,255,0.1) inset, 0 8px 32px rgba(0,0,0,0.2)"
              },
              children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 lg:items-start", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "relative p-5 sm:p-8 md:p-12 flex flex-col justify-between overflow-hidden", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 lg:border-r", style: { borderColor: "hsl(240,9%,17%)" } }, void 0, false, {
                    fileName: "/dev-server/src/components/OrderSection.tsx",
                    lineNumber: 306,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "relative z-10", children: [
                    /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-black leading-tight tracking-tight text-white", children: [
                      "Отправьте файлы ",
                      /* @__PURE__ */ jsxDEV("br", { className: "hidden sm:block" }, void 0, false, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 310,
                        columnNumber: 37
                      }, void 0),
                      " удобным вам способом."
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 309,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("p", { className: "mt-2 sm:mt-3 text-sm md:text-base leading-relaxed lg:max-w-sm", style: { color: "hsl(0,0%,83%)" }, children: "Не тратьте время на расчеты. Наш менеджер сам проверит файлы и назовет точную цену." }, void 0, false, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 312,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(
                      "a",
                      {
                        href: "https://t.me/printprro",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "mt-3 sm:mt-4 inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-200 active:scale-[0.97] hover:bg-[hsla(266,92%,58%,0.15)] hover:shadow-[0_0_20px_hsla(266,92%,58%,0.3)]",
                        style: {
                          border: "2px solid hsl(266,92%,58%)",
                          color: "hsl(266,92%,78%)",
                          backgroundColor: "transparent"
                        },
                        children: [
                          /* @__PURE__ */ jsxDEV("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxDEV("path", { d: "M20.665 4.70898L17.702 18.718C17.481 19.721 16.883 19.974 16.036 19.497L11.431 16.104L9.213 18.232C8.968 18.477 8.761 18.684 8.271 18.684L8.599 13.992L17.133 6.29098C17.504 5.96098 17.052 5.77998 16.559 6.10898L6.02 12.738L1.474 11.315C0.485 11.008 0.468 10.323 1.681 9.85198L19.431 3.01198C20.252 2.70498 20.971 3.18998 20.665 4.70898Z" }, void 0, false, {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 328,
                            columnNumber: 23
                          }, void 0) }, void 0, false, {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 327,
                            columnNumber: 21
                          }, void 0),
                          "Написать в Telegram"
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 316,
                        columnNumber: 19
                      },
                      void 0
                    ),
                    /* @__PURE__ */ jsxDEV(
                      "div",
                      {
                        className: "mt-3 sm:mt-4 flex items-start gap-2 rounded-xl px-3.5 py-2.5",
                        style: {
                          backgroundColor: "hsla(45,100%,50%,0.1)",
                          border: "1px solid hsla(45,100%,50%,0.2)"
                        },
                        children: /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] sm:text-xs font-medium leading-relaxed", style: { color: "hsl(45,100%,80%)" }, children: "Извините, в связи с высокой загруженностью минимальный заказ — 500 ₽." }, void 0, false, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 340,
                          columnNumber: 21
                        }, void 0)
                      },
                      void 0,
                      false,
                      {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 333,
                        columnNumber: 19
                      },
                      void 0
                    )
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/components/OrderSection.tsx",
                    lineNumber: 308,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 mt-8", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "h-px w-full mb-6", style: { backgroundColor: "hsl(240,9%,20%)" } }, void 0, false, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 348,
                      columnNumber: 20
                    }, void 0),
                    fileStatus === "success" ? /* @__PURE__ */ jsxDEV("div", { className: "text-center py-6", children: [
                      /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-10 h-10 mx-auto mb-3", style: { color: "hsl(120,60%,60%)" } }, void 0, false, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 351,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-bold text-white", children: "Файлы отправлены!" }, void 0, false, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 352,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-xs mt-1", style: { color: "hsl(0,0%,60%)" }, children: "Мы свяжемся с вами в ближайшее время." }, void 0, false, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 353,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            setFileStatus("");
                            setFileLink("");
                            setFileCustomer({ name: "", phone: "", email: "" });
                            setFileTask("");
                            setUploadedFile(null);
                            if (fileInputRef.current) fileInputRef.current.value = "";
                          },
                          className: "mt-3 text-xs font-bold",
                          style: { color: "hsl(266,92%,68%)" },
                          children: "Отправить ещё →"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 354,
                          columnNumber: 23
                        },
                        void 0
                      )
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 350,
                      columnNumber: 21
                    }, void 0) : /* @__PURE__ */ jsxDEV("form", { ref: fileFormRef, onSubmit: sendFiles, encType: "multipart/form-data", className: "space-y-3", children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
                        /* @__PURE__ */ jsxDEV(Link2, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4", style: { color: "hsl(0,0%,50%)" } }, void 0, false, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 366,
                          columnNumber: 25
                        }, void 0),
                        /* @__PURE__ */ jsxDEV(
                          "input",
                          {
                            type: "text",
                            name: "cloud_link",
                            placeholder: "Ссылка на файлы для печати (Яндекс.Диск, Облако)",
                            value: fileLink,
                            onChange: (e) => setFileLink(e.target.value),
                            className: "w-full pl-11 p-3.5 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)]",
                            style: { backgroundColor: "hsla(240,15%,15%,0.8)", border: "1px solid hsl(240,9%,17%)" }
                          },
                          void 0,
                          false,
                          {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 367,
                            columnNumber: 26
                          },
                          void 0
                        )
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 365,
                        columnNumber: 23
                      }, void 0),
                      fileLink && /* @__PURE__ */ jsxDEV(Fragment, { children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                          /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
                            /* @__PURE__ */ jsxDEV(User, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4", style: { color: "hsl(0,0%,50%)" } }, void 0, false, {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 382,
                              columnNumber: 31
                            }, void 0),
                            /* @__PURE__ */ jsxDEV(
                              "input",
                              {
                                required: true,
                                name: "customer_name",
                                placeholder: "Ваше имя",
                                value: fileCustomer.name,
                                onChange: (e) => setFileCustomer({ ...fileCustomer, name: e.target.value }),
                                className: "w-full pl-11 p-3.5 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)]",
                                style: { backgroundColor: "hsla(240,15%,15%,0.8)", border: "1px solid hsl(240,9%,17%)" }
                              },
                              void 0,
                              false,
                              {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 383,
                                columnNumber: 31
                              },
                              void 0
                            )
                          ] }, void 0, true, {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 381,
                            columnNumber: 29
                          }, void 0),
                          /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
                            /* @__PURE__ */ jsxDEV(Phone, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4", style: { color: "hsl(0,0%,50%)" } }, void 0, false, {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 394,
                              columnNumber: 31
                            }, void 0),
                            /* @__PURE__ */ jsxDEV(
                              "input",
                              {
                                required: true,
                                name: "customer_phone",
                                type: "tel",
                                placeholder: "+7 (___) ___-__-__",
                                value: fileCustomer.phone,
                                onChange: (e) => {
                                  let digits = e.target.value.replace(/\D/g, "");
                                  if (digits.startsWith("8")) digits = "7" + digits.slice(1);
                                  if (!digits.startsWith("7") && digits.length > 0) digits = "7" + digits;
                                  digits = digits.slice(0, 11);
                                  let formatted = "";
                                  if (digits.length > 0) formatted = "+" + digits[0];
                                  if (digits.length > 1) formatted += " (" + digits.slice(1, 4);
                                  if (digits.length > 4) formatted += ") " + digits.slice(4, 7);
                                  if (digits.length > 7) formatted += "-" + digits.slice(7, 9);
                                  if (digits.length > 9) formatted += "-" + digits.slice(9, 11);
                                  setFileCustomer({ ...fileCustomer, phone: formatted });
                                },
                                maxLength: 18,
                                className: "w-full pl-11 p-3.5 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)]",
                                style: { backgroundColor: "hsla(240,15%,15%,0.8)", border: "1px solid hsl(240,9%,17%)" }
                              },
                              void 0,
                              false,
                              {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 395,
                                columnNumber: 31
                              },
                              void 0
                            )
                          ] }, void 0, true, {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 393,
                            columnNumber: 29
                          }, void 0)
                        ] }, void 0, true, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 380,
                          columnNumber: 27
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
                          /* @__PURE__ */ jsxDEV(Mail, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4", style: { color: "hsl(0,0%,50%)" } }, void 0, false, {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 421,
                            columnNumber: 29
                          }, void 0),
                          /* @__PURE__ */ jsxDEV(
                            "input",
                            {
                              required: true,
                              name: "customer_email",
                              type: "email",
                              placeholder: "Ваш email для ответа",
                              value: fileCustomer.email,
                              onChange: (e) => setFileCustomer({ ...fileCustomer, email: e.target.value }),
                              className: "w-full pl-11 p-3.5 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)]",
                              style: { backgroundColor: "hsla(240,15%,15%,0.8)", border: "1px solid hsl(240,9%,17%)" }
                            },
                            void 0,
                            false,
                            {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 422,
                              columnNumber: 29
                            },
                            void 0
                          )
                        ] }, void 0, true, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 420,
                          columnNumber: 27
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("div", { className: "relative", children: /* @__PURE__ */ jsxDEV(
                          "textarea",
                          {
                            name: "order_details",
                            required: true,
                            placeholder: "Опишите задание: что нужно напечатать, формат, количество, цветность, фальцовка, сроки и т.д. *",
                            value: fileTask,
                            onChange: (e) => setFileTask(e.target.value),
                            rows: 4,
                            maxLength: 2e3,
                            className: "w-full p-3.5 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)] resize-none",
                            style: { backgroundColor: "hsla(240,15%,15%,0.8)", border: "1px solid hsl(240,9%,17%)" }
                          },
                          void 0,
                          false,
                          {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 434,
                            columnNumber: 29
                          },
                          void 0
                        ) }, void 0, false, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 433,
                          columnNumber: 27
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("input", { type: "hidden", name: "total_price", value: "—" }, void 0, false, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 446,
                          columnNumber: 27
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("label", { className: "flex items-start gap-2.5 cursor-pointer select-none", children: [
                          /* @__PURE__ */ jsxDEV(
                            "input",
                            {
                              type: "checkbox",
                              checked: fileConsent,
                              onChange: (e) => setFileConsent(e.target.checked),
                              className: "mt-1 w-4 h-4 rounded cursor-pointer bg-transparent",
                              style: { accentColor: "hsl(266,92%,58%)" },
                              required: true
                            },
                            void 0,
                            false,
                            {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 448,
                              columnNumber: 29
                            },
                            void 0
                          ),
                          /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] leading-relaxed", style: { color: "hsl(0,0%,100%)" }, children: [
                            "Даю согласие на обработку персональных данных согласно",
                            " ",
                            /* @__PURE__ */ jsxDEV(Link, { to: "/privacy", className: "underline", style: { color: "hsl(266,92%,68%)" }, children: "Политике конфиденциальности" }, void 0, false, {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 458,
                              columnNumber: 31
                            }, void 0),
                            " ",
                            "и принимаю",
                            " ",
                            /* @__PURE__ */ jsxDEV(Link, { to: "/terms", className: "underline", style: { color: "hsl(266,92%,68%)" }, children: "Условия обслуживания" }, void 0, false, {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 462,
                              columnNumber: 31
                            }, void 0),
                            "."
                          ] }, void 0, true, {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 456,
                            columnNumber: 29
                          }, void 0)
                        ] }, void 0, true, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 447,
                          columnNumber: 27
                        }, void 0),
                        /* @__PURE__ */ jsxDEV(
                          "button",
                          {
                            type: "submit",
                            disabled: fileStatus === "sending",
                            className: "w-full text-white py-3.5 rounded-full font-bold uppercase text-sm tracking-wider transition-all duration-200 active:scale-[0.97] disabled:opacity-50 flex items-center justify-center gap-2 hover:shadow-[0_0_24px_hsla(266,92%,58%,0.5)] hover:brightness-110",
                            style: {
                              backgroundImage: "linear-gradient(0deg, rgba(94,58,238,1) 0%, rgba(197,107,240,1) 100%)",
                              boxShadow: "inset 0 -2px 25px -4px hsl(0,0%,100%)"
                            },
                            children: fileStatus === "sending" ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                              /* @__PURE__ */ jsxDEV(Loader2, { className: "w-4 h-4 animate-spin" }, void 0, false, {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 477,
                                columnNumber: 59
                              }, void 0),
                              " Отправка..."
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 477,
                              columnNumber: 57
                            }, void 0) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                              /* @__PURE__ */ jsxDEV(Send, { className: "w-4 h-4" }, void 0, false, {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 477,
                                columnNumber: 123
                              }, void 0),
                              " Отправить файл"
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 477,
                              columnNumber: 121
                            }, void 0)
                          },
                          void 0,
                          false,
                          {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 468,
                            columnNumber: 27
                          },
                          void 0
                        )
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 379,
                        columnNumber: 25
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 364,
                      columnNumber: 21
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/components/OrderSection.tsx",
                    lineNumber: 347,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 mt-10 space-y-4 hidden lg:block", children: [
                    { icon: /* @__PURE__ */ jsxDEV(Ruler, { className: "w-5 h-5 text-blue-400" }, void 0, false, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 487,
                      columnNumber: 29
                    }, void 0), title: "Строго по ГОСТ", desc: "Идеальное соблюдение масштабов 1:1 и фальцовка под подшивку.", gradient: "from-blue-500/20 to-blue-600/5" },
                    { icon: /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-5 h-5 text-emerald-400" }, void 0, false, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 488,
                      columnNumber: 29
                    }, void 0), title: "Конфиденциально (NDA)", desc: "Ваши чертежи и сметы надежно защищены от третьих лиц.", gradient: "from-emerald-500/20 to-emerald-600/5" },
                    { icon: /* @__PURE__ */ jsxDEV(Truck, { className: "w-5 h-5 text-amber-400" }, void 0, false, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 489,
                      columnNumber: 29
                    }, void 0), title: "Доставка по Москве", desc: "Аккуратно упакуем и привезем документацию в офис или на стройплощадку.", gradient: "from-amber-500/20 to-amber-600/5" }
                  ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4 p-3 -mx-3 rounded-2xl cursor-default", children: [
                    /* @__PURE__ */ jsxDEV(
                      "div",
                      {
                        className: `w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} border border-white/10 flex items-center justify-center shrink-0`,
                        style: { backgroundColor: "hsla(240,15%,15%,0.6)" },
                        children: item.icon
                      },
                      void 0,
                      false,
                      {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 492,
                        columnNumber: 23
                      },
                      void 0
                    ),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-xs sm:text-sm text-white", children: item.title }, void 0, false, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 499,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] sm:text-xs mt-0.5", style: { color: "hsl(0,0%,83%)" }, children: item.desc }, void 0, false, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 500,
                        columnNumber: 25
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 498,
                      columnNumber: 23
                    }, void 0)
                  ] }, i, true, {
                    fileName: "/dev-server/src/components/OrderSection.tsx",
                    lineNumber: 491,
                    columnNumber: 20
                  }, void 0)) }, void 0, false, {
                    fileName: "/dev-server/src/components/OrderSection.tsx",
                    lineNumber: 485,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/OrderSection.tsx",
                  lineNumber: 305,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "text-white", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "p-4 sm:p-5", style: { borderBottom: "1px solid hsl(240,9%,17%)" }, children: [
                    /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-black mb-4 flex items-center gap-2 uppercase tracking-tight", style: { color: "hsl(0,0%,83%)" }, children: [
                      /* @__PURE__ */ jsxDEV(Printer, { className: "w-4 h-4" }, void 0, false, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 511,
                        columnNumber: 21
                      }, void 0),
                      " Калькулятор цены"
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 510,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-[1.4fr_1fr] gap-3 mb-3", children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] font-bold uppercase ml-1", style: { color: "hsl(0,0%,60%)" }, children: "Формат чертежа" }, void 0, false, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 516,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("div", { className: "relative", ref: dropdownRef, children: [
                          /* @__PURE__ */ jsxDEV(
                            "button",
                            {
                              type: "button",
                              onClick: () => setDropdownOpen(!dropdownOpen),
                              className: "w-full p-2.5 text-sm rounded-xl outline-none font-medium text-left flex items-center justify-between transition-all",
                              style: {
                                backgroundColor: "hsla(240,15%,15%,0.8)",
                                border: `1px solid ${dropdownOpen ? "hsl(266,92%,58%)" : "hsl(240,9%,17%)"}`,
                                color: "hsl(0,0%,83%)"
                              },
                              children: [
                                /* @__PURE__ */ jsxDEV("span", { children: [
                                  PRICES[format].label,
                                  " (",
                                  PRICES[format].size,
                                  ") — от ",
                                  isColor ? PRICES[format].color : PRICES[format].bw,
                                  " ₽"
                                ] }, void 0, true, {
                                  fileName: "/dev-server/src/components/OrderSection.tsx",
                                  lineNumber: 528,
                                  columnNumber: 27
                                }, void 0),
                                /* @__PURE__ */ jsxDEV(
                                  "svg",
                                  {
                                    className: `w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`,
                                    style: { color: "hsl(0,0%,60%)" },
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: /* @__PURE__ */ jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }, void 0, false, {
                                      fileName: "/dev-server/src/components/OrderSection.tsx",
                                      lineNumber: 534,
                                      columnNumber: 29
                                    }, void 0)
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "/dev-server/src/components/OrderSection.tsx",
                                    lineNumber: 529,
                                    columnNumber: 27
                                  },
                                  void 0
                                )
                              ]
                            },
                            void 0,
                            true,
                            {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 518,
                              columnNumber: 25
                            },
                            void 0
                          ),
                          dropdownOpen && /* @__PURE__ */ jsxDEV(
                            "div",
                            {
                              className: "absolute z-50 w-full mt-1 rounded-xl overflow-hidden animate-scale-in",
                              style: {
                                backgroundColor: "hsla(240,15%,11%,0.95)",
                                border: "1px solid hsl(240,9%,20%)",
                                backdropFilter: "blur(20px)",
                                WebkitBackdropFilter: "blur(20px)",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px hsla(266,92%,58%,0.1)"
                              },
                              children: Object.keys(PRICES).map((k) => /* @__PURE__ */ jsxDEV(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => {
                                    setFormat(k);
                                    setDropdownOpen(false);
                                  },
                                  className: "w-full text-left px-3.5 py-2.5 text-sm font-medium transition-all flex justify-between items-center",
                                  style: {
                                    color: format === k ? "hsl(266,92%,78%)" : "hsl(0,0%,83%)",
                                    backgroundColor: format === k ? "hsla(266,92%,58%,0.15)" : "transparent"
                                  },
                                  onMouseEnter: (e) => {
                                    if (format !== k) e.currentTarget.style.backgroundColor = "hsla(240,15%,20%,0.6)";
                                  },
                                  onMouseLeave: (e) => {
                                    e.currentTarget.style.backgroundColor = format === k ? "hsla(266,92%,58%,0.15)" : "transparent";
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxDEV("span", { children: [
                                      PRICES[k].label,
                                      " ",
                                      /* @__PURE__ */ jsxDEV("span", { style: { color: "hsl(0,0%,50%)" }, children: [
                                        "(",
                                        PRICES[k].size,
                                        ")"
                                      ] }, void 0, true, {
                                        fileName: "/dev-server/src/components/OrderSection.tsx",
                                        lineNumber: 565,
                                        columnNumber: 57
                                      }, void 0)
                                    ] }, void 0, true, {
                                      fileName: "/dev-server/src/components/OrderSection.tsx",
                                      lineNumber: 565,
                                      columnNumber: 33
                                    }, void 0),
                                    /* @__PURE__ */ jsxDEV("span", { style: { color: "hsl(0,0%,50%)" }, children: [
                                      "от ",
                                      isColor ? PRICES[k].color : PRICES[k].bw,
                                      " ₽"
                                    ] }, void 0, true, {
                                      fileName: "/dev-server/src/components/OrderSection.tsx",
                                      lineNumber: 566,
                                      columnNumber: 33
                                    }, void 0)
                                  ]
                                },
                                k,
                                true,
                                {
                                  fileName: "/dev-server/src/components/OrderSection.tsx",
                                  lineNumber: 549,
                                  columnNumber: 31
                                },
                                void 0
                              ))
                            },
                            void 0,
                            false,
                            {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 538,
                              columnNumber: 27
                            },
                            void 0
                          )
                        ] }, void 0, true, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 517,
                          columnNumber: 23
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 515,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] font-bold uppercase ml-1", style: { color: "hsl(0,0%,60%)" }, children: "Цветность" }, void 0, false, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 574,
                          columnNumber: 23
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("div", { className: "flex p-1 rounded-lg gap-1", style: { backgroundColor: "hsla(240,15%,15%,0.6)", border: "1px solid hsl(240,9%,17%)" }, children: [
                          /* @__PURE__ */ jsxDEV(
                            "button",
                            {
                              onClick: () => setIsColor(false),
                              className: "flex-1 py-2 rounded-lg text-xs font-bold transition-all",
                              style: !isColor ? {
                                backgroundColor: "hsl(0,0%,4%)",
                                border: "1px solid hsl(0,0%,75%)",
                                color: "hsl(0,0%,96%)",
                                boxShadow: "0 0 0 1px hsl(0,0%,30%) inset"
                              } : {
                                backgroundColor: "transparent",
                                color: "hsl(0,0%,60%)"
                              },
                              children: "ЧБ"
                            },
                            void 0,
                            false,
                            {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 576,
                              columnNumber: 25
                            },
                            void 0
                          ),
                          /* @__PURE__ */ jsxDEV(
                            "button",
                            {
                              onClick: () => setIsColor(true),
                              className: "flex-1 py-2 rounded-lg text-xs font-bold transition-all",
                              style: isColor ? {
                                backgroundImage: "linear-gradient(90deg, hsl(266,92%,45%) 0%, hsl(320,85%,55%) 100%)",
                                border: "1px solid hsla(320,85%,70%,0.6)",
                                color: "hsl(0,0%,100%)",
                                boxShadow: "0 0 18px hsla(320,85%,55%,0.45), inset 0 -2px 12px hsla(0,0%,100%,0.15)"
                              } : {
                                backgroundColor: "transparent",
                                color: "hsl(0,0%,60%)"
                              },
                              children: "Цвет"
                            },
                            void 0,
                            false,
                            {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 593,
                              columnNumber: 25
                            },
                            void 0
                          )
                        ] }, void 0, true, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 575,
                          columnNumber: 23
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 573,
                        columnNumber: 21
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 514,
                      columnNumber: 19
                    }, void 0),
                    (() => {
                      const threshold = getWholesaleThreshold(format);
                      const remaining = Math.max(0, threshold - quantity);
                      const atWholesale = currentUnitPrice === wholesalePrice;
                      return /* @__PURE__ */ jsxDEV("div", { className: "mb-2 px-1 space-y-1", children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline justify-between", children: [
                          /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] font-bold uppercase tracking-wider text-white", children: "Текущая цена за 1 шт:" }, void 0, false, {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 622,
                            columnNumber: 27
                          }, void 0),
                          /* @__PURE__ */ jsxDEV("span", { className: "flex items-baseline gap-2", children: [
                            currentUnitPrice > wholesalePrice && /* @__PURE__ */ jsxDEV("span", { className: "text-xs line-through text-white", children: [
                              wholesalePrice,
                              " ₽"
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 627,
                              columnNumber: 31
                            }, void 0),
                            /* @__PURE__ */ jsxDEV(
                              "span",
                              {
                                className: "text-base font-black animate-fade-in",
                                style: { color: atWholesale ? "hsl(142,71%,55%)" : "hsl(266,92%,78%)" },
                                children: [
                                  currentUnitPrice,
                                  " ₽"
                                ]
                              },
                              currentUnitPrice,
                              true,
                              {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 631,
                                columnNumber: 29
                              },
                              void 0
                            )
                          ] }, void 0, true, {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 625,
                            columnNumber: 27
                          }, void 0)
                        ] }, void 0, true, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 621,
                          columnNumber: 25
                        }, void 0),
                        atWholesale ? /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] font-semibold animate-fade-in", style: { color: "hsl(142,71%,55%)" }, children: "✓ Применена оптовая цена!" }, void 0, false, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 641,
                          columnNumber: 27
                        }, void 0) : /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] animate-fade-in", style: { color: "hsl(266,92%,78%)" }, children: [
                          "Добавьте ",
                          remaining,
                          " шт. для оптовой цены"
                        ] }, void 0, true, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 645,
                          columnNumber: 27
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 620,
                        columnNumber: 23
                      }, void 0);
                    })(),
                    /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 sm:gap-3 mb-4", children: [
                      /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "flex items-center rounded-lg px-2 transition-all duration-200 hover:border-[hsl(240,9%,25%)]",
                          style: { backgroundColor: "hsla(240,15%,15%,0.8)", border: "1px solid hsl(240,9%,17%)" },
                          children: [
                            /* @__PURE__ */ jsxDEV("button", { onClick: () => setQuantity(Math.max(1, quantity - 1)), className: "text-xl font-light p-2 transition-all duration-150 text-[hsl(0,0%,60%)] hover:text-[hsl(0,100%,62%)] hover:[text-shadow:0_0_6px_hsl(0_100%_55%/0.9)] active:text-[hsl(0,100%,55%)]", children: "−" }, void 0, false, {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 658,
                              columnNumber: 23
                            }, void 0),
                            /* @__PURE__ */ jsxDEV(
                              "input",
                              {
                                type: "number",
                                min: 1,
                                max: 9999,
                                value: quantity === 0 ? "" : quantity,
                                onChange: (e) => {
                                  const raw = e.target.value;
                                  if (raw === "") {
                                    setQuantity(0);
                                    return;
                                  }
                                  const val = parseInt(raw, 10);
                                  if (!isNaN(val) && val >= 0 && val <= 9999) setQuantity(val);
                                },
                                onBlur: () => {
                                  if (!quantity || quantity < 1) setQuantity(1);
                                },
                                className: "w-12 text-center font-bold text-sm outline-none bg-transparent text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                              },
                              void 0,
                              false,
                              {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 659,
                                columnNumber: 23
                              },
                              void 0
                            ),
                            /* @__PURE__ */ jsxDEV("button", { onClick: () => setQuantity(quantity + 1), className: "text-xl font-light p-2 transition-all duration-150 text-[hsl(0,0%,60%)] hover:text-[hsl(140,100%,55%)] hover:[text-shadow:0_0_6px_hsl(140_100%_50%/0.9)] active:text-[hsl(140,100%,48%)]", children: "+" }, void 0, false, {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 673,
                              columnNumber: 23
                            }, void 0)
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 654,
                          columnNumber: 21
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          onClick: addPrintToCart,
                          className: "flex-1 text-white py-3 rounded-full font-bold uppercase text-sm tracking-wider transition-all duration-200 active:scale-[0.97] hover:shadow-[0_0_24px_hsla(266,92%,58%,0.5)] hover:brightness-110",
                          style: {
                            backgroundImage: "linear-gradient(0deg, rgba(94,58,238,1) 0%, rgba(197,107,240,1) 100%)",
                            boxShadow: "inset 0 -2px 25px -4px hsl(0,0%,100%)"
                          },
                          children: "В корзину"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 675,
                          columnNumber: 21
                        },
                        void 0
                      )
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 653,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] font-bold uppercase ml-1 mb-2 block", style: { color: "hsl(0,0%,60%)" }, children: "Дополнительные услуги" }, void 0, false, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 689,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-1.5 sm:gap-2", children: SERVICES.map((service) => /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          onClick: () => addServiceToCart(service),
                          className: "group/add text-left p-2.5 sm:p-3 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 active:scale-[0.97] flex justify-between items-center hover:bg-[hsla(266,92%,58%,0.1)] hover:border-[hsl(266,92%,58%,0.4)] hover:scale-[1.02]",
                          style: {
                            backgroundColor: "hsla(240,15%,15%,0.5)",
                            border: "1px solid hsl(240,9%,17%)",
                            color: "hsl(0,0%,83%)"
                          },
                          children: [
                            /* @__PURE__ */ jsxDEV("div", { children: [
                              service.label,
                              /* @__PURE__ */ jsxDEV("span", { className: "block opacity-60", children: [
                                service.price,
                                " ₽"
                              ] }, void 0, true, {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 704,
                                columnNumber: 29
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 702,
                              columnNumber: 27
                            }, void 0),
                            /* @__PURE__ */ jsxDEV(Plus, { className: "w-4 h-4 flex-shrink-0 transition-all duration-150 text-[hsl(266,92%,68%)] group-hover/add:text-[hsl(140,100%,55%)] group-hover/add:[filter:drop-shadow(0_0_3px_hsl(140_100%_50%/0.9))] group-active/add:text-[hsl(140,100%,48%)]" }, void 0, false, {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 706,
                              columnNumber: 27
                            }, void 0)
                          ]
                        },
                        service.id,
                        true,
                        {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 692,
                          columnNumber: 25
                        },
                        void 0
                      )) }, void 0, false, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 690,
                        columnNumber: 21
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 688,
                      columnNumber: 19
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/components/OrderSection.tsx",
                    lineNumber: 509,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "p-4 sm:p-6", children: status !== "success" ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4", children: [
                      /* @__PURE__ */ jsxDEV("h3", { className: "font-bold flex items-center gap-2 text-sm uppercase tracking-widest text-white/70", children: [
                        /* @__PURE__ */ jsxDEV(ShoppingCart, { className: "w-4 h-4" }, void 0, false, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 719,
                          columnNumber: 27
                        }, void 0),
                        " Ваш заказ"
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 718,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "flex items-center gap-3 select-none px-3 py-2 rounded-xl transition-all duration-200 hover:bg-[hsla(240,15%,18%,0.7)] hover:border-[hsl(240,9%,25%)] cursor-pointer",
                          style: {
                            backgroundColor: "hsla(240,15%,15%,0.5)",
                            border: "1px solid hsl(240,9%,17%)"
                          },
                          children: [
                            /* @__PURE__ */ jsxDEV(
                              "span",
                              {
                                className: "text-[10px] sm:text-xs font-black uppercase tracking-wide",
                                style: { color: foldingEnabled ? "hsl(120,60%,70%)" : "hsl(0,0%,83%)" },
                                children: "Фальцовка по ГОСТ"
                              },
                              void 0,
                              false,
                              {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 728,
                                columnNumber: 27
                              },
                              void 0
                            ),
                            /* @__PURE__ */ jsxDEV(
                              "input",
                              {
                                type: "checkbox",
                                className: "switch",
                                checked: foldingEnabled,
                                onChange: (e) => setFoldingEnabled(e.target.checked)
                              },
                              void 0,
                              false,
                              {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 734,
                                columnNumber: 27
                              },
                              void 0
                            )
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 721,
                          columnNumber: 25
                        },
                        void 0
                      )
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 717,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 mb-8", children: [
                      cart.map((item) => {
                        const folding = !item.isService && foldingEnabled ? getFoldingPrice(item) : 0;
                        const unitWithFolding = item.unitPrice + folding;
                        const lineTotal = unitWithFolding * item.quantity;
                        const itemThreshold = !item.isService ? getWholesaleThreshold(item.format) : 0;
                        const itemRemaining = !item.isService ? Math.max(0, itemThreshold - item.quantity) : 0;
                        return /* @__PURE__ */ jsxDEV(
                          "div",
                          {
                            className: "p-2.5 rounded-xl group transition-all duration-200 hover:bg-[hsla(240,15%,18%,0.7)] hover:border-[hsl(240,9%,25%)]",
                            style: { backgroundColor: "hsla(240,15%,15%,0.5)", border: "1px solid hsl(240,9%,17%)" },
                            children: [
                              /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-semibold text-white leading-tight", children: item.label }, void 0, false, {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 757,
                                columnNumber: 31
                              }, void 0),
                              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between gap-2 mt-1.5 flex-wrap", children: [
                                /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] font-medium flex items-center gap-1.5 flex-wrap min-w-0", style: { color: "hsl(0,0%,50%)" }, children: (() => {
                                  const base = !item.isService ? item.isColor ? PRICES[item.format].color : PRICES[item.format].bw : item.unitPrice;
                                  const showStrike = !item.isService && item.unitPrice > base;
                                  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
                                    showStrike && /* @__PURE__ */ jsxDEV("span", { className: "line-through text-white", children: [
                                      base,
                                      " ₽"
                                    ] }, void 0, true, {
                                      fileName: "/dev-server/src/components/OrderSection.tsx",
                                      lineNumber: 768,
                                      columnNumber: 43
                                    }, void 0),
                                    folding > 0 ? /* @__PURE__ */ jsxDEV("span", { style: { color: "hsl(266,92%,78%)" }, children: [
                                      item.unitPrice,
                                      " ₽ + ",
                                      folding,
                                      " ₽ ",
                                      /* @__PURE__ */ jsxDEV("span", { style: { color: "hsl(266,92%,68%)" }, children: "(фальцовка)" }, void 0, false, {
                                        fileName: "/dev-server/src/components/OrderSection.tsx",
                                        lineNumber: 772,
                                        columnNumber: 78
                                      }, void 0),
                                      " = ",
                                      unitWithFolding,
                                      " ₽ за шт."
                                    ] }, void 0, true, {
                                      fileName: "/dev-server/src/components/OrderSection.tsx",
                                      lineNumber: 771,
                                      columnNumber: 43
                                    }, void 0) : /* @__PURE__ */ jsxDEV("span", { style: { color: "hsl(266,92%,78%)" }, children: [
                                      item.unitPrice,
                                      " ₽ за шт."
                                    ] }, void 0, true, {
                                      fileName: "/dev-server/src/components/OrderSection.tsx",
                                      lineNumber: 775,
                                      columnNumber: 43
                                    }, void 0)
                                  ] }, void 0, true, {
                                    fileName: "/dev-server/src/components/OrderSection.tsx",
                                    lineNumber: 766,
                                    columnNumber: 39
                                  }, void 0);
                                })() }, void 0, false, {
                                  fileName: "/dev-server/src/components/OrderSection.tsx",
                                  lineNumber: 759,
                                  columnNumber: 33
                                }, void 0),
                                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1 sm:gap-2 flex-shrink-0 ml-auto", children: [
                                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center rounded-lg", style: { border: "1px solid hsl(240,9%,17%)" }, children: [
                                    /* @__PURE__ */ jsxDEV(
                                      "button",
                                      {
                                        onClick: () => updateQuantity(item.id, -1),
                                        className: "p-1 rounded-l-lg group/minus",
                                        children: /* @__PURE__ */ jsxDEV(Minus, { className: "w-3 h-3 transition-all duration-150 text-[hsl(0,0%,60%)] group-hover/minus:text-[hsl(0,100%,62%)] group-hover/minus:[filter:drop-shadow(0_0_3px_hsl(0_100%_55%/0.9))] group-active/minus:text-[hsl(0,100%,55%)]" }, void 0, false, {
                                          fileName: "/dev-server/src/components/OrderSection.tsx",
                                          lineNumber: 787,
                                          columnNumber: 39
                                        }, void 0)
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: "/dev-server/src/components/OrderSection.tsx",
                                        lineNumber: 783,
                                        columnNumber: 37
                                      },
                                      void 0
                                    ),
                                    /* @__PURE__ */ jsxDEV(
                                      "input",
                                      {
                                        type: "number",
                                        min: 1,
                                        max: 9999,
                                        value: item.quantity === 0 ? "" : item.quantity,
                                        onChange: (e) => {
                                          const raw = e.target.value;
                                          if (raw === "") {
                                            setItemQuantity(item.id, 0, true);
                                            return;
                                          }
                                          const v = parseInt(raw, 10);
                                          if (!isNaN(v) && v >= 0 && v <= 9999) setItemQuantity(item.id, v, true);
                                        },
                                        onBlur: () => {
                                          if (!item.quantity || item.quantity < 1) setItemQuantity(item.id, 1);
                                        },
                                        className: "w-8 sm:w-10 bg-transparent px-0.5 text-xs font-bold text-center text-white outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:bg-white/5"
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: "/dev-server/src/components/OrderSection.tsx",
                                        lineNumber: 789,
                                        columnNumber: 37
                                      },
                                      void 0
                                    ),
                                    /* @__PURE__ */ jsxDEV(
                                      "button",
                                      {
                                        onClick: () => updateQuantity(item.id, 1),
                                        className: "p-1 rounded-r-lg group/plus",
                                        children: /* @__PURE__ */ jsxDEV(Plus, { className: "w-3 h-3 transition-all duration-150 text-[hsl(0,0%,60%)] group-hover/plus:text-[hsl(140,100%,55%)] group-hover/plus:[filter:drop-shadow(0_0_3px_hsl(140_100%_50%/0.9))] group-active/plus:text-[hsl(140,100%,48%)]" }, void 0, false, {
                                          fileName: "/dev-server/src/components/OrderSection.tsx",
                                          lineNumber: 809,
                                          columnNumber: 39
                                        }, void 0)
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: "/dev-server/src/components/OrderSection.tsx",
                                        lineNumber: 805,
                                        columnNumber: 37
                                      },
                                      void 0
                                    )
                                  ] }, void 0, true, {
                                    fileName: "/dev-server/src/components/OrderSection.tsx",
                                    lineNumber: 782,
                                    columnNumber: 35
                                  }, void 0),
                                  /* @__PURE__ */ jsxDEV("span", { className: "text-xs sm:text-sm font-bold text-white min-w-[2.5rem] text-right", children: [
                                    lineTotal,
                                    " ₽"
                                  ] }, void 0, true, {
                                    fileName: "/dev-server/src/components/OrderSection.tsx",
                                    lineNumber: 812,
                                    columnNumber: 35
                                  }, void 0),
                                  /* @__PURE__ */ jsxDEV("button", { onClick: () => removeItem(item.id), className: "p-1 sm:p-1.5 hover:bg-red-500/10 rounded-full transition-colors", children: /* @__PURE__ */ jsxDEV(Trash2, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-400/70" }, void 0, false, {
                                    fileName: "/dev-server/src/components/OrderSection.tsx",
                                    lineNumber: 814,
                                    columnNumber: 37
                                  }, void 0) }, void 0, false, {
                                    fileName: "/dev-server/src/components/OrderSection.tsx",
                                    lineNumber: 813,
                                    columnNumber: 35
                                  }, void 0)
                                ] }, void 0, true, {
                                  fileName: "/dev-server/src/components/OrderSection.tsx",
                                  lineNumber: 781,
                                  columnNumber: 33
                                }, void 0)
                              ] }, void 0, true, {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 758,
                                columnNumber: 31
                              }, void 0),
                              !item.isService && itemRemaining > 0 && /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] mt-1.5 font-semibold", style: { color: "hsl(266,92%,78%)" }, children: [
                                "Добавьте ",
                                itemRemaining,
                                " шт. для оптовой цены"
                              ] }, void 0, true, {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 819,
                                columnNumber: 33
                              }, void 0)
                            ]
                          },
                          item.id,
                          true,
                          {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 752,
                            columnNumber: 29
                          },
                          void 0
                        );
                      }),
                      cart.length === 0 && /* @__PURE__ */ jsxDEV("p", { className: "text-center py-10 italic rounded-3xl text-white/50", style: { border: "2px dashed hsla(0,0%,100%,0.15)" }, children: "Смета пуста. Добавьте чертежи или услуги выше." }, void 0, false, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 827,
                        columnNumber: 27
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 743,
                      columnNumber: 23
                    }, void 0),
                    cart.length > 0 && /* @__PURE__ */ jsxDEV("form", { ref: orderFormRef, onSubmit: sendOrder, encType: "multipart/form-data", className: "space-y-3 pt-4", style: { borderTop: "1px solid hsl(240,9%,17%)" }, children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
                          /* @__PURE__ */ jsxDEV(User, { className: "absolute left-4 top-4 w-4 h-4", style: { color: "hsl(0,0%,50%)" } }, void 0, false, {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 839,
                            columnNumber: 31
                          }, void 0),
                          /* @__PURE__ */ jsxDEV(
                            "input",
                            {
                              required: true,
                              name: "customer_name",
                              placeholder: "Ваше имя",
                              value: customer.name,
                              onChange: (e) => setCustomer({ ...customer, name: e.target.value }),
                              className: "w-full pl-11 p-4 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)]",
                              style: { backgroundColor: "hsla(240,15%,15%,0.8)", border: "1px solid hsl(240,9%,17%)" }
                            },
                            void 0,
                            false,
                            {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 840,
                              columnNumber: 31
                            },
                            void 0
                          )
                        ] }, void 0, true, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 838,
                          columnNumber: 29
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
                          /* @__PURE__ */ jsxDEV(Phone, { className: "absolute left-4 top-4 w-4 h-4", style: { color: "hsl(0,0%,50%)" } }, void 0, false, {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 851,
                            columnNumber: 31
                          }, void 0),
                          /* @__PURE__ */ jsxDEV(
                            "input",
                            {
                              required: true,
                              name: "customer_phone",
                              type: "tel",
                              placeholder: "+7 (___) ___-__-__",
                              value: customer.phone,
                              onChange: (e) => {
                                let digits = e.target.value.replace(/\D/g, "");
                                if (digits.startsWith("8")) digits = "7" + digits.slice(1);
                                if (!digits.startsWith("7") && digits.length > 0) digits = "7" + digits;
                                digits = digits.slice(0, 11);
                                let formatted = "";
                                if (digits.length > 0) formatted = "+" + digits[0];
                                if (digits.length > 1) formatted += " (" + digits.slice(1, 4);
                                if (digits.length > 4) formatted += ") " + digits.slice(4, 7);
                                if (digits.length > 7) formatted += "-" + digits.slice(7, 9);
                                if (digits.length > 9) formatted += "-" + digits.slice(9, 11);
                                setCustomer({ ...customer, phone: formatted });
                              },
                              maxLength: 18,
                              className: "w-full pl-11 p-4 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)]",
                              style: { backgroundColor: "hsla(240,15%,15%,0.8)", border: "1px solid hsl(240,9%,17%)" }
                            },
                            void 0,
                            false,
                            {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 852,
                              columnNumber: 31
                            },
                            void 0
                          ),
                          customer.phone.length > 0 && customer.phone.replace(/\D/g, "").length < 11 && /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-red-400/80 mt-1 ml-1 block", children: "Введите 11 цифр номера" }, void 0, false, {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 876,
                            columnNumber: 33
                          }, void 0)
                        ] }, void 0, true, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 850,
                          columnNumber: 29
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 837,
                        columnNumber: 27
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
                        /* @__PURE__ */ jsxDEV(Mail, { className: "absolute left-4 top-4 w-4 h-4", style: { color: "hsl(0,0%,50%)" } }, void 0, false, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 882,
                          columnNumber: 29
                        }, void 0),
                        /* @__PURE__ */ jsxDEV(
                          "input",
                          {
                            required: true,
                            name: "customer_email",
                            type: "email",
                            placeholder: "Ваш email для ответа",
                            value: customer.email,
                            onChange: (e) => setCustomer({ ...customer, email: e.target.value }),
                            className: "w-full pl-11 p-4 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)]",
                            style: { backgroundColor: "hsla(240,15%,15%,0.8)", border: "1px solid hsl(240,9%,17%)" }
                          },
                          void 0,
                          false,
                          {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 883,
                            columnNumber: 29
                          },
                          void 0
                        )
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 881,
                        columnNumber: 27
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("div", { className: "relative", children: /* @__PURE__ */ jsxDEV(
                        "textarea",
                        {
                          required: true,
                          placeholder: "Опишите задание: уточнения по печати, пожелания, сроки и т.д. *",
                          value: orderTask,
                          onChange: (e) => setOrderTask(e.target.value),
                          rows: 3,
                          maxLength: 2e3,
                          className: "w-full p-3.5 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)] resize-none",
                          style: { backgroundColor: "hsla(240,15%,15%,0.8)", border: "1px solid hsl(240,9%,17%)" }
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 895,
                          columnNumber: 29
                        },
                        void 0
                      ) }, void 0, false, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 894,
                        columnNumber: 27
                      }, void 0),
                      /* @__PURE__ */ jsxDEV(
                        "input",
                        {
                          type: "hidden",
                          name: "order_details",
                          value: `Описание задания:
${orderTask}

Состав заказа:
` + cart.map((item, index) => {
                            const folding = !item.isService && foldingEnabled ? getFoldingPrice(item) : 0;
                            const perUnit = item.unitPrice + folding;
                            const foldingNote = folding > 0 ? ` (вкл. фальцовку ${folding} ₽)` : "";
                            return `${index + 1}. ${item.label}${foldingNote} — ${item.quantity} шт. × ${perUnit} ₽ = ${perUnit * item.quantity} руб.`;
                          }).join("\n")
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 907,
                          columnNumber: 27
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV("input", { type: "hidden", name: "total_price", value: String(Math.round(stats.total)) }, void 0, false, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 917,
                        columnNumber: 27
                      }, void 0),
                      /* @__PURE__ */ jsxDEV(
                        "input",
                        {
                          type: "hidden",
                          name: "file_link",
                          value: orderFileLink || "Не указано"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 918,
                          columnNumber: 27
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV("label", { className: "flex items-start gap-2.5 cursor-pointer select-none mt-1", children: [
                        /* @__PURE__ */ jsxDEV(
                          "input",
                          {
                            type: "checkbox",
                            checked: consent,
                            onChange: (e) => setConsent(e.target.checked),
                            className: "mt-1 w-4 h-4 rounded cursor-pointer bg-transparent",
                            style: { accentColor: "hsl(266,92%,58%)" },
                            required: true
                          },
                          void 0,
                          false,
                          {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 925,
                            columnNumber: 29
                          },
                          void 0
                        ),
                        /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] leading-relaxed", style: { color: "hsl(0,0%,100%)" }, children: [
                          "Отправляя заявку, я даю согласие на обработку моих персональных данных согласно",
                          " ",
                          /* @__PURE__ */ jsxDEV(Link, { to: "/privacy", className: "underline transition-colors", style: { color: "hsl(266,92%,68%)" }, children: "Политике конфиденциальности" }, void 0, false, {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 935,
                            columnNumber: 31
                          }, void 0),
                          " ",
                          "и принимаю",
                          " ",
                          /* @__PURE__ */ jsxDEV(Link, { to: "/terms", className: "underline transition-colors", style: { color: "hsl(266,92%,68%)" }, children: "Условия обслуживания" }, void 0, false, {
                            fileName: "/dev-server/src/components/OrderSection.tsx",
                            lineNumber: 939,
                            columnNumber: 31
                          }, void 0),
                          "."
                        ] }, void 0, true, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 933,
                          columnNumber: 29
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 924,
                        columnNumber: 27
                      }, void 0),
                      showFoldingReminder && /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "p-3 rounded-xl mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 animate-fade-in",
                          style: {
                            backgroundColor: "hsla(45,100%,50%,0.12)",
                            border: "1px solid hsla(45,100%,50%,0.3)"
                          },
                          children: [
                            /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold", style: { color: "hsl(45,100%,75%)" }, children: "⚠️ Вы не добавили фальцовку по ГОСТ. Продолжить без неё?" }, void 0, false, {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 953,
                              columnNumber: 31
                            }, void 0),
                            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 shrink-0", children: [
                              /* @__PURE__ */ jsxDEV(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => {
                                    setFoldingEnabled(true);
                                    setShowFoldingReminder(false);
                                  },
                                  className: "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase",
                                  style: { backgroundColor: "hsla(266,92%,58%,0.3)", color: "hsl(266,92%,78%)" },
                                  children: "Добавить"
                                },
                                void 0,
                                false,
                                {
                                  fileName: "/dev-server/src/components/OrderSection.tsx",
                                  lineNumber: 957,
                                  columnNumber: 33
                                },
                                void 0
                              ),
                              /* @__PURE__ */ jsxDEV(
                                "button",
                                {
                                  type: "submit",
                                  className: "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase text-white/60",
                                  style: { backgroundColor: "hsla(0,0%,100%,0.1)" },
                                  children: "Без неё"
                                },
                                void 0,
                                false,
                                {
                                  fileName: "/dev-server/src/components/OrderSection.tsx",
                                  lineNumber: 965,
                                  columnNumber: 33
                                },
                                void 0
                              )
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 956,
                              columnNumber: 31
                            }, void 0)
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 946,
                          columnNumber: 29
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "text-white p-4 sm:p-5 rounded-2xl mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4",
                          style: {
                            backgroundImage: "linear-gradient(135deg, rgba(94,58,238,0.9) 0%, rgba(197,107,240,0.8) 100%)",
                            boxShadow: "inset 0 -2px 25px -4px rgba(255,255,255,0.15), 0 8px 32px rgba(94,58,238,0.3)"
                          },
                          children: [
                            /* @__PURE__ */ jsxDEV("div", { className: "text-center sm:text-left", children: [
                              stats.discountApplicable ? /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center sm:justify-start gap-1.5 bg-white/20 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase mb-2 w-fit mx-auto sm:mx-0 tracking-wider", children: "Скидка 20% на первый заказ" }, void 0, false, {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 985,
                                columnNumber: 33
                              }, void 0) : /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center sm:justify-start gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-2 w-fit mx-auto sm:mx-0 tracking-wide", style: { backgroundColor: "hsla(45,100%,50%,0.2)", color: "hsl(45,100%,85%)" }, children: "Закажите от 3 000 ₽ для скидки 20%" }, void 0, false, {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 989,
                                columnNumber: 33
                              }, void 0),
                              /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] font-medium mb-2", style: { color: "hsl(45,100%,85%)" }, children: "Минимальный заказ — 500 ₽ (в связи с высокой загруженностью)" }, void 0, false, {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 993,
                                columnNumber: 31
                              }, void 0),
                              /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline justify-center sm:justify-start gap-2", children: [
                                /* @__PURE__ */ jsxDEV("span", { className: "text-2xl font-black", children: [
                                  Math.round(stats.total),
                                  " ₽"
                                ] }, void 0, true, {
                                  fileName: "/dev-server/src/components/OrderSection.tsx",
                                  lineNumber: 997,
                                  columnNumber: 33
                                }, void 0),
                                stats.discountApplicable && /* @__PURE__ */ jsxDEV("span", { className: "text-white/40 line-through font-semibold text-sm", children: [
                                  Math.round(stats.subtotal),
                                  " ₽"
                                ] }, void 0, true, {
                                  fileName: "/dev-server/src/components/OrderSection.tsx",
                                  lineNumber: 999,
                                  columnNumber: 35
                                }, void 0)
                              ] }, void 0, true, {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 996,
                                columnNumber: 31
                              }, void 0)
                            ] }, void 0, true, {
                              fileName: "/dev-server/src/components/OrderSection.tsx",
                              lineNumber: 983,
                              columnNumber: 29
                            }, void 0),
                            /* @__PURE__ */ jsxDEV(
                              "button",
                              {
                                type: "submit",
                                disabled: status === "sending",
                                className: "w-full sm:w-auto bg-white px-8 py-3.5 rounded-full font-bold uppercase text-sm tracking-wider flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.97] disabled:opacity-50 hover:shadow-[0_0_24px_hsla(0,0%,100%,0.4)] hover:scale-[1.03]",
                                style: { color: "hsl(266,92%,40%)" },
                                children: status === "sending" ? "Отправка..." : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                                  /* @__PURE__ */ jsxDEV(Send, { className: "w-4 h-4" }, void 0, false, {
                                    fileName: "/dev-server/src/components/OrderSection.tsx",
                                    lineNumber: 1009,
                                    columnNumber: 73
                                  }, void 0),
                                  " Оформить заказ"
                                ] }, void 0, true, {
                                  fileName: "/dev-server/src/components/OrderSection.tsx",
                                  lineNumber: 1009,
                                  columnNumber: 71
                                }, void 0)
                              },
                              void 0,
                              false,
                              {
                                fileName: "/dev-server/src/components/OrderSection.tsx",
                                lineNumber: 1003,
                                columnNumber: 29
                              },
                              void 0
                            )
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 976,
                          columnNumber: 27
                        },
                        void 0
                      )
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 835,
                      columnNumber: 25
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/components/OrderSection.tsx",
                    lineNumber: 716,
                    columnNumber: 21
                  }, void 0) : /* @__PURE__ */ jsxDEV("div", { className: "py-12 px-6 text-center", children: [
                    /* @__PURE__ */ jsxDEV(
                      "div",
                      {
                        className: "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",
                        style: { backgroundColor: "hsla(266,92%,58%,0.15)", border: "1px solid hsla(266,92%,58%,0.3)" },
                        children: /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-12 h-12", style: { color: "hsl(266,92%,68%)" } }, void 0, false, {
                          fileName: "/dev-server/src/components/OrderSection.tsx",
                          lineNumber: 1021,
                          columnNumber: 25
                        }, void 0)
                      },
                      void 0,
                      false,
                      {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 1017,
                        columnNumber: 23
                      },
                      void 0
                    ),
                    /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-black mb-3 uppercase tracking-tight text-white", children: "Заявка принята!" }, void 0, false, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 1023,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed max-w-sm mx-auto font-medium", style: { color: "hsl(0,0%,83%)" }, children: [
                      "Спасибо, ",
                      /* @__PURE__ */ jsxDEV("strong", { className: "text-white", children: customer.name }, void 0, false, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 1025,
                        columnNumber: 34
                      }, void 0),
                      ". Мы свяжемся с вами в течение 5 минут по номеру ",
                      /* @__PURE__ */ jsxDEV("strong", { className: "text-white", children: customer.phone }, void 0, false, {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 1025,
                        columnNumber: 138
                      }, void 0),
                      "."
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 1024,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        onClick: () => {
                          setStatus("");
                          setCart([]);
                          setCustomer({ name: "", phone: "", email: "" });
                          setOrderTask("");
                          setFileLink("");
                          setUploadedFile(null);
                        },
                        className: "inline-block mt-8 text-sm font-bold transition-colors",
                        style: { color: "hsl(266,92%,68%)" },
                        children: "Сделать новый расчет →"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/dev-server/src/components/OrderSection.tsx",
                        lineNumber: 1027,
                        columnNumber: 23
                      },
                      void 0
                    )
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/components/OrderSection.tsx",
                    lineNumber: 1016,
                    columnNumber: 21
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/components/OrderSection.tsx",
                    lineNumber: 714,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/OrderSection.tsx",
                  lineNumber: 508,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/OrderSection.tsx",
                lineNumber: 302,
                columnNumber: 13
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/OrderSection.tsx",
              lineNumber: 288,
              columnNumber: 11
            },
            void 0
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/components/OrderSection.tsx",
        lineNumber: 263,
        columnNumber: 9
      },
      void 0
    ) }, void 0, false, {
      fileName: "/dev-server/src/components/OrderSection.tsx",
      lineNumber: 262,
      columnNumber: 7
    }, void 0),
    showCallModal && /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in",
        style: { backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" },
        onClick: () => setShowCallModal(false),
        children: /* @__PURE__ */ jsxDEV(
          "div",
          {
            onClick: (e) => e.stopPropagation(),
            className: "relative w-full max-w-md rounded-3xl p-6 sm:p-8 text-center animate-scale-in",
            style: {
              backgroundColor: "hsla(240,15%,11%,0.98)",
              border: "1px solid hsl(240,9%,20%)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px hsla(266,92%,58%,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  type: "button",
                  onClick: () => setShowCallModal(false),
                  className: "absolute right-4 top-4 text-white/50 hover:text-white transition-colors",
                  "aria-label": "Закрыть",
                  children: /* @__PURE__ */ jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "/dev-server/src/components/OrderSection.tsx",
                    lineNumber: 1063,
                    columnNumber: 15
                  }, void 0)
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/OrderSection.tsx",
                  lineNumber: 1057,
                  columnNumber: 13
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: "w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center",
                  style: { backgroundImage: "linear-gradient(135deg, hsl(263,93%,56%), hsl(306,100%,57%))" },
                  children: /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-9 h-9 text-white" }, void 0, false, {
                    fileName: "/dev-server/src/components/OrderSection.tsx",
                    lineNumber: 1069,
                    columnNumber: 15
                  }, void 0)
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/OrderSection.tsx",
                  lineNumber: 1065,
                  columnNumber: 13
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl sm:text-2xl font-black text-white mb-2", children: "Заявка отправлена!" }, void 0, false, {
                fileName: "/dev-server/src/components/OrderSection.tsx",
                lineNumber: 1071,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm leading-relaxed mb-5", style: { color: "hsl(0,0%,80%)" }, children: "Для быстрой обработки вашего заказа, пожалуйста, позвоните нам:" }, void 0, false, {
                fileName: "/dev-server/src/components/OrderSection.tsx",
                lineNumber: 1072,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "tel:+79851547772",
                  className: "inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-white text-base transition-all duration-200 active:scale-[0.97] hover:brightness-110 hover:shadow-[0_0_24px_hsla(266,92%,58%,0.5)]",
                  style: {
                    backgroundImage: "linear-gradient(0deg, rgba(94,58,238,1) 0%, rgba(197,107,240,1) 100%)",
                    boxShadow: "inset 0 -2px 25px -4px hsl(0,0%,100%)"
                  },
                  children: [
                    /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/dev-server/src/components/OrderSection.tsx",
                      lineNumber: 1083,
                      columnNumber: 15
                    }, void 0),
                    " +7 (985) 154-77-72"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/components/OrderSection.tsx",
                  lineNumber: 1075,
                  columnNumber: 13
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs mt-4", style: { color: "hsl(0,0%,55%)" }, children: "Или дождитесь звонка менеджера — мы свяжемся в ближайшее время." }, void 0, false, {
                fileName: "/dev-server/src/components/OrderSection.tsx",
                lineNumber: 1085,
                columnNumber: 13
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/components/OrderSection.tsx",
            lineNumber: 1048,
            columnNumber: 11
          },
          void 0
        )
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/OrderSection.tsx",
        lineNumber: 1043,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/OrderSection.tsx",
    lineNumber: 261,
    columnNumber: 5
  }, void 0);
};
const scannerImg = "/assets/scanner-Dd6Eu51B.jpg";
const falcovkaImg = "/assets/falcovka-Br_UJBNB.jpg";
const broshyurovkaImg = "/assets/broshyurovka-CchW54Po.jpg";
const perepletImg = "/assets/pereplet-DlO9TyRg.jpg";
const laminationImg = "/assets/lamination-C0jIgD6C.jpg";
const printerImg = "/assets/printer-CAxbVlfG.jpg";
(_g = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _g.call(globalThis, "src/components/ServicesSection.tsx");
const splitTitle = (title) => {
  const words = title.split(" ");
  if (words.length === 1) {
    const mid2 = Math.ceil(title.length / 2);
    return { left: title.slice(0, mid2), right: title.slice(mid2), singleWord: true };
  }
  const mid = Math.ceil(words.length / 2);
  return {
    left: words.slice(0, mid).join(" "),
    right: words.slice(mid).join(" "),
    singleWord: false
  };
};
const ServicesSection = () => {
  const services2 = [
    {
      id: 1,
      title: "Печать проектов",
      description: "Печать чертежей, схем и графиков от А4 до А0+. Точная цветопередача и идеальное соблюдение масштабов (1:1) строго по ГОСТ.",
      icon: Printer,
      image: printerImg
    },
    {
      id: 2,
      title: "Сканирование",
      description: "Оцифровка проектной документации и архивов в высоком разрешении. Сканирование длинномерных и нестандартных форматов.",
      icon: ScanLine,
      image: scannerImg
    },
    {
      id: 3,
      title: "Фальцовка (сложение)",
      description: "Автоматическое сложение широкоформатных листов (А0, А1, А2, А3) до формата А4 или А3 для последующей подшивки в тома или папки.",
      icon: FoldVertical,
      image: falcovkaImg
    },
    {
      id: 4,
      title: "Брошюровка",
      description: "Сборка рабочей и проектной документации на пластиковую пружину. Аккуратный вид и удобство использования.",
      icon: BookOpenCheck,
      image: broshyurovkaImg
    },
    {
      id: 5,
      title: "Твердый переплет",
      description: "Надежный канальный переплет для диссертаций, дипломов и важных томов исполнительной документации. Презентабельно и долговечно.",
      icon: BookLock,
      image: perepletImg
    },
    {
      id: 6,
      title: "Ламинирование",
      description: "Покрытие документов глянцевой пленкой. Защита важных схем и генпланов от влаги, грязи и износа на стройплощадке.",
      icon: ShieldCheck,
      image: laminationImg
    }
  ];
  return /* @__PURE__ */ jsxDEV("section", { id: "services", className: "relative py-16 sm:py-24 bg-white font-sans overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" }, void 0, false, {
      fileName: "/dev-server/src/components/ServicesSection.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-12 sm:mb-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-amber-600 text-xs font-black uppercase tracking-widest mb-6", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-2 rounded-full bg-amber-400 animate-pulse" }, void 0, false, {
            fileName: "/dev-server/src/components/ServicesSection.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, void 0),
          "Наши возможности"
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/ServicesSection.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight mb-6", children: "С чем мы можем вам помочь?" }, void 0, false, {
          fileName: "/dev-server/src/components/ServicesSection.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-base sm:text-lg text-gray-500 font-light leading-relaxed", children: "Выполняем полный цикл постпечатной обработки. От вывода первого листа из плоттера до сшитого тома проектной документации." }, void 0, false, {
          fileName: "/dev-server/src/components/ServicesSection.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/ServicesSection.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5", children: services2.map((service) => {
        const { left, right, singleWord } = splitTitle(service.title);
        return /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "group relative rounded-2xl bg-neutral-900 border border-neutral-800 transition-all duration-400 ease-out hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-[0_8px_40px_-12px_rgba(245,158,11,0.15)] overflow-hidden flex flex-col",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "relative w-full h-40 sm:h-48 overflow-hidden", children: [
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: service.image,
                    alt: service.title,
                    loading: "lazy",
                    className: "w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/ServicesSection.tsx",
                    lineNumber: 100,
                    columnNumber: 19
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" }, void 0, false, {
                  fileName: "/dev-server/src/components/ServicesSection.tsx",
                  lineNumber: 107,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden", children: /* @__PURE__ */ jsxDEV("h3", { className: `text-xl sm:text-2xl font-black text-white tracking-tight text-center whitespace-nowrap flex ${singleWord ? "" : "gap-2"}`, children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "inline-block transition-all duration-700 ease-in-out group-hover:-translate-x-[200px] group-hover:opacity-0", children: left }, void 0, false, {
                    fileName: "/dev-server/src/components/ServicesSection.tsx",
                    lineNumber: 111,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "inline-block transition-all duration-700 ease-in-out group-hover:translate-x-[200px] group-hover:opacity-0", children: right }, void 0, false, {
                    fileName: "/dev-server/src/components/ServicesSection.tsx",
                    lineNumber: 114,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/ServicesSection.tsx",
                  lineNumber: 110,
                  columnNumber: 21
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/components/ServicesSection.tsx",
                  lineNumber: 109,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/ServicesSection.tsx",
                lineNumber: 99,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "p-6 sm:p-8 pt-4 sm:pt-5", children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-400 leading-relaxed font-light", children: service.description }, void 0, false, {
                fileName: "/dev-server/src/components/ServicesSection.tsx",
                lineNumber: 122,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/components/ServicesSection.tsx",
                lineNumber: 121,
                columnNumber: 17
              }, void 0)
            ]
          },
          service.id,
          true,
          {
            fileName: "/dev-server/src/components/ServicesSection.tsx",
            lineNumber: 94,
            columnNumber: 15
          },
          void 0
        );
      }) }, void 0, false, {
        fileName: "/dev-server/src/components/ServicesSection.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-12 sm:mt-16 text-center", children: /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: "#calculator",
          className: "inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-amber-500 text-black rounded-full font-black uppercase tracking-widest text-xs sm:text-sm hover:scale-105 hover:bg-amber-400 transition-all duration-300 shadow-[0_0_40px_rgba(245,158,11,0.2)] active:scale-95",
          children: "Рассчитать стоимость"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/ServicesSection.tsx",
          lineNumber: 133,
          columnNumber: 11
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/components/ServicesSection.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/ServicesSection.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/ServicesSection.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, void 0);
};
(_h = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _h.call(globalThis, "src/components/ui/tabs.tsx");
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/tabs.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  void 0
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/tabs.tsx",
    lineNumber: 27,
    columnNumber: 3
  },
  void 0
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/tabs.tsx",
    lineNumber: 42,
    columnNumber: 3
  },
  void 0
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
(_i = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _i.call(globalThis, "src/components/PriceListSection.tsx");
const bwPrices = [
  { format: "A4", size: "210×297 мм", threshold: 300, retail: "10 ₽", wholesale: "5 ₽" },
  { format: "A3", size: "297×420 мм", threshold: 100, retail: "28 ₽", wholesale: "14 ₽" },
  { format: "A2", size: "420×594 мм", threshold: 50, retail: "60 ₽", wholesale: "30 ₽" },
  { format: "A1", size: "594×841 мм", threshold: 50, retail: "100 ₽", wholesale: "50 ₽" },
  { format: "A0", size: "841×1189 мм", threshold: 50, retail: "200 ₽", wholesale: "100 ₽" }
];
const colorPrices = [
  { format: "A4", size: "210×297 мм", threshold: 300, retail: "20 ₽", wholesale: "10 ₽" },
  { format: "A3", size: "297×420 мм", threshold: 100, retail: "48 ₽", wholesale: "24 ₽" },
  { format: "A2", size: "420×594 мм", threshold: 50, retail: "80 ₽", wholesale: "40 ₽" },
  { format: "A1", size: "594×841 мм", threshold: 50, retail: "140 ₽", wholesale: "70 ₽" },
  { format: "A0", size: "841×1189 мм", threshold: 50, retail: "220 ₽", wholesale: "110 ₽" }
];
const scanPrices = [
  { format: "A4", size: "210×297 мм", price: "10 ₽" },
  { format: "A3", size: "297×420 мм", price: "20 ₽" },
  { format: "A2", size: "420×594 мм", price: "90 ₽" },
  { format: "A1", size: "594×841 мм", price: "120 ₽" },
  { format: "A0", size: "841×1189 мм", price: "160 ₽" }
];
const foldingPrices = [
  { format: "A3", price: "5 ₽" },
  { format: "A2", price: "8 ₽" },
  { format: "A1", price: "14 ₽" },
  { format: "A0", price: "18 ₽" }
];
const services = [
  { name: "Фальцовка по ГОСТ", desc: "Сложение в формат А4", price: "folding" },
  { name: "Брошюровка на пружину", desc: "До 510 листов", price: "binding" },
  { name: "Твердый переплет", desc: "Для томов проектной документации", price: "600 ₽" }
];
const PriceCard = ({
  item,
  variant
}) => {
  const isBw = variant === "bw";
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: `group relative rounded-2xl border p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 ${isBw ? "bg-card/40 backdrop-blur-sm border-border/30 hover:border-border/60 hover:bg-card/70" : "border-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-purple-500/10"}`,
      style: !isBw ? {
        background: "linear-gradient(135deg, hsla(280,70%,40%,0.85), hsla(330,80%,45%,0.85), hsla(20,90%,50%,0.85), hsla(50,85%,50%,0.85))",
        backgroundSize: "300% 300%",
        animation: "gradient-morph 8s ease infinite"
      } : void 0,
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline justify-between mb-2", children: [
          /* @__PURE__ */ jsxDEV(
            "span",
            {
              className: `text-xl sm:text-2xl font-bold tracking-tight ${isBw ? "text-foreground" : "text-white"}`,
              children: item.format
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/PriceListSection.tsx",
              lineNumber: 71,
              columnNumber: 9
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("span", { className: `text-xs ${isBw ? "text-muted-foreground" : "text-white/70"}`, children: item.size }, void 0, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/PriceListSection.tsx",
          lineNumber: 70,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: `pt-2 space-y-1.5 border-t ${isBw ? "border-border/20" : "border-white/20"}`, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxDEV("span", { className: `text-xs ${isBw ? "text-muted-foreground/60" : "text-white/50"}`, children: "розница (×2)" }, void 0, false, {
              fileName: "/dev-server/src/components/PriceListSection.tsx",
              lineNumber: 85,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: `text-sm font-semibold ${isBw ? "text-foreground" : "text-white"}`, children: item.retail }, void 0, false, {
              fileName: "/dev-server/src/components/PriceListSection.tsx",
              lineNumber: 86,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 84,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxDEV("span", { className: `text-xs ${isBw ? "text-muted-foreground/60" : "text-white/50"}`, children: [
              "опт от ",
              item.threshold,
              " шт"
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/PriceListSection.tsx",
              lineNumber: 91,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              "span",
              {
                className: `text-sm font-semibold ${isBw ? "text-emerald-400" : "text-yellow-200 drop-shadow-sm"}`,
                children: item.wholesale
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/PriceListSection.tsx",
                lineNumber: 92,
                columnNumber: 11
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 90,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/PriceListSection.tsx",
          lineNumber: 83,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/PriceListSection.tsx",
      lineNumber: 53,
      columnNumber: 5
    },
    void 0
  );
};
const ServiceCard = ({ item }) => {
  const [foldingIndex, setFoldingIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const isFolding = item.price === "folding";
  useEffect(() => {
    if (!isFolding) return;
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setFoldingIndex((prev) => (prev + 1) % foldingPrices.length);
        setAnimating(false);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, [isFolding]);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "group relative rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm p-3 sm:p-4 transition-all duration-300 hover:border-border/60 hover:bg-card/70 hover:-translate-y-1 h-full flex flex-col justify-between",
      children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-lg sm:text-xl font-bold text-foreground tracking-tight", children: item.name }, void 0, false, {
          fileName: "/dev-server/src/components/PriceListSection.tsx",
          lineNumber: 126,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "pt-2 border-t border-border/20 mt-2 space-y-1", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: item.desc }, void 0, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 128,
            columnNumber: 9
          }, void 0),
          isFolding ? /* @__PURE__ */ jsxDEV("div", { className: "h-7 overflow-hidden relative", children: /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "flex items-center gap-2 absolute inset-x-0 transition-all duration-500 ease-in-out",
              style: {
                transform: animating ? "translateY(-100%)" : "translateY(0)",
                opacity: animating ? 0 : 1
              },
              children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-semibold text-foreground", children: foldingPrices[foldingIndex].format }, void 0, false, {
                  fileName: "/dev-server/src/components/PriceListSection.tsx",
                  lineNumber: 138,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "text-muted-foreground", children: "—" }, void 0, false, {
                  fileName: "/dev-server/src/components/PriceListSection.tsx",
                  lineNumber: 139,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-semibold text-emerald-400", children: foldingPrices[foldingIndex].price }, void 0, false, {
                  fileName: "/dev-server/src/components/PriceListSection.tsx",
                  lineNumber: 140,
                  columnNumber: 15
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/components/PriceListSection.tsx",
              lineNumber: 131,
              columnNumber: 13
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 130,
            columnNumber: 11
          }, void 0) : item.price === "binding" ? /* @__PURE__ */ jsxDEV("p", { className: "text-base font-semibold", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-foreground", children: "А4 — " }, void 0, false, {
              fileName: "/dev-server/src/components/PriceListSection.tsx",
              lineNumber: 145,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-emerald-400", children: "100 ₽" }, void 0, false, {
              fileName: "/dev-server/src/components/PriceListSection.tsx",
              lineNumber: 145,
              columnNumber: 59
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-muted-foreground", children: " / " }, void 0, false, {
              fileName: "/dev-server/src/components/PriceListSection.tsx",
              lineNumber: 146,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-foreground", children: "А3 — " }, void 0, false, {
              fileName: "/dev-server/src/components/PriceListSection.tsx",
              lineNumber: 147,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-emerald-400", children: "200 ₽" }, void 0, false, {
              fileName: "/dev-server/src/components/PriceListSection.tsx",
              lineNumber: 147,
              columnNumber: 59
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 144,
            columnNumber: 11
          }, void 0) : /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-semibold text-emerald-400", children: item.price }, void 0, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 150,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/PriceListSection.tsx",
          lineNumber: 127,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/PriceListSection.tsx",
      lineNumber: 123,
      columnNumber: 5
    },
    void 0
  );
};
const PriceListSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { id: "pricelist", className: "py-16 sm:py-24 px-3 sm:px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(
      "h2",
      {
        className: "text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-foreground text-center mb-10 sm:mb-14 opacity-0",
        style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards" },
        children: "Прайс-лист"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/PriceListSection.tsx",
        lineNumber: 164,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "opacity-0",
        style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 250ms forwards" },
        children: /* @__PURE__ */ jsxDEV(Tabs, { defaultValue: "bw", className: "w-full", children: [
          /* @__PURE__ */ jsxDEV(TabsList, { className: "w-full bg-secondary/60 backdrop-blur-sm border border-border/30 rounded-xl h-auto sm:h-12 p-1 mb-8 grid grid-cols-2 sm:grid-cols-4 gap-1", children: [
            /* @__PURE__ */ jsxDEV(
              TabsTrigger,
              {
                value: "bw",
                className: "rounded-lg text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-md transition-all",
                children: "Черно-белая"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/PriceListSection.tsx",
                lineNumber: 177,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              TabsTrigger,
              {
                value: "color",
                className: "rounded-lg text-xs sm:text-sm color-tab-trigger data-[state=active]:text-white data-[state=active]:shadow-md transition-all [&[data-state=active]]:border-0",
                children: [
                  /* @__PURE__ */ jsxDEV("style", { children: `
                  .color-tab-trigger[data-state="active"] {
                    background: linear-gradient(135deg, hsla(280,70%,40%,0.85), hsla(330,80%,45%,0.85), hsla(20,90%,50%,0.85), hsla(50,85%,50%,0.85)) !important;
                    background-size: 300% 300% !important;
                    animation: gradient-morph 8s ease infinite !important;
                  }
                ` }, void 0, false, {
                    fileName: "/dev-server/src/components/PriceListSection.tsx",
                    lineNumber: 187,
                    columnNumber: 17
                  }, void 0),
                  "Цветная"
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/components/PriceListSection.tsx",
                lineNumber: 183,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              TabsTrigger,
              {
                value: "scan",
                className: "rounded-lg text-xs sm:text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all",
                children: "Сканирование"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/PriceListSection.tsx",
                lineNumber: 196,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              TabsTrigger,
              {
                value: "services",
                className: "rounded-lg text-xs sm:text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all",
                children: "Сборка"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/PriceListSection.tsx",
                lineNumber: 202,
                columnNumber: 15
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 176,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "bw", className: "mt-0", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-start", children: bwPrices.map((item) => /* @__PURE__ */ jsxDEV(PriceCard, { item, variant: "bw" }, item.format, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 213,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 211,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 210,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "color", className: "mt-0", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-start", children: colorPrices.map((item) => /* @__PURE__ */ jsxDEV(PriceCard, { item, variant: "color" }, item.format, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 221,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 219,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 218,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "scan", className: "mt-0", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-start", children: scanPrices.map((item) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "group relative rounded-2xl border p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 bg-card/40 backdrop-blur-sm border-border/30 hover:border-border/60 hover:bg-card/70",
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline justify-between mb-2", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-xl sm:text-2xl font-bold tracking-tight text-foreground", children: item.format }, void 0, false, {
                    fileName: "/dev-server/src/components/PriceListSection.tsx",
                    lineNumber: 234,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-muted-foreground", children: item.size }, void 0, false, {
                    fileName: "/dev-server/src/components/PriceListSection.tsx",
                    lineNumber: 235,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/PriceListSection.tsx",
                  lineNumber: 233,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "pt-2 border-t border-border/20", children: /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-semibold text-emerald-400", children: item.price }, void 0, false, {
                  fileName: "/dev-server/src/components/PriceListSection.tsx",
                  lineNumber: 238,
                  columnNumber: 23
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/components/PriceListSection.tsx",
                  lineNumber: 237,
                  columnNumber: 21
                }, void 0)
              ]
            },
            item.format,
            true,
            {
              fileName: "/dev-server/src/components/PriceListSection.tsx",
              lineNumber: 229,
              columnNumber: 19
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 227,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 226,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(TabsContent, { value: "services", className: "mt-0", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 items-start", children: services.map((item) => /* @__PURE__ */ jsxDEV(ServiceCard, { item }, item.name, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 248,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 246,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 245,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/PriceListSection.tsx",
          lineNumber: 175,
          columnNumber: 11
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/PriceListSection.tsx",
        lineNumber: 171,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "mt-8 mx-auto max-w-2xl rounded-2xl border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm px-5 py-4 text-center opacity-0",
        style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 350ms forwards" },
        children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-base sm:text-lg font-bold text-white", children: "🎉 Скидка 20% на первый заказ от 3 000 ₽!" }, void 0, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 259,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs sm:text-sm text-white/70 mt-1", children: "Применяется автоматически при оформлении через калькулятор." }, void 0, false, {
            fileName: "/dev-server/src/components/PriceListSection.tsx",
            lineNumber: 262,
            columnNumber: 11
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/components/PriceListSection.tsx",
        lineNumber: 255,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "mt-4 mx-auto max-w-2xl rounded-2xl border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm px-5 py-3 text-center opacity-0",
        style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 400ms forwards" },
        children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-amber-200", children: "Извините, в связи с высокой загруженностью минимальный заказ — 500 ₽." }, void 0, false, {
          fileName: "/dev-server/src/components/PriceListSection.tsx",
          lineNumber: 271,
          columnNumber: 11
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/PriceListSection.tsx",
        lineNumber: 267,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      "p",
      {
        className: "text-center text-sm text-muted-foreground/70 mt-6 opacity-0",
        style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 400ms forwards" },
        children: "* Цены не являются окончательными. При объёмных и регулярных заказах предоставляется скидка."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/PriceListSection.tsx",
        lineNumber: 276,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/PriceListSection.tsx",
    lineNumber: 163,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/PriceListSection.tsx",
    lineNumber: 162,
    columnNumber: 5
  }, void 0);
};
(_j = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _j.call(globalThis, "src/components/ui/dialog.tsx");
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/dialog.tsx",
    lineNumber: 19,
    columnNumber: 3
  },
  void 0
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(DialogPortal, { children: [
  /* @__PURE__ */ jsxDEV(DialogOverlay, {}, void 0, false, {
    fileName: "/dev-server/src/components/ui/dialog.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDEV(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/components/ui/dialog.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "Close" }, void 0, false, {
            fileName: "/dev-server/src/components/ui/dialog.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/ui/dialog.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/ui/dialog.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    void 0
  )
] }, void 0, true, {
  fileName: "/dev-server/src/components/ui/dialog.tsx",
  lineNumber: 34,
  columnNumber: 3
}, void 0));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/dialog.tsx",
    lineNumber: 68,
    columnNumber: 3
  },
  void 0
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(DialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/dialog.tsx",
  lineNumber: 80,
  columnNumber: 3
}, void 0));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const execDoc1 = "/assets/exec-doc-1-BjzeC0G8.webp";
const execDoc2 = "/assets/exec-doc-2-Dtzd4Ezd.webp";
const execDoc3 = "/assets/exec-doc-3-BIi4Y_MO.webp";
const execDoc4 = "/assets/exec-doc-4-DTwJLtzp.webp";
const execDoc5 = "/assets/exec-doc-5-iGMUC685.webp";
const execDoc6 = "/assets/exec-doc-6-B3i648xi.webp";
const projDoc1 = "/assets/proj-doc-1-C_nRS7B0.webp";
const projDoc2 = "/assets/proj-doc-2-CmhI3zpm.webp";
const projDoc3 = "/assets/proj-doc-3-C9exm66w.webp";
const projDoc4 = "/assets/proj-doc-4-BD8uKMSP.webp";
const projDoc5 = "/assets/proj-doc-5-DHPJeQLi.webp";
const projDoc6 = "/assets/proj-doc-6-DNkY6pZe.webp";
const projDoc7 = "/assets/proj-doc-7-CXuoFLOx.webp";
const binding1 = "/assets/binding-1-BpliGvHD.webp";
const binding2 = "/assets/binding-2-C5EaAYXG.webp";
const binding3 = "/assets/binding-3-BVeIkLyU.webp";
const binding4 = "/assets/binding-4-id69TeLW.webp";
const binding5 = "/assets/binding-5-CLjuUYqo.webp";
const binding6 = "/assets/binding-6-D1VailG2.webp";
const binding7 = "/assets/binding-7-DnK4bn1x.webp";
const binding8 = "/assets/binding-8-rD9JqXmr.webp";
const workDoc1 = "/assets/work-doc-1-PxrVoWMh.webp";
const workDoc2 = "/assets/work-doc-2-m9uQmXrJ.webp";
const workDoc3 = "/assets/work-doc-3-DRC3E3d8.webp";
const workDoc4 = "/assets/work-doc-4-tpDnf2wD.webp";
const workDoc5 = "/assets/work-doc-5-BsJqzgbl.webp";
const drawings1 = "/assets/drawings-1-C37kW4zq.webp";
const drawings2 = "/assets/drawings-2-DiZFAFbu.webp";
const drawings3 = "/assets/drawings-3-BLuhyf7n.webp";
const drawings4 = "/assets/drawings-4-D-5cUfcS.webp";
const drawings5 = "/assets/drawings-5-D9w9yhW8.webp";
const drawings6 = "/assets/drawings-6-CiYnM-Xk.webp";
const drawings7 = "/assets/drawings-7-SL1izoR9.webp";
const folding1 = "/assets/folding-1-BCjGWtBU.webp";
const folding2 = "/assets/folding-2-Xyc01ONe.webp";
const folding3 = "/assets/folding-3-qo6N4ls-.webp";
const folding4 = "/assets/folding-4-Dj0hRub2.webp";
(_k = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _k.call(globalThis, "src/components/ProjectsSection.tsx");
const projects = [
  { images: [projDoc2, projDoc3, projDoc4, projDoc1, projDoc5, projDoc6, projDoc7], title: "Печать проектной документации", tags: ["А1", "Фальцовка"], altBase: "Печать проектной документации А1 с фальцовкой — распечатать проектную документацию" },
  { images: [workDoc1, workDoc2, workDoc3, workDoc4, workDoc5], title: "Печать рабочей документации", tags: ["А0", "ЧБ"], altBase: "Печать рабочей документации А0 чб — распечатать рабочую документацию (рабочку)" },
  { images: [execDoc1, execDoc2, execDoc3, execDoc4, execDoc5, execDoc6], title: "Исполнительная документация", tags: ["А3", "Брошюровка"], altBase: "Печать исполнительной документации А3 с брошюровкой — распечатать исполнительную" },
  { images: [drawings1, drawings2, drawings3, drawings4, drawings5, drawings6, drawings7], title: "Печать чертежей", tags: ["А1", "Цвет"], altBase: "Цветная печать чертежа А1 — распечатать чертеж в типографии" },
  { images: [binding1, binding2, binding3, binding4, binding5, binding6, binding7, binding8], title: "Брошюровка на пластиковую пружину", tags: ["А4", "Пружина"], altBase: "Брошюровка документации А4 на пластиковую пружину — печать А4 чб и цвет" },
  { images: [folding1, folding2, folding3, folding4], title: "Фальцовка чертежей", tags: ["А0", "Фальцовка"], altBase: "Фальцовка чертежа А0 по ГОСТ — печать А0 и фальцовка" }
];
const SWIPE_THRESHOLD = 40;
const ImageSlider = ({
  images,
  title,
  altBase,
  onImageClick,
  rounded = "",
  aspect = "aspect-[4/3]",
  showDots = true
}) => {
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [hovering, setHovering] = useState(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const lastX = useRef(0);
  const lastT = useRef(0);
  const velocity = useRef(0);
  const axisLocked = useRef(null);
  const isTouch = useRef(false);
  const containerRef = useRef(null);
  const hasMultiple = images.length > 1;
  const go = (delta) => {
    setIndex((prev) => Math.max(0, Math.min(images.length - 1, prev + delta)));
  };
  const onTouchStart = (e) => {
    if (!hasMultiple) return;
    const t = e.touches[0];
    isTouch.current = true;
    setHovering(false);
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
    lastX.current = t.clientX;
    lastT.current = performance.now();
    velocity.current = 0;
    axisLocked.current = null;
    setDragging(true);
  };
  const onTouchMove = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const t = e.touches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;
    if (axisLocked.current === null) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      axisLocked.current = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
    }
    if (axisLocked.current === "y") return;
    const now = performance.now();
    const dt = now - lastT.current;
    if (dt > 0) velocity.current = (t.clientX - lastX.current) / dt;
    lastX.current = t.clientX;
    lastT.current = now;
    const atEdge = dx > 0 && index === 0 || dx < 0 && index === images.length - 1;
    setDragX(atEdge ? dx * 0.3 : dx);
  };
  const onTouchEnd = () => {
    var _a2;
    if (touchStartX.current === null) return;
    const width = ((_a2 = containerRef.current) == null ? void 0 : _a2.offsetWidth) || 1;
    const dx = dragX;
    const v = velocity.current;
    const shouldSwipe = Math.abs(dx) > Math.min(SWIPE_THRESHOLD, width * 0.18) || Math.abs(v) > 0.4;
    if (shouldSwipe && axisLocked.current === "x") go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
    touchStartY.current = null;
    axisLocked.current = null;
    setDragging(false);
    setDragX(0);
  };
  const zoneTimer = useRef(null);
  const pendingZone = useRef(null);
  useEffect(() => {
    return () => {
      if (zoneTimer.current) window.clearTimeout(zoneTimer.current);
    };
  }, []);
  const onMouseMove = (e) => {
    if (!hasMultiple || isTouch.current) return;
    setHovering(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const zoneWidth = rect.width / images.length;
    const ratio = Math.max(0, Math.min(0.9999, x / rect.width));
    let zone = Math.floor(ratio * images.length);
    const offsetInZone = x - zone * zoneWidth;
    const edge = zoneWidth * 0.18;
    if (Math.abs(zone - index) === 1 && (offsetInZone < edge || offsetInZone > zoneWidth - edge)) {
      zone = index;
    }
    if (zone === index) {
      pendingZone.current = null;
      if (zoneTimer.current) {
        window.clearTimeout(zoneTimer.current);
        zoneTimer.current = null;
      }
      return;
    }
    if (pendingZone.current === zone) return;
    pendingZone.current = zone;
    if (zoneTimer.current) window.clearTimeout(zoneTimer.current);
    zoneTimer.current = window.setTimeout(() => {
      if (pendingZone.current !== null) setIndex(pendingZone.current);
      pendingZone.current = null;
      zoneTimer.current = null;
    }, 120);
  };
  const onMouseLeave = () => {
    if (isTouch.current) return;
    if (zoneTimer.current) {
      window.clearTimeout(zoneTimer.current);
      zoneTimer.current = null;
    }
    pendingZone.current = null;
    setHovering(false);
    setIndex(0);
  };
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref: containerRef,
      className: `relative ${aspect} overflow-hidden ${rounded} bg-black/40 group/slider touch-pan-y select-none`,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onTouchCancel: onTouchEnd,
      onMouseMove,
      onMouseLeave,
      children: [
        hovering ? /* @__PURE__ */ jsxDEV(
          "button",
          {
            type: "button",
            onClick: () => onImageClick(index),
            className: "absolute inset-0 block h-full w-full cursor-zoom-in",
            "aria-label": `Открыть фото ${index + 1}`,
            children: /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: images[index],
                alt: `${altBase} — фото ${index + 1}`,
                className: "absolute inset-0 h-full w-full object-cover select-none",
                draggable: false
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/ProjectsSection.tsx",
                lineNumber: 246,
                columnNumber: 11
              },
              void 0
            )
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/ProjectsSection.tsx",
            lineNumber: 240,
            columnNumber: 9
          },
          void 0
        ) : /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "flex h-full will-change-transform",
            style: {
              transform: `translate3d(calc(-${index * 100}% + ${dragX}px), 0, 0)`,
              transition: dragging ? "none" : isTouch.current ? "transform 1800ms cubic-bezier(0.22, 0.61, 0.36, 1)" : "transform 5200ms cubic-bezier(0.16, 1, 0.3, 1)"
            },
            children: images.map((src, i) => /* @__PURE__ */ jsxDEV(
              "button",
              {
                type: "button",
                onClick: () => onImageClick(i),
                className: "w-full h-full flex-shrink-0 block cursor-zoom-in",
                "aria-label": `Открыть фото ${i + 1}`,
                children: /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src,
                    alt: `${altBase} — фото ${i + 1}`,
                    loading: "lazy",
                    className: "w-full h-full object-cover pointer-events-none select-none",
                    draggable: false
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/ProjectsSection.tsx",
                    lineNumber: 275,
                    columnNumber: 15
                  },
                  void 0
                )
              },
              i,
              false,
              {
                fileName: "/dev-server/src/components/ProjectsSection.tsx",
                lineNumber: 268,
                columnNumber: 13
              },
              void 0
            ))
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/ProjectsSection.tsx",
            lineNumber: 256,
            columnNumber: 9
          },
          void 0
        ),
        hasMultiple && showDots && /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none", children: images.map((_, i) => /* @__PURE__ */ jsxDEV(
          "span",
          {
            className: `h-1.5 rounded-full transition-all ${i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"}`
          },
          i,
          false,
          {
            fileName: "/dev-server/src/components/ProjectsSection.tsx",
            lineNumber: 293,
            columnNumber: 13
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/components/ProjectsSection.tsx",
          lineNumber: 291,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/ProjectsSection.tsx",
      lineNumber: 229,
      columnNumber: 5
    },
    void 0
  );
};
const Lightbox = ({ project, startIndex, onClose }) => {
  const [index, setIndex] = useState(startIndex);
  const touchStartX = useRef(null);
  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex, project]);
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + project.images.length) % project.images.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % project.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project]);
  if (!project) return null;
  const go = (delta) => setIndex((i) => (i + delta + project.images.length) % project.images.length);
  const hasMultiple = project.images.length > 1;
  return /* @__PURE__ */ jsxDEV(Dialog, { open: !!project, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxDEV(DialogContent, { className: "max-w-[96vw] sm:max-w-5xl w-full p-0 border-0 bg-transparent shadow-none [&>button]:hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "relative w-full", children: [
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        type: "button",
        onClick: onClose,
        className: "absolute top-2 right-2 sm:-top-12 sm:right-0 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 sm:bg-black/70 backdrop-blur-sm border border-white/10 sm:border-white/20 text-white/80 sm:text-white flex items-center justify-center hover:bg-black/70 transition",
        "aria-label": "Закрыть",
        children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4 sm:w-5 sm:h-5" }, void 0, false, {
          fileName: "/dev-server/src/components/ProjectsSection.tsx",
          lineNumber: 347,
          columnNumber: 13
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/ProjectsSection.tsx",
        lineNumber: 341,
        columnNumber: 11
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "relative w-full bg-black/80 rounded-2xl overflow-hidden",
        onTouchStart: (e) => touchStartX.current = e.touches[0].clientX,
        onTouchEnd: (e) => {
          if (touchStartX.current === null) return;
          const diff = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(diff) > SWIPE_THRESHOLD) go(diff < 0 ? 1 : -1);
          touchStartX.current = null;
        },
        children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: project.images[index],
              alt: `${project.altBase} — фото ${index + 1}`,
              className: "w-full max-h-[85vh] object-contain"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/ProjectsSection.tsx",
              lineNumber: 360,
              columnNumber: 13
            },
            void 0
          ),
          hasMultiple && /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                type: "button",
                onClick: () => go(-1),
                className: "absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-black/30 sm:bg-black/60 backdrop-blur-sm border border-white/10 sm:border-white/20 text-white/70 sm:text-white flex items-center justify-center hover:bg-black/80 transition",
                "aria-label": "Предыдущее фото",
                children: /* @__PURE__ */ jsxDEV(ChevronLeft, { className: "w-3.5 h-3.5 sm:w-5 sm:h-5" }, void 0, false, {
                  fileName: "/dev-server/src/components/ProjectsSection.tsx",
                  lineNumber: 374,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/ProjectsSection.tsx",
                lineNumber: 368,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                type: "button",
                onClick: () => go(1),
                className: "absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-black/30 sm:bg-black/60 backdrop-blur-sm border border-white/10 sm:border-white/20 text-white/70 sm:text-white flex items-center justify-center hover:bg-black/80 transition",
                "aria-label": "Следующее фото",
                children: /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-3.5 h-3.5 sm:w-5 sm:h-5" }, void 0, false, {
                  fileName: "/dev-server/src/components/ProjectsSection.tsx",
                  lineNumber: 382,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/ProjectsSection.tsx",
                lineNumber: 376,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/50 sm:bg-black/60 backdrop-blur-sm text-white/90 text-[11px] sm:text-xs font-medium", children: [
              index + 1,
              " / ",
              project.images.length
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/ProjectsSection.tsx",
              lineNumber: 385,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/ProjectsSection.tsx",
            lineNumber: 367,
            columnNumber: 15
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/components/ProjectsSection.tsx",
        lineNumber: 350,
        columnNumber: 11
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("p", { className: "mt-3 text-center text-white/90 text-sm sm:text-base font-medium", children: project.title }, void 0, false, {
      fileName: "/dev-server/src/components/ProjectsSection.tsx",
      lineNumber: 392,
      columnNumber: 11
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/ProjectsSection.tsx",
    lineNumber: 340,
    columnNumber: 9
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/ProjectsSection.tsx",
    lineNumber: 339,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/ProjectsSection.tsx",
    lineNumber: 338,
    columnNumber: 5
  }, void 0);
};
const ProjectCard = ({
  project,
  onOpen
}) => /* @__PURE__ */ jsxDEV(
  "article",
  {
    "data-project-card": true,
    className: "group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] flex-shrink-0 w-[80%] max-w-[360px] sm:w-auto sm:max-w-none snap-center",
    children: [
      /* @__PURE__ */ jsxDEV(
        ImageSlider,
        {
          images: project.images,
          title: project.title,
          altBase: project.altBase,
          onImageClick: (i) => onOpen(project, i),
          aspect: "aspect-[4/3]"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/ProjectsSection.tsx",
          lineNumber: 412,
          columnNumber: 5
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "p-4 sm:p-5", children: /* @__PURE__ */ jsxDEV("h3", { className: "text-base sm:text-lg font-semibold text-foreground", children: project.title }, void 0, false, {
        fileName: "/dev-server/src/components/ProjectsSection.tsx",
        lineNumber: 420,
        columnNumber: 7
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/ProjectsSection.tsx",
        lineNumber: 419,
        columnNumber: 5
      }, void 0)
    ]
  },
  void 0,
  true,
  {
    fileName: "/dev-server/src/components/ProjectsSection.tsx",
    lineNumber: 408,
    columnNumber: 3
  },
  void 0
);
const ProjectsSection = () => {
  const [active, setActive] = useState(null);
  const scrollerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const cards = Array.from(scroller.querySelectorAll("[data-project-card]"));
    if (!cards.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = cards.indexOf(visible.target);
          if (idx >= 0) setActiveCard(idx);
        }
      },
      { root: scroller, threshold: [0.5, 0.75, 1] }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);
  const scrollToCard = (idx) => {
    var _a2;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const cards = scroller.querySelectorAll("[data-project-card]");
    (_a2 = cards[idx]) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };
  return /* @__PURE__ */ jsxDEV("section", { id: "projects", className: "py-12 sm:py-16 md:py-24 px-3 sm:px-4 scroll-mt-24", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "container max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "mb-6 sm:mb-12 opacity-0",
          style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards" },
          children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-foreground", children: "Наши выполненные проекты" }, void 0, false, {
              fileName: "/dev-server/src/components/ProjectsSection.tsx",
              lineNumber: 468,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "mt-3 text-muted-foreground text-base sm:text-lg max-w-2xl", children: "Примеры работ, которые мы напечатали для наших клиентов" }, void 0, false, {
              fileName: "/dev-server/src/components/ProjectsSection.tsx",
              lineNumber: 471,
              columnNumber: 11
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/components/ProjectsSection.tsx",
          lineNumber: 464,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            ref: scrollerRef,
            className: "flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory -mx-3 sm:mx-0 px-3 sm:px-0 pb-2 sm:pb-0 scrollbar-hide opacity-0",
            style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 200ms forwards" },
            children: projects.map((project) => /* @__PURE__ */ jsxDEV(
              ProjectCard,
              {
                project,
                onOpen: (p, i) => setActive({ project: p, index: i })
              },
              project.title,
              false,
              {
                fileName: "/dev-server/src/components/ProjectsSection.tsx",
                lineNumber: 483,
                columnNumber: 15
              },
              void 0
            ))
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/ProjectsSection.tsx",
            lineNumber: 477,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-4 flex items-center justify-center gap-3 sm:hidden", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-1.5", children: projects.map((_, i) => /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              onClick: () => scrollToCard(i),
              className: `h-1.5 rounded-full transition-all ${i === activeCard ? "w-6 bg-primary" : "w-1.5 bg-white/30 hover:bg-white/50"}`,
              "aria-label": `Перейти к проекту ${i + 1}`
            },
            i,
            false,
            {
              fileName: "/dev-server/src/components/ProjectsSection.tsx",
              lineNumber: 495,
              columnNumber: 17
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/components/ProjectsSection.tsx",
            lineNumber: 493,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-muted-foreground tabular-nums", children: [
            activeCard + 1,
            " / ",
            projects.length
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/ProjectsSection.tsx",
            lineNumber: 506,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/ProjectsSection.tsx",
          lineNumber: 492,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/ProjectsSection.tsx",
        lineNumber: 476,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/ProjectsSection.tsx",
      lineNumber: 463,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      Lightbox,
      {
        project: (active == null ? void 0 : active.project) ?? null,
        startIndex: (active == null ? void 0 : active.index) ?? 0,
        onClose: () => setActive(null)
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/ProjectsSection.tsx",
        lineNumber: 513,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/ProjectsSection.tsx",
    lineNumber: 462,
    columnNumber: 5
  }, void 0);
};
(_l = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _l.call(globalThis, "src/components/ProductionLoadWidget.tsx");
function baseLoadForHour(h, m) {
  const t = h + m / 60;
  if (t <= 10) return 65;
  if (t >= 19) return 80;
  return 65 + (t - 10) / 9 * 15;
}
const FORMATS = [
  { key: "A4", label: "А4", min: 3920, max: 6720 },
  { key: "A3", label: "А3", min: 1400, max: 3080 },
  { key: "A2", label: "А2", min: 670, max: 1120 },
  { key: "A1", label: "А1", min: 560, max: 840 },
  { key: "A0", label: "А0", min: 450, max: 670 }
];
function seeded(seed) {
  let s = seed * 2654435761 % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = s * 16807 % 2147483647;
    return (s - 1) / 2147483646;
  };
}
function dayBlock(now) {
  const day = Math.floor(
    new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 864e5
  );
  let block = 0;
  let cursor = 0;
  const rnd = seeded(1234);
  while (cursor <= day % 3650) {
    cursor += rnd() < 0.5 ? 2 : 3;
    block++;
  }
  return block + Math.floor(day / 3650) * 1e3;
}
const ROTATING = /* @__PURE__ */ new Set(["A2", "A1", "A0"]);
function targetMultiplier(now) {
  const day = Math.floor(
    new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 864e5
  );
  const phase = ((day - 20660) % 6 + 6) % 6;
  const step = phase <= 3 ? phase : 6 - phase;
  return 1 + step * 0.1;
}
function eveningTargets(now) {
  const rndRot = seeded(dayBlock(now) + 77);
  const rndFixed = seeded(4242);
  const mult = targetMultiplier(now);
  const out = {};
  for (const f of FORMATS) {
    const rnd = ROTATING.has(f.key) ? rndRot : rndFixed;
    const raw = (f.min + rnd() * (f.max - f.min)) * mult;
    out[f.key] = Math.round(raw / 10) * 10;
  }
  return out;
}
function dayProgress(now) {
  const minutes = (now.getHours() - 10) * 60 + now.getMinutes();
  const total = 9 * 60;
  return Math.min(1, Math.max(0, minutes / total));
}
function sheetsForNow(now) {
  const targets = eveningTargets(now);
  const p = dayProgress(now);
  const out = {};
  for (const f of FORMATS) {
    out[f.key] = Math.round(targets[f.key] * p / 10) * 10;
  }
  return out;
}
function nextSlot(now) {
  const d = new Date(now.getTime() + 30 * 60 * 1e3);
  const t = d.getHours() + d.getMinutes() / 60;
  if (t < 10) return "before";
  if (t > 19) return "after";
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}
function useCountUp(target, active, duration = 1600) {
  const [value, setValue] = useState(0);
  const valueRef = useRef(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const from = valueRef.current;
    const delta = target - from;
    if (Math.abs(delta) < 1e-3) return;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = from + delta * eased;
      valueRef.current = next;
      setValue(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}
const FORMAT_ACCENTS = {
  A4: "from-sky-500/25 to-cyan-400/10 text-sky-300 border-sky-400/30",
  A3: "from-violet-500/25 to-fuchsia-400/10 text-violet-300 border-violet-400/30",
  A2: "from-emerald-500/25 to-teal-400/10 text-emerald-300 border-emerald-400/30",
  A1: "from-amber-500/25 to-orange-400/10 text-amber-300 border-amber-400/30",
  A0: "from-rose-500/25 to-pink-400/10 text-rose-300 border-rose-400/30"
};
const FormatStat = ({
  label,
  target,
  active,
  accent
}) => {
  const value = useCountUp(target, active, 2e3);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: `flex flex-col items-center rounded-xl border bg-gradient-to-br p-2 sm:p-3 transition-transform duration-300 hover:-translate-y-0.5 ${accent}`,
      children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] opacity-90", children: label }, void 0, false, {
          fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
          lineNumber: 163,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "mt-1 text-base sm:text-xl md:text-2xl font-bold tracking-tight tabular-nums text-foreground", children: Math.round(value).toLocaleString("ru-RU") }, void 0, false, {
          fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
          lineNumber: 164,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
      lineNumber: 160,
      columnNumber: 5
    },
    void 0
  );
};
const ProductionLoadWidget = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [mounted, setMounted] = useState(false);
  const baseRef = useRef(75);
  const [load, setLoad] = useState(75);
  const [sheets, setSheets] = useState({
    A4: 0,
    A3: 0,
    A2: 0,
    A1: 0,
    A0: 0
  });
  const [slot, setSlot] = useState("--:--");
  useEffect(() => {
    const now = /* @__PURE__ */ new Date();
    const base = baseLoadForHour(now.getHours(), now.getMinutes());
    baseRef.current = base;
    setLoad(base);
    setSheets(sheetsForNow(now));
    setSlot(nextSlot(now));
    setMounted(true);
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!inView) return;
    let timeout;
    const schedule = () => {
      timeout = setTimeout(() => {
        const now = /* @__PURE__ */ new Date();
        const base = baseLoadForHour(now.getHours(), now.getMinutes());
        baseRef.current = base;
        const delta = Math.random() < 0.5 ? -1 : 0;
        setLoad(Math.min(80, Math.max(65, Math.round(base) + delta)));
        schedule();
      }, 15e3 + Math.random() * 5e3);
    };
    schedule();
    return () => clearTimeout(timeout);
  }, [inView]);
  useEffect(() => {
    if (!inView) return;
    let timeout;
    const schedule = () => {
      timeout = setTimeout(() => {
        setSheets((prev) => ({
          A4: prev.A4 + 6 + Math.round(Math.random() * 8),
          A3: prev.A3 + 3 + Math.round(Math.random() * 4),
          A2: prev.A2 + 1 + Math.round(Math.random() * 2),
          A1: prev.A1 + 1 + Math.round(Math.random() * 2),
          A0: prev.A0 + Math.round(Math.random())
        }));
        setSlot(nextSlot(/* @__PURE__ */ new Date()));
        schedule();
      }, 4e4 + Math.random() * 2e4);
    };
    schedule();
    return () => clearTimeout(timeout);
  }, [inView]);
  const active = inView && mounted;
  const animatedLoad = useCountUp(load, active, 1800);
  const radius = 76;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - animatedLoad / 100);
  const ratio = Math.min(1, Math.max(0, (animatedLoad - 65) / (80 - 65)));
  const hue = 158 - 8 * ratio;
  const mainColor = `hsl(${hue} 62% 45%)`;
  const lightColor = `hsl(${hue} 58% 60%)`;
  return /* @__PURE__ */ jsxDEV("section", { id: "production-load", className: "px-3 sm:px-4 py-12 sm:py-20", children: /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref,
      className: "container max-w-5xl mx-auto relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm",
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" }, void 0, false, {
          fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
          lineNumber: 270,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" }, void 0, false, {
          fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
          lineNumber: 271,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 sm:gap-10 md:gap-16 p-5 sm:p-8 md:p-12 items-center relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "relative mx-auto w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]", children: [
            /* @__PURE__ */ jsxDEV("svg", { viewBox: "0 0 200 200", className: "w-full h-full -rotate-90 overflow-visible", children: [
              /* @__PURE__ */ jsxDEV("defs", { children: /* @__PURE__ */ jsxDEV("linearGradient", { id: "loadGrad", x1: "0", y1: "0", x2: "1", y2: "1", children: [
                /* @__PURE__ */ jsxDEV("stop", { offset: "0%", stopColor: lightColor }, void 0, false, {
                  fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                  lineNumber: 279,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("stop", { offset: "100%", stopColor: mainColor }, void 0, false, {
                  fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                  lineNumber: 280,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                lineNumber: 278,
                columnNumber: 17
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                lineNumber: 277,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "circle",
                {
                  cx: "100",
                  cy: "100",
                  r: radius,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "6",
                  className: "text-border/70"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                  lineNumber: 283,
                  columnNumber: 15
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(
                "circle",
                {
                  cx: "100",
                  cy: "100",
                  r: radius,
                  fill: "none",
                  stroke: "url(#loadGrad)",
                  strokeWidth: "10",
                  strokeLinecap: "round",
                  strokeDasharray: circumference,
                  strokeDashoffset: offset,
                  style: { filter: `drop-shadow(0 0 6px ${mainColor}80)` },
                  className: "transition-[stroke-dashoffset] duration-1000 ease-out"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                  lineNumber: 292,
                  columnNumber: 15
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
              lineNumber: 275,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxDEV(
                "span",
                {
                  className: "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight tabular-nums transition-colors duration-1000",
                  style: { color: lightColor },
                  children: [
                    Math.round(animatedLoad),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-base sm:text-xl align-top", children: "%" }, void 0, false, {
                      fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                      lineNumber: 312,
                      columnNumber: 17
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                  lineNumber: 307,
                  columnNumber: 15
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("span", { className: "mt-1 text-[9px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: "загрузка" }, void 0, false, {
                fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                lineNumber: 315,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
              lineNumber: 306,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
            lineNumber: 274,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 sm:space-y-8 text-center md:text-left min-w-0", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.24em] text-muted-foreground", children: "Текущая загрузка производства" }, void 0, false, {
                fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                lineNumber: 325,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("h2", { className: "mt-3 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-balance bg-gradient-to-r from-foreground via-sky-200 to-violet-200 bg-clip-text text-transparent", children: "Работаем в штатном режиме и принимаем заказы" }, void 0, false, {
                fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                lineNumber: 328,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
              lineNumber: 324,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "h-px w-full bg-gradient-to-r from-sky-500/50 via-violet-500/40 to-transparent" }, void 0, false, {
              fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
              lineNumber: 333,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: "Отпечатано за сегодня, листов" }, void 0, false, {
                fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                lineNumber: 337,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-4 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3", children: FORMATS.map((f) => /* @__PURE__ */ jsxDEV(
                FormatStat,
                {
                  label: f.label,
                  target: sheets[f.key] ?? 0,
                  active,
                  accent: FORMAT_ACCENTS[f.key]
                },
                f.key,
                false,
                {
                  fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                  lineNumber: 342,
                  columnNumber: 19
                },
                void 0
              )) }, void 0, false, {
                fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                lineNumber: 340,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
              lineNumber: 336,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-start sm:items-center gap-2 sm:gap-3 max-w-full rounded-2xl sm:rounded-full border border-emerald-400/40 bg-gradient-to-r from-emerald-500/15 to-teal-400/10 px-3 sm:px-4 py-2 text-left", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "relative mt-1.5 sm:mt-0 flex h-2 w-2 shrink-0", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" }, void 0, false, {
                  fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                  lineNumber: 355,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-500" }, void 0, false, {
                  fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                  lineNumber: 356,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                lineNumber: 354,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-xs sm:text-sm text-muted-foreground", children: slot === "before" ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                "Сейчас нерабочее время —",
                " ",
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "принимаем заказы с 10 утра" }, void 0, false, {
                  fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                  lineNumber: 366,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                lineNumber: 364,
                columnNumber: 19
              }, void 0) : slot === "after" ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                "Рабочий день завершён —",
                " ",
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: "принимаем заказы на завтра" }, void 0, false, {
                  fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                  lineNumber: 373,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                lineNumber: 371,
                columnNumber: 19
              }, void 0) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                "Ближайшее окно для старта печати:",
                " ",
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground tabular-nums", children: slot }, void 0, false, {
                  fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                  lineNumber: 380,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                lineNumber: 378,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
                lineNumber: 362,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
              lineNumber: 353,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
            lineNumber: 323,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
          lineNumber: 272,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
      lineNumber: 266,
      columnNumber: 7
    },
    void 0
  ) }, void 0, false, {
    fileName: "/dev-server/src/components/ProductionLoadWidget.tsx",
    lineNumber: 265,
    columnNumber: 5
  }, void 0);
};
(_m = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _m.call(globalThis, "src/pages/Index.tsx");
const Index = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const attempts = [50, 200, 500];
      const timers = attempts.map(
        (delay) => setTimeout(() => {
          const el = document.querySelector(location.hash);
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top, behavior: "instant" });
          }
        }, delay)
      );
      return () => timers.forEach(clearTimeout);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-black overflow-x-hidden relative", children: [
    /* @__PURE__ */ jsxDEV(
      SEO,
      {
        title: "Печать чертежей А4, А3, А2, А1, А0 | Проектная и рабочая документация",
        description: "Работа с юрлицами. Срочная печать исполнительной и проектной документации. Цветная и чб печать А4, А3, А2, А1, А0, фальцовка, брошюровка.",
        canonicalPath: "/",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://printprro.ru/#business",
          name: "Типография ПринтПРО",
          url: "https://printprro.ru",
          image: "https://printprro.ru/og-image.jpg",
          telephone: "+7 (985) 154-77-72",
          email: "printprro@gmail.com",
          openingHours: "Mo-Fr 10:00-19:00",
          description: "Срочная инженерная печать чертежей и проектной документации форматов А0–А4. Фальцовка и переплёт по ГОСТ.",
          priceRange: "₽₽",
          areaServed: { "@type": "City", name: "Москва" },
          address: {
            "@type": "PostalAddress",
            addressCountry: "RU",
            addressLocality: "Москва"
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Услуги инженерной печати",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Печать чертежей А0–А4" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Печать проектной документации" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Печать рабочей документации" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Печать исполнительной документации" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Фальцовка чертежей по ГОСТ" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Брошюровка и переплёт" } }
            ]
          }
        }
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 38,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Navbar, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "pt-16 md:pt-24 px-3 sm:px-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "container max-w-6xl mx-auto text-center relative z-10", children: [
        /* @__PURE__ */ jsxDEV(
          "h1",
          {
            className: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-balance text-foreground opacity-0",
            style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0ms forwards" },
            children: [
              "Печать проектной",
              /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 85,
                columnNumber: 13
              }, void 0),
              "и рабочей документации"
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 80,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "p",
          {
            className: "mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 px-2",
            style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 150ms forwards" },
            children: "Срочно распечатать чертежи форматов А4, А3, А2, А1, А0 (цвет/чб) с фальцовкой по ГОСТ"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 88,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(CarouselSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-20 md:pb-32 px-3 sm:px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-6xl mx-auto", children: /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "flex flex-col md:flex-row items-start gap-6 md:gap-16 opacity-0",
        style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards" },
        children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight text-foreground md:max-w-md flex-shrink-0", children: [
            "Точность печати",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 107,
              columnNumber: 15
            }, void 0),
            "для точных проектов"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md", children: "Мы специализируемся на печати чертежей, проектной документации, рабочей документации и исполнительной документации. Гарантируем высокое качество и соблюдение сроков." }, void 0, false, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 111,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-4 pt-2", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-muted-foreground text-sm", children: [
                /* @__PURE__ */ jsxDEV(Crosshair, { className: "w-5 h-5 text-foreground" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 116,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: "Масштаб 1:1" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 117,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 115,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-muted-foreground text-sm", children: [
                /* @__PURE__ */ jsxDEV(FileCheck, { className: "w-5 h-5 text-foreground" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 120,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: "Строго по ГОСТ" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 121,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 119,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-muted-foreground text-sm", children: [
                /* @__PURE__ */ jsxDEV(Clock, { className: "w-5 h-5 text-foreground" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 124,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: "Точно в срок" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Index.tsx",
                  lineNumber: 125,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Index.tsx",
                lineNumber: 123,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Index.tsx",
              lineNumber: 114,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Index.tsx",
            lineNumber: 110,
            columnNumber: 13
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 101,
        columnNumber: 11
      },
      void 0
    ) }, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(ServicesSection, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(ProductionLoadWidget, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(ProjectsSection, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(AnimatedHeroWorks, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(OrderSection, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(PriceListSection, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 143,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Index.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, void 0);
};
export {
  Index as default
};
