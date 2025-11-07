// groupByType.js 🔴 hard
// Напиши функцію, яка приймає масив з елементами різних типів (числа, рядки, булеві тощо)
// і повертає об’єкт, де ключі — це типи даних, а значення — масиви елементів цього типу.
// 👉 [1, "hi", true, 2, false, "yo"] → { number: [1, 2], string: ["hi", "yo"], boolean: [true, false] }

function groupByType(arr) {
  return arr.reduce((acc, item) => {
    const type = typeof item;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(item);
    return acc;
  }, {});
}

console.log(groupByType([1, "hi", true, 2, false, "yo"]));
