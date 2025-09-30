// todo Medium 2 (count-char)

// todo Напиши функцію countChar(str, char), яка рахує, скільки разів символ char зустрічається в рядку str.

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }
  return count;
}

console.log(countChar("hello", "l")); // 2
console.log(countChar("javascript", "a")); // 2
