// Count Multiples (count-multiples)

// Опис:
// Функція приймає два числа: n і x.
// Порахуйте, скільки чисел від 1 до n діляться без остачі на x.

function countMultiples(num, x) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (i % x === 0) {
      count++;
    }
  }
  return count;
}

// Приклади:

console.log(countMultiples(10, 2)); // 5 (2,4,6,8,10)
console.log(countMultiples(15, 5)); // 3 (5,10,15)
