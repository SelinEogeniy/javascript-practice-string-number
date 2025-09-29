// Чи містить рядок пробіл (contains-space)
// Напиши функцію containsSpace(str), яка повертає true, якщо у рядку є хоча б один пробіл.

function containsSpace(str) {
  return str.includes(" ");
}

console.log(containsSpace("Hello World")); // true
console.log(containsSpace("JavaScript")); // false
