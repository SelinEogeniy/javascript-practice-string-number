// Число в діапазоні (check-in-range)
// Напиши функцію isInRange(num, min, max), яка перевіряє, чи число num належить діапазону від min до max включно.

function isInRange(num, min, max) {
  return num >= min && num <= max;
}

console.log(isInRange(5, 1, 10)); // true
console.log(isInRange(0, 1, 10)); // false
