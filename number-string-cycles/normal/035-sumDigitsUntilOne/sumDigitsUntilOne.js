// 📄 sumDigitsUntilOne.js — 🟡 NORMAL

// Умова:
// Напиши функцію, яка приймає число і складає його цифри,
// поки не залишиться одна цифра.

function sumDigitsUntilOne(num) {
  while (num >= 10) {
    let sum = 0;

    for (const digit of String(num)) {
      sum += Number(digit);
    }

    num = sum;
  }

  return num;
}

// Приклади:

// sumDigitsUntilOne(942) → 6   (9+4+2=15 → 1+5=6)
// sumDigitsUntilOne(19) → 1   (1+9=10 → 1+0=1)

console.log(sumDigitsUntilOne(942));
