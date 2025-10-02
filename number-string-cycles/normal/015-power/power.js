// Power (power)
// Напиши функцію power(base, exp), яка обчислює base у степені exp, використовуючи цикл (без Math.pow).

function power(base, exp) {
  let total = 1;
  for (let i = 1; i <= exp; i++) {
    total *= base;
  }
  return total;
}

console.log(power(2, 3)); // 8
console.log(power(5, 2)); // 25
