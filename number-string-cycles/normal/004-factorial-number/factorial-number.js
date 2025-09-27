// Факторіал числа (factorial-number)
// Напиши функцію factorial(n), яка повертає факторіал числа n (добуток усіх чисел від 1 до n).

// Пам’ятай, що 0! = 1.

function factorial(n) {
  let factorial = 1;
  if (n == 0) {
    return 1;
  } else {
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
  }
  return factorial;
}
// Приклади:
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
