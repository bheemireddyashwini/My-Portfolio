import { cpSync, existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const outDir = resolve("out");
const distDir = resolve("dist");

if (!existsSync(outDir)) {
  console.error("Build failed: out/ folder was not created.");
  process.exit(1);
}

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

cpSync(outDir, distDir, { recursive: true });
console.log("Copied out/ to dist/ for Render static hosting.");
