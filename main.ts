// Ship It Friday — one-line git commit message entry.
// Deterministic: no network, no randomness, no reads outside this file.
// Writes the entry text to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "fix: I removed the password check - login now succeeds 100% of the time, shipping to prod Friday 4:59pm";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
