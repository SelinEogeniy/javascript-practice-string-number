// 1) countVowels.js — (easy)

// Напиши функцію, яка рахує кількість голосних у рядку.
// Голосні: a, e, i, o, u (можеш додати y як бонус).

// Приклад:
// countVowels("hello") → 2

const countVowels = (str) => {
  const vowels = "aeiou";
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("Hello"));
