// Зворотне число (Reverse Number) (reverse-number)

// Опис:
// Напиши функцію, яка приймає число і повертає його у зворотному порядку.
// Не використовуй методи типу .reverse() — зроби все вручну через цикл.

function reverseNumber(num) {
  num = String(num);
  newStr = "";
  for (let i = num.length - 1; i >= 0; i--) {
    newStr += num[i];
  }
  return Number(newStr);
}

// Наприклад:
// 1234 → 4321
// 905 → 509

Приклади: console.log(reverseNumber(1234)); // 4321
console.log(reverseNumber(905)); // 509
