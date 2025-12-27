// 📄 countRepeatingChars.js — 🟡 NORMAL

// Умова:
// Функція приймає рядок і рахує, скільки символів у ньому повторюються
// (тобто зустрічаються більше одного разу).

function countRepeatingChars(str) {
  const repeatWord = {};
  for (const word of str) {
    if (!repeatWord[word]) {
      repeatWord[word] = 1;
    } else {
      repeatWord[word]++;
    }
  }
  return Object.values(repeatWord).filter((i) => i > 1).length;
}

// Приклади:
console.log(countRepeatingChars("aabbc"));

// countRepeatingChars("aabbc") → 2   // a і b
// countRepeatingChars("abc") → 0
