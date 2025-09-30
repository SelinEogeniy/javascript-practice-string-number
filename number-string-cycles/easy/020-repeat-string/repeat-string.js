//todo Напиши функцію repeatString(str, n), яка повертає рядок, повторений n разів.

function repeatString(str, n) {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    newStr += str;
  }
  return newStr;
}

console.log(repeatString("Hi", 3)); // "HiHiHi"
console.log(repeatString("JS", 5)); // "JSJSJSJSJS"
