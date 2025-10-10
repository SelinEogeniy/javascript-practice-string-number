// Створи функцію insertArray(baseArr, index, newArr),
// яка вставляє всі елементи newArr у масив baseArr, починаючи з позиції index,
// і повертає новий масив, не змінюючи початковий.

function insertArray(baseArr, index, newArr) {
  return baseArr.splice(index, 0, ...newArr), baseArr;
}

// 🔹 Приклад:

console.log(insertArray([1, 2, 3, 4], 2, ["a", "b"]));
// 👉 [1, 2, 'a', 'b', 3, 4]
