// Сума чисел між двома межами (sum-between)

// Опис:
// Напиши функцію, яка приймає два числа a і b
// і повертає суму всіх чисел між ними (включно).

function sumBetween(a, b) {
  let total = 0;
  for (let i = a; i <= b; i++) {
    total += i;
  }
  return total;
}
// Приклади:

console.log(sumBetween(3, 7)); // 3 + 4 + 5 + 6 + 7 = 25
console.log(sumBetween(5, 5)); // 5
