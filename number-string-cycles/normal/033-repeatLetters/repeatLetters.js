function repeatLetters(str, n) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    for (let y = 0; y < n; y++) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(repeatLetters("abc", 3));
