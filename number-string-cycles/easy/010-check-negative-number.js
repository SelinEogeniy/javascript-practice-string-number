// ; Перевірка числа на від'ємність (check-negative-number)
// ; Напиши функцію isNegative(num), яка повертає true, якщо число від'ємне, і false — якщо додатне або нуль.

function isNegative(num) {
  return num < 0;
}

console.log(isNegative(-5)); // true
console.log(isNegative(0)); // false
