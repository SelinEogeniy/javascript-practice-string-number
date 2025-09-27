// Ряд Фібоначчі (fibonacci-sequence)
// Напиши функцію fibonacci(n), яка повертає масив із перших n чисел ряду Фібоначчі.
// Ряд починається так: 0, 1, 1, 2, 3, 5, 8...

function fibonacci(n) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}
// Приклади:

fibonacci(5); // [0, 1, 1, 2, 3]
fibonacci(8); // [0, 1, 1, 2, 3, 5, 8, 13]

function fibonacci(n) {
  let a = 0;
  let b = 1;
  let result = "";

  for (let i = 0; i < n; i++) {
    result += a + " ";
    let next = a + b;
    a = b;
    b = next;
  }

  return result;
}

console.log(fibonacci(5)); // "0 1 1 2 3"
console.log(fibonacci(8)); // "0 1 1 2 3 5 8 13"
