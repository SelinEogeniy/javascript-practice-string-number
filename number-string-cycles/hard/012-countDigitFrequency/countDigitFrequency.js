// hard — countDigitFrequency

// Умова:
// Напиши функцію countDigitFrequency(num, digit), яка підраховує, скільки разів певна цифра зустрічається в числі.

function countDigitFrequency(num, digit) {
  let count = 0;
  for (const i of String(num)) {
    if (Number(i) === digit) {
      count++;
    }
  }
  return count;
}

console.log(countDigitFrequency(122333, 3)); // 3
console.log(countDigitFrequency(90807, 0)); // 2
