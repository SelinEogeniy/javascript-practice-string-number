// 1. reverseWords.js 🟡 normal
// ✳️ Напиши функцію, яка приймає рядок і повертає його слова у зворотному порядку.
// ➡️ Наприклад: "I love JavaScript" → "JavaScript love I"
function reverseWords(str) {
  return str.split(" ").toReversed().join(" ");
}

console.log(reverseWords("I love JavaScript"));
