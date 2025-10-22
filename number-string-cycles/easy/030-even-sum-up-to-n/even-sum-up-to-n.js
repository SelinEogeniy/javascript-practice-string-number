// Even Sum Up To N (even-sum-up-to-n)

// Опис:
// Напиши функцію, яка обчислює суму всіх парних чисел від 1 до n.

function evenSumUpToN(num) {
  let total = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
}

// Приклади:

console.log(evenSumUpToN(10)); // 30 (2+4+6+8+10)
console.log(evenSumUpToN(5)); // 6 (2+4)
