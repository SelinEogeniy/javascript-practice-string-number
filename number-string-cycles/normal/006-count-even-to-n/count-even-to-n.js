// Кількість парних чисел до N (count-even-to-n)
// Напиши функцію countEven(n), яка рахує, скільки парних чисел є від 1 до n включно.

function countEven(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEven(10)); // 5  (2, 4, 6, 8, 10)
console.log(countEven(7)); // 3  (2, 4, 6)
