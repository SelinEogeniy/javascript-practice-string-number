// 4. countConsonants.js 🟡 normal
// ✳️ Напиши функцію, яка рахує кількість приголосних літер у рядку.
// ➡️ Наприклад: "hello" → 3 (h, l, l)

function countConsonants(str) {
  let count = 0;
  const consonans = "bcdfghjklmnpqrstvwxyz";
  for (let i = 0; i < str.length; i++) {
    if (consonans.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countConsonants("hello"));
