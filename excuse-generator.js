#!/usr/bin/env node

// Simple excuse generator for Node.js
// Usage: node excuse-generator.js [count]

const who = [
  "My dog",
  "My boss",
  "My neighbor",
  "My cat",
];

const action = [
  "ate",
  "forgot",
  "lost",
  "missed",
  "spilled",
  "was delayed by",
  "couldn't finish",
  "had to reschedule",
];

const what = [
  "my homework",
  "my keys",
  "my phone",
  "the report",
  "the presentation",
  "the meeting",
  "the assignment",
  "the documents",
];

const when = [
  "today",
  "yesterday",
  "this morning",
  "last night",
  "a few minutes ago",
  "this afternoon",
  "this evening",
  "earlier",
];

const excuses = [
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
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildExcuse() {
  const randomWho = getRandomItem(who);
  const randomAction = getRandomItem(action);
  const randomWhat = getRandomItem(what);
  const randomWhen = getRandomItem(when);
  
  const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  console.log(excuse);
  return excuse;
}

function getRandomExcuse() {
  const idx = Math.floor(Math.random() * excuses.length);
  return excuses[idx];
}

function main() {
  const args = process.argv.slice(2);
  const count = Math.max(1, parseInt(args[0], 10) || 1);

  for (let i = 0; i < count; i += 1) {
    console.log(getRandomExcuse());
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  excuses,
  getRandomExcuse,
  buildExcuse,
};
const getRandomWho = () => who[Math.floor(Math.random() * who.length)];
const getRandomAction = () => action[Math.floor(Math.random() * action.length)];
const getRandomWhat = () => what[Math.floor(Math.random() * what.length)];
const getRandomWhen = () => when[Math.floor(Math.random() * when.length)];

