// Абсолютне значення (absolute-value)
// Напиши функцію absoluteValue(num), яка повертає число без знака.

// function absoluteValue(num) {
//   return Math.abs(num);
// }

//~Version 2

function absoluteValue(num) {
  if (num < 0) {
    return -num;
  }
  return num;
}

console.log(absoluteValue(-7)); // 7
console.log(absoluteValue(5)); // 5
