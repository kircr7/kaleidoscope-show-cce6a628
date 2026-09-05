/**
 * Post-build fix: the index.html template ships a static <title> and meta
 * description that shadow the per-page tags injected by vite-react-ssg
 * (every built page ended up with two titles, the template one first).
 *
 * For each built HTML page, remove the LAST plain <title> and
 * <meta name="description"> (the template copies — the per-page helmet tags
 * carry data-rh="true" and come first), then move the per-page
 * <link rel="canonical"> from the body into the head.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

function removeLast(html, re) {
  const matches = [...html.matchAll(re)];
  if (matches.length < 2) return html; // only one (or none) — leave it
  const last = matches[matches.length - 1];
  if (last[0].includes("data-rh")) return html; // safety: never touch helmet tags
  return html.slice(0, last.index) + html.slice(last.index + last[0].length);
}

let fixed = 0;
for await (const file of walk("dist")) {
  let html = await readFile(file, "utf-8");
  const before = html;

  html = removeLast(html, /<title[^>]*>[^<]*<\/title>/g);
  html = removeLast(html, /<meta name="description"[^>]*\/?>/g);

  // Canonical links rendered by helmet land inside the body — move to <head>
  const canonRe = /<link rel="canonical"[^>]*\/?>/g;
  const canonInHead = (html.match(/<head>[\s\S]*?<\/head>/)?.[0] ?? "");
  const canon = html.match(canonRe) ?? [];
  const stray = canon.filter((tag) => !canonInHead.includes(tag));
  for (const tag of stray) {
    html = html.replace(tag, "");
    html = html.replace("</head>", `  ${tag}\n  </head>`);
  }

  if (html !== before) {
    await writeFile(file, html, "utf-8");
    fixed++;
  }
}

console.log(`[fix-dist-meta] Deduplicated template meta in ${fixed} page(s)`);
