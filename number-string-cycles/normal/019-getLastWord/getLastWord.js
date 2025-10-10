// Напиши функцію getLastWord(str),
// яка приймає рядок і повертає останнє слово.
// (Використай split())

//~ var 1
function getLastWord(str) {
  return str.slice(str.lastIndexOf(" ") + 1);
}
//~ var 2
function getLastWord(str) {
  const words = str.split(" ");
  return words[words.length - 1];
}

console.log(getLastWord("I love JavaScript")); // "JavaScript"
