// todo Напиши функцію multiplicationTable(n), яка виводить у консоль таблицю множення для чисел від 1 до n.

function multiplicationTable(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += `${i} x ${j} = ${i * j}   `;
    }
    console.log(row);
  }
}

// ~Приклад для n = 3:

// 1 x 1 = 1   1 x 2 = 2   1 x 3 = 3
// 2 x 1 = 2   2 x 2 = 4   2 x 3 = 6
// 3 x 1 = 3   3 x 2 = 6   3 x 3 = 9

multiplicationTable(3);
