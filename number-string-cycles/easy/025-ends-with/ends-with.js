// Ends With (ends-with)
// Напиши функцію endsWith(str, char), яка повертає true, якщо рядок str закінчується на символ char.

function endsWith(str, char) {
  return str[str.length - 1].toLowerCase() === char.toLowerCase();
}
console.log(endsWith("Hello", "o")); // true
console.log(endsWith("World", "d")); // true
console.log(endsWith("World", "a")); // false
