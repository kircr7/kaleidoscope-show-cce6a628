import { ViteReactSSG } from "vite-react-ssg";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, Cookie, Phone } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
const Toaster$1 = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(ToastPrimitives.Root, { ref, className: cn(toastVariants({ variant }), className), ...props });
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Title, { ref, className: cn("text-sm font-semibold", className), ...props }));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Description, { ref, className: cn("text-sm opacity-90", className), ...props }));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);
  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };
  if (!isVisible) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 w-full z-[100] p-3 pointer-events-none", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto bg-black/80 backdrop-blur-md text-white/60 rounded-xl px-4 py-3 flex items-center justify-between gap-4 pointer-events-auto border border-white/5 animate-in slide-in-from-bottom-4 fade-in duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
      /* @__PURE__ */ jsx(Cookie, { className: "w-4 h-4 text-white/30 shrink-0" }),
      /* @__PURE__ */ jsxs("p", { className: "text-[11px] leading-relaxed", children: [
        "Мы используем cookie для улучшения работы сайта.",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "text-white/50 hover:text-white/80 underline underline-offset-2 transition-colors", children: "Подробнее" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: acceptCookies,
          className: "bg-white/10 hover:bg-white/15 text-white/70 px-4 py-1.5 rounded-lg text-[11px] font-medium transition-all active:scale-95",
          children: "Ок"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: acceptCookies,
          className: "p-1.5 text-white/20 hover:text-white/50 rounded-lg transition-colors",
          "aria-label": "Закрыть",
          children: /* @__PURE__ */ jsx(X, { className: "w-3.5 h-3.5" })
        }
      )
    ] })
  ] }) });
};
const FloatingPhone = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowTooltip(true), 300);
      setTimeout(() => setShowTooltip(false), 5300);
    }, 1e4);
    return () => clearTimeout(timer);
  }, []);
  if (!isVisible) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "fixed bottom-20 sm:bottom-5 right-3 sm:right-5 z-[90] flex items-center group font-sans animate-fade-in",
      children: [
        /* @__PURE__ */ jsxs(
          "span",
          {
            className: `absolute right-full mr-3 bg-white/95 backdrop-blur text-slate-700 text-xs font-semibold py-2 px-3.5 rounded-xl shadow-lg transition-all duration-500 pointer-events-none whitespace-nowrap border border-slate-100 ${showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}`,
            children: [
              "Позвоните нам",
              /* @__PURE__ */ jsx("span", { className: "absolute top-1/2 -right-1 -mt-1 w-2 h-2 bg-white border-r border-t border-slate-100 transform rotate-45" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "tel:+79851547772",
            className: "flex items-center justify-center w-12 h-12 bg-emerald-500 text-white rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:scale-110 transition-all duration-500 animate-[glow-pulse_6s_ease-in-out_infinite]",
            "aria-label": "Позвоните нам",
            children: /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5" })
          }
        )
      ]
    }
  );
};
const queryClient = new QueryClient();
const App = () => {
  useEffect(() => {
    let lenisInstance = null;
    let rafId = null;
    let cleanupClick = null;
    import("lenis").then(({ default: Lenis }) => {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
      });
      const handleAnchorClick = (e) => {
        const target = e.target;
        const anchor = target.closest('a[href^="#"]');
        if (anchor) {
          const id = anchor.getAttribute("href");
          if (id && id !== "#") {
            const el = document.querySelector(id);
            if (el) {
              e.preventDefault();
              lenisInstance == null ? void 0 : lenisInstance.scrollTo(el, { offset: -80 });
            }
          }
        }
      };
      document.addEventListener("click", handleAnchorClick);
      cleanupClick = () => document.removeEventListener("click", handleAnchorClick);
      const raf = (time) => {
        lenisInstance == null ? void 0 : lenisInstance.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    });
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      cleanupClick == null ? void 0 : cleanupClick();
      lenisInstance == null ? void 0 : lenisInstance.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsx(Toaster$1, {}),
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(CookieBanner, {}),
    /* @__PURE__ */ jsx(FloatingPhone, {})
  ] }) });
};
const articleProjectDocs = "/assets/article-project-docs-CGRlEbf3.jpg";
const articleWorkingDocs = "/assets/work-8-C4OCGmxg.jpg";
const articleExecDocs = "/assets/work-12-BVobCtOG.jpg";
const articleBlueprints = "/assets/work-10-Bg7Yk2SH.jpg";
const articleBinding = "/assets/article-binding-BNMyLr3i.jpg";
const articles = [
  {
    id: 1,
    slug: "pechat-proektnoy-dokumentacii-moskva",
    seoTitle: "Печать проектной документации в Москве",
    seoDescription: "Срочная печать проектной документации стадии «П» в Москве. Строго по ГОСТ 21.101-2020. Безналичный расчет, работаем по ЭДО.",
    h1: "Срочная печать проектной документации (стадия «П») в Москве",
    category: "Документация",
    date: "2026-03-20",
    excerpt: "Подготовка проектной документации для сдачи в Мосгосэкспертизу — процесс, не терпящий ошибок. Строго по ГОСТ 21.101-2020.",
    image: articleProjectDocs,
    content: `<p>Подготовка проектной документации для сдачи в Мосгосэкспертизу — процесс, не терпящий ошибок. Каждый том должен быть оформлен строго по ГОСТ 21.101-2020: правильная нумерация, штампы, рамки, фальцовка чертежей.</p>

<p>Мы специализируемся на печати проектной документации стадии «П» и знаем все требования экспертизы. Наши инженеры проверяют каждый файл перед выводом на печать, чтобы исключить ошибки масштабирования и обрезки.</p>

<p>Типичный комплект проектной документации включает текстовую часть (пояснительная записка, расчёты) и графическую часть (чертежи форматов А0–А3). Всё это необходимо распечатать, сфальцевать и переплести в тома.</p>

<h2>Требования по ГОСТ</h2>
<ul>
<li>Точность масштаба 1:1.</li>
<li>Читаемость шрифтов при 600 dpi.</li>
<li>Инженерная бумага 80-90 г/м².</li>
</ul>

<p>Мы принимаем оплату по безналичному расчету и ЭДО, организуем доставку в пределах МКАД.</p>`
  },
  {
    id: 2,
    slug: "pechat-rabochey-dokumentacii",
    seoTitle: "Печать рабочей документации для стройплощадок | Чертежи А3, А2, А1, А0",
    seoDescription: "Печать рабочих чертежей стадии «Р» для строительных объектов Москвы и МО. Фальцовка, ламинация генпланов, доставка на стройку.",
    h1: "Печать рабочей документации: выдача чертежей на объект",
    category: "Стройка",
    date: "2026-03-18",
    excerpt: "Рабочая документация — это расходный материал любой московской стройки. Печать чертежей стадии «Р» с доставкой на объект.",
    image: articleWorkingDocs,
    content: `<p>Рабочая документация — это расходный материал любой московской стройки. Комплекты чертежей передаются прорабам, субподрядчикам, инженерам технадзора. Они мокнут, рвутся, теряются — и их нужно оперативно допечатывать.</p>

<p>Мы понимаем ритм стройки и работаем в режиме «на вчера». Принимаем файлы через мессенджеры, облачные хранилища и по email. Стандартный заказ выполняется за 2–4 часа.</p>

<h2>Особенности</h2>
<ul>
<li>Любые объемы в срок "на вчера".</li>
<li>Ламинация генпланов и СГП.</li>
<li>Оперативная замена листов (Изм.).</li>
</ul>`
  },
  {
    id: 3,
    slug: "ispolnitelnaya-dokumentaciya-pechat",
    seoTitle: "Печать исполнительной документации под ключ | Сборка томов",
    seoDescription: "Срочная распечатка и комплектация исполнительной документации. Печать актов, схем, фальцовка в А4, подшивка.",
    h1: "Срочная печать исполнительной документации под ключ",
    category: "Документация",
    date: "2026-03-15",
    excerpt: "Сдача исполнительной документации — самый нервный этап закрытия объекта. Полный цикл: печать, фальцовка, сборка томов.",
    image: articleExecDocs,
    content: `<p>Сдача исполнительной документации — самый нервный этап закрытия объекта. Строительный контроль и заказчик требуют идеально оформленные тома: акты скрытых работ, исполнительные схемы, сертификаты, паспорта на материалы.</p>

<p>Мы берём на себя весь цикл подготовки бумажных комплектов: от печати микс-форматов до финальной сборки в папки-регистраторы с корешками и описями.</p>

<h2>Полный цикл</h2>
<ul>
<li>Печать микс-форматов (А4-А0).</li>
<li>Автоматическая фальцовка по ГОСТ 2.501-2013.</li>
<li>Сборка в папки-регистраторы.</li>
</ul>`
  },
  {
    id: 4,
    slug: "pechat-chertezhey-a0-a1-a2",
    seoTitle: "Печать чертежей А0, А1, А2, А3 из PDF, AutoCAD | Москва",
    seoDescription: "Широкоформатная печать инженерных чертежей форматов от А3 до А0+. Распечатаем из PDF, DWG (AutoCAD). Строго 1:1.",
    h1: "Широкоформатная печать чертежей (А0, А1, А2, А3, А4)",
    category: "Печать",
    date: "2026-03-12",
    excerpt: "Принимаем в печать исходники в форматах PDF, DWG (AutoCAD), PLN (ArchiCAD) и CDW (Компас-3D). Гарантируем 100% попадание в масштаб.",
    image: articleBlueprints,
    content: `<p>Принимаем в печать исходники в форматах PDF, DWG (AutoCAD), PLN (ArchiCAD) и CDW (Компас-3D). Наши плоттеры откалиброваны для точного воспроизведения масштаба — каждый чертеж проходит контроль перед выдачей.</p>

<p>Широкоформатная печать — наша основная специализация. Мы работаем с инженерной документацией ежедневно и знаем все нюансы вывода чертежей разных форматов.</p>

<h2>Форматы</h2>
<ul>
<li>Стандартные ГОСТ форматы.</li>
<li>Нестандартные длинномеры (А1×3, А0×2).</li>
<li>Ватман и калька.</li>
</ul>

<p>Гарантируем 100% попадание в масштаб.</p>`
  },
  {
    id: 5,
    slug: "falcovka-i-pereplet-chertezhey",
    seoTitle: "Фальцовка чертежей А0-А1 по ГОСТ | Брошюровка и переплет",
    seoDescription: "Автоматическая фальцовка проектной документации. Брошюровка чертежей на пружину, твердый переплет томов.",
    h1: "Фальцовка по ГОСТ, брошюровка и сборка проектных томов",
    category: "Переплёт",
    date: "2026-03-10",
    excerpt: "Машинная фальцовка чертежей в размер А4, брошюровка на пластиковую и металлическую пружину, твердый классический переплет.",
    image: articleBinding,
    content: `<h2>1. Машинная фальцовка чертежей</h2>
<p>Сложение в размер А4 (210×297 мм) с полем для подшивки и без поля. Автоматическая фальцовка обеспечивает идеальную точность и скорость — до 1000 листов в час.</p>

<p>Фальцовка выполняется строго по ГОСТ 2.501-2013, что гарантирует правильное расположение штампа и удобство работы с документацией.</p>

<h2>2. Брошюровка</h2>
<p>На пластиковую и металлическую пружину, твердый классический переплет. Выбор типа переплёта зависит от назначения документации и требований заказчика.</p>

<ul>
<li>Пластиковая пружина — до 500 листов, быстро и экономично.</li>
<li>Металлическая пружина — до 120 листов, презентабельный вид.</li>
<li>Твёрдый переплёт — для архивных томов и исполнительной документации.</li>
</ul>`
  }
];
const blogGost = "/assets/blog-gost-CtBqh4bU.jpg";
const blogFilePrep = "/assets/blog-file-prep-D0pqh0nv.jpg";
const blogBindingTypes = "/assets/blog-binding-types-CRgH5UGL.jpg";
const blogPosts = [
  {
    slug: "trebovaniya-gost-k-pechati-chertezhey",
    title: "Требования ГОСТ к печати чертежей: полное руководство",
    excerpt: "Разбираем основные стандарты ГОСТ для печати проектной документации — масштабы, рамки, штампы и допустимые отклонения.",
    category: "ГОСТ",
    image: blogGost,
    date: "2026-03-20",
    content: `
## Зачем соблюдать ГОСТ при печати чертежей?

Печать проектной и рабочей документации — это не просто вывод файла на плоттер. Каждый чертеж должен соответствовать требованиям ГОСТ 2.301-68 (форматы) и ГОСТ 2.104-2006 (основные надписи).

### Основные требования к форматам

Стандарт ГОСТ 2.301-68 определяет следующие форматы чертежей:

- **А0** — 841 × 1189 мм
- **А1** — 594 × 841 мм
- **А2** — 420 × 594 мм
- **А3** — 297 × 420 мм
- **А4** — 210 × 297 мм

### Масштаб печати

Критически важно соблюдать масштаб 1:1 при выводе на печать. Даже незначительное отклонение может привести к ошибкам при строительстве. Наши инженерные плоттеры калиброваны для точного воспроизведения масштаба.

### Требования к качеству линий

Толщина линий на чертеже должна соответствовать ГОСТ 2.303-68. Мы используем профессиональную бумагу плотностью 80 г/м², которая обеспечивает четкую передачу тонких линий и мелкого текста.

### Фальцовка по ГОСТ

После печати широкоформатные чертежи складываются (фальцуются) до формата А4 согласно ГОСТ 2.501-2013. Это необходимо для удобной подшивки в тома проектной документации.

## Как мы обеспечиваем соответствие стандартам

В типографии ПринтПРО каждый заказ проходит проверку перед печатью. Наши специалисты контролируют масштаб, качество линий и правильность оформления рамок.
    `
  },
  {
    slug: "kak-podgotovit-fayly-dlya-pechati",
    title: "Как подготовить файлы для печати чертежей: советы инженерам",
    excerpt: "Практические рекомендации по подготовке PDF, DWG и других форматов для качественной широкоформатной печати.",
    category: "Советы",
    image: blogFilePrep,
    date: "2026-03-15",
    content: `
## Правильная подготовка файлов — залог качественной печати

Большинство проблем с качеством печати связаны не с оборудованием, а с неправильно подготовленными файлами. В этой статье мы расскажем, как избежать типичных ошибок.

### Какой формат выбрать?

**PDF** — универсальный и самый надежный формат для печати. При экспорте из AutoCAD или Revit выбирайте PDF/A для максимальной совместимости.

**DWG** — нативный формат AutoCAD. Мы принимаем DWG, но рекомендуем предварительно проверить, что все шрифты и внешние ссылки (xref) подгружены корректно.

### Настройки экспорта в PDF

1. **Масштаб**: всегда выбирайте «1:1» или «Фактический размер»
2. **Качество**: разрешение не менее 300 dpi для растровых элементов
3. **Цвет**: если чертеж черно-белый, выберите монохромный режим — это ускорит печать
4. **Линии**: убедитесь, что толщина линий соответствует стандарту

### Частые ошибки

- Файл в формате А3, а нужна печать на А1 — масштаб «подгоняется» и чертеж теряет точность
- Использование нестандартных шрифтов без встраивания в PDF
- Растровые вставки в низком разрешении

### Наша рекомендация

Присылайте файлы через облачные сервисы (Яндекс.Диск, Google Drive) — это быстрее и надежнее, чем отправка по email.
    `
  },
  {
    slug: "vidy-pereplyota-dlya-proektnoy-dokumentacii",
    title: "Виды переплёта для проектной документации: что выбрать?",
    excerpt: "Сравниваем пластиковую пружину, металлический переплёт и твёрдый канальный переплёт для разных типов документации.",
    category: "Обзоры",
    image: blogBindingTypes,
    date: "2026-03-10",
    content: `
## Какой переплёт подойдет для вашей документации?

Выбор переплёта зависит от назначения документации, её объема и требований заказчика. Разберём основные варианты.

### Пластиковая пружина

**Для кого**: рабочая документация, черновые комплекты, внутренние отчёты.

- Быстро и недорого
- Легко добавить или убрать листы
- Объём: до 500 листов
- Документ раскрывается на 360°

### Металлическая пружина

**Для кого**: презентационные материалы, коммерческие предложения.

- Аккуратный внешний вид
- Объём: до 120 листов
- Прочнее пластиковой пружины

### Твёрдый канальный переплёт

**Для кого**: исполнительная документация, дипломы, диссертации, архивные тома.

- Максимально презентабельный вид
- Долговечность — документ хранится годами
- Объём: до 300 листов
- Выбор цвета обложки

### Что выбрать для сдачи в экспертизу?

Для сдачи проектной документации в экспертизу обычно требуется переплёт на пластиковую пружину с прозрачной лицевой обложкой и белым картонным задником. Мы выполняем такой переплёт за 15 минут.

## Итог

Если сомневаетесь — звоните нам. Подскажем оптимальный вариант под вашу задачу.
    `
  }
];
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsx(App, {}),
    children: [
      {
        index: true,
        lazy: () => import("./assets/Index-CCQbeUFg.js").then((m) => ({ Component: m.default }))
      },
      {
        path: "blog",
        lazy: () => import("./assets/Blog-BdIUOD5r.js").then((m) => ({ Component: m.default }))
      },
      {
        path: "blog/:slug",
        lazy: () => import("./assets/BlogPost-BQUH-oxb.js").then((m) => ({ Component: m.default })),
        getStaticPaths: () => [
          ...articles.map((a) => `/blog/${a.slug}`),
          ...blogPosts.map((p) => `/blog/${p.slug}`)
        ]
      },
      {
        path: "privacy",
        lazy: () => import("./assets/PrivacyPolicy-Yb7T5HkA.js").then((m) => ({ Component: m.default }))
      },
      {
        path: "terms",
        lazy: () => import("./assets/TermsOfService-CZhhl11S.js").then((m) => ({ Component: m.default }))
      },
      {
        path: "*",
        lazy: () => import("./assets/NotFound-BwvGTita.js").then((m) => ({ Component: m.default }))
      }
    ]
  }
];
const createRoot = ViteReactSSG({ routes });
export {
  articles as a,
  blogPosts as b,
  cn as c,
  createRoot,
  useToast as u
};
