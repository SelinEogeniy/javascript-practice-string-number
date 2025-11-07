// getAverageOfPositive.js 🟡 normal
// Напиши функцію, яка приймає масив чисел і повертає середнє тільки додатних чисел.
// 👉 [1, -2, 3, -4, 5] → (1 + 3 + 5) / 3 = 3

function getAverageOfPositive(arr) {
  const filterArr = arr.filter((num) => num > 0);
  const total = filterArr.reduce((acc, item) => (acc += item), 0);
  return total / filterArr.length;
}

console.log(getAverageOfPositive([1, -2, 3, -4, 5, 7, 100]));
