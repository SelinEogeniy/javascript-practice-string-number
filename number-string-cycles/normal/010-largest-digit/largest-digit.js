// Найбільша цифра в числі (largest-digit)

// Напиши функцію largestDigit(num), яка повертає найбільшу цифру у числі.

function largestDigit(num) {
  num = String(num);
  let max = 0;
  for (let i = 0; i <= num.length - 1; i++) {
    if (Number(num[i]) > max) {
      max = Number(num[i]);
    }
  }
  return max;
}

Приклади: console.log(largestDigit(4829)); // 9
console.log(largestDigit(730)); // 7
