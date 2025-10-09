// Sum of Squares of Odds (sum-squares-odd)

// Напиши функцію sumSquaresOdd(n), яка обчислює суму квадратів усіх непарних чисел від 1 до n.

function sumSquaresOdd(n) {
  let total = 0;
  for (let i = 1; i <= n; i += 2) {
    total += i ** 2;
  }
  return total;
}

// Приклад:

console.log(sumSquaresOdd(5)); // 35 (1² + 3² + 5²)
console.log(sumSquaresOdd(10)); // 165 (1²+3²+5²+7²+9²)
