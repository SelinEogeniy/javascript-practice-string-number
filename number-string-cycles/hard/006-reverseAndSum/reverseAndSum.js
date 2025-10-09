// Напиши функцію reverseAndSum(num), яка:

// Перевертає цифри числа num.

// Обчислює суму цифр перевернутого числа.

// Повертає два значення у вигляді масиву [reversedNumber, sum].

function reverseAndSum(num) {
  let reverseAndSumArr = [];
  const reverseNum = Number(String(num).split("").toReversed().join(""));
  let total = 0;
  const digits = String(reverseNum);
  for (let i = 0; i < digits.length; i++) {
    total += Number(digits[i]);
  }
  return [reverseNum, total];
}

// Приклад:

console.log(reverseAndSum(123));
// [321, 6]

console.log(reverseAndSum(405));
// [504, 9]

console.log(reverseAndSum(7));
// [7, 7]
