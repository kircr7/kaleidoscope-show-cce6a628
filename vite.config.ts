import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const SITE_URL = "https://printprro.ru";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: false,
    onFinished: async () => {
      const fs = await import("node:fs/promises");
      const path = await import("node:path");
      const { articles } = await import("./src/data/articles");
      const { blogPosts } = await import("./src/data/blogPosts");

      type Entry = { loc: string; lastmod: string; priority: string; changefreq?: string };

      const entries: Entry[] = [
        { loc: `${SITE_URL}/`, lastmod: new Date().toISOString().slice(0, 10), changefreq: "weekly", priority: "1.0" },
        { loc: `${SITE_URL}/blog`, lastmod: new Date().toISOString().slice(0, 10), changefreq: "weekly", priority: "0.8" },
        ...[...articles, ...blogPosts].map((post) => ({
          loc: `${SITE_URL}/blog/${post.slug}`,
          lastmod: post.date,
          priority: "0.7",
        })),
        { loc: `${SITE_URL}/privacy`, lastmod: new Date().toISOString().slice(0, 10), priority: "0.3" },
        { loc: `${SITE_URL}/terms`, lastmod: new Date().toISOString().slice(0, 10), priority: "0.3" },
      ];

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) =>
      `  <url><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod>${e.changefreq ? `<changefreq>${e.changefreq}</changefreq>` : ""}<priority>${e.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;

      await fs.writeFile(path.resolve("dist/sitemap.xml"), xml, "utf-8");
      console.log(`[sitemap] Generated ${entries.length} URLs → dist/sitemap.xml`);
    },
  },
}));
