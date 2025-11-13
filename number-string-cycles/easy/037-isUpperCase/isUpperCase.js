// . easy — isUppercase

// Умова:
// Напиши функцію isUppercase(str), яка перевіряє, чи складається рядок повністю з великих літер.
// Поверни true або false.
function isUppercase(str) {
  return str === str.toUpperCase();
}

console.log(isUppercase("HeLLO")); // true
