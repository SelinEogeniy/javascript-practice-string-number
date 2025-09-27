// Перевірка кратності (check-divisibility)
// Напиши функцію isDivisible(a, b), яка повертає true, якщо число a ділиться на b без остачі, інакше false.

function isDivisible(a, b) {
  return a % b === 0;
}

// Приклади:

console.log(isDivisible(10, 2)); // true
console.log(isDivisible(10, 3)); // false
