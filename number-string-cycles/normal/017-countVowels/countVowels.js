// Напиши функцію countVowels(str), яка повертає кількість голосних у рядку (a, e, i, o, u), незалежно від регістру.

function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// Приклад:

console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript")); // 3
