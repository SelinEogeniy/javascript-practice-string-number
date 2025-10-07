// Count Negative Numbers (count-negative)
// Напиши функцію countNegative(arr), яка повертає кількість негативних чисел у переданому рядку чисел через пробіл.

// Ми ще не робили таку задачу, і масивів поки що немає, тому рядок обробляємо через split.

function countNegative(arr) {
  let count = 0;
  arr = arr.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
console.log(countNegative("-1 2 -3 4")); // 2
console.log(countNegative("5 -5 0 -2")); // 2
