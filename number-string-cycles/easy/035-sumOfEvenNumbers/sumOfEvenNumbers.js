// sumOfEvenNumbers.js 🟢 easy
// Напиши функцію, яка приймає масив чисел і повертає суму всіх парних чисел.

function sumOfEvenNumbers(arr) {
  return arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc += num;
    }
    return acc;
  }, 0);
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5]));
