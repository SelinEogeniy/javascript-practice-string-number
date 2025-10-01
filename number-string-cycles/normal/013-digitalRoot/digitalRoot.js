// Сума цифр до однієї

// Напиши функцію digitalRoot(num), яка буде знаходити цифровий корінь числа.
// Тобто треба знову і знову складати цифри числа, доки не залишиться одна цифра.

function digitalRoot(num) {
  while (num >= 10) {
    let sum = 0;
    let str = String(num);

    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i]);
    }
    console.log(sum);
    num = sum;
  }
  return num;
}

// Приклади:

console.log(digitalRoot(456)); // 6 (4+5+6=15, 1+5=6)
console.log(digitalRoot(942)); // 6 (9+4+2=15, 1+5=6)
console.log(digitalRoot(132189)); // 6
