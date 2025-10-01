// Сума цифр числа

// Напиши функцію sumOfDigits(num), яка обчислює суму всіх цифр числа.
// 👉 Наприклад: sumOfDigits(1234) → 10 (1+2+3+4).

function sumOfDigits(num) {
  let total = 0;
  num = String(num);
  for (let i = 0; i < num.length; i++) {
    total += Number(num[i]);
  }
  return total;
}

console.log(sumOfDigits(1234)); // 10
console.log(sumOfDigits(987)); // 24
