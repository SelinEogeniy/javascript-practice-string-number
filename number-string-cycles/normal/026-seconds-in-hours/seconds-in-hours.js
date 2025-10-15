// Скільки секунд у годинах (seconds-in-hours)

// Опис:
// Напиши функцію, яка приймає кількість годин і повертає,
// скільки секунд у цьому часі.

function secondsInHours(hours) {
  return hours * 60 ** 2;
}

// Приклади:

console.log(secondsInHours(1)); // 3600
console.log(secondsInHours(5)); // 18000
