// . hard — removeDuplicateLetters

// Умова:
// Напиши функцію removeDuplicateLetters(str), яка видаляє всі повторювані літери з рядка, залишаючи тільки першу появу кожної.

function removeDuplicateLetters(str) {
  let newStr = "";
  for (const char of str) {
    if (!newStr.includes(char)) {
      newStr += char;
    }
  }
  return newStr;
}

console.log(removeDuplicateLetters("banana")); // "ban"
console.log(removeDuplicateLetters("hello")); // "helo"
