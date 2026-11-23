// one-letter-coffee-or-tea
// One letter, nothing else: A for coffee, B for tea. This entry sends A.
// Coffee is the standing answer: the first cup starts the day, the pot
// is always on, and no one ever has to ask whether coffee is wanted.
// A single letter carries the whole stance — no explanation needed.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: exactly 1 character, A or B (this entry: 1 code point, "A").
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const letter = "A"; // A = coffee

const points = [...letter].length;
if (points !== 1 || (letter !== "A" && letter !== "B")) {
  throw new Error(`entry must be exactly one letter, A or B; got ${JSON.stringify(letter)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
