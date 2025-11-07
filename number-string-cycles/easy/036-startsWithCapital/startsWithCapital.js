// startsWithCapital.js 🟢 easy
// Напиши функцію, яка перевіряє, чи починається рядок з великої літери.
// 👉 "Hello" → true, "world" → false

function startsWithCapital(str) {
  return str[0] === str[0].toUpperCase();
}

console.log(startsWithCapital("hello"));
