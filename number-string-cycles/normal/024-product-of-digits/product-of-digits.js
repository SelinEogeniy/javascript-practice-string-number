// Добуток цифр числа (product-of-digits)

// Опис:
// Напиши функцію, яка знаходить добуток усіх цифр у числі.
// Наприклад, якщо число num = 234, то результат = 2 * 3 * 4 = 24.

function productOfDigits(num) {
  num = String(num);
  let digit = 1;
  for (let i = 0; i < num.length; i++) {
    digit *= Number(num[i]);
  }
  return digit;
}

// Приклади:

console.log(productOfDigits(234)); // 24
console.log(productOfDigits(505)); // 0 (бо є цифра 0)
