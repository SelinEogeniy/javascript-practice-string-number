// Напиши функцію multiplesOfN(n, count), яка виводить у консоль перші count кратних числа n.

function multiplesOfN(n, count) {
  for (let i = 1; i <= count; i++) {
    console.log(n * i);
  }
}

// Приклад: multiplesOfN(3, 5);
// 3; // 3*1
// 6; // 3*2
// 9; // 3*3
// 12; // 3*4
// 15; // 3*5
