// Repeat Character (repeat-char)
// Напиши функцію repeatChar(char, n), яка виводить символ char n разів у рядок.

function repeatChar(char, n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += char;
  }
  return str;
}

console.log(repeatChar("*", 5)); // *****
console.log(repeatChar("a", 3)); // aaa
