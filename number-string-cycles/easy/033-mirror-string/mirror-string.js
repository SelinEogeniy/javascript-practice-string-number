// Mirror String (mirror-string)

// Опис:
// Напиши функцію, яка приймає рядок і повертає новий,
// де кожна літера повторюється двічі.

function mirrorString(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i];
  }
  return newStr;
}

// Приклади:

console.log(mirrorString("abc")); // "aabbcc"
console.log(mirrorString("Hi")); // "HHii"
