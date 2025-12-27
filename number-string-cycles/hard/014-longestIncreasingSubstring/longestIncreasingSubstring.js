// 📄 longestIncreasingSubstring.js — 🔴 HARD

// Умова:
// Напиши функцію, яка знаходить найдовший підрядок,
// де кожна наступна літера більша за попередню (по алфавіту).

function longestIncreasingSubstring(str) {
  let increasingSubString = str[0];
  let longest = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] > str[i - 1]) {
      increasingSubString += str[i];
    } else {
      increasingSubString = str[i];
    }
    if (increasingSubString.length > longest.length) {
      longest = increasingSubString;
    }
  }
  return longest;
}

// Приклади:

// longestIncreasingSubstring("abcabdef") → "abdef"
// longestIncreasingSubstring("abczab") → "abcz"

console.log(longestIncreasingSubstring("abcabdef"));
