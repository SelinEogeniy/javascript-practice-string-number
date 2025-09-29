// Число — просте чи ні (is-prime)

// Напиши функцію isPrime(n), яка перевіряє, чи є число простим.

// 📌 Просте число — це число більше за 1, яке ділиться тільки на 1 і на себе.

// function isPrime(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// ~Version 2

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(20)); // false
