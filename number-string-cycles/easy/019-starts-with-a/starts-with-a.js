//todo  Напиши функцію startsWithA(str), яка перевіряє, чи рядок починається з букви "a" або "A".

function startsWithA(str) {
  return str.toLowerCase()[0] === "a";
}

console.log(startsWithA("apple")); // true
console.log(startsWithA("Banana")); // false
