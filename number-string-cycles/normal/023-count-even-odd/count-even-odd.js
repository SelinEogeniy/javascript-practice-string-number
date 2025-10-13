// Кількість парних і непарних чисел (count-even-odd)

// Опис:
// Напиши функцію, яка приймає число n і підраховує,
// скільки серед чисел від 1 до n є парних і непарних.

function countEvenOdd(n) {
  let countOdd = 0;
  let countEven = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }
  return `Парних: ${countEven}, непарних: ${countOdd}`;
}

// Приклади:

console.log(countEvenOdd(10));
// Парних: 5, Непарних: 5
