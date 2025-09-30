//todo  (sum-of-odds)

//todo Напиши функцію sumOfOdds(n), яка повертає суму всіх непарних чисел від 1 до n.

function sumOfOdds(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      total += i;
    }
  }
  return total;
}
Приклади: console.log(sumOfOdds(10)); // 25 (1+3+5+7+9)
console.log(sumOfOdds(7)); // 16 (1+3+5+7)
