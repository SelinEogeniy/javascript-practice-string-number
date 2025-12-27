// 📄 numberPyramid.js — 🟡 NORMAL

// Умова:
// Функція приймає число n і виводить числову піраміду в консоль.

function numberPyramid(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";

    for (let y = 1; y <= i; y++) {
      row += y;
    }

    console.log(row);
  }
}

console.log(numberPyramid(4));
// Приклад для n = 4:

// 1
// 12
// 123
// 1234
