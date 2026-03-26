#!/usr/bin/env node

// Excuse Generator PRO 😎
// Uso:
// node excuse.js            -> 1 excusa aleatoria
// node excuse.js 5          -> 5 excusas
// node excuse.js --build 3  -> 3 excusas generadas dinámicamente

const data = {
  who: ["My dog", "My boss", "My neighbor", "My cat"],
  action: [
    "ate",
    "forgot",
    "lost",
    "missed",
    "spilled",
    "was delayed by",
    "couldn't finish",
    "had to reschedule",
  ],
  what: [
    "my homework",
    "my keys",
    "my phone",
    "the report",
    "the presentation",
    "the meeting",
    "the assignment",
    "the documents",
  ],
  when: [
    "today",
    "yesterday",
    "this morning",
    "last night",
    "a few minutes ago",
    "this afternoon",
    "this evening",
    "earlier",
  ],
  predefined: [
    "My dog ate my homework.",
    "I was stuck in traffic.",
    "I had a meeting run over.",
    "My alarm didn't go off.",
    "I got caught in a sudden downpour.",
    "I had technical difficulties.",
    "The bus/train was delayed.",
    "I had a family emergency.",
    "My computer crashed.",
    "I was double-booked.",
  ],
};

// 🔹 Utilidad reutilizable
const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

// 🔹 Generador dinámico
const buildExcuse = () =>
  `${random(data.who)} ${random(data.action)} ${random(data.what)} ${random(data.when)}.`;

// 🔹 Excusa predefinida
const getRandomExcuse = () => random(data.predefined);

// 🔹 CLI
function main() {
  const args = process.argv.slice(2);

  const useBuilder = args.includes("--build");
  const countArg = args.find((a) => !isNaN(a));
  const count = Math.max(1, parseInt(countArg, 10) || 1);

  for (let i = 0; i < count; i++) {
    const excuse = useBuilder ? buildExcuse() : getRandomExcuse();
    console.log(excuse);
  }
}

if (require.main === module) {
  main();
}

// 🔹 Export limpio
module.exports = {
  buildExcuse,
  getRandomExcuse,
};

