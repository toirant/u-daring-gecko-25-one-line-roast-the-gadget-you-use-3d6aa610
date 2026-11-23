// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line (<= 200 characters) to /output/entry.txt.
//
// The roast targets a daily gadget — the phone charger — with a fresh
// comparison instead of the usual "battery dies" complaint: the cable only
// works when held at one exact angle, like a safe-cracker listening for
// the click, and the slightest movement breaks the deal.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ROAST =
  "My phone charger only works at one exact angle, like a safe-cracker listening for the click — breathe wrong and the deal is off.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  const line = ROAST.trim();

  if (line.length === 0 || line.length > 200) {
    throw new Error(`Roast must be 1-200 characters, got ${line.length}.`);
  }
  if (/\r|\n/.test(line)) {
    throw new Error("Roast must be a single line.");
  }

  // Create the output directory if missing; never remove it.
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");

  // Read back what was written so a truncated or mangled write fails loudly.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== line) {
    throw new Error("Written entry does not match the roast line.");
  }

  console.log(`Wrote ${line.length} characters to ${OUTPUT_PATH}`);
}

main();
