// 2) sumDigits.js — (easy)

// Приймає число — повертає суму всіх його цифр.

// Приклад:
// sumDigits(5024) → 11

function sumDigits(num) {
  const numToStr = String(num);
  let total = 0;
  for (let i = 0; i < numToStr.length; i++) {
    total += Number(numToStr[i]);
  }
  return total;
}

console.log(sumDigits(5024));

function sumDigits(num) {
  return String(num)
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
}
