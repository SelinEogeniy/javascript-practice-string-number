//todo Визначення найбільшого числа (Find Maximum of Three)
//todo Створи функцію maxOfThree(a, b, c), яка приймає три числа і повертає найбільше з них (без використання Math.max).

function maxOfThree(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return `Мax number is: ${max}`;
}

console.log(maxOfThree(75, 100, 74));
