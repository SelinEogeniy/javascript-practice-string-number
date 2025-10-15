// Знайди кількість цифр у числі (count-digits)

// Опис:
// Напиши функцію, яка рахує, скільки цифр містить число.
// (Не використовуй .length напряму на числі — спочатку треба перевести його у рядок).

function countDigits(num) {
  return String(num).length;
}

// Приклади:

console.log(countDigits(12345)); // 5
console.log(countDigits(900)); // 3
