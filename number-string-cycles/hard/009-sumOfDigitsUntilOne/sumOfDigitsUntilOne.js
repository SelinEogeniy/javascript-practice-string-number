// sumOfDigitsUntilOne.js 🔴 hard
// ✳️ Напиши функцію, яка підсумовує цифри числа доти, доки не залишиться лише одна цифра.
// ➡️ Приклад: 9875 → 9+8+7+5 = 29 → 2+9 = 11 → 1+1 = 2

function sumOfDigitsUntilOne(num) {
  while (num >= 10) {
    let total = 0;
    const digits = String(num).split("");
    for (const digit of digits) {
      total += Number(digit);
    }
    num = total;
  }
  return num;
}
console.log(sumOfDigitsUntilOne(9875));

// ~Version2

function sumOfDigitsUntilOne(num) {
  while (num >= 10) {
    num = String(num)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}
