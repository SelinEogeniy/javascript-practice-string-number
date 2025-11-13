// normal — sumDigitsPower

// Умова:
// Напиши функцію sumDigitsPower(num), яка зводить кожну цифру числа у квадрат і повертає їх суму.

function sumDigitsPower(num) {
  return String(num)
    .split("")
    .map((item) => item ** 2)
    .reduce((acc, i) => acc + i, 0);
}

console.log(sumDigitsPower(123)); // 1² + 2² + 3² =
