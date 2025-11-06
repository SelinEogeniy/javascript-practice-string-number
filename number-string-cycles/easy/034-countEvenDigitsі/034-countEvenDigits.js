// Кількість парних цифр

// Напиши функцію countEvenDigits(num), яка рахує, скільки у числі парних цифр.

// Приклад:
// countEvenDigits(48291) → 3 (4, 8, 2)

function countEvenDigits(num) {
  let count = 0;
  num = String(num);
  for (let i = 0; i < num.length; i++) {
    if (Number(num[i]) % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEvenDigits(482912222));

function countEvenDigits(num) {
  return String(num)
    .split("")
    .filter((digit) => Number(digit) % 2 === 0).length;
}
