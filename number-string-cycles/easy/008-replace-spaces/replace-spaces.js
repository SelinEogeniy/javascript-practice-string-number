// Заміна пробілів (replace-spaces)
// Напиши функцію replaceSpaces(str), яка замінює всі пробіли в рядку на дефіси -.

function replaceSpaces(str) {
  return str.replaceAll(" ", "-");
}

// Приклади:

console.log(replaceSpaces("I love JS")); // "I-love-JS"
console.log(replaceSpaces("Hello World")); // "Hello-World"
