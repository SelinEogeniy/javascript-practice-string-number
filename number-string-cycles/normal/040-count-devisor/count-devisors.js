// 3️⃣ count-divisors ✅ [NORMAL]

// Умова:
// Напиши функцію, яка приймає число і повертає кількість його дільників (крім 0).

function countDivisors(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return count;
}

// Приклад:

// countDivisors(6);  // 4  (1, 2, 3, 6)
// countDivisors(10); // 4  (1, 2, 5, 10)

console.log(countDivisors(6));
