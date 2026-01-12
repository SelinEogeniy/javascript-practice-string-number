// 1️⃣ count-uppercase-letters ✅ [NORMAL]

// Умова:
// Напиши функцію, яка приймає рядок і повертає кількість великих літер (A–Z) у цьому рядку.

function countUppercaseLetters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      count++;
    }
  }
  return count;
}
// Приклад:
console.log(countUppercaseLetters("HeLLo"));
console.log(countUppercaseLetters("javascript"));
countUppercaseLetters("HeLLo"); // 3
countUppercaseLetters("javascript"); // 0
