// Armstrong Number (armstrong-number)
// Число називається Armstrong number, якщо сума його цифр у степені кількості цифр дорівнює самому числу.
// Наприклад:

// 153 → 1³ + 5³ + 3³ = 153 ✅

// 9474 → 9⁴ + 4⁴ + 7⁴ + 4⁴ = 9474 ✅

function isArmstrong(num) {
  const numString = String(num);
  let total = 0;
  for (let i = 0; i < numString.length; i++) {
    total += Math.pow(Number(numString[i]), numString.length);
  }
  return num === total;
}

// Напиши функцію isArmstrong(num), яка перевіряє це.

console.log(isArmstrong(153)); // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(123)); // false
