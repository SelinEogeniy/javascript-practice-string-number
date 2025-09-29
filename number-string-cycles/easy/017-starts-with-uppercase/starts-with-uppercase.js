// Чи починається рядок з великої букви (starts-with-uppercase)
// Напиши функцію startsWithUppercase(str), яка повертає true, якщо перший символ — велика літера.

function startsWithUppercase(str) {
  return str[0] === str[0].toUpperCase();
}

console.log(startsWithUppercase("Hello")); // true
console.log(startsWithUppercase("javaScript")); // false
