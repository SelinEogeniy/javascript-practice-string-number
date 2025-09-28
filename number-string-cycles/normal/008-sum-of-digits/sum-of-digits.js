// Сума цифр числа (sum-of-digits)
// Напиши функцію sumOfDigits(num), яка обчислює суму всіх цифр у числі.

function sumOfDigits(num) {
  num = String(num);
  let total = 0;
  for (let i = 0; i <= num.length - 1; i++) {
    total += Number(num[i]);
  }
  return total;
}

// ✅ Приклади
console.log(sumOfDigits(123)); // 6  (1 + 2 + 3)
console.log(sumOfDigits(4057)); // 16 (4 + 0 + 5 + 7)
console.log(sumOfDigits(9)); // 9

// ~ 2 Варіант
function sumOfDigits(num) {
  let total = 0;

  while (num > 0) {
    total += num % 10;
    num = Math.floor(num / 10);
  }

  return total;
}
