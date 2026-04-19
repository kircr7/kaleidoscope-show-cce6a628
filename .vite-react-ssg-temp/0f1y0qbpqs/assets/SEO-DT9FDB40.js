import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { X, Menu, FileText, MapPin, Phone, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
const logoImg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='832.000000pt'%20height='219.000000pt'%20viewBox='0%200%20832.000000%20219.000000'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20transform='translate(0.000000,219.000000)%20scale(0.100000,-0.100000)'%20fill='%23000000'%20stroke='none'%3e%3cpath%20d='M964%201857%20c-12%20-7%20-97%20-86%20-189%20-175%20l-168%20-164%20209%20-209%20c115%20-115%20211%20-209%20214%20-209%203%200%20100%2092%20216%20205%20l209%20204%20-165%20166%20c-91%2092%20-177%20173%20-192%20181%20-33%2017%20-105%2018%20-134%201z'/%3e%3cpath%20d='M3878%201703%20c-3%20-4%20-5%20-32%20-6%20-60%20-2%20-48%200%20-53%2022%20-59%2017%20-4%20130%200%20154%205%202%201%202%2027%200%2059%20l-3%2057%20-82%203%20c-45%201%20-83%20-1%20-85%20-5z'/%3e%3cpath%20d='M5238%201593%20l-3%20-118%20-55%20-5%20-55%20-5%200%20-60%200%20-60%2058%20-3%2057%20-3%200%20-212%20c0%20-119%205%20-229%2011%20-250%2014%20-52%2069%20-110%20127%20-135%2052%20-22%20200%20-38%20257%20-28%2035%207%2035%207%2035%2060%20l0%2054%20-67%207%20c-81%208%20-120%2023%20-153%2059%20-25%2027%20-25%2030%20-28%20236%20-4%20238%20-9%20224%2091%20219%2029%20-1%2073%20-1%20100%20-1%20l47%202%200%2054%20c0%2040%20-4%2055%20-16%2060%20-9%203%20-60%206%20-114%206%20-68%200%20-101%204%20-107%2013%20-4%206%20-8%2059%20-9%20117%20l-1%20105%20-86%203%20-86%203%20-3%20-118z'/%3e%3cpath%20d='M2430%201460%20c-19%20-5%20-47%20-22%20-62%20-39%20l-28%20-31%200%20-460%200%20-460%2090%200%2090%200%200%20120%20c0%20100%202%20120%2015%20120%20197%200%20366%2010%20405%2024%20105%2039%20156%2096%20184%20204%2021%2079%2021%20247%200%20318%20-32%20113%20-120%20183%20-254%20204%20-76%2012%20-389%2012%20-440%200z%20m435%20-144%20c66%20-35%2085%20-86%2085%20-226%200%20-138%20-16%20-184%20-76%20-221%20-36%20-22%20-51%20-24%20-197%20-27%20l-157%20-4%202%20243%203%20243%2024%2013%20c17%208%2062%2010%20150%206%20102%20-4%20134%20-9%20166%20-27z'/%3e%3cpath%20d='M3565%201460%20c-93%20-8%20-157%20-33%20-203%20-79%20-65%20-65%20-66%20-76%20-67%20-386%20l0%20-280%2085%200%2085%200%205%20255%20c5%20244%206%20257%2028%20292%2025%2041%2091%2078%20139%2078%2017%200%2051%203%2077%206%20l46%207%200%2053%20c0%2030%20-1%2054%20-2%2054%20-35%206%20-131%206%20-193%200z'/%3e%3cpath%20d='M3875%201458%20c-3%20-7%20-4%20-177%20-3%20-378%20l3%20-365%2085%200%2085%200%200%20375%200%20375%20-83%203%20c-60%202%20-84%20-1%20-87%20-10z'/%3e%3cpath%20d='M4309%201461%20c-51%20-17%20-68%20-32%20-79%20-69%20-11%20-39%20-15%20-639%20-4%20-666%205%20-13%2022%20-16%2084%20-16%2044%200%2081%204%2084%209%204%205%206%20140%207%20299%200%20228%203%20294%2014%20308%2012%2017%2029%2019%20157%2019%20131%20-1%20146%20-3%20184%20-24%2067%20-38%2068%20-45%2074%20-341%20l5%20-265%2085%200%2085%200%203%20270%20c3%20312%20-1%20339%20-63%20400%20-69%2069%20-106%2077%20-375%2081%20-129%202%20-247%200%20-261%20-5z'/%3e%3cpath%20d='M5895%201466%20c-5%20-2%20-22%20-7%20-36%20-10%20-14%20-3%20-38%20-18%20-52%20-32%20l-27%20-27%200%20-464%200%20-464%2083%203%2082%203%207%20113%20c3%2063%209%20117%2013%20120%204%204%2086%208%20183%2010%20223%203%20279%2018%20345%2092%2063%2070%2081%20133%2079%20288%20-1%20164%20-25%20232%20-106%20299%20-64%2052%20-125%2064%20-355%2069%20-113%202%20-210%202%20-216%200z%20m381%20-137%20c83%20-25%20120%20-116%20112%20-279%20-7%20-136%20-46%20-189%20-157%20-210%20-66%20-12%20-241%20-13%20-260%20-1%20-19%2012%20-24%20118%20-14%20321%208%20162%208%20165%2033%20177%2028%2014%20231%208%20286%20-8z'/%3e%3cpath%20d='M7495%201456%20c-119%20-29%20-188%20-91%20-221%20-198%20-26%20-87%20-27%20-270%200%20-347%2025%20-74%2093%20-141%20172%20-171%2083%20-32%20325%20-41%20441%20-15%20134%2029%20189%2074%20241%20198%2023%2055%2026%2075%2025%20182%200%20104%20-3%20127%20-24%20175%20-30%2069%20-44%2089%20-90%20123%20-62%2046%20-169%2067%20-343%2066%20-83%200%20-173%20-6%20-201%20-13z%20m380%20-133%20c80%20-42%20104%20-93%20105%20-228%200%20-113%20-10%20-149%20-57%20-197%20-47%20-48%20-110%20-68%20-217%20-68%20-191%200%20-264%2065%20-274%20244%20-5%20114%209%20170%2054%20212%2054%2051%20102%2064%20234%2061%2094%20-2%20122%20-7%20155%20-24z'/%3e%3cpath%20d='M385%201298%20c-249%20-248%20-249%20-249%207%20-501%20l171%20-168%20211%20210%20211%20211%20-205%20205%20c-113%20113%20-211%20205%20-218%20205%20-7%200%20-87%20-73%20-177%20-162z'/%3e%3cpath%20d='M1283%201256%20l-208%20-205%20205%20-205%20c113%20-114%20210%20-206%20217%20-206%207%200%2086%2074%20175%20165%20249%20253%20249%20250%200%20492%20-92%2090%20-170%20163%20-174%20163%20-4%200%20-101%20-92%20-215%20-204z'/%3e%3cpath%20d='M6890%201440%20c-30%20-11%20-71%20-37%20-92%20-57%20-62%20-60%20-68%20-96%20-68%20-399%20l0%20-262%2028%20-3%20c15%20-2%2055%20-3%2090%20-1%20l63%204%20-7%20221%20c-7%20236%20-2%20282%2037%20331%2033%2042%2089%2065%20178%2072%20l82%207%20-3%2051%20-3%2051%20-125%202%20c-103%202%20-134%20-1%20-180%20-17z'/%3e%3cpath%20d='M821%20796%20c-111%20-112%20-201%20-209%20-200%20-217%202%20-8%2078%20-87%20169%20-175%20174%20-171%20207%20-192%20269%20-174%2047%2013%2053%2018%20226%20190%20l166%20164%20-208%20208%20c-114%20114%20-210%20208%20-213%20208%20-3%200%20-97%20-92%20-209%20-204z'/%3e%3c/g%3e%3c/svg%3e";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith("/") && !href.includes("#")) {
      navigate(href);
    } else if (href.startsWith("/#")) {
      const hash = href.slice(1);
      if (location.pathname === "/") {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/" + hash);
      }
    } else if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  const navLinks = [
    { name: "Услуги", href: "/#services" },
    { name: "Цены", href: "/#pricelist" },
    { name: "Блог", href: "/blog" },
    { name: "Контакты", href: "/#footer" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "nav",
      {
        className: `fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] transition-all duration-700 max-w-[calc(100%-2rem)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`,
        style: {
          background: "hsla(0, 0%, 8%, 0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          padding: "6px 6px 6px 8px"
        },
        children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "px-2 py-1 rounded-full flex items-center flex-shrink-0", children: /* @__PURE__ */ jsx("img", { src: logoImg, alt: "ПринтПРО — печать чертежей", className: "h-5 lg:h-6 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" }) }),
          navLinks.map((link) => /* @__PURE__ */ jsx(
            "a",
            {
              href: link.href,
              onClick: (e) => handleNavClick(e, link.href),
              className: "px-3 lg:px-5 py-2 rounded-full text-xs font-medium text-white/50 hover:text-white hover:bg-white/[0.06] transition-all duration-300 active:scale-95 whitespace-nowrap",
              children: link.name
            },
            link.name
          )),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/#calculator",
              onClick: (e) => handleNavClick(e, "/#calculator"),
              className: "relative group ml-1 flex-shrink-0 rounded-full p-[1.5px] cta-glow-wrap",
              style: { background: "linear-gradient(to right, #22d3ee, #3b82f6, #ec4899)" },
              children: [
                /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 blur-md opacity-0 cta-glow" }),
                /* @__PURE__ */ jsx("span", { className: "relative block px-4 lg:px-6 py-2.5 rounded-full text-xs font-bold text-white whitespace-nowrap", style: { background: "hsl(0, 0%, 8%)" }, children: "Сделать заказ" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "nav",
      {
        className: `fixed top-3 left-1/2 -translate-x-1/2 z-50 md:hidden w-[calc(100%-2rem)] max-w-sm transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center justify-between px-3 py-2 rounded-full border border-white/[0.08]",
            style: {
              background: "hsla(0, 0%, 8%, 0.8)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)"
            },
            children: [
              /* @__PURE__ */ jsx("a", { href: "#", className: "px-1 py-0.5 flex items-center", children: /* @__PURE__ */ jsx("img", { src: logoImg, alt: "ПринтПРО", className: "h-5 brightness-0 invert opacity-70" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxs("a", { href: "/#calculator", onClick: (e) => handleNavClick(e, "/#calculator"), className: "relative group cta-glow-wrap", children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500" }),
                  /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 blur-md opacity-0 cta-glow" }),
                  /* @__PURE__ */ jsx("span", { className: "relative block px-4 py-2 rounded-full text-[11px] font-bold text-white bg-[hsl(0,0%,8%)] m-[1.5px]", children: "Сделать заказ" })
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "p-2 text-white/50 hover:text-white transition-colors",
                    onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
                    children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("div", { className: `md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-8", children: [
      navLinks.map((link) => /* @__PURE__ */ jsx(
        "a",
        {
          href: link.href,
          onClick: (e) => {
            handleNavClick(e, link.href);
            setIsMobileMenuOpen(false);
          },
          className: "text-lg font-bold text-white/60 hover:text-white transition-colors",
          children: link.name
        },
        link.name
      )),
      /* @__PURE__ */ jsx("div", { className: "w-12 h-px bg-white/10" }),
      /* @__PURE__ */ jsx("a", { href: "tel:+79851547772", className: "text-sm text-white/30 font-medium", children: "+7 (985) 154-77-72" })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes cta-glow-pulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.45; }
        }
        .cta-glow {
          animation: cta-glow-pulse 4s ease-in-out infinite;
        }
        .cta-glow-wrap:hover .cta-glow {
          animation: none;
          opacity: 0.6;
        }
      ` })
  ] });
};
const Footer = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotate({ x: rotateX, y: rotateY });
  };
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };
  const specs = [
    "Чертежи",
    "Проектная документация",
    "Рабочая документация",
    "Исполнительная документация"
  ];
  return /* @__PURE__ */ jsxs("footer", { id: "footer", className: "relative bg-[hsl(0,0%,4%)] text-[hsl(var(--foreground))] overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.03] pointer-events-none",
        style: {
          backgroundImage: "linear-gradient(hsl(0,0%,50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,50%) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 container max-w-6xl mx-auto px-4 pt-16 pb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4 space-y-5", children: [
          /* @__PURE__ */ jsx("div", { className: "group flex items-center gap-3 cursor-default", children: /* @__PURE__ */ jsx("img", { src: logoImg, alt: "ПринтПРО — типография инженерной печати", className: "h-7 brightness-0 invert opacity-80" }) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-[hsl(var(--muted-foreground))]", children: "Центр инженерной печати. Профессиональная работа с технической документацией любого объема и сложности." }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-3", children: "Специализация:" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: specs.map((spec) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]", children: [
              /* @__PURE__ */ jsx(FileText, { size: 14, className: "text-[hsl(45,90%,55%)] flex-shrink-0" }),
              spec
            ] }, spec)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-3 space-y-5", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-base font-semibold text-[hsl(var(--foreground))]", children: "Наши контакты" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-sm text-white", children: [
              /* @__PURE__ */ jsx(MapPin, { size: 16, className: "text-[hsl(45,90%,55%)] mt-0.5 flex-shrink-0" }),
              "г. Москва, ул. Свободы, д. 35, стр. 5"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
              /* @__PURE__ */ jsx(Phone, { size: 16, className: "text-[hsl(45,90%,55%)] flex-shrink-0" }),
              /* @__PURE__ */ jsx("a", { href: "tel:+79851547772", className: "text-white hover:text-white/80 transition-colors", children: "+7 (985) 154-77-72" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
              /* @__PURE__ */ jsx(Mail, { size: 16, className: "text-[hsl(45,90%,55%)] flex-shrink-0" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:printprro@gmail.com", className: "text-white hover:text-white/80 transition-colors", children: "printprro@gmail.com" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 space-y-5", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-base font-semibold text-[hsl(var(--foreground))]", children: "Мы на карте" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "relative rounded-xl overflow-hidden border border-[hsl(var(--border))] cursor-grab",
              style: {
                perspective: "1000px"
              },
              onMouseMove: handleMouseMove,
              onMouseLeave: handleMouseLeave,
              children: /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "transition-transform duration-200 ease-out",
                  style: {
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
                  },
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "relative bg-[hsl(var(--card))] p-3", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-[hsl(var(--foreground))] mb-2", children: "ПринтПро" }),
                      /* @__PURE__ */ jsx(
                        "iframe",
                        {
                          loading: "lazy",
                          src: "https://yandex.ru/map-widget/v1/?display-text=%D0%A2%D0%B8%D0%BF%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F&ll=37.456444%2C55.843636&mode=search&oid=150374193660&ol=biz&sctx=ZAAAAAgBEAAaKAoSCTav6qwWukJAEQgfSrTk60tAEhIJdM%2B6RsuBXj8RWwuz0M5pRj8iBgABAgMEBSgKOABAv5IHSAFqAnJ1nQHNzMw9oAEAqAEAvQG%2FbA92wgEG%2FLOAmLAEggIbKChjYXRlZ29yeV9pZDooMTg0MTA3MTM0KSkpigIJMTg0MTA3MTM0kgIAmgIMZGVza3RvcC1tYXBzqgJRMjA1NzI4ODUyNjA4LDQ1NDMyNDAzNDEsNjAwMjE0NiwxNDkxMzY5Nzk3OTEsMTA2MzU5MzcxNjM3LDkwNzIxODI1MTY4LDM4MDM4NzQ1NDUx&sll=37.453837%2C55.843636&source=serp_navig&sspn=0.013146%2C0.004829&text=%7B%22text%22%3A%22%D0%A2%D0%B8%D0%BF%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22category_id%22%2C%22attr_values%22%3A%5B%22184107134%22%5D%7D%5D%7D&z=16.66",
                          width: "100%",
                          height: "180",
                          frameBorder: "0",
                          allowFullScreen: true,
                          className: "rounded-lg",
                          style: { filter: "invert(0.9) hue-rotate(180deg) contrast(0.85)" },
                          title: "Карта офиса ПринтПро"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "absolute inset-0 pointer-events-none rounded-xl opacity-10",
                        style: {
                          background: `radial-gradient(circle at ${50 + rotate.y * 2}% ${50 + rotate.x * 2}%, hsla(0,0%,100%,0.3), transparent 60%)`
                        }
                      }
                    )
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://yandex.ru/maps/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-block text-xs text-[hsl(45,90%,55%)] hover:underline transition-colors",
              children: "Открыть большую карту →"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 sm:mt-12 pt-6 border-t border-[hsl(var(--border))] flex flex-col md:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-xs text-[hsl(var(--muted-foreground))] text-center md:text-left space-y-1", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "© ",
            currentYear,
            " ИП Стрыгина Екатерина Александровна (Типография «ПринтПРО»)"
          ] }),
          /* @__PURE__ */ jsx("p", { children: "ИНН: 245907557883 · ОГРНИП: 326246800000141" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 sm:gap-6 text-center", children: [
          /* @__PURE__ */ jsx("a", { href: "/blog", className: "text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors", children: "Блог" }),
          /* @__PURE__ */ jsx("a", { href: "/privacy", className: "text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors", children: "Политика конфиденциальности" }),
          /* @__PURE__ */ jsx("a", { href: "/terms", className: "text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors", children: "Условия обслуживания" })
        ] })
      ] })
    ] })
  ] });
};
const SITE_URL = "https://printprro.ru";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const SEO = ({
  title,
  description,
  keywords,
  canonicalPath,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  jsonLd
}) => {
  const location = useLocation();
  const path = canonicalPath ?? location.pathname;
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`.replace(/\/$/, "") || SITE_URL;
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const jsonLdArray = jsonLd ? Array.isArray(jsonLd) ? jsonLd : [jsonLd] : [];
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("html", { lang: "ru" }),
    /* @__PURE__ */ jsx("title", { children: title }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: type }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonical }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImage }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "ru_RU" }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Типография ПринтПРО" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImage }),
    jsonLdArray.map((data, i) => /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(data) }, i))
  ] });
};
export {
  Footer as F,
  Navbar as N,
  SEO as S
};
