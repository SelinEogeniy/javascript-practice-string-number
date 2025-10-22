// String Contains Digit (string-contains-digit)

// Опис:
// Напиши функцію, яка перевіряє, чи є у рядку хоч одна цифра.

function stringContainsDigit(string) {
  const numbers = "0123456789";
  for (let i = 0; i <= string.length; i++) {
    if (numbers.includes(string[i])) {
      return true;
    }
  }
  return false;
}

// Приклади:

console.log(stringContainsDigit("abc123")); // true
console.log(stringContainsDigit("hello")); // false

// 💡 Підказка: цифра — це символ '0' до '9'.
