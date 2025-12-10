// 4) removeDuplicates.js — (normal)

// Приймає масив чисел.
// Повертає новий масив без дублікатів, але без використання Set.

// Приклад:
// removeDuplicates([1,2,2,3,1]) → [1,2,3]

//~Variant 1
// function removeDuplicates(arr) {
//   let newArr = [];
//   for (let item of arr) {
//     if (!newArr.includes(item)) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// }

//~Variant 2 (filter)

// function removeDuplicates(arr) {
//   return arr.filter((el, index) => arr.indexOf(el) === index);
// }

//~Variant 3 (Set)

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 1]));
