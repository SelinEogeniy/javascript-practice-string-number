// todo Перевірка парності (Check Even Number)
//todo Напиши функцію isEven(num), яка приймає число і повертає true, якщо воно парне, і false – якщо непарне.

function isEven(num) {
  if (num % 2 === 0) {
    return `Num is even`;
  } else {
    return `Num is not even`;
  }
}
console.log(isEven(4));
