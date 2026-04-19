import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { FileText, FileCode, FileType, FileSpreadsheet, Image, Type, CheckCircle, Link2, User, Phone, Loader2, Send, Ruler, ShieldCheck, Truck, Printer, Plus, ShoppingCart, Minus, Trash2, ScanLine, FoldVertical, BookOpenCheck, BookLock, X, ChevronLeft, ChevronRight, Crosshair, FileCheck, Clock } from "lucide-react";
import { S as SEO, N as Navbar, F as Footer } from "./SEO-DT9FDB40.js";
import emailjs from "@emailjs/browser";
import { u as useToast, c as cn } from "../main.mjs";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as DialogPrimitive from "@radix-ui/react-dialog";
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
  return /* @__PURE__ */ jsxs("div", { className: "relative w-36 h-36 md:w-56 md:h-56 flex-shrink-0 z-10", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 rounded-[2rem] border border-border/30",
        style: {
          background: "hsl(0 0% 4%)",
          boxShadow: "0 8px 32px hsl(0 0% 0% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.05)"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-3 md:inset-4 rounded-[1.25rem] overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
        background: "radial-gradient(circle at 30% 70%, hsl(340, 80%, 50%), transparent 60%), radial-gradient(circle at 70% 30%, hsl(220, 80%, 55%), transparent 60%), radial-gradient(circle at 50% 50%, hsl(190, 70%, 45%), transparent 50%)",
        backgroundSize: "200% 200%",
        animation: "gradient-morph 6s ease infinite"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute w-[120%] h-[120%] -left-[10%] -top-[10%]", style: {
        background: "radial-gradient(circle at 40% 60%, hsl(350, 75%, 55%), transparent 50%)",
        animation: "blob-move-1 8s ease-in-out infinite"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute w-[120%] h-[120%] -left-[10%] -top-[10%]", style: {
        background: "radial-gradient(circle at 60% 40%, hsl(210, 85%, 50%), transparent 50%)",
        animation: "blob-move-2 10s ease-in-out infinite"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute w-[120%] h-[120%] -left-[10%] -top-[10%]", style: {
        background: "radial-gradient(circle at 50% 80%, hsl(170, 70%, 45%), transparent 45%)",
        animation: "blob-move-3 12s ease-in-out infinite"
      } })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center z-20", children: /* @__PURE__ */ jsx(
      "span",
      {
        className: "text-lg md:text-2xl font-black tracking-[0.12em] text-white transition-all duration-700 ease-in-out",
        style: {
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(6px) scale(0.95)",
          filter: visible ? "blur(0px)" : "blur(4px)"
        },
        children: WORDS[wordIndex]
      }
    ) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute -inset-4 rounded-[2.5rem] opacity-20 blur-xl -z-10",
        style: {
          background: "radial-gradient(circle, hsl(340, 80%, 50%), hsl(210, 85%, 50%), transparent)"
        }
      }
    )
  ] });
};
const outputBlueprint = "/assets/output-blueprint-DxEuzYXL.jpg";
const outputDocs = "/assets/output-docs-DeTbdW3u.jpg";
const outputPoster = "/assets/output-poster-DOTYNOGE.jpg";
const outputSpec = "/assets/output-spec-DiHcZKjU.jpg";
const outputSection = "/assets/output-section-B879OvGg.jpg";
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
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const handleMouseDown = (e) => {
    var _a, _b;
    if (isMobile) return;
    isDragging.current = true;
    startX.current = e.pageX - (((_a = containerRef.current) == null ? void 0 : _a.offsetLeft) || 0);
    scrollLeft.current = ((_b = containerRef.current) == null ? void 0 : _b.scrollLeft) || 0;
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
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: containerRef,
        className: `flex items-center gap-3 md:gap-4 animate-carousel-to-right ${isMobile ? "" : "cursor-grab active:cursor-grabbing"}`,
        ...!isMobile ? { onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp } : {},
        children: track2.map((item, i) => /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 relative", children: /* @__PURE__ */ jsxs("div", { className: "w-20 h-28 md:w-24 md:h-34 rounded-lg bg-black border border-[hsl(0_0%_30%)]/50 p-1.5 flex flex-col gap-1.5 shadow-lg shadow-black/50", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-1 rounded border border-[hsl(0_0%_30%)]/60 flex items-center justify-center", children: /* @__PURE__ */ jsx(item.icon, { className: "w-7 h-7 md:w-9 md:h-9 text-[hsl(0_0%_55%)]", strokeWidth: 0.7 }) }),
          /* @__PURE__ */ jsx("div", { className: "rounded border border-[hsl(0_0%_30%)]/60 py-1.5 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-[9px] md:text-xs text-[hsl(0_0%_60%)] tracking-wider", children: item.label }) })
        ] }) }, i))
      }
    );
  }
  const track = [...largeItems, ...largeItems, ...largeItems, ...largeItems];
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      className: `flex items-center gap-3 md:gap-4 animate-carousel-from-center ${isMobile ? "" : "cursor-grab active:cursor-grabbing"}`,
      ...!isMobile ? { onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp } : {},
      children: track.map((item, i) => /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 transition-transform duration-300 md:hover:scale-150 md:hover:z-30 relative", children: /* @__PURE__ */ jsxs("div", { className: "w-36 h-32 md:w-44 md:h-40 bg-[hsl(0_0%_4%)] border border-[hsl(0_0%_15%)]/30 p-1.5 shadow-xl shadow-black/50 flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: item.image,
            alt: item.alt,
            loading: "lazy",
            className: "w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx("span", { className: "text-xs md:text-sm text-white tracking-wider font-light text-center py-1.5", children: item.label })
      ] }) }, i))
    }
  );
};
const CarouselSection = () => {
  return /* @__PURE__ */ jsxs("section", { className: "w-full max-w-6xl mx-auto py-8 md:py-14 relative -mt-4 z-0", children: [
    /* @__PURE__ */ jsx(
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
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative h-52 md:h-64 flex items-center justify-center", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1/2 flex items-center overflow-hidden", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "w-full h-full flex items-center",
          style: {
            maskImage: "linear-gradient(to right, white 20%, white 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, white 20%, white 60%, transparent 100%)"
          },
          children: /* @__PURE__ */ jsx(IconCarousel, { side: "small" })
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-1/2 flex items-center overflow-hidden", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "w-full h-full flex items-center",
          style: {
            maskImage: "linear-gradient(to right, transparent 0%, white 30%, white 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, white 30%, white 80%, transparent 100%)"
          },
          children: /* @__PURE__ */ jsx(IconCarousel, { side: "large" })
        }
      ) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "relative z-20 opacity-0",
          style: {
            animation: "scale-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 400ms forwards"
          },
          children: /* @__PURE__ */ jsx(CentralIcon, {})
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "relative w-full -mt-2 opacity-0",
        style: {
          animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 800ms forwards"
        },
        children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start px-2 sm:px-8", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] sm:text-sm text-white flex-1 text-center", children: "Ваши файлы" }),
          /* @__PURE__ */ jsxs("span", { className: "text-[11px] sm:text-sm text-white flex-1 text-center font-bold", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block", style: { color: "hsl(210, 85%, 55%)", animation: "sparkle 5s ease-in-out infinite" }, children: "✦" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Типография" }),
            " ПринтПРО ",
            /* @__PURE__ */ jsx("span", { className: "inline-block", style: { color: "hsl(210, 85%, 55%)", animation: "sparkle 5s ease-in-out 2.5s infinite" }, children: "✦" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] sm:text-sm text-white flex-1 text-center", children: "Наша работа" })
        ] })
      }
    )
  ] });
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
const AnimatedHeroWorks = () => {
  const words = [
    "печати чертежей",
    "проектной документации",
    "рабочей документации",
    "исполнительной документации"
  ];
  const imageUrls = [work1, work2, work3, work4, work5, work6, work7, work8, work9, work10, work11, work12];
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 3e3);
    return () => clearInterval(interval);
  }, [words.length]);
  const altTexts = [
    "Печать чертежей формата А1 с фальцовкой",
    "Распечатать проектную документацию А0",
    "Печать рабочей документации А3",
    "Распечатать исполнительную документацию А2",
    "Печать технической документации А4",
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
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
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
  }, []);
  return /* @__PURE__ */ jsxs("section", { id: "works", className: "relative w-full bg-black overflow-hidden", style: { minHeight: "80vh" }, children: [
    /* @__PURE__ */ jsx("style", { children: `
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
      ` }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: [
      floatingImages.map((img) => /* @__PURE__ */ jsx(
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
        img.id
      )),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute rounded-full",
          style: {
            width: "60vw",
            height: "60vh",
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, transparent 70%)"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center text-center px-3 sm:px-4", style: { minHeight: "80vh" }, children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]", children: [
        /* @__PURE__ */ jsx("span", { children: "Профессиональный подход к" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "relative inline-block", children: /* @__PURE__ */ jsx("span", { className: "grid", style: { gridArea: "1/1" }, children: words.map((word, index) => /* @__PURE__ */ jsx(
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
          word
        )) }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 sm:mt-6 text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl px-2", children: "Выполняем работы любой сложности с соблюдением ГОСТ и СНиП. Гарантия качества на всех этапах." })
    ] })
  ] });
};
const WHOLESALE_THRESHOLDS = {
  A0: 5,
  A1: 5,
  A2: 5,
  A3: 20,
  A4: 50
};
const getWholesaleThreshold = (format) => WHOLESALE_THRESHOLDS[format] ?? 20;
const getTierMultiplier = (format, qty) => qty >= getWholesaleThreshold(format) ? 1 : 2;
const getTierUnitPrice = (format, isColor, qty) => {
  const base = isColor ? PRICES[format].color : PRICES[format].bw;
  return base * getTierMultiplier(format, qty);
};
const PRICES = {
  A4: { bw: 5, color: 10, label: "A4 (210×297 мм)" },
  A3: { bw: 14, color: 24, label: "A3 (297×420 мм)" },
  A2: { bw: 30, color: 40, label: "A2 (420×594 мм)" },
  A1: { bw: 50, color: 70, label: "A1 (594×841 мм)" },
  A0: { bw: 100, color: 110, label: "A0 (841×1189 мм)" }
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
  const [customer, setCustomer] = useState({ name: "", phone: "" });
  const [fileLink, setFileLink] = useState("");
  const [orderFileLink, setOrderFileLink] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);
  const orderFormRef = useRef(null);
  const fileFormRef = useRef(null);
  const [fileCustomer, setFileCustomer] = useState({ name: "", phone: "" });
  const [fileConsent, setFileConsent] = useState(true);
  const [fileStatus, setFileStatus] = useState("");
  const [consent, setConsent] = useState(true);
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
      label: `${PRICES[format].label} (${isColor ? "Цвет" : "ЧБ"})`,
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
    const discountApplicable = subtotal >= 2e3;
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
    if (customer.phone.replace(/\D/g, "").length < 11) {
      alert("Пожалуйста, введите полный номер телефона");
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
    if (fileCustomer.phone.replace(/\D/g, "").length < 11) {
      showToast({ title: "Ошибка", description: "Пожалуйста, введите полный номер телефона", variant: "destructive" });
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
      showToast({
        title: "✅ Файлы успешно отправлены!",
        description: "Мы свяжемся с вами в течение 5 минут."
      });
    } catch (error) {
      console.error("Ошибка отправки файла:", error);
      showToast({ title: "Ошибка отправки", description: "Попробуйте ещё раз или напишите нам в Telegram.", variant: "destructive" });
      setFileStatus("");
    }
  };
  return /* @__PURE__ */ jsx("section", { id: "calculator", className: "relative py-12 sm:py-20 md:py-32 px-3 sm:px-4 bg-white overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "relative z-10 container max-w-7xl mx-auto overflow-hidden", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative rounded-2xl opacity-0",
      style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards" },
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl pointer-events-none",
            style: { width: "calc(100% + 2px)", height: "calc(100% + 2px)" },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0",
                  style: { backgroundImage: "linear-gradient(0deg, hsl(0,0%,100%) -50%, hsl(0,0%,40%) 100%)" }
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-border-rotate pointer-events-none",
                  style: {
                    width: "200%",
                    height: "10rem",
                    transformOrigin: "center",
                    backgroundImage: "linear-gradient(0deg, hsla(0,0%,100%,0) 0%, hsl(277,95%,60%) 40%, hsl(277,95%,60%) 60%, hsla(0,0%,40%,0) 100%)"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
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
            children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 lg:items-start", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative p-5 sm:p-8 md:p-12 flex flex-col justify-between overflow-hidden", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 lg:border-r", style: { borderColor: "hsl(240,9%,17%)" } }),
                /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                  /* @__PURE__ */ jsxs("h2", { className: "text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-black leading-tight tracking-tight text-white", children: [
                    "Отправьте файлы ",
                    /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
                    " удобным вам способом."
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-2 sm:mt-3 text-sm md:text-base leading-relaxed lg:max-w-sm", style: { color: "hsl(0,0%,83%)" }, children: "Не тратьте время на расчеты. Наш менеджер сам проверит файлы и назовет точную цену." }),
                  /* @__PURE__ */ jsxs(
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
                        /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M20.665 4.70898L17.702 18.718C17.481 19.721 16.883 19.974 16.036 19.497L11.431 16.104L9.213 18.232C8.968 18.477 8.761 18.684 8.271 18.684L8.599 13.992L17.133 6.29098C17.504 5.96098 17.052 5.77998 16.559 6.10898L6.02 12.738L1.474 11.315C0.485 11.008 0.468 10.323 1.681 9.85198L19.431 3.01198C20.252 2.70498 20.971 3.18998 20.665 4.70898Z" }) }),
                        "Написать в Telegram"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative z-10 mt-8", children: [
                  /* @__PURE__ */ jsx("div", { className: "h-px w-full mb-6", style: { backgroundColor: "hsl(240,9%,20%)" } }),
                  fileStatus === "success" ? /* @__PURE__ */ jsxs("div", { className: "text-center py-6", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "w-10 h-10 mx-auto mb-3", style: { color: "hsl(120,60%,60%)" } }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-white", children: "Файлы отправлены!" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs mt-1", style: { color: "hsl(0,0%,60%)" }, children: "Мы свяжемся с вами в ближайшее время." }),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          setFileStatus("");
                          setFileLink("");
                          setFileCustomer({ name: "", phone: "" });
                          setUploadedFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        },
                        className: "mt-3 text-xs font-bold",
                        style: { color: "hsl(266,92%,68%)" },
                        children: "Отправить ещё →"
                      }
                    )
                  ] }) : /* @__PURE__ */ jsxs("form", { ref: fileFormRef, onSubmit: sendFiles, encType: "multipart/form-data", className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx(Link2, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4", style: { color: "hsl(0,0%,50%)" } }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          name: "cloud_link",
                          placeholder: "Ссылка на файлы для печати (Яндекс.Диск, Облако)",
                          value: fileLink,
                          onChange: (e) => setFileLink(e.target.value),
                          className: "w-full pl-11 p-3.5 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)]",
                          style: { backgroundColor: "hsla(240,15%,15%,0.8)", border: "1px solid hsl(240,9%,17%)" }
                        }
                      )
                    ] }),
                    fileLink && /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                          /* @__PURE__ */ jsx(User, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4", style: { color: "hsl(0,0%,50%)" } }),
                          /* @__PURE__ */ jsx(
                            "input",
                            {
                              required: true,
                              name: "customer_name",
                              placeholder: "Ваше имя",
                              value: fileCustomer.name,
                              onChange: (e) => setFileCustomer({ ...fileCustomer, name: e.target.value }),
                              className: "w-full pl-11 p-3.5 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)]",
                              style: { backgroundColor: "hsla(240,15%,15%,0.8)", border: "1px solid hsl(240,9%,17%)" }
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                          /* @__PURE__ */ jsx(Phone, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4", style: { color: "hsl(0,0%,50%)" } }),
                          /* @__PURE__ */ jsx(
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
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("input", { type: "hidden", name: "order_details", value: "Клиент отправил файлы через форму" }),
                      /* @__PURE__ */ jsx("input", { type: "hidden", name: "total_price", value: "—" }),
                      /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-2.5 cursor-pointer select-none", children: [
                        /* @__PURE__ */ jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: fileConsent,
                            onChange: (e) => setFileConsent(e.target.checked),
                            className: "mt-1 w-4 h-4 rounded cursor-pointer bg-transparent",
                            style: { accentColor: "hsl(266,92%,58%)" },
                            required: true
                          }
                        ),
                        /* @__PURE__ */ jsxs("span", { className: "text-[11px] leading-relaxed", style: { color: "hsl(0,0%,100%)" }, children: [
                          "Даю согласие на обработку персональных данных согласно",
                          " ",
                          /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "underline", style: { color: "hsl(266,92%,68%)" }, children: "Политике конфиденциальности" }),
                          " ",
                          "и принимаю",
                          " ",
                          /* @__PURE__ */ jsx(Link, { to: "/terms", className: "underline", style: { color: "hsl(266,92%,68%)" }, children: "Условия обслуживания" }),
                          "."
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          type: "submit",
                          disabled: fileStatus === "sending",
                          className: "w-full text-white py-3.5 rounded-full font-bold uppercase text-sm tracking-wider transition-all duration-200 active:scale-[0.97] disabled:opacity-50 flex items-center justify-center gap-2 hover:shadow-[0_0_24px_hsla(266,92%,58%,0.5)] hover:brightness-110",
                          style: {
                            backgroundImage: "linear-gradient(0deg, rgba(94,58,238,1) 0%, rgba(197,107,240,1) 100%)",
                            boxShadow: "inset 0 -2px 25px -4px hsl(0,0%,100%)"
                          },
                          children: fileStatus === "sending" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                            /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin" }),
                            " Отправка..."
                          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                            /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" }),
                            " Отправить файл"
                          ] })
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "relative z-10 mt-10 space-y-4 hidden lg:block", children: [
                  { icon: /* @__PURE__ */ jsx(Ruler, { className: "w-5 h-5 text-blue-400" }), title: "Строго по ГОСТ", desc: "Идеальное соблюдение масштабов 1:1 и фальцовка под подшивку.", gradient: "from-blue-500/20 to-blue-600/5" },
                  { icon: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-emerald-400" }), title: "Конфиденциально (NDA)", desc: "Ваши чертежи и сметы надежно защищены от третьих лиц.", gradient: "from-emerald-500/20 to-emerald-600/5" },
                  { icon: /* @__PURE__ */ jsx(Truck, { className: "w-5 h-5 text-amber-400" }), title: "Доставка по Москве", desc: "Аккуратно упакуем и привезем документацию в офис или на стройплощадку.", gradient: "from-amber-500/20 to-amber-600/5" }
                ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-3 -mx-3 rounded-2xl cursor-default", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} border border-white/10 flex items-center justify-center shrink-0`,
                      style: { backgroundColor: "hsla(240,15%,15%,0.6)" },
                      children: item.icon
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-bold text-xs sm:text-sm text-white", children: item.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] sm:text-xs mt-0.5", style: { color: "hsl(0,0%,83%)" }, children: item.desc })
                  ] })
                ] }, i)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-white", children: [
                /* @__PURE__ */ jsxs("div", { className: "p-4 sm:p-5", style: { borderBottom: "1px solid hsl(240,9%,17%)" }, children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-base font-black mb-4 flex items-center gap-2 uppercase tracking-tight", style: { color: "hsl(0,0%,83%)" }, children: [
                    /* @__PURE__ */ jsx(Printer, { className: "w-4 h-4" }),
                    " Калькулятор цены"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-[1.4fr_1fr] gap-3 mb-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold uppercase ml-1", style: { color: "hsl(0,0%,60%)" }, children: "Формат чертежа" }),
                      /* @__PURE__ */ jsxs("div", { className: "relative", ref: dropdownRef, children: [
                        /* @__PURE__ */ jsxs(
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
                              /* @__PURE__ */ jsxs("span", { children: [
                                PRICES[format].label,
                                " — от ",
                                isColor ? PRICES[format].color : PRICES[format].bw,
                                " ₽"
                              ] }),
                              /* @__PURE__ */ jsx(
                                "svg",
                                {
                                  className: `w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`,
                                  style: { color: "hsl(0,0%,60%)" },
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  strokeWidth: 2,
                                  children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" })
                                }
                              )
                            ]
                          }
                        ),
                        dropdownOpen && /* @__PURE__ */ jsx(
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
                            children: Object.keys(PRICES).map((k) => /* @__PURE__ */ jsxs(
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
                                  /* @__PURE__ */ jsx("span", { children: PRICES[k].label }),
                                  /* @__PURE__ */ jsxs("span", { style: { color: "hsl(0,0%,50%)" }, children: [
                                    "от ",
                                    isColor ? PRICES[k].color : PRICES[k].bw,
                                    " ₽"
                                  ] })
                                ]
                              },
                              k
                            ))
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold uppercase ml-1", style: { color: "hsl(0,0%,60%)" }, children: "Цветность" }),
                      /* @__PURE__ */ jsxs("div", { className: "flex p-1 rounded-lg", style: { backgroundColor: "hsla(240,15%,15%,0.6)", border: "1px solid hsl(240,9%,17%)" }, children: [
                        /* @__PURE__ */ jsx(
                          "button",
                          {
                            onClick: () => setIsColor(false),
                            className: "flex-1 py-2 rounded-lg text-xs font-bold transition-all",
                            style: {
                              backgroundColor: !isColor ? "hsla(266,92%,58%,0.2)" : "transparent",
                              color: !isColor ? "hsl(266,92%,58%)" : "hsl(0,0%,60%)"
                            },
                            children: "ЧБ"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "button",
                          {
                            onClick: () => setIsColor(true),
                            className: "flex-1 py-2 rounded-lg text-xs font-bold transition-all",
                            style: {
                              backgroundColor: isColor ? "hsla(266,92%,58%,0.2)" : "transparent",
                              color: isColor ? "hsl(266,92%,58%)" : "hsl(0,0%,60%)"
                            },
                            children: "Цвет"
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  (() => {
                    const threshold = getWholesaleThreshold(format);
                    const remaining = Math.max(0, threshold - quantity);
                    const atWholesale = currentUnitPrice === wholesalePrice;
                    return /* @__PURE__ */ jsxs("div", { className: "mb-2 px-1 space-y-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold uppercase tracking-wider text-white", children: "Текущая цена за 1 шт:" }),
                        /* @__PURE__ */ jsxs("span", { className: "flex items-baseline gap-2", children: [
                          currentUnitPrice > wholesalePrice && /* @__PURE__ */ jsxs("span", { className: "text-xs line-through text-white", children: [
                            wholesalePrice,
                            " ₽"
                          ] }),
                          /* @__PURE__ */ jsxs(
                            "span",
                            {
                              className: "text-base font-black animate-fade-in",
                              style: { color: atWholesale ? "hsl(142,71%,55%)" : "hsl(266,92%,78%)" },
                              children: [
                                currentUnitPrice,
                                " ₽"
                              ]
                            },
                            currentUnitPrice
                          )
                        ] })
                      ] }),
                      atWholesale ? /* @__PURE__ */ jsx("p", { className: "text-[11px] font-semibold animate-fade-in", style: { color: "hsl(142,71%,55%)" }, children: "✓ Применена оптовая цена!" }) : /* @__PURE__ */ jsxs("p", { className: "text-[11px] animate-fade-in", style: { color: "hsl(266,92%,78%)" }, children: [
                        "Добавьте ",
                        remaining,
                        " шт. для оптовой цены"
                      ] })
                    ] });
                  })(),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2 sm:gap-3 mb-4", children: [
                    /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: "flex items-center rounded-lg px-2 transition-all duration-200 hover:border-[hsl(240,9%,25%)]",
                        style: { backgroundColor: "hsla(240,15%,15%,0.8)", border: "1px solid hsl(240,9%,17%)" },
                        children: [
                          /* @__PURE__ */ jsx("button", { onClick: () => setQuantity(Math.max(1, quantity - 1)), className: "text-xl font-light p-2 transition-colors", style: { color: "hsl(0,0%,60%)" }, children: "−" }),
                          /* @__PURE__ */ jsx(
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
                            }
                          ),
                          /* @__PURE__ */ jsx("button", { onClick: () => setQuantity(quantity + 1), className: "text-xl font-light p-2 transition-colors", style: { color: "hsl(0,0%,60%)" }, children: "+" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: addPrintToCart,
                        className: "flex-1 text-white py-3 rounded-full font-bold uppercase text-sm tracking-wider transition-all duration-200 active:scale-[0.97] hover:shadow-[0_0_24px_hsla(266,92%,58%,0.5)] hover:brightness-110",
                        style: {
                          backgroundImage: "linear-gradient(0deg, rgba(94,58,238,1) 0%, rgba(197,107,240,1) 100%)",
                          boxShadow: "inset 0 -2px 25px -4px hsl(0,0%,100%)"
                        },
                        children: "В корзину"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold uppercase ml-1 mb-2 block", style: { color: "hsl(0,0%,60%)" }, children: "Дополнительные услуги" }),
                    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-1.5 sm:gap-2", children: SERVICES.map((service) => /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => addServiceToCart(service),
                        className: "text-left p-2.5 sm:p-3 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 active:scale-[0.97] flex justify-between items-center hover:bg-[hsla(266,92%,58%,0.1)] hover:border-[hsl(266,92%,58%,0.4)] hover:scale-[1.02]",
                        style: {
                          backgroundColor: "hsla(240,15%,15%,0.5)",
                          border: "1px solid hsl(240,9%,17%)",
                          color: "hsl(0,0%,83%)"
                        },
                        children: [
                          /* @__PURE__ */ jsxs("div", { children: [
                            service.label,
                            /* @__PURE__ */ jsxs("span", { className: "block opacity-60", children: [
                              service.price,
                              " ₽"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4 flex-shrink-0", style: { color: "hsl(266,92%,68%)" } })
                        ]
                      },
                      service.id
                    )) })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-6", children: status !== "success" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "font-bold flex items-center gap-2 text-sm uppercase tracking-widest text-white/70", children: [
                      /* @__PURE__ */ jsx(ShoppingCart, { className: "w-4 h-4" }),
                      " Ваш заказ"
                    ] }),
                    /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: "flex items-center gap-3 select-none px-3 py-2 rounded-xl transition-all duration-200 hover:bg-[hsla(240,15%,18%,0.7)] hover:border-[hsl(240,9%,25%)] cursor-pointer",
                        style: {
                          backgroundColor: "hsla(240,15%,15%,0.5)",
                          border: "1px solid hsl(240,9%,17%)"
                        },
                        children: [
                          /* @__PURE__ */ jsx(
                            "span",
                            {
                              className: "text-[10px] sm:text-xs font-black uppercase tracking-wide",
                              style: { color: foldingEnabled ? "hsl(120,60%,70%)" : "hsl(0,0%,83%)" },
                              children: "Фальцовка по ГОСТ"
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            "input",
                            {
                              type: "checkbox",
                              className: "switch",
                              checked: foldingEnabled,
                              onChange: (e) => setFoldingEnabled(e.target.checked)
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3 mb-8", children: [
                    cart.map((item) => {
                      const folding = !item.isService && foldingEnabled ? getFoldingPrice(item) : 0;
                      const unitWithFolding = item.unitPrice + folding;
                      const lineTotal = unitWithFolding * item.quantity;
                      const itemThreshold = !item.isService ? getWholesaleThreshold(item.format) : 0;
                      const itemRemaining = !item.isService ? Math.max(0, itemThreshold - item.quantity) : 0;
                      return /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "flex justify-between items-center p-3 rounded-xl group transition-all duration-200 hover:bg-[hsla(240,15%,18%,0.7)] hover:border-[hsl(240,9%,25%)]",
                          style: { backgroundColor: "hsla(240,15%,15%,0.5)", border: "1px solid hsl(240,9%,17%)" },
                          children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                              /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-white", children: item.label }),
                              /* @__PURE__ */ jsx("div", { className: "text-[10px] mt-0.5 font-medium flex items-center gap-1.5 flex-wrap", style: { color: "hsl(0,0%,50%)" }, children: (() => {
                                const base = !item.isService ? item.isColor ? PRICES[item.format].color : PRICES[item.format].bw : item.unitPrice;
                                const showStrike = !item.isService && item.unitPrice > base;
                                return /* @__PURE__ */ jsxs(Fragment, { children: [
                                  showStrike && /* @__PURE__ */ jsxs("span", { className: "line-through text-white", children: [
                                    base,
                                    " ₽"
                                  ] }),
                                  folding > 0 ? /* @__PURE__ */ jsxs("span", { style: { color: "hsl(266,92%,78%)" }, children: [
                                    item.unitPrice,
                                    " ₽ + ",
                                    folding,
                                    " ₽ ",
                                    /* @__PURE__ */ jsx("span", { style: { color: "hsl(266,92%,68%)" }, children: "(фальцовка)" }),
                                    " = ",
                                    unitWithFolding,
                                    " ₽ за шт."
                                  ] }) : /* @__PURE__ */ jsxs("span", { style: { color: "hsl(266,92%,78%)" }, children: [
                                    item.unitPrice,
                                    " ₽ за шт."
                                  ] })
                                ] });
                              })() }),
                              !item.isService && itemRemaining > 0 && /* @__PURE__ */ jsxs("div", { className: "text-[10px] mt-0.5 font-semibold", style: { color: "hsl(266,92%,78%)" }, children: [
                                "Добавьте ",
                                itemRemaining,
                                " шт. для оптовой цены"
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 sm:gap-3 flex-shrink-0", children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center rounded-lg", style: { border: "1px solid hsl(240,9%,17%)" }, children: [
                                /* @__PURE__ */ jsx("button", { onClick: () => updateQuantity(item.id, -1), className: "p-1 sm:p-1.5 transition-colors rounded-l-lg hover:bg-white/5", children: /* @__PURE__ */ jsx(Minus, { className: "w-3 h-3", style: { color: "hsl(0,0%,60%)" } }) }),
                                /* @__PURE__ */ jsx(
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
                                    className: "w-10 sm:w-12 bg-transparent px-1 text-xs sm:text-sm font-bold text-center text-white outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:bg-white/5"
                                  }
                                ),
                                /* @__PURE__ */ jsx("button", { onClick: () => updateQuantity(item.id, 1), className: "p-1 sm:p-1.5 transition-colors rounded-r-lg hover:bg-white/5", children: /* @__PURE__ */ jsx(Plus, { className: "w-3 h-3", style: { color: "hsl(0,0%,60%)" } }) })
                              ] }),
                              /* @__PURE__ */ jsxs("span", { className: "text-xs sm:text-sm font-bold text-white w-12 sm:w-16 text-right", children: [
                                lineTotal,
                                " ₽"
                              ] }),
                              /* @__PURE__ */ jsx("button", { onClick: () => removeItem(item.id), className: "p-1.5 sm:p-2 hover:bg-red-500/10 rounded-full transition-colors", children: /* @__PURE__ */ jsx(Trash2, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-400/70" }) })
                            ] })
                          ]
                        },
                        item.id
                      );
                    }),
                    cart.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-center py-10 italic rounded-3xl text-white/50", style: { border: "2px dashed hsla(0,0%,100%,0.15)" }, children: "Смета пуста. Добавьте чертежи или услуги выше." })
                  ] }),
                  cart.length > 0 && /* @__PURE__ */ jsxs("form", { ref: orderFormRef, onSubmit: sendOrder, encType: "multipart/form-data", className: "space-y-3 pt-4", style: { borderTop: "1px solid hsl(240,9%,17%)" }, children: [
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsx(User, { className: "absolute left-4 top-4 w-4 h-4", style: { color: "hsl(0,0%,50%)" } }),
                        /* @__PURE__ */ jsx(
                          "input",
                          {
                            required: true,
                            name: "customer_name",
                            placeholder: "Ваше имя",
                            value: customer.name,
                            onChange: (e) => setCustomer({ ...customer, name: e.target.value }),
                            className: "w-full pl-11 p-4 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)]",
                            style: { backgroundColor: "hsla(240,15%,15%,0.8)", border: "1px solid hsl(240,9%,17%)" }
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsx(Phone, { className: "absolute left-4 top-4 w-4 h-4", style: { color: "hsl(0,0%,50%)" } }),
                        /* @__PURE__ */ jsx(
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
                          }
                        ),
                        customer.phone.length > 0 && customer.phone.replace(/\D/g, "").length < 11 && /* @__PURE__ */ jsx("span", { className: "text-[10px] text-red-400/80 mt-1 ml-1 block", children: "Введите 11 цифр номера" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "hidden",
                        name: "order_details",
                        value: cart.map((item, index) => {
                          const folding = !item.isService && foldingEnabled ? getFoldingPrice(item) : 0;
                          const perUnit = item.unitPrice + folding;
                          const foldingNote = folding > 0 ? ` (вкл. фальцовку ${folding} ₽)` : "";
                          return `${index + 1}. ${item.label}${foldingNote} — ${item.quantity} шт. × ${perUnit} ₽ = ${perUnit * item.quantity} руб.`;
                        }).join("\n")
                      }
                    ),
                    /* @__PURE__ */ jsx("input", { type: "hidden", name: "total_price", value: String(Math.round(stats.total)) }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "hidden",
                        name: "file_link",
                        value: orderFileLink || "Не указано"
                      }
                    ),
                    /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-2.5 cursor-pointer select-none mt-1", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: consent,
                          onChange: (e) => setConsent(e.target.checked),
                          className: "mt-1 w-4 h-4 rounded cursor-pointer bg-transparent",
                          style: { accentColor: "hsl(266,92%,58%)" },
                          required: true
                        }
                      ),
                      /* @__PURE__ */ jsxs("span", { className: "text-[11px] leading-relaxed", style: { color: "hsl(0,0%,100%)" }, children: [
                        "Отправляя заявку, я даю согласие на обработку моих персональных данных согласно",
                        " ",
                        /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "underline transition-colors", style: { color: "hsl(266,92%,68%)" }, children: "Политике конфиденциальности" }),
                        " ",
                        "и принимаю",
                        " ",
                        /* @__PURE__ */ jsx(Link, { to: "/terms", className: "underline transition-colors", style: { color: "hsl(266,92%,68%)" }, children: "Условия обслуживания" }),
                        "."
                      ] })
                    ] }),
                    showFoldingReminder && /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: "p-3 rounded-xl mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 animate-fade-in",
                        style: {
                          backgroundColor: "hsla(45,100%,50%,0.12)",
                          border: "1px solid hsla(45,100%,50%,0.3)"
                        },
                        children: [
                          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold", style: { color: "hsl(45,100%,75%)" }, children: "⚠️ Вы не добавили фальцовку по ГОСТ. Продолжить без неё?" }),
                          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 shrink-0", children: [
                            /* @__PURE__ */ jsx(
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
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "button",
                              {
                                type: "submit",
                                className: "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase text-white/60",
                                style: { backgroundColor: "hsla(0,0%,100%,0.1)" },
                                children: "Без неё"
                              }
                            )
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: "text-white p-4 sm:p-5 rounded-2xl mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4",
                        style: {
                          backgroundImage: "linear-gradient(135deg, rgba(94,58,238,0.9) 0%, rgba(197,107,240,0.8) 100%)",
                          boxShadow: "inset 0 -2px 25px -4px rgba(255,255,255,0.15), 0 8px 32px rgba(94,58,238,0.3)"
                        },
                        children: [
                          /* @__PURE__ */ jsxs("div", { className: "text-center sm:text-left", children: [
                            stats.discountApplicable ? /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center sm:justify-start gap-1.5 bg-white/20 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase mb-2 w-fit mx-auto sm:mx-0 tracking-wider", children: "Скидка 20% на первый заказ" }) : /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center sm:justify-start gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-2 w-fit mx-auto sm:mx-0 tracking-wide", style: { backgroundColor: "hsla(45,100%,50%,0.2)", color: "hsl(45,100%,85%)" }, children: "Закажите от 2 000 ₽ для скидки 20%" }),
                            /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-center sm:justify-start gap-2", children: [
                              /* @__PURE__ */ jsxs("span", { className: "text-2xl font-black", children: [
                                Math.round(stats.total),
                                " ₽"
                              ] }),
                              stats.discountApplicable && /* @__PURE__ */ jsxs("span", { className: "text-white/40 line-through font-semibold text-sm", children: [
                                Math.round(stats.subtotal),
                                " ₽"
                              ] })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsx(
                            "button",
                            {
                              type: "submit",
                              disabled: status === "sending",
                              className: "w-full sm:w-auto bg-white px-8 py-3.5 rounded-full font-bold uppercase text-sm tracking-wider flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.97] disabled:opacity-50 hover:shadow-[0_0_24px_hsla(0,0%,100%,0.4)] hover:scale-[1.03]",
                              style: { color: "hsl(266,92%,40%)" },
                              children: status === "sending" ? "Отправка..." : /* @__PURE__ */ jsxs(Fragment, { children: [
                                /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" }),
                                " Оформить заказ"
                              ] })
                            }
                          )
                        ]
                      }
                    )
                  ] })
                ] }) : /* @__PURE__ */ jsxs("div", { className: "py-12 px-6 text-center", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",
                      style: { backgroundColor: "hsla(266,92%,58%,0.15)", border: "1px solid hsla(266,92%,58%,0.3)" },
                      children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-12 h-12", style: { color: "hsl(266,92%,68%)" } })
                    }
                  ),
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black mb-3 uppercase tracking-tight text-white", children: "Заявка принята!" }),
                  /* @__PURE__ */ jsxs("p", { className: "leading-relaxed max-w-sm mx-auto font-medium", style: { color: "hsl(0,0%,83%)" }, children: [
                    "Спасибо, ",
                    /* @__PURE__ */ jsx("strong", { className: "text-white", children: customer.name }),
                    ". Мы свяжемся с вами в течение 5 минут по номеру ",
                    /* @__PURE__ */ jsx("strong", { className: "text-white", children: customer.phone }),
                    "."
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => {
                        setStatus("");
                        setCart([]);
                        setCustomer({ name: "", phone: "" });
                        setFileLink("");
                        setUploadedFile(null);
                      },
                      className: "inline-block mt-8 text-sm font-bold transition-colors",
                      style: { color: "hsl(266,92%,68%)" },
                      children: "Сделать новый расчет →"
                    }
                  )
                ] }) })
              ] })
            ] })
          }
        )
      ]
    }
  ) }) });
};
const scannerImg = "/assets/scanner-Dd6Eu51B.jpg";
const falcovkaImg = "/assets/falcovka-Br_UJBNB.jpg";
const broshyurovkaImg = "/assets/broshyurovka-CchW54Po.jpg";
const perepletImg = "/assets/pereplet-DlO9TyRg.jpg";
const laminationImg = "/assets/lamination-C0jIgD6C.jpg";
const printerImg = "/assets/printer-CAxbVlfG.jpg";
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
  return /* @__PURE__ */ jsxs("section", { id: "services", className: "relative py-16 sm:py-24 bg-white font-sans overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-12 sm:mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-amber-600 text-xs font-black uppercase tracking-widest mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-amber-400 animate-pulse" }),
          "Наши возможности"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight mb-6", children: "С чем мы можем вам помочь?" }),
        /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg text-gray-500 font-light leading-relaxed", children: "Выполняем полный цикл постпечатной обработки. От вывода первого листа из плоттера до сшитого тома проектной документации." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5", children: services2.map((service) => {
        const { left, right, singleWord } = splitTitle(service.title);
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "group relative rounded-2xl bg-neutral-900 border border-neutral-800 transition-all duration-400 ease-out hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-[0_8px_40px_-12px_rgba(245,158,11,0.15)] overflow-hidden flex flex-col",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative w-full h-40 sm:h-48 overflow-hidden", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: service.image,
                    alt: service.title,
                    loading: "lazy",
                    className: "w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden", children: /* @__PURE__ */ jsxs("h3", { className: `text-xl sm:text-2xl font-black text-white tracking-tight text-center whitespace-nowrap flex ${singleWord ? "" : "gap-2"}`, children: [
                  /* @__PURE__ */ jsx("span", { className: "inline-block transition-all duration-700 ease-in-out group-hover:-translate-x-[200px] group-hover:opacity-0", children: left }),
                  /* @__PURE__ */ jsx("span", { className: "inline-block transition-all duration-700 ease-in-out group-hover:translate-x-[200px] group-hover:opacity-0", children: right })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "p-6 sm:p-8 pt-4 sm:pt-5", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 leading-relaxed font-light", children: service.description }) })
            ]
          },
          service.id
        );
      }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 sm:mt-16 text-center", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "#calculator",
          className: "inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-amber-500 text-black rounded-full font-black uppercase tracking-widest text-xs sm:text-sm hover:scale-105 hover:bg-amber-400 transition-all duration-300 shadow-[0_0_40px_rgba(245,158,11,0.2)] active:scale-95",
          children: "Рассчитать стоимость"
        }
      ) })
    ] })
  ] });
};
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
const bwPrices = [
  { format: "A4", size: "210×297 мм", threshold: 50, retail: "10 ₽", wholesale: "5 ₽" },
  { format: "A3", size: "297×420 мм", threshold: 20, retail: "28 ₽", wholesale: "14 ₽" },
  { format: "A2", size: "420×594 мм", threshold: 5, retail: "60 ₽", wholesale: "30 ₽" },
  { format: "A1", size: "594×841 мм", threshold: 5, retail: "100 ₽", wholesale: "50 ₽" },
  { format: "A0", size: "841×1189 мм", threshold: 5, retail: "200 ₽", wholesale: "100 ₽" }
];
const colorPrices = [
  { format: "A4", size: "210×297 мм", threshold: 50, retail: "20 ₽", wholesale: "10 ₽" },
  { format: "A3", size: "297×420 мм", threshold: 20, retail: "48 ₽", wholesale: "24 ₽" },
  { format: "A2", size: "420×594 мм", threshold: 5, retail: "80 ₽", wholesale: "40 ₽" },
  { format: "A1", size: "594×841 мм", threshold: 5, retail: "140 ₽", wholesale: "70 ₽" },
  { format: "A0", size: "841×1189 мм", threshold: 5, retail: "220 ₽", wholesale: "110 ₽" }
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `group relative rounded-2xl border p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 ${isBw ? "bg-card/40 backdrop-blur-sm border-border/30 hover:border-border/60 hover:bg-card/70" : "border-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-purple-500/10"}`,
      style: !isBw ? {
        background: "linear-gradient(135deg, hsla(280,70%,40%,0.85), hsla(330,80%,45%,0.85), hsla(20,90%,50%,0.85), hsla(50,85%,50%,0.85))",
        backgroundSize: "300% 300%",
        animation: "gradient-morph 8s ease infinite"
      } : void 0,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between mb-2", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `text-xl sm:text-2xl font-bold tracking-tight ${isBw ? "text-foreground" : "text-white"}`,
              children: item.format
            }
          ),
          /* @__PURE__ */ jsx("span", { className: `text-xs ${isBw ? "text-muted-foreground" : "text-white/70"}`, children: item.size })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `pt-2 space-y-1.5 border-t ${isBw ? "border-border/20" : "border-white/20"}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { className: `text-xs ${isBw ? "text-muted-foreground/60" : "text-white/50"}`, children: "розница (×2)" }),
            /* @__PURE__ */ jsx("span", { className: `text-sm font-semibold ${isBw ? "text-foreground" : "text-white"}`, children: item.retail })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxs("span", { className: `text-xs ${isBw ? "text-muted-foreground/60" : "text-white/50"}`, children: [
              "опт от ",
              item.threshold,
              " шт"
            ] }),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `text-sm font-semibold ${isBw ? "text-emerald-400" : "text-yellow-200 drop-shadow-sm"}`,
                children: item.wholesale
              }
            )
          ] })
        ] })
      ]
    }
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "group relative rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm p-3 sm:p-4 transition-all duration-300 hover:border-border/60 hover:bg-card/70 hover:-translate-y-1 h-full flex flex-col justify-between",
      children: [
        /* @__PURE__ */ jsx("span", { className: "text-lg sm:text-xl font-bold text-foreground tracking-tight", children: item.name }),
        /* @__PURE__ */ jsxs("div", { className: "pt-2 border-t border-border/20 mt-2 space-y-1", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.desc }),
          isFolding ? /* @__PURE__ */ jsx("div", { className: "h-7 overflow-hidden relative", children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex items-center gap-2 absolute inset-x-0 transition-all duration-500 ease-in-out",
              style: {
                transform: animating ? "translateY(-100%)" : "translateY(0)",
                opacity: animating ? 0 : 1
              },
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-foreground", children: foldingPrices[foldingIndex].format }),
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "—" }),
                /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-emerald-400", children: foldingPrices[foldingIndex].price })
              ]
            }
          ) }) : item.price === "binding" ? /* @__PURE__ */ jsxs("p", { className: "text-base font-semibold", children: [
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "А4 — " }),
            /* @__PURE__ */ jsx("span", { className: "text-emerald-400", children: "100 ₽" }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: " / " }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "А3 — " }),
            /* @__PURE__ */ jsx("span", { className: "text-emerald-400", children: "200 ₽" })
          ] }) : /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-emerald-400", children: item.price })
        ] })
      ]
    }
  );
};
const PriceListSection = () => {
  return /* @__PURE__ */ jsx("section", { id: "pricelist", className: "py-16 sm:py-24 px-3 sm:px-4", children: /* @__PURE__ */ jsxs("div", { className: "container max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx(
      "h2",
      {
        className: "text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-foreground text-center mb-10 sm:mb-14 opacity-0",
        style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards" },
        children: "Прайс-лист"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "opacity-0",
        style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 250ms forwards" },
        children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "bw", className: "w-full", children: [
          /* @__PURE__ */ jsxs(TabsList, { className: "w-full bg-secondary/60 backdrop-blur-sm border border-border/30 rounded-xl h-auto sm:h-12 p-1 mb-8 grid grid-cols-2 sm:grid-cols-4 gap-1", children: [
            /* @__PURE__ */ jsx(
              TabsTrigger,
              {
                value: "bw",
                className: "rounded-lg text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-md transition-all",
                children: "Черно-белая"
              }
            ),
            /* @__PURE__ */ jsxs(
              TabsTrigger,
              {
                value: "color",
                className: "rounded-lg text-xs sm:text-sm color-tab-trigger data-[state=active]:text-white data-[state=active]:shadow-md transition-all [&[data-state=active]]:border-0",
                children: [
                  /* @__PURE__ */ jsx("style", { children: `
                  .color-tab-trigger[data-state="active"] {
                    background: linear-gradient(135deg, hsla(280,70%,40%,0.85), hsla(330,80%,45%,0.85), hsla(20,90%,50%,0.85), hsla(50,85%,50%,0.85)) !important;
                    background-size: 300% 300% !important;
                    animation: gradient-morph 8s ease infinite !important;
                  }
                ` }),
                  "Цветная"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              TabsTrigger,
              {
                value: "scan",
                className: "rounded-lg text-xs sm:text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all",
                children: "Сканирование"
              }
            ),
            /* @__PURE__ */ jsx(
              TabsTrigger,
              {
                value: "services",
                className: "rounded-lg text-xs sm:text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all",
                children: "Сборка"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(TabsContent, { value: "bw", className: "mt-0", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-start", children: bwPrices.map((item) => /* @__PURE__ */ jsx(PriceCard, { item, variant: "bw" }, item.format)) }) }),
          /* @__PURE__ */ jsx(TabsContent, { value: "color", className: "mt-0", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-start", children: colorPrices.map((item) => /* @__PURE__ */ jsx(PriceCard, { item, variant: "color" }, item.format)) }) }),
          /* @__PURE__ */ jsx(TabsContent, { value: "scan", className: "mt-0", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-start", children: scanPrices.map((item) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "group relative rounded-2xl border p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 bg-card/40 backdrop-blur-sm border-border/30 hover:border-border/60 hover:bg-card/70",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between mb-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl sm:text-2xl font-bold tracking-tight text-foreground", children: item.format }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: item.size })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "pt-2 border-t border-border/20", children: /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-emerald-400", children: item.price }) })
              ]
            },
            item.format
          )) }) }),
          /* @__PURE__ */ jsx(TabsContent, { value: "services", className: "mt-0", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 items-start", children: services.map((item) => /* @__PURE__ */ jsx(ServiceCard, { item }, item.name)) }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "mt-8 mx-auto max-w-2xl rounded-2xl border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm px-5 py-4 text-center opacity-0",
        style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 350ms forwards" },
        children: [
          /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg font-bold text-white", children: "🎉 Скидка 20% на первый заказ!" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-white/70 mt-1", children: "Применяется автоматически при оформлении через калькулятор." })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "p",
      {
        className: "text-center text-sm text-muted-foreground/70 mt-6 opacity-0",
        style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 400ms forwards" },
        children: "* Цены не являются окончательными. При объёмных и регулярных заказах предоставляется скидка."
      }
    )
  ] }) });
};
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
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
  const touchStartX = useRef(null);
  const hasMultiple = images.length > 1;
  const go = (delta) => setIndex((i) => (i + delta + images.length) % images.length);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > SWIPE_THRESHOLD) go(diff < 0 ? 1 : -1);
    touchStartX.current = null;
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `relative ${aspect} overflow-hidden ${rounded} bg-black/40 group/slider`,
      onTouchStart,
      onTouchEnd,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex h-full transition-transform duration-500 ease-out",
            style: { transform: `translateX(-${index * 100}%)` },
            children: images.map((src, i) => /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => onImageClick(i),
                className: "w-full h-full flex-shrink-0 block cursor-zoom-in",
                "aria-label": `Открыть фото ${i + 1}`,
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src,
                    alt: `${altBase} — фото ${i + 1}`,
                    loading: "lazy",
                    className: "w-full h-full object-cover",
                    draggable: false
                  }
                )
              },
              i
            ))
          }
        ),
        hasMultiple && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                go(-1);
              },
              className: "absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 hover:bg-black/70 transition-opacity",
              "aria-label": "Предыдущее фото",
              children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                go(1);
              },
              className: "absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 hover:bg-black/70 transition-opacity",
              "aria-label": "Следующее фото",
              children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
            }
          ),
          showDots && /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5", children: images.map((_, i) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                setIndex(i);
              },
              className: `h-1.5 rounded-full transition-all ${i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70"}`,
              "aria-label": `Перейти к фото ${i + 1}`
            },
            i
          )) })
        ] })
      ]
    }
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
  return /* @__PURE__ */ jsx(Dialog, { open: !!project, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsx(DialogContent, { className: "max-w-[96vw] sm:max-w-5xl w-full p-0 border-0 bg-transparent shadow-none [&>button]:hidden", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: onClose,
        className: "absolute -top-2 right-0 sm:-top-12 sm:right-0 z-10 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-black/90 transition",
        "aria-label": "Закрыть",
        children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
      }
    ),
    /* @__PURE__ */ jsxs(
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
          /* @__PURE__ */ jsx(
            "img",
            {
              src: project.images[index],
              alt: `${project.altBase} — фото ${index + 1}`,
              className: "w-full max-h-[85vh] object-contain"
            }
          ),
          hasMultiple && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => go(-1),
                className: "absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition",
                "aria-label": "Предыдущее фото",
                children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5" })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => go(1),
                className: "absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition",
                "aria-label": "Следующее фото",
                children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium", children: [
              index + 1,
              " / ",
              project.images.length
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-center text-white/90 text-sm sm:text-base font-medium", children: project.title })
  ] }) }) });
};
const ProjectCard = ({
  project,
  onOpen
}) => /* @__PURE__ */ jsxs("article", { className: "group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] flex-shrink-0 w-[78vw] sm:w-auto snap-center", children: [
  /* @__PURE__ */ jsx(
    ImageSlider,
    {
      images: project.images,
      title: project.title,
      altBase: project.altBase,
      onImageClick: (i) => onOpen(project, i)
    }
  ),
  /* @__PURE__ */ jsxs("div", { className: "p-4 sm:p-5", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-semibold text-foreground leading-snug", children: project.title }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: project.tags.map((tag) => /* @__PURE__ */ jsx(
      "span",
      {
        className: "px-2.5 py-1 text-xs font-medium rounded-full bg-white/[0.06] border border-white/10 text-muted-foreground",
        children: tag
      },
      tag
    )) })
  ] })
] });
const ProjectsSection = () => {
  const [active, setActive] = useState(null);
  return /* @__PURE__ */ jsxs("section", { className: "py-12 sm:py-16 md:py-24 px-3 sm:px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "container max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "mb-8 sm:mb-12 opacity-0",
          style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards" },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-foreground", children: "Наши выполненные проекты" }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground text-base sm:text-lg max-w-2xl", children: "Примеры работ, которые мы напечатали для наших клиентов" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-3 sm:-mx-4 px-3 sm:px-4 md:mx-0 md:px-0 pb-2 md:pb-0 scrollbar-hide opacity-0",
          style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 200ms forwards" },
          children: projects.map((project) => /* @__PURE__ */ jsx(
            ProjectCard,
            {
              project,
              onOpen: (p, i) => setActive({ project: p, index: i })
            },
            project.title
          ))
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      Lightbox,
      {
        project: (active == null ? void 0 : active.project) ?? null,
        startIndex: (active == null ? void 0 : active.index) ?? 0,
        onClose: () => setActive(null)
      }
    )
  ] });
};
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-black overflow-x-hidden relative", children: [
    /* @__PURE__ */ jsx(
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
      }
    ),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("section", { className: "pt-16 md:pt-24 px-3 sm:px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "container max-w-6xl mx-auto text-center relative z-10", children: [
        /* @__PURE__ */ jsxs(
          "h1",
          {
            className: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-balance text-foreground opacity-0",
            style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0ms forwards" },
            children: [
              "Печать проектной",
              /* @__PURE__ */ jsx("br", {}),
              "и рабочей документации"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 px-2",
            style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 150ms forwards" },
            children: "Срочно распечатать чертежи форматов А4, А3, А2, А1, А0 (цвет/чб) с фальцовкой по ГОСТ"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(CarouselSection, {})
    ] }),
    /* @__PURE__ */ jsx("section", { className: "pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-20 md:pb-32 px-3 sm:px-4", children: /* @__PURE__ */ jsx("div", { className: "container max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col md:flex-row items-start gap-6 md:gap-16 opacity-0",
        style: { animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards" },
        children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight text-foreground md:max-w-md flex-shrink-0", children: [
            "Точность печати",
            /* @__PURE__ */ jsx("br", {}),
            "для точных проектов"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md", children: "Мы специализируемся на печати чертежей, проектной документации, рабочей документации и исполнительной документации. Гарантируем высокое качество и соблюдение сроков." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 pt-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-muted-foreground text-sm", children: [
                /* @__PURE__ */ jsx(Crosshair, { className: "w-5 h-5 text-foreground" }),
                /* @__PURE__ */ jsx("span", { children: "Масштаб 1:1" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-muted-foreground text-sm", children: [
                /* @__PURE__ */ jsx(FileCheck, { className: "w-5 h-5 text-foreground" }),
                /* @__PURE__ */ jsx("span", { children: "Строго по ГОСТ" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-muted-foreground text-sm", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-foreground" }),
                /* @__PURE__ */ jsx("span", { children: "Точно в срок" })
              ] })
            ] })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ServicesSection, {}),
    /* @__PURE__ */ jsx(ProjectsSection, {}),
    /* @__PURE__ */ jsx(AnimatedHeroWorks, {}),
    /* @__PURE__ */ jsx(OrderSection, {}),
    /* @__PURE__ */ jsx(PriceListSection, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Index as default
};
