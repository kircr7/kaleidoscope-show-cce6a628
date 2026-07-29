/**
 * vite-react-ssg concatenates SSR stream chunks with `chunk.toString()` per chunk.
 * React's stream splits at fixed byte boundaries, so multi-byte UTF-8 characters
 * (Cyrillic) get cut in half and become "" in the generated HTML — which also
 * breaks React hydration (mismatch errors) in the browser.
 *
 * This script patches the installed package to buffer chunks and decode once.
 * It is idempotent and runs automatically before `npm run build`.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DIR = "node_modules/vite-react-ssg/dist/shared";
const BROKEN = "this._output += chunk.toString();";
const FIXED = "this._chunks = this._chunks || []; this._chunks.push(Buffer.from(chunk));";
const BROKEN_END = "this._deferred.resolve(this._output);";
const FIXED_END =
  "this._deferred.resolve(Buffer.concat(this._chunks || []).toString('utf8') || this._output);";

let patched = 0;
let files = [];
try {
  files = await readdir(DIR);
} catch {
  console.log("[ssg-utf8] vite-react-ssg not installed, skipping");
  process.exit(0);
}

for (const file of files.filter((f) => f.endsWith(".mjs"))) {
  const full = path.join(DIR, file);
  const src = await readFile(full, "utf-8");
  if (!src.includes(BROKEN)) continue;
  const out = src.split(BROKEN).join(FIXED).split(BROKEN_END).join(FIXED_END);
  await writeFile(full, out, "utf-8");
  patched++;
}

console.log(
  patched
    ? `[ssg-utf8] Patched ${patched} file(s) — SSR output is now UTF-8 safe`
    : "[ssg-utf8] Already patched / nothing to do",
);
