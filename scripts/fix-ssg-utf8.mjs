/**
 * Fixes two UTF-8 bugs in the vite-react-ssg SSG pipeline that corrupt Cyrillic
 * text in the generated static HTML (visible as "" diamonds in alt-texts and
 * as React hydration mismatches in the browser):
 *
 *  1. SSR stream chunks were concatenated with `chunk.toString()` per chunk, so
 *     multi-byte characters split across chunk boundaries were destroyed.
 *  2. jsdom's parser corrupts multi-byte characters at internal chunk
 *     boundaries on large pages; we feed it ASCII-only input (numeric character
 *     references) so nothing can be split.
 *
 * The script patches the installed package in place, is idempotent, and runs
 * automatically before `npm run build`.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DIR = "node_modules/vite-react-ssg/dist/shared";

const HELPER = `
function __ssgAsciiSafe(html) {
  return typeof html === "string"
    ? html.replace(/[\\u0080-\\uFFFF]/g, (c) => "&#x" + c.charCodeAt(0).toString(16) + ";")
    : html;
}
`;

const REPLACEMENTS = [
  ["this._output += chunk.toString();", "this.__chunks = this.__chunks || []; this.__chunks.push(Buffer.from(chunk));"],
  [
    "this._deferred.resolve(this._output);",
    "this._deferred.resolve(Buffer.concat(this.__chunks || []).toString('utf8') || this._output);",
  ],
  ["new JSDOM(appHTML)", "new JSDOM(__ssgAsciiSafe(appHTML))"],
  ["new JSDOM(renderedHTML)", "new JSDOM(__ssgAsciiSafe(renderedHTML))"],
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

  if (!src.includes("function __ssgAsciiSafe")) src += HELPER;
  await writeFile(full, src, "utf-8");
  patched++;
}

console.log(
  patched
    ? `[ssg-utf8] Patched ${patched} file(s) — SSR output is now UTF-8 safe`
    : "[ssg-utf8] Already patched / nothing to do",
);
