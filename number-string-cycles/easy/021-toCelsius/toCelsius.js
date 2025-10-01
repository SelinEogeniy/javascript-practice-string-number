// Напиши функцію toCelsius(fahrenheit), яка приймає температуру в Фаренгейтах і повертає її в градусах Цельсія.
// Формула: C = (F - 32) * 5/9.

function toCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
}

console.log(toCelsius(32)); // 0
console.log(toCelsius(212)); // 100
