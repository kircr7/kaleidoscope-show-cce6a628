import type { RouteRecord } from "vite-react-ssg";
import App from "./App";
import { articles } from "./data/articles";
import { blogPosts } from "./data/blogPosts";
import { formats } from "./data/formats";
import FormatPage from "./pages/FormatPage";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        lazy: () => import("./pages/Index").then((m) => ({ Component: m.default })),
      },
      {
        path: "price",
        lazy: () => import("./pages/Price").then((m) => ({ Component: m.default })),
      },
      ...formats.map((data) => ({
        path: `pechat-${data.slug}`,
        element: <FormatPage data={data} />,
      })),
      {
        path: "blog",
        lazy: () => import("./pages/Blog").then((m) => ({ Component: m.default })),
      },
      {
        path: "blog/:slug",
        lazy: () => import("./pages/BlogPost").then((m) => ({ Component: m.default })),
        getStaticPaths: () => [
          ...articles.map((a) => `/blog/${a.slug}`),
          ...blogPosts.map((p) => `/blog/${p.slug}`),
        ],
      },
      {
        path: "privacy",
        lazy: () => import("./pages/PrivacyPolicy").then((m) => ({ Component: m.default })),
      },
      {
        path: "terms",
        lazy: () => import("./pages/TermsOfService").then((m) => ({ Component: m.default })),
      },
      {
        path: "*",
        lazy: () => import("./pages/NotFound").then((m) => ({ Component: m.default })),
      },
    ],
  },
];
