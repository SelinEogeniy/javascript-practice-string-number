// Multiplication Table (multiplication-table)
// Напиши функцію multiplicationTable(n), яка виводить таблицю множення для числа n від 1 до 10.

function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i}x${n}=${i * n}`);
  }
}

multiplicationTable(3);
