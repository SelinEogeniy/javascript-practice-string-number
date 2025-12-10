// 5) longestUniqueSubstring.js — (hard)

// Повернути найдовший підрядок без повторюваних символів.

// Приклад:
// longestUniqueSubstring("abcabcbb") → "abc"
// longestUniqueSubstring("bbbbb") → "b"

function longestUniqueSubstring(str) {
  let longest = "";
  let current = "";
  for (let char of str) {
    if (current.includes(char)) {
      current = current.slice(current.indexOf(char) + 1);
    }
    current += char;
    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest;
}
console.log(longestUniqueSubstring("abcabcbb"));
