// Сума чисел від 1 до N (sum-from-1-to-n)
// Напиши функцію sumToN(n), яка повертає суму всіх чисел від 1 до n включно.
// (Використай цикл for або while).

function sumToN(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(sumToN(17));
