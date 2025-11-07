// findLongestWord.js 🟡 normal
// Напиши функцію, яка приймає речення і повертає найдовше слово.
// 👉 "I love programming" → "programming"

// ~Variant1

// function findLongestWord(str) {
//   const splitStr = str.split(" ");
//   let longestWord = splitStr[0];
//   for (const word of splitStr) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// ~Variant2

function findLongestWord(str) {
  return str
    .split(" ")
    .reduce((longest, word) => (longest.length > word.length ? longest : word));
}
console.log(findLongestWord("I love programming"));
