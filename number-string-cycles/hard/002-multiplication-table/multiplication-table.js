// Таблиця множення (multiplication-table)
// Напиши функцію multiplicationTable(n), яка виводить у консоль таблицю множення від 1 до n.

function multiplicationTable(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(i + " x " + j + " = " + i * j);
    }
  }
}

multiplicationTable(5);

//  Результат:
// 1 x 1 = 1
// 1 x 2 = 2
// ...
// 5 x 4 = 20
// 5 x 5 = 25
