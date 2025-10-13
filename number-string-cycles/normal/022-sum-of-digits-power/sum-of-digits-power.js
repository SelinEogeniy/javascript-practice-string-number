// Сума цифр у степені (sum-of-digits-power)

// Опис:
// Напиши функцію, яка приймає два числа — num і power.
// Піднеси кожну цифру числа num до степеня power і поверни суму цих чисел.

function sumOfDigitsPower(num, power) {
  num = String(num);
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += Number(num[i]) ** power;
  }
  return total;
}

// Приклади:

console.log(sumOfDigitsPower(123, 2)); // 1² + 2² + 3² = 14
console.log(sumOfDigitsPower(42, 3)); // 4³ + 2³ = 72
