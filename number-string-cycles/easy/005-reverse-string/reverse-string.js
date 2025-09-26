//todo Реверс рядка (reverse-string)
//todo Напиши функцію reverseString(str), яка приймає рядок і повертає його у зворотному порядку.

function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
