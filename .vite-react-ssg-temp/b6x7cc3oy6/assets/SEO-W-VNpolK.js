var _a;
import { j as jsxDEV } from "../main.mjs";
import { Head } from "vite-react-ssg";
import { useLocation } from "react-router-dom";
(_a = globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__) == null ? void 0 : _a.call(globalThis, "src/components/SEO.tsx");
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
  return /* @__PURE__ */ jsxDEV(Head, { children: [
    /* @__PURE__ */ jsxDEV("title", { children: title }, void 0, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { name: "description", content: description }, void 0, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, void 0),
    keywords && /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: keywords }, void 0, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 41,
      columnNumber: 20
    }, void 0),
    /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: canonical }, void 0, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: title }, void 0, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: description }, void 0, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: type }, void 0, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: canonical }, void 0, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: ogImage }, void 0, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "ru_RU" }, void 0, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "Типография ПринтПРО" }, void 0, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: title }, void 0, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: description }, void 0, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: ogImage }, void 0, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, void 0),
    jsonLdArray.map((data, i) => /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(data) }, i, false, {
      fileName: "/dev-server/src/components/SEO.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, void 0))
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/SEO.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, void 0);
};
export {
  SEO as S
};
