// Sum of Squares (sum-of-squares)
// Напиши функцію sumOfSquares(n), яка повертає суму квадратів чисел від 1 до n.

function sumOfSquares(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i ** 2;
  }
  return total;
}
console.log(sumOfSquares(3)); // 14 (1²+2²+3²)
console.log(sumOfSquares(5)); // 55
