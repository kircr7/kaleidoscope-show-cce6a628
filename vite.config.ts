import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const SITE_URL = "https://printprro.ru";

// Extract { slug, date } pairs from a TS data file without executing it
// (so we don't have to resolve `@/assets/*` imports in Node context).
function extractPosts(source: string): { slug: string; date: string }[] {
  const posts: { slug: string; date: string }[] = [];
  const re = /slug:\s*"([^"]+)"[\s\S]*?date:\s*"([^"]+)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(source)) !== null) {
    posts.push({ slug: m[1], date: m[2] });
  }
  return posts;
}

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
      const nodePath = await import("node:path");

      const articlesSrc = await fs.readFile(
        nodePath.resolve("src/data/articles.ts"),
        "utf-8",
      );
      const blogPostsSrc = await fs.readFile(
        nodePath.resolve("src/data/blogPosts.ts"),
        "utf-8",
      );
      const allPosts = [...extractPosts(articlesSrc), ...extractPosts(blogPostsSrc)];
      const today = new Date().toISOString().slice(0, 10);

      type Entry = { loc: string; lastmod: string; priority: string; changefreq?: string };

      const entries: Entry[] = [
        { loc: `${SITE_URL}/`, lastmod: today, changefreq: "weekly", priority: "1.0" },
        { loc: `${SITE_URL}/blog`, lastmod: today, changefreq: "weekly", priority: "0.8" },
        ...allPosts.map((post) => ({
          loc: `${SITE_URL}/blog/${post.slug}`,
          lastmod: post.date,
          priority: "0.7",
        })),
        { loc: `${SITE_URL}/privacy`, lastmod: today, priority: "0.3" },
        { loc: `${SITE_URL}/terms`, lastmod: today, priority: "0.3" },
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

      await fs.writeFile(nodePath.resolve("dist/sitemap.xml"), xml, "utf-8");
      console.log(`[sitemap] Generated ${entries.length} URLs → dist/sitemap.xml`);
    },
  },
}));
