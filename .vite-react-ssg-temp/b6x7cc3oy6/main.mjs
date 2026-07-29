var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
import { ViteReactSSG } from "vite-react-ssg";
import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactJSXDevRuntime from "react/jsx-dev-runtime";
import { Link, useLocation, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, Cookie, Phone } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
const _jsxDEV = ReactJSXDevRuntime.jsxDEV;
const Fragment = ReactJSXDevRuntime.Fragment;
const SOURCE_KEY = Symbol.for("__jsxSource__");
const cleanFileName = (fileName) => {
  if (!fileName) return "";
  if (fileName.includes("dev_server")) {
    fileName = fileName.split("dev_server")[1].slice(1);
  }
  if (fileName.includes("sandbox-scheduler/sandbox")) {
    const sandboxPart = fileName.split("sandbox-scheduler/")[1];
    fileName = sandboxPart.split("/").slice(1).join("/");
  }
  return fileName.replace(/^\/dev-server\//, "");
};
const sourceElementMap = /* @__PURE__ */ new Map();
window.sourceElementMap = sourceElementMap;
function getSourceKey(sourceInfo) {
  return `${cleanFileName(sourceInfo.fileName)}:${sourceInfo.lineNumber}:${sourceInfo.columnNumber}`;
}
function unregisterElement(node, sourceInfo) {
  const key = getSourceKey(sourceInfo);
  const refs = sourceElementMap.get(key);
  if (refs) {
    for (const ref of refs) {
      if (ref.deref() === node) {
        refs.delete(ref);
        break;
      }
    }
    if (refs.size === 0) {
      sourceElementMap.delete(key);
    }
  }
}
function registerElement(node, sourceInfo) {
  const key = getSourceKey(sourceInfo);
  if (!sourceElementMap.has(key)) {
    sourceElementMap.set(key, /* @__PURE__ */ new Set());
  }
  sourceElementMap.get(key).add(new WeakRef(node));
}
function getTypeName(type) {
  var _a2, _b2;
  if (typeof type === "string") return type;
  if (typeof type === "function") return type.displayName || type.name || "Unknown";
  if (typeof type === "object" && type !== null) {
    return type.displayName || ((_a2 = type.render) == null ? void 0 : _a2.displayName) || ((_b2 = type.render) == null ? void 0 : _b2.name) || "Unknown";
  }
  return "Unknown";
}
function jsxDEV(type, props, key, isStatic, source, self) {
  if ((source == null ? void 0 : source.fileName) && typeof type !== "string" && type !== Fragment) {
    const typeName = getTypeName(type);
    const jsxSourceInfo = {
      fileName: cleanFileName(source.fileName),
      lineNumber: source.lineNumber,
      columnNumber: source.columnNumber,
      displayName: typeName
    };
    const originalRef = props == null ? void 0 : props.ref;
    const enhancedProps = {
      ...props,
      ref: (node) => {
        if (node) {
          if (!node[SOURCE_KEY]) {
            node[SOURCE_KEY] = jsxSourceInfo;
            registerElement(node, jsxSourceInfo);
          }
        }
        if (typeof originalRef === "function") {
          originalRef(node);
        } else if (originalRef && typeof originalRef === "object") {
          originalRef.current = node;
        }
      }
    };
    return _jsxDEV(type, enhancedProps, key, isStatic, source, self);
  }
  if ((source == null ? void 0 : source.fileName) && typeof type === "string") {
    const sourceInfo = {
      fileName: cleanFileName(source.fileName),
      lineNumber: source.lineNumber,
      columnNumber: source.columnNumber,
      displayName: type
    };
    const originalRef = props == null ? void 0 : props.ref;
    const enhancedProps = {
      ...props,
      ref: (node) => {
        if (node) {
          const existingSource = node[SOURCE_KEY];
          if (existingSource) {
            if (getSourceKey(existingSource) !== getSourceKey(sourceInfo)) {
              unregisterElement(node, existingSource);
              node[SOURCE_KEY] = sourceInfo;
              registerElement(node, sourceInfo);
            }
          } else {
            node[SOURCE_KEY] = sourceInfo;
            registerElement(node, sourceInfo);
          }
        }
        if (typeof originalRef === "function") {
          originalRef(node);
        } else if (originalRef && typeof originalRef === "object") {
          originalRef.current = node;
        }
      }
    };
    return _jsxDEV(type, enhancedProps, key, isStatic, source, self);
  }
  return _jsxDEV(type, props, key, isStatic, source, self);
}
(_a = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _a.call(globalThis, "src/components/ui/sonner.tsx");
const Toaster$1 = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsxDEV(
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
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/ui/sonner.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    void 0
  );
};
(_b = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _b.call(globalThis, "src/hooks/use-toast.ts");
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
(_c = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _c.call(globalThis, "src/lib/utils.ts");
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
(_d = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _d.call(globalThis, "src/components/ui/toast.tsx");
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 14,
    columnNumber: 3
  },
  void 0
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
  return /* @__PURE__ */ jsxDEV(ToastPrimitives.Root, { ref, className: cn(toastVariants({ variant }), className), ...props }, void 0, false, {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, void 0);
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 52,
    columnNumber: 3
  },
  void 0
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
      fileName: "/dev-server/src/components/ui/toast.tsx",
      lineNumber: 76,
      columnNumber: 5
    }, void 0)
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 67,
    columnNumber: 3
  },
  void 0
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(ToastPrimitives.Title, { ref, className: cn("text-sm font-semibold", className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/toast.tsx",
  lineNumber: 85,
  columnNumber: 3
}, void 0));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(ToastPrimitives.Description, { ref, className: cn("text-sm opacity-90", className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/toast.tsx",
  lineNumber: 93,
  columnNumber: 3
}, void 0));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
(_e = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _e.call(globalThis, "src/components/ui/toaster.tsx");
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxDEV(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxDEV(Toast, { ...props, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxDEV(ToastTitle, { children: title }, void 0, false, {
            fileName: "/dev-server/src/components/ui/toaster.tsx",
            lineNumber: 13,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ jsxDEV(ToastDescription, { children: description }, void 0, false, {
            fileName: "/dev-server/src/components/ui/toaster.tsx",
            lineNumber: 14,
            columnNumber: 31
          }, this)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/ui/toaster.tsx",
          lineNumber: 12,
          columnNumber: 13
        }, this),
        action,
        /* @__PURE__ */ jsxDEV(ToastClose, {}, void 0, false, {
          fileName: "/dev-server/src/components/ui/toaster.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this)
      ] }, id, true, {
        fileName: "/dev-server/src/components/ui/toaster.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ jsxDEV(ToastViewport, {}, void 0, false, {
      fileName: "/dev-server/src/components/ui/toaster.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/ui/toaster.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
(_f = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _f.call(globalThis, "src/components/ui/tooltip.tsx");
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/tooltip.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  void 0
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
(_g = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _g.call(globalThis, "src/components/CookieBanner.tsx");
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
  return /* @__PURE__ */ jsxDEV("div", { className: "fixed bottom-0 left-0 w-full z-[100] p-3 pointer-events-none", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mx-auto bg-black/80 backdrop-blur-md text-white/60 rounded-xl px-4 py-3 flex items-center justify-between gap-4 pointer-events-auto border border-white/5 animate-in slide-in-from-bottom-4 fade-in duration-500", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 min-w-0", children: [
      /* @__PURE__ */ jsxDEV(Cookie, { className: "w-4 h-4 text-white/30 shrink-0" }, void 0, false, {
        fileName: "/dev-server/src/components/CookieBanner.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] leading-relaxed", children: [
        "Мы используем cookie для улучшения работы сайта.",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/privacy", className: "text-white/50 hover:text-white/80 underline underline-offset-2 transition-colors", children: "Подробнее" }, void 0, false, {
          fileName: "/dev-server/src/components/CookieBanner.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/CookieBanner.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/CookieBanner.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5 shrink-0", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: acceptCookies,
          className: "bg-white/10 hover:bg-white/15 text-white/70 px-4 py-1.5 rounded-lg text-[11px] font-medium transition-all active:scale-95",
          children: "Ок"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/CookieBanner.tsx",
          lineNumber: 36,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: acceptCookies,
          className: "p-1.5 text-white/20 hover:text-white/50 rounded-lg transition-colors",
          "aria-label": "Закрыть",
          children: /* @__PURE__ */ jsxDEV(X, { className: "w-3.5 h-3.5" }, void 0, false, {
            fileName: "/dev-server/src/components/CookieBanner.tsx",
            lineNumber: 47,
            columnNumber: 13
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/CookieBanner.tsx",
          lineNumber: 42,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/CookieBanner.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/CookieBanner.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/CookieBanner.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, void 0);
};
(_h = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _h.call(globalThis, "src/components/FloatingTelegram.tsx");
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
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "fixed bottom-20 sm:bottom-5 right-3 sm:right-5 z-[90] flex items-center group font-sans animate-fade-in",
      children: [
        /* @__PURE__ */ jsxDEV(
          "span",
          {
            className: `absolute right-full mr-3 bg-white/95 backdrop-blur text-slate-700 text-xs font-semibold py-2 px-3.5 rounded-xl shadow-lg transition-all duration-500 pointer-events-none whitespace-nowrap border border-slate-100 ${showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}`,
            children: [
              "Позвоните нам",
              /* @__PURE__ */ jsxDEV("span", { className: "absolute top-1/2 -right-1 -mt-1 w-2 h-2 bg-white border-r border-t border-slate-100 transform rotate-45" }, void 0, false, {
                fileName: "/dev-server/src/components/FloatingTelegram.tsx",
                lineNumber: 29,
                columnNumber: 9
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/components/FloatingTelegram.tsx",
            lineNumber: 23,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "tel:+79851547772",
            className: "flex items-center justify-center w-12 h-12 bg-emerald-500 text-white rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:scale-110 transition-all duration-500 animate-[glow-pulse_6s_ease-in-out_infinite]",
            "aria-label": "Позвоните нам",
            children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5" }, void 0, false, {
              fileName: "/dev-server/src/components/FloatingTelegram.tsx",
              lineNumber: 37,
              columnNumber: 9
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/FloatingTelegram.tsx",
            lineNumber: 32,
            columnNumber: 7
          },
          void 0
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/FloatingTelegram.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    void 0
  );
};
(_i = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _i.call(globalThis, "src/hooks/use-metrika.ts");
const COUNTER_ID = 108189954;
const useMetrika = () => {
  const location = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.ym === "function") {
      window.ym(COUNTER_ID, "hit", window.location.href);
    }
  }, [location.pathname]);
};
(_j = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _j.call(globalThis, "src/App.tsx");
const queryClient = new QueryClient();
const App = () => {
  useMetrika();
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
  return /* @__PURE__ */ jsxDEV(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxDEV(TooltipProvider, { children: [
    /* @__PURE__ */ jsxDEV(Toaster, {}, void 0, false, {
      fileName: "/dev-server/src/App.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(Toaster$1, {}, void 0, false, {
      fileName: "/dev-server/src/App.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
      fileName: "/dev-server/src/App.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(CookieBanner, {}, void 0, false, {
      fileName: "/dev-server/src/App.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(FloatingPhone, {}, void 0, false, {
      fileName: "/dev-server/src/App.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/App.tsx",
    lineNumber: 62,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/App.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, void 0);
};
const articleProjectDocs = "/assets/article-project-docs-CGRlEbf3.jpg";
const articleWorkingDocs = "/assets/work-8-C4OCGmxg.jpg";
const articleExecDocs = "/assets/work-12-BVobCtOG.jpg";
const articleBlueprints = "/assets/work-10-Bg7Yk2SH.jpg";
const articleBinding = "/assets/article-binding-BNMyLr3i.jpg";
(_k = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _k.call(globalThis, "src/data/articles.ts");
const articles = [
  {
    id: 1,
    slug: "pechat-proektnoy-dokumentacii-moskva",
    seoTitle: "Печать проектной документации в Москве",
    seoDescription: "Срочная печать проектной документации стадии «П» в Москве. Строго по ГОСТ 21.101-2020. Безналичный расчет, работаем по ЭДО.",
    h1: "Срочная печать проектной документации (стадия П)",
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
    seoTitle: "Фальцовка чертежей по ГОСТ и брошюровка",
    seoDescription: "Автоматическая фальцовка проектной документации. Брошюровка чертежей на пружину, твердый переплет томов.",
    h1: "Фальцовка чертежей по ГОСТ и брошюровка",
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
(_l = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _l.call(globalThis, "src/data/blogPosts.ts");
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
    title: "Как подготовить PDF и DWG для печати чертежей",
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
    title: "Виды переплета проектной документации: что выбрать",
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
(_m = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _m.call(globalThis, "src/routes.tsx");
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
      fileName: "/dev-server/src/routes.tsx",
      lineNumber: 9,
      columnNumber: 14
    }, void 0),
    children: [
      {
        index: true,
        lazy: () => {
          var _a2;
          return ((_a2 = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _a2.call(globalThis, "src/pages/Index.tsx"), import("./assets/Index-DfcoNrx0.js")).then((m) => ({ Component: m.default }));
        }
      },
      {
        path: "blog",
        lazy: () => {
          var _a2;
          return ((_a2 = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _a2.call(globalThis, "src/pages/Blog.tsx"), import("./assets/Blog-B-OfE7FD.js")).then((m) => ({ Component: m.default }));
        }
      },
      {
        path: "blog/:slug",
        lazy: () => {
          var _a2;
          return ((_a2 = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _a2.call(globalThis, "src/pages/BlogPost.tsx"), import("./assets/BlogPost-DEy3uQBT.js")).then((m) => ({ Component: m.default }));
        },
        getStaticPaths: () => [
          ...articles.map((a) => `/blog/${a.slug}`),
          ...blogPosts.map((p) => `/blog/${p.slug}`)
        ]
      },
      {
        path: "privacy",
        lazy: () => {
          var _a2;
          return ((_a2 = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _a2.call(globalThis, "src/pages/PrivacyPolicy.tsx"), import("./assets/PrivacyPolicy-DZAX8Wvy.js")).then((m) => ({ Component: m.default }));
        }
      },
      {
        path: "terms",
        lazy: () => {
          var _a2;
          return ((_a2 = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _a2.call(globalThis, "src/pages/TermsOfService.tsx"), import("./assets/TermsOfService-BuwnMNiG.js")).then((m) => ({ Component: m.default }));
        }
      },
      {
        path: "*",
        lazy: () => {
          var _a2;
          return ((_a2 = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _a2.call(globalThis, "src/pages/NotFound.tsx"), import("./assets/NotFound-0qur2qPk.js")).then((m) => ({ Component: m.default }));
        }
      }
    ]
  }
];
(_n = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _n.call(globalThis, "src/main.tsx");
const createRoot = ViteReactSSG({ routes });
export {
  Fragment as F,
  articles as a,
  blogPosts as b,
  cn as c,
  createRoot,
  jsxDEV as j,
  useToast as u
};
