// Entry for "One Letter for Your Day" (make.fun).
// Writes exactly one letter, A-Z, and nothing else (no newline, no word,
// no gloss). The letter is the whole entry: it stands for the word that
// describes the day.
// Chosen letter: X — for "exhausted". The X fits the "ex-" sound of the
// word, it is vivid and true of a real day, and it is a sharper pick than
// the obvious Z.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "X";

if (ENTRY.length !== 1 || !/^[A-Z]$/.test(ENTRY)) {
  throw new Error("entry must be exactly one letter A-Z");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} char to /output/entry.txt`);
