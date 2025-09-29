// Сума парних чисел (sum-of-evens)

// Напиши функцію sumOfEvens(n), яка обчислює суму всіх парних чисел від 1 до n включно.

function sumOfEvens(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }

  return total;
}

Приклади: console.log(sumOfEvens(10)); // 30 (2+4+6+8+10)
console.log(sumOfEvens(7)); // 12 (2+4+6)
