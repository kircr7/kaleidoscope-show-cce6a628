/**
 * Fixes UTF-8 corruption in the vite-react-ssg static build pipeline.
 *
 * Two upstream bugs mangle Cyrillic text in the generated HTML (visible as ""
 * diamonds inside alt-texts and as React hydration mismatches in the browser):
 *
 *  1. SSR stream chunks were concatenated with `chunk.toString()` per chunk, so
 *     multi-byte characters split across chunk boundaries were destroyed.
 *  2. The rendered page is re-parsed with jsdom only to append preload links —
 *     and jsdom's parser corrupts characters at its internal chunk boundaries
 *     on large pages. We now build the preload links in an empty document and
 *     inject them into the original HTML string, so the page HTML is never
 *     re-parsed.
 *
 * The script patches the installed package in place, is idempotent, and runs
 * automatically before `npm run build`.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DIR = "node_modules/vite-react-ssg/dist/shared";

const REPLACEMENTS = [
  [
    "if (!ReactDomServer.renderToPipeableStream) {",
    "if (true) { // forced: the streaming encoder splits multi-byte UTF-8 characters",
  ],
  [
    "this._output += chunk.toString();",
    "this.__chunks = this.__chunks || []; this.__chunks.push(Buffer.from(chunk));",
  ],
  [
    "this._deferred.resolve(this._output);",
    "this._deferred.resolve(Buffer.concat(this.__chunks || []).toString('utf8') || this._output);",
  ],
  [
    `const jsdom = new JSDOM(renderedHTML);
        renderPreloadLinks(jsdom.window.document, assets);
        const html = jsdom.serialize();`,
    `const __linkDom = new JSDOM("<!doctype html><html><head></head><body></body></html>");
        renderPreloadLinks(__linkDom.window.document, assets);
        const __links = __linkDom.window.document.head.innerHTML;
        const html = __links ? renderedHTML.replace("</head>", __links + "</head>") : renderedHTML;`,
  ],
];

let files = [];
try {
  files = await readdir(DIR);
} catch {
  console.log("[ssg-utf8] vite-react-ssg not installed, skipping");
  process.exit(0);
}

let patched = 0;
for (const file of files.filter((f) => f.endsWith(".mjs"))) {
  const full = path.join(DIR, file);
  let src = await readFile(full, "utf-8");
  let changed = false;

  for (const [from, to] of REPLACEMENTS) {
    if (src.includes(from)) {
      src = src.split(from).join(to);
      changed = true;
    }
  }
  if (!changed) continue;

  await writeFile(full, src, "utf-8");
  patched++;
}

console.log(
  patched
    ? `[ssg-utf8] Patched ${patched} file(s) — SSR output is now UTF-8 safe`
    : "[ssg-utf8] Already patched / nothing to do",
);
