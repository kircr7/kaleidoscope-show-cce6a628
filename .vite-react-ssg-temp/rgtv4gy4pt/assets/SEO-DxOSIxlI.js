import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
import { useLocation } from "react-router-dom";
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
  return /* @__PURE__ */ jsxs(Head, { children: [
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
  SEO as S
};
