// 2️⃣ sum-numbers-in-string ✅ [NORMAL]

// Умова:
// Напиши функцію, яка приймає рядок і підсумовує всі цифри, які є в цьому рядку.

function sumNumbersInString(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      sum += str[i] - 0;
    }
  }

  return sum;
}
// Підказка:
// Рядок може містити літери й цифри впереміш.

// Приклад:

// sumNumbersInString("a1b2c3"); // 6
// sumNumbersInString("abc");   // 0

console.log(sumNumbersInString("a1b2c3"));
